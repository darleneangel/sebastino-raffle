import { motion } from "framer-motion";
import {
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import leadership from "../../assets/projects/ssbs.jpg";
import outreach from "../../assets/projects/ggb.jpg";
import campusEvent from "../../assets/projects/leadership.jpg";
import advocacy from "../../assets/projects/ga.jpg";


const projects = [
  {
    title: "Salubong sa Bagong Sebastino",
    year: "2025",
    image: leadership,
    description:
      "A leadership initiative designed to enhance communication, teamwork, and decision-making skills among student leaders.",
    participants:
      "150+ student participants",
  },

  {
    title: "Go Green Baste",
    year: "2025",
    image: outreach,
    description:
      "An SSG-led program focused on extending support and meaningful service to the community and environment.",
    participants:
      "300+ beneficiaries",
  },

  {
    title: "Leadership Seminar",
    year: "2026",
    image: campusEvent,
    description:
      "Student-centered activities that promote school spirit, collaboration, and memorable campus experiences.",
    participants:
      "1000+ students engaged",
  },

  {
    title: "Grand Almusalan Station",
    year: "2026",
    image: advocacy,
    description:
      "Station that encourage awareness, responsibility, and active participation among Sebastinos.",
    participants:
      "Whole student community",
  },
];


export default function ProjectsSection() {

  return (

    <section
      id="events"
      className="relative overflow-hidden bg-gradient-to-b from-white via-pink-50 to-white py-28"
    >


      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl"/>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl"/>

      </div>



      <div className="relative mx-auto max-w-7xl px-6">


        {/* Header */}

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

          <span className="
            rounded-full 
            bg-pink-100 
            px-6 
            py-2 
            text-sm 
            font-bold 
            tracking-[4px]
            text-[var(--primary)]
            dark:bg-pink-500/20
          ">

            OUR IMPACT

          </span>



          <h2 className="
            mt-6 
            text-5xl 
            font-black 
            text-gray-900
          ">

            Projects That

            <span className="
              block
              bg-gradient-to-r 
              from-pink-600 
              to-pink-400
              bg-clip-text
              text-transparent
            ">

              Made A Difference

            </span>

          </h2>



          <p className="
            mx-auto 
            mt-6 
            max-w-3xl
            text-lg
            leading-8
            text-gray-600
            text-gray-600
          ">

            Discover the initiatives, programs, and activities led by the
            Supreme Student Government that continue to create meaningful
            experiences for every Sebastino.

          </p>


        </motion.div>




        {/* Project Cards */}

        <div className="
          mt-20
          grid
          gap-10
          md:grid-cols-2
          xl:grid-cols-4
        ">


          {projects.map((project,index)=>(


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
                y:-12
              }}


              className="
                group
                overflow-hidden
                rounded-[35px]
                border
                border-pink-100
                bg-white
                shadow-xl
                transition
                hover:shadow-2xl
                "

            >


              {/* Image */}

              <div className="
                relative
                h-64
                overflow-hidden
              ">


                <img

                  src={project.image}

                  alt={project.title}

                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "

                />


                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  to-transparent
                "/>



                <span className="
                  absolute
                  bottom-5
                  left-5
                  rounded-full
                  bg-pink-600
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-white
                ">

                  {project.year}

                </span>


              </div>



              {/* Content */}

              <div className="p-7">


                <h3 className="
                  text-2xl
                  font-black
                  text-gray-900
                ">

                  {project.title}

                </h3>


                <p className="
                  mt-4
                  leading-7
                  text-gray-900
                  dark:text-gray-400
                ">

                  {project.description}

                </p>



                <div className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  text-pink-600
                ">

                  <FaUsers/>

                  {project.participants}

                </div>



                <button className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  font-bold
                  text-pink-600
                ">

                  View Project

                  <FaArrowRight/>

                </button>


              </div>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}