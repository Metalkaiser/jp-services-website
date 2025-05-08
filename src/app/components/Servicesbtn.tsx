"use client"

import Link from "next/link";

export default function Servicesbtn({topCta}: {topCta: string}) {
  return <Link className="rounded-lg p-4 servicesbtn text-center mt-4 hover:cursor-pointer w-5/6 active:scale-90 transition-transform duration-300" href="#services">{topCta}</Link>
}