import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Banner from "./components/banner";
import Footer from "./components/footer";
import PricingTable from "./components/pricingtable";


export default function Home() {
  return (
    <div className="max-w-full min-h-full">
      <NavBar />
      <Hero />
      <PricingTable />
      <Banner />
      <Footer />
    </div>
  );
}
