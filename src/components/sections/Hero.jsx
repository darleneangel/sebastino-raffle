import { motion } from "framer-motion";
import {
  FaUsers,
  FaCalendarAlt,
  FaBullhorn,
  FaArrowRight,
  FaHandsHelping,
  FaGraduationCap,
  FaStar,
} from "react-icons/fa";

import EventsSection from "./EventsSection";

import ssgTeam from "../../assets/hero/2026_SSG.jpg";
import ssgLogo from "../../assets/logos/ssg-logo.jpg";


// ===============================
// HERO STATISTICS
// ===============================

const highlights = [
  {
    icon: <FaCalendarAlt />,
    number: "35+",
    label: "Events Organized",
  },
  {
    icon: <FaUsers />,
    number: "5000+",
    label: "Students Represented",
  },
  {
    icon: <FaBullhorn />,
    number: "120+",
    label: "Announcements",
  },
];


// ===============================
// SSG FOCUS AREAS
// ===============================

const focusAreas = [
  {
    icon: <FaUsers />,
    title: "Student Representation",
    description:
      "Amplifying student voices and bringing their concerns, ideas, and aspirations forward.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Student Engagement",
    description:
      "Creating opportunities for students to participate in activities, programs, and campus initiatives.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Leadership & Service",
    description:
      "Encouraging leadership, responsibility, collaboration, and meaningful service to the school community.",
  },
];


export default function Hero({ setActiveSection }) {

  // ===============================
  // SECTION NAVIGATION
  // ===============================

  const goToSection = (section) => {

    if (setActiveSection) {
      setActiveSection(section);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (

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
        px-6
        pt-28
        pb-20
        lg:px-12
      "
    >

      {/* =====================================
          BACKGROUND DECORATIONS
      ===================================== */}

      <div
        className="
          pointer-events-none
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
          pointer-events-none
          absolute
          -right-32
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
          pointer-events-none
          absolute
          right-[30%]
          top-[15%]
          h-40
          w-40
          rounded-full
          bg-white/10
          blur-3xl
        "
      />


      <div className="relative z-10 mx-auto max-w-7xl">


        {/* =====================================
            MAIN HERO
        ===================================== */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[1.05fr_.95fr]
          "
        >

          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* Label */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/15
                px-5
                py-3
                text-sm
                font-bold
                tracking-[2px]
                text-white
                backdrop-blur-md
              "
            >

              <FaStar className="text-pink-100" />

              SUPREME STUDENT GOVERNMENT

            </div>


            {/* Heading */}

            <h1
              className="
                mt-7
                max-w-3xl
                text-5xl
                font-black
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >

              One Pulse.

              <span className="block text-pink-100">
                One Purpose.
              </span>

              <span className="block">
                One Studentry.
              </span>

            </h1>


            {/* Introduction */}

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-white/90
                sm:text-lg
                sm:leading-8
              "
            >

              The{" "}
              <strong>
                Supreme Student Government (SSG)
              </strong>{" "}
              is the recognized student leadership body of
              San Sebastian College – Recoletos de Cavite,
              dedicated to representing the student body and
              promoting meaningful participation in school life.

            </p>


            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-white/75
                sm:text-base
              "
            >

              Through student-centered programs, events,
              announcements, and initiatives, the SSG works
              to strengthen communication, encourage
              involvement, and create opportunities for every
              Sebastino to contribute to the school community.

            </p>


            {/* Buttons */}

            <div
              className="
                mt-9
                flex
                flex-wrap
                gap-4
              "
            >

              {/* Explore Events */}

              <motion.button
                onClick={() =>
                  goToSection("happening-now")
                }
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-7
                  py-4
                  font-bold
                  text-[#CA1F7B]
                  shadow-xl
                  transition
                "
              >

                Explore Events

                <FaArrowRight />

              </motion.button>


              {/* About SSG */}

              <motion.button
                onClick={() =>
                  goToSection("aboutus")
                }
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/40
                  bg-white/10
                  px-7
                  py-4
                  font-bold
                  text-white
                  backdrop-blur-md
                  transition
                  hover:bg-white/20
                "
              >

                Learn About SSG

                <FaArrowRight />

              </motion.button>

            </div>

          </motion.div>


          {/* =====================================
              RIGHT VISUAL
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative"
          >

            {/* SSG TEAM IMAGE */}

            <div
              className="
                relative
                mx-auto
                max-w-xl
                overflow-hidden
                rounded-[40px]
              "
            >

              <img
                src={ssgTeam}
                alt="Supreme Student Government Team"
                className="
                  h-[420px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  sm:h-[550px]
                "
              />

            </div>


            {/* FLOATING LOGO */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -left-5
                top-10
                flex
                h-24
                w-24
                items-center
                justify-center
                overflow-hidden
                rounded-3xl
                border-4
                border-white
                bg-white
                shadow-2xl
                sm:-left-8
                sm:h-28
                sm:w-28
              "
            >

              <img
                src={ssgLogo}
                alt="SSG Logo"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

            </motion.div>


            {/* FLOATING IDENTITY CARD */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              className="
                absolute
                -bottom-7
                right-3
                max-w-[260px]
                rounded-3xl
                border
                border-white/20
                bg-white/20
                p-5
                shadow-xl
                backdrop-blur-xl
                sm:right-0
              "
            >

              <div className="flex items-start gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    text-[#CA1F7B]
                  "
                >

                  <FaUsers />

                </div>


                <div>

                  <p className="text-sm font-black text-white">
                    Student Voice
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/75">
                    Leadership, representation, service,
                    and student engagement.
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>


        {/* =====================================
            STATISTICS
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
            duration: 0.7,
          }}
          className="
            relative
            z-20
            mt-20
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-3
          "
        >

          {highlights.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -6,
              }}
              className="
                rounded-3xl
                border
                border-white/20
                bg-white/15
                p-6
                text-center
                backdrop-blur-xl
              "
            >

              <div
                className="
                  mx-auto
                  mb-3
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
                  text-white
                "
              >

                {item.number}

              </h3>


              <p
                className="
                  mt-1
                  text-sm
                  text-white/75
                "
              >

                {item.label}

              </p>

            </motion.div>

          ))}

        </motion.div>


        {/* =====================================
            WHAT'S NEW
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20"
        >

          <EventsSection
            preview={true}
            setActiveSection={setActiveSection}
          />

        </motion.div>


        {/* =====================================
            WHAT THE SSG DOES
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.9,
            duration: 0.7,
          }}
          className="mt-20"
        >

          <div className="mb-8 text-center">

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[3px]
                text-pink-100
              "
            >
              What We Stand For
            </p>


            <h2
              className="
                mt-2
                text-3xl
                font-black
                text-white
                sm:text-4xl
              "
            >
              Serving the Sebastino Community
            </h2>

          </div>


          <div
            className="
              grid
              gap-5
              md:grid-cols-3
            "
          >

            {focusAreas.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/20
                  bg-white/10
                  p-7
                  backdrop-blur-md
                  transition
                  hover:bg-white/15
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                    text-xl
                    text-[#CA1F7B]
                    shadow-lg
                  "
                >

                  {item.icon}

                </div>


                <h3
                  className="
                    text-xl
                    font-black
                    text-white
                  "
                >

                  {item.title}

                </h3>


                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-white/70
                  "
                >

                  {item.description}

                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}