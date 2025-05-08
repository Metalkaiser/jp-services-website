import Image from "next/image";
import Link from "next/link";
import { aboutSectionAssets } from "../utils/info";
import Logo from "@/../public/images/branding/default-icon.png";
import { socials } from "../utils/info";

const textStyle = "text-center md:text-left";
const flexStyle = "flex flex-col items-center";

type aboutSection = {
  title: string;
  description: string;
};

export default function About({aboutSection}: {aboutSection: aboutSection}) {
  return (
    <section>
      <div className="relative">
        <Image
          src={aboutSectionAssets}
          alt="Imagen de fondo"
          className="w-full h-screen object-cover"
          loading="lazy"
        />
        <div className={`${flexStyle} absolute inset-0 md:flex-row justify-around sectionsclear w-full p-4 text-white`}>
          <div className={`${flexStyle} gap-4 md:items-start order-2 md:order-1 w-full md:w-1/2`}>
            <h1 className={`text-3xl font-bold ${textStyle}`}>{aboutSection.title}</h1>
            <h1 className={`text-2xl ${textStyle}`}>
              {aboutSection.description}
            </h1>
            <div className="flex gap-4 w-full justify-center">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank">
                  <Image
                    src={social.icon}
                    alt="Icono de red social"
                    className="w-10 h-10 hover:scale-110 transition-transform duration-300"
                    ></Image>
                </Link>
              ))}
            </div>
          </div>
          <Image src={Logo} alt="JP Dev" className="w-1/2 md:w-1/4 order-1 md:order-2"></Image>
        </div>
      </div>
    </section>
  )
}