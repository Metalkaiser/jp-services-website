import Image from "next/image";
import Link from "next/link";
import arrow from "@/../../public/images/misc/top-arrow.png";


export default function Topbtn() {
  return (
    <div className="fixed bottom-5 right-5 z-50 w-[50px] h-[50px]">
      <Link
        href="#top"
        className="bg-gray-500 text-white px-4 py-2 h-full rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <Image
          src={arrow}
          alt="Inicio"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
}