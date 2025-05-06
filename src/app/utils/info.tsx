import WA_Logo from "@/../../public/images/misc/whatsapp.png";
import cta_image from "@/../../public/images/sections/cta.webp";
import P1 from "@/../../public/images/sections/portfolio/p1.webp";
import P2 from "@/../../public/images/sections/portfolio/p2.webp";
import P3 from "@/../../public/images/sections/portfolio/p3.webp";
import P4 from "@/../../public/images/sections/portfolio/p4.webp";
import about_image from "@/../../public/images/sections/about.webp";
import ig_image from "@/../../public/images/misc/instagram.png";
import contact_image from "@/../../public/images/sections/contactus.webp";
import logo from "@/../../public/images/branding/default-icon.png";

export const websiteName = "JP Dev";  //Nombre de la empresa
export const websiteNameFull = `${websiteName} - Servicios web`;  //Título del sitio web
export const websiteDescription = "Desarrollo de aplicaciones web, tiendas en línea y soluciones personalizadas para tu negocio.";  //Descripcion del sitio wen
const socials = [
  {
    icon: ig_image,
    href: "#"
  }
]

/*
*
* Información para el encabezado superior
* mainText: Título o texto principal
* itemsList: Lista de elementos a modo de descripción
* subText: Texto de apoyo
* hookText: Texto gancho
* 
*/
export const titleContent = {
  mainText: "¿Necesitas que tu negocio",
  itemsList: [
    "impulse sus ventas",
    "sea fácil de encontrar",
    "facilite la interacción con tus clientes",
    "maneje su inventario de forma eficiente",
  ],
  subText: "o necesitas mejorar algún proceso interno?",
  hookText: `¡En ${websiteName} te podemos ayudar!`
};

/*
*
* Propiedades del botón del encabezado superior
* topCtaBtnText: Texto del botón
* topCtaBtnhref: Enlace del botón
* 
*/
export const topCta = {
  topCtaBtnText: "Haz click aquí",
  topCtaBtnhref: "#services"
}


/*
*
* Texto de la sección de servicios
* title: Título de la sección
* description: Descripción de la sección
* 
*/
export const servicesSection = {
  title: "Conoce nuestros servicios",
  description: `En ${websiteName} ofrecemos una amplia gama de servicios para ayudar a tu negocio a crecer y prosperar en el mundo digital. Desde el desarrollo de aplicaciones web personalizadas hasta la creación de tiendas en línea, tenemos la solución perfecta para ti.`,
}


/*
*
* Listado de servicios
* title: Título de cada servicio
* description: Descripción breve de cada servicio
* icon: URL o ruta del icono de cada servicio
* 
*/
export const services = [
  {
    title: "Desarrollo de aplicaciones web",
    description: "Creamos aplicaciones web personalizadas que se adaptan a las necesidades específicas de tu negocio, incluyendo sistemas de gestión, tiendas en línea y más.",
    icon: "https://cdn-icons-png.flaticon.com/512/8414/8414759.png"
  },
  {
    title: "Diseño web",
    description: "Diseñamos sitios web atractivos y funcionales que reflejan la identidad de tu marca y mejoran la experiencia del usuario.",
    icon: "https://cdn-icons-png.flaticon.com/512/8820/8820192.png"
  },
  {
    title: "SEO y marketing digital",
    description: "Ayudamos a mejorar la visibilidad de tu negocio en línea a través de estrategias de SEO y marketing digital efectivas.",
    icon: "https://cdn-icons-png.flaticon.com/512/4693/4693249.png"
  },
  {
    title: "Soporte y mantenimiento",
    description: "Ofrecemos soporte técnico y mantenimiento continuo para asegurarnos de que tu sitio web o aplicación funcione sin problemas.",
    icon: "https://cdn-icons-png.flaticon.com/512/8759/8759045.png"
  },
  {
    title: "Consultoría tecnológica",
    description: "Brindamos asesoría en tecnología y transformación digital para ayudarte a tomar decisiones informadas sobre el futuro de tu negocio.",
    icon: "https://cdn-icons-png.flaticon.com/512/8185/8185258.png"
  },
  {
    title: "Integraciones y automatización",
    description: "Integramos diferentes sistemas y herramientas para optimizar tus procesos y mejorar la eficiencia de tu negocio.",
    icon: "https://cdn-icons-png.flaticon.com/512/8438/8438906.png"
  }
];

/*
*
* Propiedades de la sección de llamada a la acción
* title: Título de la sección
* hooktext: Texto de enganche
* bgImg: URL o ruta de la imagen de fondo
* btnText: texto del botón CTA
* btnHref: Enlace del botón CTA
* btnIcon: Icono del botón CTA
* 
*/
export const ctaSection = {
  title: "¿Listo para llevar tu negocio al siguiente nivel?",
  hookText: `En ${websiteName} estamos aquí para ayudarte a alcanzar tus objetivos.`,
  bgImg: cta_image,
  btnText: "Contáctanos",
  btnHref: "#contact",
  btnIcon: WA_Logo
}

/*
*
* Propiedades de la sección Portafolios
* title: Título de la sección
* description: Breve descripción de la sección
* 
*/

export const portfolioSection = {
  title: "Nuestros proyectos",
  description: "Algunos ejemplo de nuestros trabajos para nuestros clientes"
}

/*
*
* title: Título de cada proyecto
* description: Breve descripción de cada proyecto
* image: URL o ruta de la imagen del proyecto
* 
*/
export const portfolio = [
  {
    title: "Imperator - Catálogo de productos",
    description: "Catálogo web de productos para la tienda Imperator",
    image: P1
  },
  {
    title: "Imperator - Gestión de inventario",
    description: "Aplicación web gestión de procesos para la tienda Imperator",
    image: P2
  },
  {
    title: "Haseki - Catálogo de productos",
    description: "Catálogo web de productos para la tienda Haseki",
    image: P3
  },
  {
    title: "Ejemplo de landing page para cripto",
    description: "Diseño de landing page realizado en Figma",
    image: P4
  },
];


/*
*
* title: Título de la sección "Acerca de nosotros"
* description: Breve descripción de la empresa
* image: URL o ruta de la imagen de fondo
* socials: Enlaces e iconos de redes sociales
*   icon: URL o ruta del icono de la red social
*   href: Enlace a la red social
* 
*/
export const aboutSection = {
  title: "Acerca de nosotros",
  description: `En ${websiteName} somos un equipo de desarrolladores apasionados por la tecnología y la innovación. Nos especializamos en crear soluciones digitales personalizadas que ayudan a nuestros clientes a alcanzar sus objetivos comerciales.`,
  image: about_image,
  socials: socials
};

/*
*
* title: Título de la sección "Valores"
* items: Enlaces e iconos de redes sociales
*   icon: URL o ruta del icono del item
*   text: Texto del item
* 
*/
export const valuesSection = {
  title: "Somos justo lo que necesitas",
  items: [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/9750/9750879.png",
      text: "Comunicación y honestidad"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/5680/5680055.png",
      text: "Adaptados a tus necesidades"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2057/2057748.png",
      text: "Resultados y servicio postventa"
    }
  ]
}

/*
*
* title: Título de la sección Contacto
* description: Breve descripción de la sección Contacto
* image: URL o ruta de la imagen de fondo
* form: Propiedades del formulario de contacto
*   formBtnText: Texto del botón de envío del formulario
* waBtn: Propiedades del botón de WhatsApp
*   btnText: texto del botón CTA
*   btnHref: Enlace del botón CTA
*   btnIcon: Icono del botón CTA
* 
*/
export const contactSection = {
  title: "Contáctanos",
  description: "Cuéntanos, ¿qué necesitas?. Estaremos encantados de escucharte y ayudarte con tu proyecto.",
  image: contact_image,
  form: {
  },
  waBtn: {
    btnText: "Contáctanos por WhatsApp",
    btnHref: "#",
    btnIcon: WA_Logo
  }
}

/*
*
* title: Título del pie de página
* description: Breve delcripción de la empresa
* logo: URL o ruta del logo de la empresa
* socials: Enlaces e iconos de redes sociales
*   icon: URL o ruta del icono de la red social
*   href: Enlace a la red social
* contactinfo: Información de contacto
* 
*/
export const footerSection = {
  title: websiteName,
  description: "Soluciones digitales para tu negocio",
  logo: logo,
  socials: socials,
  contactinfo: [
    "+58 424 123 4567",
    "metalkaiserpolanco@gmail.com"
  ]
}
