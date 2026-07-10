import { useEffect, useState } from "react";
import LoadingScreen from "./components/ui/LoadingScreen";
import Home from "./pages/Home";
import CursorGlow from "./components/ui/CursorGlow";

function App() {

  const [loading,setLoading]=useState(true);

  useEffect(()=>{

    const timer=setTimeout(()=>{
      setLoading(false);
    },2500);

    return ()=>clearTimeout(timer);

  },[]);

  return(
    <>
      <LoadingScreen loading={loading}/>
      <CursorGlow/>
      {!loading && <Home/>}
    </>
  )

}

export default App;