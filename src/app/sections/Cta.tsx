import { ctaSectionAssets } from "../utils/info";
import Image from "next/image";
import Link from "next/link";

const flexStyle = "flex flex-col items-center";
type ctaSection = {
  title: string;
  hookText: string;
  btnText: string;
};

export default function Cta({ctaSection}: {ctaSection: ctaSection}) {
  return (
    <section className="my-10">
      <div className="relative w-screen">
      <Image
          src={ctaSectionAssets.bgImg}
          alt="Imagen de fondo"
          className="w-full h-[300px] object-cover"
          loading="lazy"
        />
        <div className={`${flexStyle} absolute inset-0 justify-center sectionsclear w-full p-5 text-white`}>
          <div className={`${flexStyle} gap-1 text-center`}>
            <h2 className="text-3xl font-bold mb-4">{ctaSection.title}</h2>
            <p className="text-lg mb-6">{ctaSection.hookText}</p>
            <Link
              href="#contact"
              className="servicesbtn text-white px-6 py-3 rounded-lg flex items-center justify-center"
            >
              {ctaSection.btnText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}