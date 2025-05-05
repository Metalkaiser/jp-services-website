"use client"
import { topCta } from "../utils/info"

export default function Servicesbtn() {
  return <a className="rounded-lg p-4 servicesbtn text-center mt-4 hover:cursor-pointer w-5/6" href={topCta.topCtaBtnhref}>{topCta.topCtaBtnText}</a>
}