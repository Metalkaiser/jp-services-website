import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/images/branding/default-icon-mono.png";
import { socials, contactinfo } from "../utils/info";

type footerSection = {
  title: string;
  description: string;
  rights: string;
}

type social = {
  icon: string;
  href: string;
};

export default function Footer({footerSection}: {footerSection: footerSection}) {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center gap-5">
          <div className="mb-6 md:mb-0">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">{footerSection.title}</h2>
            <p>{footerSection.description}</p>
          </div>
          {socials.length ? (<div className="flex space-x-4 mb-6 md:mb-0">
            {socials.map((social:social, index) => (
              <Link key={index} href={social.href}>
                <Image
                  src={social.icon}
                  alt="Social Icon"
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>) : ""}
          <div className="flex flex-col items-center">
            {contactinfo.map((info, index) => (
              <p key={index}>{info}</p>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-sm text-center">
              &copy; {new Date().getFullYear()} {footerSection.title}. {footerSection.rights}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}