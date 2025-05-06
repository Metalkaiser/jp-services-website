import Image from "next/image";
import { servicesSection } from "../utils/info";
import { services } from "../utils/info";

export default function Services() {
  return (
    <section id="services" className="flex flex-col items-center w-screen min-h-screen my-10">
      <div className="flex flex-col items-center text-center gap-3 w-5/6 md:w-3/5">
        <h1 className="text-3xl bold">{servicesSection.title}</h1>
        <p>{servicesSection.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-5/6 md:w-3/5 mt-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md">
            <Image src={service.icon} alt={service.title} width={64} height={64} className="size-16 mb-4" ></Image>
            <h2 className="text-xl font-semibold text-center">{service.title}</h2>
            <p className="text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}