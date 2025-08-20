import Image from "next/image";
import Logo from "@P/images/branding/default-icon.png";

export default function Topheader ( {websiteNameFull}: {websiteNameFull: string} ) {
  return (
    <header id="top" className="flex items-center justify-center gap-3 sections p-4">
      <Image src={Logo} alt="" height={64} width={0}></Image>
      <h1 className="text-2xl md:text-3xl font-bold text-center text-white">{websiteNameFull}</h1>
    </header>
  )
}