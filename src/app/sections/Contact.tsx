import Image from "next/image";
import Link from "next/link";
import { contactSectionAssets } from "../utils/info";
import Contactform from "../components/Contactform";

type contactSection = {
  title: string;
  description: string;
  form: {
    formBtnText: string;
  };
  waBtn: {
    btnText: string;
  };
};

export default function Contact({contactSection}: { contactSection: contactSection}) {
  return (
    <section id="contact" className="flex flex-col items-center justify-center w-full h-full">
      <div className="relative w-full h-full">
        <Image
          src={contactSectionAssets.image}
          alt="Contact"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0 opacity-50"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-5 text-white sectionsclear gap-5">
          <h2 className="text-3xl font-bold text-center">{contactSection.title}</h2>
          <p className="text-lg text-center">{contactSection.description}</p>
          <Contactform formBtnText={contactSection.form.formBtnText} />
          <Link
            href={`https://api.whatsapp.com/${contactSectionAssets.waBtn.btnHref}`}
            className="wabg text-white px-6 py-3 rounded-lg flex items-center justify-center"
            target="_blank"
          >
            {contactSection.waBtn.btnText}
            <Image
              src={contactSectionAssets.waBtn.btnIcon}
              alt="WhatsApp Logo"
              width={24}
              height={24}
              className="ml-2"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}