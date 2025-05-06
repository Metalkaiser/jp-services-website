import Topheader from "./sections/Topheader";
import Title from "./sections/Title";
import Services from "./sections/Services";
import Cta from "./sections/Cta";
import Portfolio from "./sections/Portfolio";
import About from "./sections/About";
import Values from "./sections/Values";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main>
      <Topheader />
      <Title />
      <Services />
      <Cta />
      <Portfolio />
      <About />
      <Values />
      <Contact />
    </main>
  );
}
