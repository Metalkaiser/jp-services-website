"use client"

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { fbq } from "../utils/fbq";
import { sendContactEmail } from "../actions/contact";

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
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(sendContactEmail, {
    ok: false,
    message: "",
  });

  useEffect(() => {
    if (!state.ok) return;

    fbq("track", "Lead");
    formRef.current?.reset();
  }, [state.ok]);

  if (formtext.formBtnText) {
    return (
      <form ref={formRef} className="flex flex-col items-center justify-center w-full md:w-1/3 m-5" action={formAction}>
        <input
          type="text"
          name="name"
          placeholder={formtext.name}
          className="p-2 mb-2 border rounded w-full"
          required={true} />
        {state.fieldErrors?.name && <p className="w-full mb-2 text-sm text-red-500">{state.fieldErrors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder={formtext.email}
          className="p-2 mb-2 border rounded w-full"
          required={true} />
        {state.fieldErrors?.email && <p className="w-full mb-2 text-sm text-red-500">{state.fieldErrors.email}</p>}
        <textarea
          placeholder={formtext.message}
          name="message"
          className="p-2 mb-2 border rounded w-full min-h-[200px]"
          required={true}></textarea>
        {state.fieldErrors?.message && <p className="w-full mb-2 text-sm text-red-500">{state.fieldErrors.message}</p>}
        <SubmitButton formBtnText={formtext.formBtnText} formBtnTextSending={formtext.formBtnTextSending} />
        {(state.ok || state.message) && (
          <p className="mt-2">{state.ok ? formtext.sent : formtext.error}</p>
        )}
      </form>
    ) 
  }
  return null;
}

function SubmitButton({ formBtnText, formBtnTextSending }: { formBtnText: string; formBtnTextSending: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="px-4 py-2 mt-5 text-white rounded w-full servicesbtn active:scale-90 transition-transform duration-300"
      disabled={pending}>
      {pending ? formBtnTextSending : formBtnText}
    </button>
  );
}
