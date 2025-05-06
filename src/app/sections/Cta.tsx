import { ctaSection } from "../utils/info";
import Image from "next/image";

const flexStyle = "flex flex-col items-center";

export default function Cta() {
  return (
    <section className="my-10">
      <div className="relative w-screen">
      <Image
          src={ctaSection.bgImg}
          alt="Imagen de fondo"
          className="w-full h-[300px] object-cover"
          loading="lazy"
        />
        <div className={`${flexStyle} absolute inset-0 justify-center sectionsclear w-full p-5 text-white`}>
          <div className={`${flexStyle} gap-1 text-center`}>
            <h2 className="text-3xl font-bold mb-4">{ctaSection.title}</h2>
            <p className="text-lg mb-6">{ctaSection.hookText}</p>
            <a
              href={ctaSection.btnHref}
              className="wabg text-white px-6 py-3 rounded-lg flex items-center justify-center"
            >
              {ctaSection.btnText}
              <Image
                src={ctaSection.btnIcon}
                alt="WhatsApp Logo"
                width={24}
                height={24}
                className="ml-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}