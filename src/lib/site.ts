export const SITE = {
  name: "Borja Galván Nutrición",
  shortName: "Borja Galván",
  domain: "borjagalvannutricion.com",
  url: "https://borjagalvannutricion.com",
  locale: "es_ES",
  description:
    "Nutrición online y deportiva con Borja Galván. Mejora tu composición corporal, rendimiento y hábitos con un plan personalizado, flexible y basado en comida real.",
  instagram: "https://www.instagram.com/borjagalvan.nutricion/",
  instagramHandle: "@borjagalvan.nutricion",
  email: "hola@borjagalvannutricion.com",
  phone: "+34676407670",
  phoneDisplay: "676 407 670",
  city: "Las Palmas de Gran Canaria",
  region: "Gran Canaria",
  country: "ES",
  presencialVenue: "CrossFit 928",
  presencialCity: "Las Palmas de Gran Canaria",
  signa: "Signa Center",
} as const;

const WA_NUMBER = "34676407670";
const WA_MESSAGE = "Hola Borja, quiero información sobre la consulta de nutrición";

export const WHATSAPP_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  WA_MESSAGE,
)}`;

export const whatsappWith = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
