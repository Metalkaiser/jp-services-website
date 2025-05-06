import Image from "next/image";
import { valuesSection } from "../utils/info";

export default function Values() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full h-full py-10">
        <h2 className="text-3xl font-bold text-center">{valuesSection.title}</h2>
        <div className="flex flex-wrap items-center gap-5 justify-around mt-5 w-full">
          {valuesSection.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center m-4">
              <Image src={item.icon} alt={item.text} width={200} height={0} />
              <p className="ml-2 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}