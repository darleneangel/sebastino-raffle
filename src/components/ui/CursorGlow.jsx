import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {

  const [position,setPosition]=useState({
    x:0,
    y:0
  });

  useEffect(()=>{

    const move=(e)=>{

      setPosition({
        x:e.clientX,
        y:e.clientY
      });

    };

    window.addEventListener("mousemove",move);

    return ()=>window.removeEventListener("mousemove",move);

  },[]);

  return(

    <motion.div

      animate={{
        x:position.x-100,
        y:position.y-100
      }}

      transition={{
        type:"spring",
        damping:25,
        stiffness:120
      }}

      className="pointer-events-none fixed z-0 h-52 w-52 rounded-full bg-yellow-300/20 blur-3xl"

    />

  );

}