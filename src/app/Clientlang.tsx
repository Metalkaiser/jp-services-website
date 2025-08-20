"use client"

import { useState, useEffect } from "react";

import Topheader from "./sections/Topheader";
import Title from "./sections/Title";
import Services from "./sections/Services";
import Cta from "./sections/Cta";
import Portfolio from "./sections/Portfolio";
import About from "./sections/About";
import Values from "./sections/Values";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Topbtn from "./components/Topbtn";
import Loading from "./components/Loading";

import { websiteInfoEsp } from "./utils/info-esp";
import { websiteInfoEn } from "./utils/info-en";
import { websiteInfoDe } from "./utils/info-de";

type Info = {
  websiteProps: {
    websiteNameFull: string;
    websiteDescription: string;
    websiteKeywords: string[];
  };
  titleContent: {
    mainText: string;
    itemsList: string[];
    subText: string;
    hookText: string;
  };
  topCtaBtnText: string;
  servicesSection: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  ctaSection: {
    title: string;
    hookText: string;
    btnText: string;
  };
  portfolioSection: {
    title: string;
    description: string;
  };
  portfolio: {
    title: string;
    description: string;
  }[];
  aboutSection: {
    title: string;
    description: string;
  };
  valuesSection: {
    title: string;
    items: {
      icon: string;
      text: string;
    }[];
  };
  contactSection: {
    title: string;
    description: string;
    form: {
      formBtnText: string;
      formBtnTextSending: string;
      name: string;
      email: string;
      message: string;
      sent: string;
      error: string;
    };
    waBtn: {
      btnText: string;
    };
  };
  footerSection: {
      title: string;
      description: string;
      rights: string;
  }
}

export default function Clientlang () {

  const language = () => {
    const lang = window.navigator.language;
    const langCode = lang.split("-")[0];
    switch (langCode) {
      case "es":
        return websiteInfoEsp;
      case "de":
        return websiteInfoDe;
      default:
        return websiteInfoEn;
    }
  }

  const [info, setInfo] = useState<Info | null>(null);

  useEffect(() => {
    setInfo(language());
  }, []);

  if (!info) {
    return <Loading />
  }
  return (
    <main>
      <Topheader websiteNameFull={info.websiteProps.websiteNameFull} />
      <Title titleContent={info.titleContent} topCta={info.topCtaBtnText} />
      <Services servicesSection={info.servicesSection} services={info.services} />
      <Cta ctaSection={info.ctaSection} />
      <Portfolio portfolio={info.portfolio} portfolioSection={info.portfolioSection} />
      <About aboutSection={info.aboutSection}/>
      <Values valuesSection={info.valuesSection} />
      <Contact contactSection={info.contactSection} />
      <Footer footerSection={info.footerSection} />
      <Topbtn />
    </main>
  );
}