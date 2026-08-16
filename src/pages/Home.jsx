import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import AboutUs from "../components/sections/AboutUs";
import EventsSection from "../components/sections/EventsSection";
import OfficersSection from "../components/sections/OfficersSection";
import EventStats from "../components/sections/EventStats";
import FacebookSection from "../components/sections/FacebookSection";
import RegistrationSection from "../components/sections/RegistrationSection";
import HowToJoin from "../components/sections/HowToJoin";
import PrizeSection from "../components/sections/PrizeSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  function renderSection() {
    switch (activeSection) {
      case "hero":
        return <Hero />;

      case "aboutus":
        return <AboutUs />;

      case "happening-now":
        return <EventsSection />;

      case "events":
        return <EventsSection />;

      case "officers":
        return <OfficersSection />;

      case "gallery":
        return <EventStats />;

      case "contact":
        return <FacebookSection />;

      case "registration":
        return <RegistrationSection />;

      case "how-to-join":
        return <HowToJoin />;

      case "prizes":
        return <PrizeSection />;

      default:
        return <Hero />;
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="flex-1">
        {renderSection()}
      </main>

      <Footer />

    </div>
  );
}