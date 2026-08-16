import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaUsers,
  FaCalendarAlt,
  FaBullhorn,
  FaArrowRight,
  FaHandsHelping,
  FaGraduationCap,
  FaStar,
  FaUniversity,
  FaChevronRight,
  FaGift,
  FaCamera,
  FaMusic,
  FaTimes,
  FaMapMarkerAlt,
  FaImages,
} from "react-icons/fa";

// import EventsSection from "./EventsSection"; // unused - removed to fix lint error

// =====================================================
// ACTUAL ASSETS
// =====================================================

import ssgTeam from "../../assets/hero/2026_SSG.jpg";
import ssgLogo from "../../assets/logos/ssg-logo.jpg";

// Event Assets
import eventPoster from "../../assets/events/salubong-poster.jpg";

import prize1 from "../../assets/events/prize-1.jpg";
import prize2 from "../../assets/events/prize-2.jpg";
import prize3 from "../../assets/events/prize-3.jpg";

import freebies from "../../assets/events/freebies.jpg";
import photobooth from "../../assets/events/photobooth.jpg";
import asop from "../../assets/events/asop.jpg";
import brochure from "../../assets/events/brochure.jpg";


// =====================================================
// HERO STATISTICS
// =====================================================

const highlights = [
  {
    icon: <FaUsers />,
    number: "5,000+",
    label: "Students Represented",
  },
  {
    icon: <FaCalendarAlt />,
    number: "35+",
    label: "Programs & Activities",
  },
  {
    icon: <FaBullhorn />,
    number: "120+",
    label: "Student Updates",
  },
];


// =====================================================
// SSG CORE AREAS
// =====================================================

const focusAreas = [
  {
    icon: <FaUsers />,
    title: "Student Representation",
    description:
      "Representing the interests, concerns, and aspirations of the student body through responsible student leadership.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Student Engagement",
    description:
      "Providing meaningful opportunities for students to participate in programs, activities, and community initiatives.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Leadership & Service",
    description:
      "Promoting integrity, responsibility, collaboration, and service within the Sebastino community.",
  },
];


// =====================================================
// HAPPENING NOW CARDS
// =====================================================

const happeningCards = [
  {
    id: "salubong",
    title: "Salubong sa Bagong Sebastino",
    shortTitle: "Salubong sa Bagong Sebastino",
    category: "Featured Activity",
    description:
      "Salubong sa Bagong Sebastino welcomes students to a new academic year through a celebration prepared by the Supreme Student Government. The activity features engaging programs, games, prizes, freebies, and opportunities for Sebastinos to connect with one another.",
    image: eventPoster,
    icon: <FaStar />,
    details:
      "The SSG prepared this activity to create a welcoming and engaging start to the academic year while strengthening student participation and community spirit.",
    gallery: [
      eventPoster,
      freebies,
      photobooth,
      asop,
      brochure,
    ],
  },

  {
    id: "freebies",
    title: "Freebies",
    shortTitle: "Freebies",
    category: "Event Preparation",
    description:
      "Special freebies were prepared by the SSG as part of the Salubong sa Bagong Sebastino celebration. These giveaways add an extra element of excitement and appreciation for students participating in the event.",
    image: freebies,
    icon: <FaGift />,
    details:
      "From preparation to distribution, the SSG team worked to ensure that the freebies became a memorable part of the welcoming celebration.",
    gallery: [
      freebies,
      eventPoster,
      prize1,
      prize2,
      prize3,
    ],
  },

  {
    id: "photobooth",
    title: "Photobooth",
    shortTitle: "Photobooth",
    category: "Student Experience",
    description:
      "The SSG photobooth gives Sebastinos an opportunity to capture and preserve memories from the Salubong sa Bagong Sebastino celebration. The setup is designed to create a fun and memorable experience for students.",
    image: photobooth,
    icon: <FaCamera />,
    details:
      "The photobooth forms part of the event experience, giving students a creative way to document their first moments of the new academic year.",
    gallery: [
      photobooth,
      eventPoster,
      freebies,
      brochure,
      asop,
    ],
  },

  {
    id: "asop",
    title: "ASOP",
    shortTitle: "Academic Student Orientation Program",
    category: "Student Orientation",
    description:
      "The Academic Student Orientation Program, or ASOP, is designed to help students become more familiar with the academic environment, expectations, and opportunities available within the institution.",
    image: asop,
    icon: <FaMusic />,
    details:
      "Through orientation activities and student-centered information, ASOP supports students as they begin or continue their academic journey at San Sebastian College – Recoletos de Cavite.",
    gallery: [
      asop,
      eventPoster,
      brochure,
      freebies,
      photobooth,
    ],
  },
];


// =====================================================
// HERO COMPONENT
// =====================================================

export default function Hero({ setActiveSection }) {

  // ===================================================
  // STATE
  // ===================================================

  const [selectedCard, setSelectedCard] = useState(null);


  // ===================================================
  // NAVIGATION
  // ===================================================

const goToSection = (section) => {

  if (setActiveSection) {
    setActiveSection(section);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

};

  // ===================================================
  // MODAL HANDLERS
  // ===================================================

  const openCard = (card) => {
    setSelectedCard(card);
  };


  const closeCard = () => {
    setSelectedCard(null);
  };


  // ===================================================
  // PREVENT BODY SCROLL WHEN MODAL IS OPEN
  // ===================================================

  useEffect(() => {

    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };

  }, [selectedCard]);


  // ===================================================
  // ESC KEY TO CLOSE MODAL
  // ===================================================

  useEffect(() => {

    const handleEscape = (event) => {

      if (event.key === "Escape") {
        closeCard();
      }

    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };

  }, []);


  return (

    <>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        id="hero"
        className="
          relative
          overflow-hidden
          bg-white
          text-black
        "
      >

        {/* =====================================================
            BACKGROUND DECORATIONS
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#DF79B0]/20
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#CA1F7B]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[40%]
            top-0
            h-72
            w-72
            rounded-full
            bg-[#DF79B0]/10
            blur-3xl
          "
        />


        {/* =====================================================
            MAIN CONTAINER
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            pb-20
            pt-32
            lg:px-12
            lg:pb-24
          "
        >

          {/* =================================================
              MAIN HERO
          ================================================= */}

          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[1.05fr_.95fr]
            "
          >

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              {/* Organization Label */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#C0C0C0]
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-bold
                  tracking-[1.5px]
                  text-[#CA1F7B]
                  shadow-sm
                "
              >

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#CA1F7B]
                    text-white
                  "
                >
                  <FaUniversity size={13} />
                </span>

                SUPREME STUDENT GOVERNMENT

              </div>


              {/* Main Heading */}

              <h1
                className="
                  mt-8
                  max-w-3xl
                  text-4xl
                  font-black
                  leading-[1.08]
                  tracking-tight
                  text-black
                  sm:text-5xl
                  lg:text-6xl
                "
              >

                Empowering Student Voices,

                <span
                  className="
                    block
                    text-[#CA1F7B]
                  "
                >
                  Building Our Campus Community
                </span>

              </h1>


              {/* Introduction */}

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-lg
                  font-medium
                  leading-8
                  text-black
                "
              >

                Welcome to the official digital home of the{" "}

                <strong className="text-[#CA1F7B]">

                  Supreme Student Government of San Sebastian
                  College – Recoletos de Cavite.

                </strong>

              </p>


              {/* Academic Year Information */}

              <div
                className="
                  mt-6
                  max-w-2xl
                  rounded-2xl
                  border-l-4
                  border-[#CA1F7B]
                  bg-white
                  px-6
                  py-5
                  shadow-md
                "
              >

                <div className="flex items-start gap-4">

                  <div
                    className="
                      mt-1
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#DF79B0]/20
                      text-[#CA1F7B]
                    "
                  >

                    <FaBullhorn />

                  </div>

                  <div>

                    <p
                      className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-[1.5px]
                        text-[#CA1F7B]
                      "
                    >
                      Academic Year 2026–2027
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-6
                        text-black
                      "
                    >
                      Stay informed about SSG programs, activities,
                      announcements, and student initiatives throughout
                      the academic year.
                    </p>

                  </div>

                </div>

              </div>


              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-sm
                  leading-7
                  text-black
                  sm:text-base
                "
              >

                Through student representation, meaningful engagement,
                and service-oriented leadership, the SSG works to
                strengthen communication between students and the school
                community while creating opportunities for every Sebastino
                to participate, contribute, and lead.

              </p>


              {/* CTA BUTTONS */}

              <div
                className="
                  mt-9
                  flex
                  flex-wrap
                  gap-4
                "
              >

                {/* PRIMARY BUTTON */}

                <motion.button
                  onClick={() => goToSection("happening-now")}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#CA1F7B]
                    px-7
                    py-4
                    font-bold
                    text-white
                    shadow-lg
                    transition
                    hover:bg-[#8E1457]
                  "
                >

                  Explore SSG Activities

                  <FaArrowRight size={14} />

                </motion.button>


                {/* SECONDARY BUTTON */}

                <motion.button
                  onClick={() => goToSection("officers")}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#C0C0C0]
                    bg-white
                    px-7
                    py-4
                    font-bold
                    text-[#CA1F7B]
                    shadow-sm
                    transition
                    hover:border-[#CA1F7B]
                    hover:bg-[#DF79B0]/10
                  "
                >

                  Meet the Officers

                  <FaUsers size={15} />

                </motion.button>

              </div>

            </motion.div>


            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
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

              {/* Main Image */}

              <div
                className="
                  relative
                  mx-auto
                  max-w-xl
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[#C0C0C0]
                  bg-white
                  p-2
                  shadow-[0_25px_70px_rgba(202,31,123,0.15)]
                "
              >

                <div
                  className="
                    overflow-hidden
                    rounded-[26px]
                  "
                >

                  <img
                    src={ssgTeam}
                    alt="Supreme Student Government 2026"
                    className="
                      h-[430px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      hover:scale-[1.02]
                      sm:h-[560px]
                    "
                  />

                </div>

              </div>


              {/* Floating Logo */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -left-4
                  top-8
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border-4
                  border-white
                  bg-white
                  shadow-xl
                  sm:-left-8
                  sm:h-28
                  sm:w-28
                "
              >

                <img
                  src={ssgLogo}
                  alt="SSG Logo"
                  className="h-full w-full object-cover"
                />

              </motion.div>


              {/* Academic Year Badge */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
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
                  -bottom-6
                  right-4
                  rounded-2xl
                  border
                  border-[#C0C0C0]
                  bg-white
                  px-6
                  py-4
                  shadow-xl
                  sm:right-0
                "
              >

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[1.5px]
                    text-[#000000]
                  "
                >
                  Student Leadership
                </p>

                <p
                  className="
                    mt-1
                    text-lg
                    font-black
                    text-[#CA1F7B]
                  "
                >
                  A.Y. 2026–2027
                </p>

              </motion.div>

            </motion.div>

          </div>


          {/* =====================================================
              STATISTICS
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
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
                  y: -5,
                }}
                className="
                  rounded-2xl
                  border
                  border-[#C0C0C0]
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  hover:border-[#DF79B0]
                  hover:shadow-md
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#DF79B0]/20
                      text-lg
                      text-[#CA1F7B]
                    "
                  >
                    {item.icon}
                  </div>

                  <div>

                    <h3
                      className="
                        text-2xl
                        font-black
                        text-black
                      "
                    >
                      {item.number}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-black
                      "
                    >
                      {item.label}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>


          {/* =====================================================
              HAPPENING NOW
          ===================================================== */}

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
            className="mt-28"
          >

            {/* Header */}

            <div className="mb-10 text-center">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#DF79B0]/20
                  px-5
                  py-2
                  text-sm
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#CA1F7B]
                "
              >

                <FaStar size={12} />

                Happening Now

              </div>


              <h2
                className="
                  mt-5
                  text-3xl
                  font-black
                  text-black
                  sm:text-4xl
                "
              >
                What's Happening at SSG?
              </h2>


              <p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-black
                "
              >
                Explore current activities, event preparations,
                and student experiences from the Supreme Student Government.
              </p>

            </div>


            {/* =================================================
                CARDS
            ================================================= */}

            <div
              className="
                grid
                gap-5
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >

              {happeningCards.map((card, index) => (

                <motion.button
                  key={card.id}
                  onClick={() => openCard(card)}
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
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#C0C0C0]
                    bg-white
                    text-left
                    shadow-sm
                    transition
                    hover:border-[#CA1F7B]
                    hover:shadow-xl
                  "
                  aria-label={`View details for ${card.title}`}
                >

                  {/* IMAGE */}

                  <div
                    className="
                      relative
                      h-52
                      overflow-hidden
                    "
                  >

                    <img
                      src={card.image}
                      alt={card.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-110
                      "
                    />


                    {/* Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                      "
                    />


                    {/* Category */}

                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-[#CA1F7B]
                        px-3
                        py-1.5
                        text-xs
                        font-bold
                        text-white
                      "
                    >
                      {card.category}
                    </span>


                    {/* Icon */}

                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-white
                        text-[#CA1F7B]
                        shadow-md
                      "
                    >
                      {card.icon}
                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="p-5">

                    <h3
                      className="
                        text-lg
                        font-black
                        text-black
                      "
                    >
                      {card.shortTitle}
                    </h3>


                    <p
                      className="
                        mt-2
                        line-clamp-3
                        text-sm
                        leading-6
                        text-black
                      "
                    >
                      {card.description}
                    </p>


                    <div
                      className="
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-bold
                        text-[#CA1F7B]
                      "
                    >

                      View Details

                      <FaArrowRight
                        size={12}
                        className="
                          transition
                          group-hover:translate-x-1
                        "
                      />

                    </div>

                  </div>

                </motion.button>

              ))}

            </div>


            {/* View Full Events */}

            <div className="mt-8 flex justify-center">

              <motion.button
              onClick={() => goToSection("happening-now")}
                
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#CA1F7B]
                  px-7
                  py-4
                  font-bold
                  text-white
                  shadow-lg
                  transition
                  hover:bg-[#8E1457]
                "
              >

                View All Activities

                <FaArrowRight size={14} />

              </motion.button>

            </div>

          </motion.div>


          {/* =====================================================
              WHAT THE SSG DOES
          ===================================================== */}

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
            className="mt-28"
          >

            <div className="mb-10 text-center">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#CA1F7B]
                "
              >
                Our Commitment
              </p>


              <h2
                className="
                  mt-3
                  text-3xl
                  font-black
                  text-black
                  sm:text-4xl
                "
              >
                Serving the Sebastino Community
              </h2>


              <p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-black
                "
              >
                The SSG remains committed to responsible representation,
                meaningful student participation, and service-oriented
                leadership.
              </p>

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
                    y: -6,
                  }}
                  className="
                    rounded-3xl
                    border
                    border-[#C0C0C0]
                    bg-white
                    p-7
                    shadow-sm
                    transition
                    hover:border-[#DF79B0]
                    hover:shadow-lg
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
                      bg-[#DF79B0]/20
                      text-xl
                      text-[#CA1F7B]
                    "
                  >
                    {item.icon}
                  </div>


                  <h3
                    className="
                      text-xl
                      font-black
                      text-black
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-black
                    "
                  >
                    {item.description}
                  </p>


                  <button
                    onClick={() => goToSection("aboutus")}
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-[#CA1F7B]
                      transition
                      hover:text-[#8E1457]
                    "
                  >

                    Learn More

                    <FaChevronRight size={11} />

                  </button>

                </motion.div>

              ))}

            </div>

          </motion.div>


          {/* =====================================================
              CLOSING MESSAGE
          ===================================================== */}

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
            className="
              mt-24
              rounded-[32px]
              border
              border-[#C0C0C0]
              bg-[#DF79B0]/10
              p-8
              text-center
              sm:p-12
            "
          >

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#CA1F7B]
                text-xl
                text-white
                shadow-sm
              "
            >
              <FaUsers />
            </div>


            <h2
              className="
                mt-5
                text-3xl
                font-black
                text-black
              "
            >
              Your Voice Matters
            </h2>


            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                leading-7
                text-black
              "
            >
              The SSG welcomes every Sebastino to take part in building
              a more connected, responsive, and inclusive school community.
              Stay informed, participate actively, and let your voice
              contribute to meaningful student leadership.
            </p>


            <motion.button
              onClick={() => goToSection("contact")}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#CA1F7B]
                px-7
                py-4
                font-bold
                text-white
                shadow-lg
                transition
                hover:bg-[#8E1457]
              "
            >

              Connect With SSG

              <FaArrowRight size={14} />

            </motion.button>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          EVENT PREVIEW MODAL
      ========================================================= */}

      <AnimatePresence>

        {selectedCard && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeCard}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/70
              p-4
              backdrop-blur-sm
              sm:p-6
            "
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCard.title} preview`}
          >

            {/* =================================================
                MODAL CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 30,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                max-h-[92vh]
                w-full
                max-w-5xl
                overflow-y-auto
                rounded-[30px]
                bg-white
                shadow-2xl
              "
            >

              {/* =================================================
                  CLOSE BUTTON
              ================================================= */}

              <button
                onClick={closeCard}
                className="
                  absolute
                  right-5
                  top-5
                  z-20
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#CA1F7B]
                  shadow-lg
                  transition
                  hover:bg-[#CA1F7B]
                  hover:text-white
                "
                aria-label="Close preview"
              >

                <FaTimes size={18} />

              </button>


              {/* =================================================
                  MODAL HEADER IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  h-64
                  overflow-hidden
                  sm:h-80
                "
              >

                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />


                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                  "
                />


                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    sm:left-8
                    sm:right-8
                  "
                >

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#CA1F7B]
                      px-4
                      py-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-white
                    "
                  >

                    {selectedCard.icon}

                    {selectedCard.category}

                  </span>


                  <h2
                    className="
                      mt-4
                      text-3xl
                      font-black
                      text-white
                      sm:text-4xl
                    "
                  >
                    {selectedCard.title}
                  </h2>

                </div>

              </div>


              {/* =================================================
                  MODAL BODY
              ================================================= */}

              <div className="p-6 sm:p-8 lg:p-10">

                <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">

                  {/* DESCRIPTION */}

                  <div>

                    <p
                      className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-[#CA1F7B]
                      "
                    >
                      About This Activity
                    </p>


                    <p
                      className="
                        mt-4
                        text-base
                        leading-8
                        text-black
                      "
                    >
                      {selectedCard.description}
                    </p>


                    <div
                      className="
                        mt-6
                        rounded-2xl
                        border
                        border-[#C0C0C0]
                        bg-[#DF79B0]/10
                        p-5
                      "
                    >

                      <p
                        className="
                          text-sm
                          font-bold
                          text-[#CA1F7B]
                        "
                      >
                        SSG Preparation
                      </p>


                      <p
                        className="
                          mt-2
                          text-sm
                          leading-7
                          text-black
                        "
                      >
                        {selectedCard.details}
                      </p>

                    </div>


                    <div className="mt-6 flex flex-wrap gap-3">

                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#C0C0C0]
                          bg-white
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          text-black
                        "
                      >

                        <FaCalendarAlt className="text-[#CA1F7B]" />

                        A.Y. 2026–2027

                      </div>


                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[#C0C0C0]
                          bg-white
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          text-black
                        "
                      >

                        <FaMapMarkerAlt className="text-[#CA1F7B]" />

                        SSC-R Cavite

                      </div>

                    </div>

                  </div>


                  {/* GALLERY */}

                  <div>

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <div>

                        <p
                          className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-[2px]
                            text-[#CA1F7B]
                          "
                        >
                          Gallery
                        </p>

                        <h3
                          className="
                            mt-2
                            text-2xl
                            font-black
                            text-black
                          "
                        >
                          Activity Showcase
                        </h3>

                      </div>


                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#DF79B0]/20
                          text-[#CA1F7B]
                        "
                      >

                        <FaImages />

                      </div>

                    </div>


                    {/* Five Image Gallery */}

                    <div
                      className="
                        mt-5
                        grid
                        grid-cols-2
                        gap-3
                        sm:grid-cols-3
                      "
                    >

                      {selectedCard.gallery.map((image, index) => (

                        <motion.div
                          key={index}
                          whileHover={{
                            scale: 1.03,
                          }}
                          className={`
                            overflow-hidden
                            rounded-2xl
                            border
                            border-[#C0C0C0]
                            bg-white
                            ${index === 0 ? "sm:col-span-2" : ""}
                          `}
                        >

                          <img
                            src={image}
                            alt={`${selectedCard.title} showcase ${index + 1}`}
                            className="
                              h-36
                              w-full
                              object-cover
                              transition
                              duration-500
                              hover:scale-105
                              sm:h-40
                            "
                          />

                        </motion.div>

                      ))}

                    </div>

                  </div>

                </div>


                {/* =================================================
                    MODAL FOOTER
                ================================================= */}

                <div
                  className="
                    mt-10
                    flex
                    flex-col
                    gap-4
                    border-t
                    border-[#C0C0C0]
                    pt-6
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >

                  <p
                    className="
                      text-sm
                      text-black
                    "
                  >
                    Stay connected with the SSG for more updates
                    and student activities.
                  </p>


                  <button
                    onClick={closeCard}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-[#CA1F7B]
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition
                      hover:bg-[#8E1457]
                    "
                  >

                    Close Preview

                    <FaTimes />

                  </button>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );
}