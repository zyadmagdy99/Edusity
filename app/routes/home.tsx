import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Responsivenav from "~/components/navigation/Responsivenav";
import HeroPage from "~/pages/HeroPage";
import Program from "~/pages/Program";
import About from "~/pages/About";
import Gallery from "~/pages/Gallery";
import Testemonials from "~/pages/Testemonials";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
  <div className="h-[80rem]">
  <Responsivenav/>
  <HeroPage/>
  <Program/>
  <About/>
  <Gallery/>
  <Testemonials/>
  </div> 
  );
}
