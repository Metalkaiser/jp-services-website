"use server";

import nodemailer from "nodemailer";
import { websiteName } from "../utils/info";

type ContactActionState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactEmail(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: Record<string, string> = {};

  if (!name) fieldErrors.name = "El nombre es obligatorio";
  if (!email) {
    fieldErrors.email = "El correo es obligatorio";
  } else if (!emailRegex.test(email)) {
    fieldErrors.email = "El correo no es valido";
  }
  if (!message) fieldErrors.message = "El mensaje es obligatorio";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Todos los campos son obligatorios",
      fieldErrors,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let success = {client: false, autoreply: false};

    await transporter.sendMail({
      from: `"${websiteName} Contacto" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>Nuevo mensaje desde el formulario</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    }).then(() => {
      success.client = true;
    }).catch((error) => {
      console.error("Error enviando correo al admin:", error);
    });

    await transporter.sendMail({
      from: `"${websiteName} Contacto" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Gracias por contactarnos, ${name}`,
      text: `Hola ${name},\n\nGracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.\n\nSaludos,\nEl equipo de JPDev`,
      html: `
        <p>Hola ${name},</p>
        <p>Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
        <p>Saludos,<br/>El equipo de ${websiteName}</p>
      `,
    }).then(() => {
      success.autoreply = true;
    }).catch((error) => {
      console.error("Error enviando correo de autoreply:", error);
    });

    if (!success.client && !success.autoreply) {
      return {
        ok: false,
        message: "Error enviando ambos correos",
      };
    } else if (!success.client) {
      return {
        ok: false,
        message: "Error enviando el correo al admin",
      };
    } else if (!success.autoreply) {
      return {
        ok: false,
        message: "Error enviando el correo de confirmación al cliente",
      };
    }

    return {
      ok: true,
      message: "",
    };
  } catch (error) {
    console.error("Error enviando correo:", error);
    return {
      ok: false,
      message: "Error enviando el correo",
    };
  }
}
