import { portfolioAssets } from "../utils/info";
import Image from "next/image";

type portfolioSection = {
  title: string;
  description: string;
};
type portfolio = {
  title: string;
  description: string;
}[];

export default function Portfolio({portfolio, portfolioSection}: {portfolio: portfolio, portfolioSection: portfolioSection}) {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">{portfolioSection.title}</h2>
        <p className="text-center mb-12">{portfolioSection.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md text-center">.
              <Image src={portfolioAssets[index]} alt={item.title} className="w-full h-48 object-cover rounded-t-lg"></Image>
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}