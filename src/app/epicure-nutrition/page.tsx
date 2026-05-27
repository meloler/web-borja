import type { Metadata } from "next";
import { EpicureConsole } from "@/components/epicure-console";

export const metadata: Metadata = {
  title: "Epicure Nutrition Console",
  description:
    "Prototipo privado para explorar aplicaciones nutricionales del paper Epicure.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: {
    canonical: "/epicure-nutrition/",
  },
};

export default function EpicureNutritionPage() {
  return <EpicureConsole />;
}
