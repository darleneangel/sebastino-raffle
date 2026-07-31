import { motion } from "framer-motion";
import {
  FaUsers,
  FaCalendarCheck,
  FaHandsHelping,
  FaAward,
} from "react-icons/fa";


const stats = [

  {
    icon:<FaUsers size={38}/>,
    number:"5000+",
    title:"Students Represented",
  },

  {
    icon:<FaCalendarCheck size={38}/>,
    number:"50+",
    title:"Programs & Events",
  },

  {
    icon:<FaHandsHelping size={38}/>,
    number:"100+",
    title:"Student Volunteers",
  },

  {
    icon:<FaAward size={38}/>,
    number:"2026",
    title:"Year of Leadership",
  },

];



export default function EventStats(){

return(

<section
className="
relative
overflow-hidden
bg-gradient-to-b
from-white
via-pink-50
to-white
py-28
"
>


{/* Background */}

<div className="absolute inset-0">

<div
className="
absolute
-left-20
top-10
h-80
w-80
rounded-full
bg-[#DF79B0]/20
blur-3xl
"
/>


<div
className="
absolute
right-0
bottom-0
h-96
w-96
rounded-full
bg-[#CA1F7B]/10
blur-3xl
"
/>

</div>



<div className="relative mx-auto max-w-7xl px-6">



<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="text-center"

>


<span
className="
rounded-full
bg-pink-100
px-6
py-2
text-sm
font-bold
tracking-[4px]
text-[#CA1F7B]
"
>

OUR IMPACT

</span>



<h2
className="
mt-6
text-5xl
font-black
text-gray-900
"
>

Making A Difference

<span
className="
block
bg-gradient-to-r
from-[#CA1F7B]
to-[#DF79B0]
bg-clip-text
text-transparent
"
>

Through Service

</span>

</h2>



<p
className="
mx-auto
mt-6
max-w-3xl
text-lg
leading-8
text-gray-600
"
>

Through dedication and collaboration, the Supreme Student Government
continues to empower students, organize meaningful initiatives,
and create a stronger Sebastino community.

</p>


</motion.div>




<div
className="
mt-20
grid
gap-8
sm:grid-cols-2
lg:grid-cols-4
"
>


{
stats.map((item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.15
}}

whileHover={{
y:-10,
scale:1.04
}}

className="
rounded-[35px]
border
border-pink-100
bg-white
p-10
text-center
shadow-xl
transition
hover:shadow-2xl
"

>


<div
className="
mx-auto
flex
h-20
w-20
items-center
justify-center
rounded-3xl
bg-[#CA1F7B]
text-white
shadow-lg
"
>

{item.icon}

</div>



<h3
className="
mt-8
text-5xl
font-black
text-[#CA1F7B]
"
>

{item.number}

</h3>



<p
className="
mt-3
text-lg
font-semibold
text-gray-700
"
>

{item.title}

</p>


</motion.div>


))
}


</div>


</div>


</section>


)

}