import RegistrationSection from "../components/sections/RegistrationSection";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import AboutEvent from "../components/sections/AboutEvent";
import HowToJoin from "../components/sections/HowToJoin";
import PrizeSection from "../components/sections/PrizeSection";
import FacebookSection from "../components/sections/FacebookSection";
import Footer from "../components/layout/Footer";
import EventStats from "../components/sections/EventStats";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutEvent />
      <HowToJoin />
      <PrizeSection />
      <FacebookSection />
      <RegistrationSection />
      <EventStats />
      <Footer />
    </>
  );
}