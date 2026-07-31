import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import ssgLogo from "../../assets/logos/ssg-logo.jpg";


const links = [
  { name: "Home", to: "hero" },
  { name: "About Us", to: "about" },
  { name: "Events", to: "events" },
  { name: "Officers", to: "officers" },
  { name: "Gallery", to: "gallery" },
  { name: "Contact", to: "contact" },
];


export default function Navbar() {

const [scrolled,setScrolled] = useState(false);
const [mobileOpen,setMobileOpen] = useState(false);


useEffect(()=>{

const handleScroll=()=>{

setScrolled(window.scrollY > 60);

};

window.addEventListener(
"scroll",
handleScroll
);


return ()=>window.removeEventListener(
"scroll",
handleScroll
);


},[]);



return (

<>


<motion.nav

initial={{
y:-80
}}

animate={{
y:0
}}

className={`

fixed
top-0
left-0
z-50
w-full
transition-all
duration-500

${
scrolled

?

"bg-[#CA1F7B]/90 backdrop-blur-xl shadow-2xl"

:

"bg-transparent"

}

`}

>


<div className="
flex
w-full
items-center
justify-between
px-6
py-4
lg:px-16
">



{/* Logo */}
<motion.div
  whileHover={{
    scale: 1.08,
    rotate: 5,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
  }}
  className="
    flex
    items-center
    gap-3
  "
>


  {/* Logo Circle */}

  <div
    className="
      relative
      h-14
      w-14
      overflow-hidden
      rounded-full
      border-2
      border-white
      bg-white
      shadow-[0_0_20px_rgba(236,72,153,.5)]
    "
  >

    {/* Glow */}

    <motion.div
      animate={{
        scale:[1,1.2,1],
        opacity:[0.4,0.2,0.4]
      }}
      transition={{
        duration:2,
        repeat:Infinity
      }}
      className="
        absolute
        inset-0
        rounded-full
        bg-pink-400
        blur-md
      "
    />


    <img
      src={ssgLogo}
      alt="SSG Logo"
      className="
        relative
        z-10
        h-full
        w-full
        object-cover
      "
    />

  </div>



  {/* Text */}

  <div>

    <h1
      className="
        text-lg
        font-black
        text-white
      "
    >
      Supreme Student Government
    </h1>


    <p
      className="
        text-xs
        text-pink-100
      "
    >
      San Sebastian College – Recoletos de Cavite
    </p>


  </div>


</motion.div>






{/* DESKTOP NAVIGATION */}


<div className="
hidden
items-center
gap-8
lg:flex
">


{
links.map((item)=>(

<Link

key={item.to}

to={item.to}

smooth={true}

duration={700}

spy={true}

offset={-80}

activeClass="text-pink-200"

className="

cursor-pointer

font-semibold

text-white

transition

hover:text-pink-200

relative

after:absolute
after:left-0
after:-bottom-2
after:h-[2px]
after:w-0
after:bg-pink-200
after:transition-all

hover:after:w-full

"

>

{item.name}

</Link>


))

}





<Link

to="contact"

smooth={true}

duration={700}

offset={-80}

>


<motion.button

whileHover={{

scale:1.05,

boxShadow:
"0 0 25px rgba(223,121,176,.7)"

}}

whileTap={{

scale:.95

}}

className="

flex
items-center
gap-2

rounded-full

bg-white

px-6

py-3

font-bold

text-[#CA1F7B]

"

>

Join SSG

<FaArrowRight size={14}/>

</motion.button>


</Link>



</div>






{/* MOBILE BUTTON */}


<button

onClick={()=>setMobileOpen(!mobileOpen)}

className="
text-white
lg:hidden
"

>


{
mobileOpen

?

<HiX size={32}/>

:

<HiMenuAlt3 size={32}/>

}


</button>



</div>


</motion.nav>







{/* MOBILE MENU */}


<AnimatePresence>


{

mobileOpen &&

(


<motion.div

initial={{

opacity:0,

y:-30

}}

animate={{

opacity:1,

y:0

}}

exit={{

opacity:0,

y:-30

}}

className="

fixed

top-20

left-4

right-4

z-40

rounded-3xl

bg-[#CA1F7B]/95

p-6

shadow-2xl

backdrop-blur-xl

lg:hidden

"

>


<div className="
flex
flex-col
gap-6
">


{

links.map((item)=>(


<Link

key={item.to}

to={item.to}

smooth={true}

duration={700}

offset={-80}

onClick={()=>setMobileOpen(false)}

className="

cursor-pointer

text-lg

font-semibold

text-white

hover:text-pink-200

"

>

{item.name}

</Link>


))

}



<Link

to="contact"

smooth={true}

duration={700}

offset={-80}

onClick={()=>setMobileOpen(false)}

>


<button className="

w-full

rounded-full

bg-white

py-3

font-bold

text-[#CA1F7B]

">

Join SSG

</button>


</Link>


</div>



</motion.div>


)

}


</AnimatePresence>



</>


);

}