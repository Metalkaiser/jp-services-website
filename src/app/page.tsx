import Topheader from "./sections/Topheader";
import Title from "./sections/Title";
import Services from "./sections/Services";
import Cta from "./sections/Cta";
import Portfolio from "./sections/Portfolio";

export default function Home() {
  return (
    <main>
      <Topheader />
      <Title />
      <Services />
      <Cta />
      <Portfolio />
    </main>
  );
}
