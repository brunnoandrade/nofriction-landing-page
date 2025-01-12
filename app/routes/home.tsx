import { Hero } from "@/components/hero";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "No Friction AI" },
    {
      name: "description",
      content: "Uma solução de IA que converte opiniões em orientações.",
    },
  ];
}

export default function Home() {
  return <Hero />;
}
