import Image from "next/image";
import Link from "next/link";
import { contactSectionAssets } from "../utils/info";
import Contactform from "../components/Contactform";
import { fbq } from "../utils/fbq";

type contactSection = {
  title: string;
  description: string;
  form: {
    formBtnText: string;
    formBtnTextSending: string;
    name: string;
    email: string;
    message: string;
    sent: string;
    error: string;
  };
  waBtn: {
    btnText: string;
  };
};

const waPhone = process.env.NEXT_PUBLIC_PHONE_NUMBER_WA || ""

export default function Contact({contactSection}: { contactSection: contactSection}) {

  const waClicked = () => {
    fbq("track", "Contact");
  };
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
          <Contactform formtext={contactSection.form} />
          <Link
            href={`https://api.whatsapp.com/send?phone=${waPhone}&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.`}
            className="wabg text-white px-6 py-3 rounded-lg flex items-center justify-center"
            target="_blank"
            onClick={waClicked}
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