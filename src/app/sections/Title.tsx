import Image from "next/image";
import Topimage from "@/../public/images/sections/top.webp";
import Servicesbtn from "../components/Servicesbtn";

const textStyle = "text-center md:text-left";
const flexStyle = "flex flex-col items-center";
type titleContent =  {
  mainText: string;
  itemsList: string[];
  subText: string;
  hookText: string;
}

export default function Title( {titleContent, topCta}: {titleContent: titleContent, topCta: string}) {
  return (
    <section>
      <div className="relative">
        <Image
          src={Topimage}
          alt="Imagen de fondo"
          className="w-full h-screen object-cover"
          loading="lazy"
        />
        <div className={`${flexStyle} absolute inset-0 justify-center sectionsclear w-full md:w-1/2 p-4 text-white`}>
          <div className={`${flexStyle} gap-4 md:items-start`}>
            <h1 className={`text-3xl font-bold ${textStyle}`}>{titleContent.mainText}</h1>
            <ul className="list-disc list-inside text-xl px-4">
              {titleContent.itemsList.length ? (titleContent.itemsList.map((item, index) => (
                <li key={index} className="block">
                  {item}
                </li>
              ))) : ""}
            </ul>
            <h1 className={`text-2xl ${textStyle}`}>
              {titleContent.subText}
            </h1>
            <h1 className={`text-2xl ${textStyle}`}>
              {titleContent.hookText}
            </h1>
            <Servicesbtn topCta={topCta} />
          </div>
        </div>
      </div>
    </section>
  )
}