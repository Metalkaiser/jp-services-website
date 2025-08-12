/*
*
* info.tsx
* Este archivo contiene toda la información y elementos gráficos utilizados en el sitio web.
* No se recomienda modificar las propiedades de las variables
* solamente se recomienda modificar los valores de las propiedades.
* 
*/


import { images } from "./Images";  //Importaciones de las imágenes y logos utilizados en el sitio web

export const websiteName = "JP Dev";  //Nombre de la empresa
export const contactinfo = [
  "+58 412 433 5244",
  "metalkaiserpolanco@gmail.com"
]

/*
*
* Redes sociales de la empresa
* icon: URL o ruta del icono de la red social
* href: Enlace a la red social
* 
*/
export const socials = [
  /*{
    icon: images.instagram,
    href: "#"
  }*/
];

/*
*
* Imágenes de la sección de llamada a la acción
* bgImg: URL o ruta de la imagen de fondo
* btnIcon: Icono del botón CTA
* 
*/
export const ctaSectionAssets = {
  bgImg: images.cta,
  btnIcon: images.whatsapp
}

/*
*
* Imágenes de cada proyecto en el portafolios
* image: URL o ruta de la imagen del proyecto
* 
*/
export const portfolioAssets = [
  images.portfolio.p1,
  images.portfolio.p2,
  images.portfolio.p3,
  images.portfolio.p4
];

/*
*
* Propiedades de la scción "Acerca de nosotros"
* image: URL o ruta de la imagen de fondo
* 
*/
export const aboutSectionAssets = images.about;

/*
*
* Propiedades de la sección Contacto
* image: URL o ruta de la imagen de fondo
* waBtn: Propiedades del botón de WhatsApp
*   btnIcon: Icono del botón CTA
* 
*/
export const contactSectionAssets = {
  image: images.contact,
  waBtn: {
    btnIcon: images.whatsapp,
    btnHref: "send?phone=584124335244&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
  }
}
