import Image from "next/image";
import Logo from "@/../public/images/branding/default-icon.png";
import { websiteName } from "../utils/info";

export default function Topheader () {
  return (
    <header id="top" className="flex items-center justify-center gap-3 sections p-4">
      <Image src={Logo} alt="" height={64} width={0}></Image>
      <h1 className="text-2xl md:text-3xl font-bold text-center text-white">{`${websiteName} - Servicios web`}</h1>
    </header>
  )
}