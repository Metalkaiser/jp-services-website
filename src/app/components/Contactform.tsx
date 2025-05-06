"use client"

import React from "react";

const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const response = await fetch("/api/sendMessage", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const result = await response.json();
    console.log("Message sent successfully:", result);
    alert("Mensaje enviado correctamente");
  }
  else {
    const error = await response.json();
    console.error("Error sending message:", error);
    alert("Error al enviar mensaje. Por favor, inténtelo de nuevo más tarde.");
  }
  form.reset();
}

export default function Contactform(formProps:{formBtnText:string} | undefined) {
  if (formProps?.formBtnText) {
    return (
      <form className="flex flex-col items-center justify-center w-full md:w-1/3 m-5" onSubmit={(e) => sendMessage(e)}>
        <input type="text" placeholder="Nombre" className="p-2 mb-2 border rounded w-full" />
        <input type="email" placeholder="Email" className="p-2 mb-2 border rounded w-full" />
        <textarea placeholder="Mensaje" className="p-2 mb-2 border rounded w-full min-h-[200px]"></textarea>
        <button type="submit" className={`px-4 py-2 mt-5 text-white rounded w-full servicesbtn active:scale-90 transition-transform duration-300`}>
          {formProps.formBtnText}
        </button>
      </form>
    ) 
  }
  return null;
}