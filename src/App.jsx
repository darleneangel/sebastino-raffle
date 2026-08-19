import { useEffect, useState } from "react";
import LoadingScreen from "./components/ui/LoadingScreen";
import CursorGlow from "./components/ui/CursorGlow";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      <CursorGlow />

      {!loading && (
        <Home
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      )}
    </>
  );
}

export default App;