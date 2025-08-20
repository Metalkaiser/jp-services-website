"use client"

import React from "react";
import { useState } from "react";
import { fbq } from "../utils/fbq";

type formText = {
  formBtnText: string;
  formBtnTextSending: string;
  name: string;
  email: string;
  message: string;
  sent: string;
  error: string;
};

export default function Contactform({ formtext }: { formtext: formText }) {

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus(formtext.sent);
        fbq("track", "Lead");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(formtext.error);
      }
    } catch {
      setStatus(formtext.error);
    }

    setLoading(false);
  };

  if (formtext.formBtnText) {
    return (
      <form className="flex flex-col items-center justify-center w-full md:w-1/3 m-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={formtext.name}
          className="p-2 mb-2 border rounded w-full"
          value={form.name}
          onChange={handleChange}
          required={true} />
        <input
          type="email"
          name="email"
          placeholder={formtext.email}
          className="p-2 mb-2 border rounded w-full"
          value={form.email}
          onChange={handleChange}
          required={true} />
        <textarea
          placeholder={formtext.message}
          name="message"
          className="p-2 mb-2 border rounded w-full min-h-[200px]"
          value={form.message}
          onChange={handleChange}
          required={true}></textarea>
        <button
          type="submit"
          className={`px-4 py-2 mt-5 text-white rounded w-full servicesbtn active:scale-90 transition-transform duration-300`}
          disabled={loading}>
          {loading ? formtext.formBtnTextSending : formtext.formBtnText}
        </button>
        {status && <p className="mt-2">{status}</p>}
      </form>
    ) 
  }
  return null;
}