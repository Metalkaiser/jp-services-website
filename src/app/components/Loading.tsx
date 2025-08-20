import Image from "next/image";
import { websiteName } from "../utils/info";
import Logo from "@P/images/branding/default-icon.png";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center sectionsclear p-5">
        <Image
          src={Logo}
          alt={websiteName}
          height={100}
          width={0} ></Image>
        <h1 className="text-2xl font-bold text-white">{websiteName}</h1>
        <p className="text-white">Loading...</p>
      </div>
    </div>
  )
}