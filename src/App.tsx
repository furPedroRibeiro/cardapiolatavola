import AOS from 'aos'
import 'aos/dist/aos.css'

import { Bebidas } from "./components/Bebidas";
import { Pizzas } from "./components/Pizzas";

import Logo from './assets/logo.png'
export function App() {
  AOS.init();
  return (
    <main className="flex flex-col items-center justify-center px-6 py-8 min-h-screen gap-12">
      <img src={Logo} alt="" />
      <div className="w-full flex flex-wrap items-center justify-center gap-6">
        <Bebidas/>
        <Pizzas/>
      </div>
    </main>
  )
  /*<h1 className="font-sans text-main font-extrabold text-4xl">Cardápio</h1> */
}