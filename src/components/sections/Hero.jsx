import { motion } from "framer-motion";
import {
  FaUsers,
  FaCalendarAlt,
  FaBullhorn,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";

import ssgTeam from "../../assets/hero/ssg-team.jpg";


const highlights = [
  {
    icon:<FaCalendarAlt/>,
    number:"35+",
    label:"Events Organized",
  },
  {
    icon:<FaUsers/>,
    number:"5000+",
    label:"Students Represented",
  },
  {
    icon:<FaBullhorn/>,
    number:"120+",
    label:"Announcements",
  },
];


export default function Hero(){

return(

<section
id="hero"
className="
relative
min-h-screen
overflow-hidden
bg-gradient-to-br
from-[#8E1457]
via-[#CA1F7B]
to-[#DF79B0]
"
>


{/* Background */}

<div
className="
absolute
-left-32
top-10
h-96
w-96
rounded-full
bg-white/20
blur-3xl
"
/>


<div
className="
absolute
right-0
bottom-0
h-[500px]
w-[500px]
rounded-full
bg-pink-200/30
blur-3xl
"
/>




<div
className="
relative
z-10
mx-auto
grid
max-w-7xl
items-center
gap-14
px-6
py-32
lg:grid-cols-2
"
>



{/* LEFT CONTENT */}

<motion.div

initial={{
opacity:0,
x:-50
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

>


<span
className="
rounded-full
bg-white/20
px-6
py-3
text-sm
font-bold
tracking-[3px]
text-white
backdrop-blur-md
"
>

SUPREME STUDENT GOVERNMENT

</span>




<h1
className="
mt-8
text-5xl
font-black
leading-tight
text-white
md:text-7xl
"
>

Serving With

<span
className="
block
text-pink-100
"
>

Integrity.

</span>


Empowering

<span
className="
block
text-white
"
>

Sebastinos.

</span>

</h1>



<p
className="
mt-8
max-w-xl
text-lg
leading-8
text-white/90
"
>

The official digital home of the Supreme Student Government.
Stay connected with campus initiatives, discover student
programs, participate in events, and be part of meaningful
change within the Sebastino community.

</p>




<div
className="
mt-10
flex
flex-wrap
gap-4
"
>


<button
className="
flex
items-center
gap-3
rounded-full
bg-white
px-8
py-4
font-bold
text-[#CA1F7B]
shadow-xl
transition
hover:scale-105
"
>

Explore Events

<FaArrowRight/>

</button>




<button
className="
flex
items-center
gap-3
rounded-full
border
border-white/40
bg-white/10
px-8
py-4
font-bold
text-white
backdrop-blur-md
transition
hover:bg-white/20
"
>

<FaEnvelope/>

Contact SSG

</button>


</div>



</motion.div>





{/* RIGHT SIDE IMAGE + CARD */}

<motion.div

initial={{
opacity:0,
x:50
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.9
}}

className="relative"

>


{/* Image */}

<div
className="
overflow-hidden
rounded-[40px]
border
border-white/30
shadow-2xl
"
>

<img

src={ssgTeam}

alt="SSG Team"

className="
h-[430px]
w-full
object-cover
transition
duration-700
hover:scale-110
"

/>

</div>



{/* Floating Stats */}

<div
className="
absolute
-bottom-40
left-5
right-5
grid
grid-cols-3
gap-3
rounded-3xl
border
border-white/20
bg-white/20
p-5
backdrop-blur-xl
"
>


{
highlights.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-8
}}

className="
text-center
text-white
"

>


<div
className="
mx-auto
mb-2
flex
justify-center
text-2xl
text-pink-100
"
>

{item.icon}

</div>


<h3
className="
text-3xl
font-black
"
>

{item.number}

</h3>


<p
className="
text-xs
text-white/80
"
>

{item.label}

</p>


</motion.div>


))
}


</div>



</motion.div>




</div>



</section>

)

}