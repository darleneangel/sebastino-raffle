import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import AboutUs from "../components/sections/AboutUs";
import EventsSection from "../components/sections/EventsSection";
import EventStats from "../components/sections/EventStats";
import FacebookSection from "../components/sections/FacebookSection";
import RegistrationSection from "../components/sections/RegistrationSection";
import HowToJoin from "../components/sections/HowToJoin";
import PrizeSection from "../components/sections/PrizeSection";

export default function Home({
  activeSection,
  setActiveSection,
}) {

  function renderSection() {
    switch (activeSection) {

      case "hero":
        return (
          <Hero
            setActiveSection={setActiveSection}
          />
        );

      case "aboutus":
        return (
          <AboutUs
            setActiveSection={setActiveSection}
          />
        );

      case "happening-now":
        return (
          <EventsSection
            setActiveSection={setActiveSection}
          />
        );

      case "events":
        return (
          <EventsSection
            setActiveSection={setActiveSection}
          />
        );

      case "footer":
        return (
          <Footer
            setActiveSection={setActiveSection}
          />
        );

      case "gallery":
        return (
          <EventStats
            setActiveSection={setActiveSection}
          />
        );

      case "contact":
        return (
          <FacebookSection
            setActiveSection={setActiveSection}
          />
        );

      case "registration":
        return (
          <RegistrationSection
            setActiveSection={setActiveSection}
          />
        );

      case "how-to-join":
        return (
          <HowToJoin
            setActiveSection={setActiveSection}
          />
        );

      case "prizes":
        return (
          <PrizeSection
            setActiveSection={setActiveSection}
          />
        );

      default:
        return (
          <Hero
            setActiveSection={setActiveSection}
          />
        );
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="flex-1">
        {renderSection()}
      </main>

      <Footer
        setActiveSection={setActiveSection}
      />

    </div>
  );
}