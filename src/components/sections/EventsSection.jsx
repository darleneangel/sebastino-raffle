import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGift,
  FaCamera,
  FaMusic,
  FaBookOpen,
  FaArrowRight,
  FaPlay,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserTie,
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";

// =====================================================
// EVENT IMAGES
// =====================================================

import eventPoster from "../../assets/events/salubong-poster.jpg";

import prize1 from "../../assets/events/prize-1.jpg";
import prize2 from "../../assets/events/prize-2.jpg";
import prize3 from "../../assets/events/prize-3.jpg";

import freebies from "../../assets/events/freebies.jpg";
import photobooth from "../../assets/events/photobooth.jpg";
import asop from "../../assets/events/asop.jpg";
import brochure from "../../assets/events/brochure.jpg";

import preparationVideo from "../../assets/events/preparation.mp4";

// =====================================================
// OFFICIAL SSG COLOR PALETTE
// =====================================================
//
// White      #FFFFFF
// Black      #000000
// Dark Pink  #CA1F7B
// Light Pink #DF79B0
// Silver     #C0C0C0
//
// =====================================================


// =====================================================
// PRIZES
// =====================================================

const prizes = [
  {
    image: prize1,
    title: "Prize #1",
    description:
      "One of the exciting prizes prepared by the SSG for Sebastinos.",
  },

  {
    image: prize2,
    title: "Prize #2",
    description:
      "Another special prize prepared as part of the celebration.",
  },

  {
    image: prize3,
    title: "Prize #3",
    description:
      "A special reward prepared by the Supreme Student Government.",
  },
];


// =====================================================
// EVENT FEATURES
// =====================================================

const features = [
  {
    image: freebies,
    icon: <FaGift />,
    title: "Freebies",
    description:
      "Get your hands on exciting freebies prepared especially for our Sebastinos.",
  },

  {
    image: photobooth,
    icon: <FaCamera />,
    title: "Photobooth",
    description:
      "Capture your Salubong sa Bagong Sebastino memories with our fun photobooth.",
  },

  {
    image: asop,
    icon: <FaMusic />,
    title: "ASOP",
    description:
      "Experience another exciting part of our celebration through ASOP.",
  },
];


// =====================================================
// EVENT DATA
// =====================================================
//
// galleryImages currently reuse your available local assets.
// You can replace these with the actual event photos later.
//
// =====================================================

const events = [
  {
    id: "salubong-2026",

    schoolYear: "2026–2027",

    title: "Salubong sa Bagong Sebastino",

    description:
      "Salubong sa Bagong Sebastino is an SSG-led welcome celebration designed to officially open the new academic year. The activity provides students with opportunities to connect with fellow Sebastinos, participate in engaging activities, enjoy prepared freebies, capture memorable moments, and become familiar with the programs and initiatives of the Supreme Student Government.",

      
    registrationText:
      "WANT TO WIN A TOTE BAG OR AN E-FAN? REGISTER HERE",

    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdzsuUTBsJXqFAJFVFq3-kXU2ytpHo4jPLwUJktIKmfCTZw6Q/viewform?usp=publish-editor",

    date: "August 17, 2026",

    location:
      "San Sebastian College – Recoletos de Cavite",

    head: "SSG Executive Board",

    coHead: "SSG Committees and Volunteers",

    featuredImage: eventPoster,

    galleryImages: [
      eventPoster,
      freebies,
      photobooth,
      asop,
      brochure,
    ],
  },


  {
    id: "freebies-2026",

    schoolYear: "2026–2027",

    title: "example",

    description:
      "The Salubong Freebies initiative is part of the SSG's effort to welcome students into the new academic year. The preparation includes organizing giveaways and materials that students can receive during the opening activities.",

    date: "August 17, 2026",

    location:
      "San Sebastian College – Recoletos de Cavite",

    head: "SSG Executive Board",

    coHead: "SSG Volunteers",

    featuredImage: freebies,

    galleryImages: [
      freebies,
      eventPoster,
      prize1,
      prize2,
      prize3,
    ],
  },


  {
    id: "photobooth-2026",

    schoolYear: "2026–2027",

    title: "example",

    description:
      "The Salubong Photobooth provides students with a dedicated space to capture and preserve their memories during the opening celebration. The SSG prepares the booth design, materials, and setup to create an engaging experience for the Sebastino community.",

    date: "August 17, 2026",

    location:
      "San Sebastian College – Recoletos de Cavite",

    head: "SSG Creatives and Events Team",

    coHead: "SSG Volunteers",

    featuredImage: photobooth,

    galleryImages: [
      photobooth,
      eventPoster,
      freebies,
      brochure,
      asop,
    ],
  },


  {
    id: "asop-2026",

    schoolYear: "2026–2027",

    title: "example",

    description:
      "The Academic Student Orientation Program provides students with important information and guidance as they begin the new academic year. The activity supports student awareness, participation, and familiarity with the academic and student-life environment of the institution.",

    date: "August 2026",

    location:
      "San Sebastian College – Recoletos de Cavite",

    head: "SSG Executive Board",

    coHead: "Academic and Student Affairs Committees",

    featuredImage: asop,

    galleryImages: [
      asop,
      eventPoster,
      brochure,
      freebies,
      photobooth,
    ],
  },


  // ===================================================
  // 2025–2026 SAMPLE / PLACEHOLDER EVENT
  // ===================================================
  //
  // Replace the assets and information below once
  // the actual 2025–2026 event records are available.
  //
  // ===================================================

  {
    id: "student-engagement-2025",

    schoolYear: "2025–2026",

    title: "example",

    description:
      "A collection of student-centered activities conducted during the academic year to encourage participation, collaboration, and active involvement within the school community.",

    date: "S.Y. 2025–2026",

    location:
      "San Sebastian College – Recoletos de Cavite",

    head: "SSG Executive Board",

    coHead: "SSG Committees",

    featuredImage: eventPoster,

    galleryImages: [
      eventPoster,
      freebies,
      photobooth,
      asop,
      brochure,
    ],
  },
];


// =====================================================
// ACADEMIC YEARS
// =====================================================

const schoolYears = [
  "2025–2026",
  "2026–2027",
];


// =====================================================
// COMPONENT
// =====================================================

export default function EventsSection({
  preview = false,
  setActiveSection,
}) {

  // ===================================================
  // STATE
  // ===================================================

  const [selectedYear, setSelectedYear] = useState("2026–2027");

  const [selectedEvent, setSelectedEvent] = useState(null);


  // ===================================================
  // NAVIGATION
  // ===================================================
const goToSection = (section) => {
  if (setActiveSection) {
    setActiveSection(section);
  }

  // wait a tick for React to render the new section before scrolling
  requestAnimationFrame(() => {
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  });
};

  const goToHappeningNow = () => {

    if (setActiveSection) {
      setActiveSection("happening-now");
    }

    const section = document.getElementById("happening-now");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };


  // ===================================================
  // OPEN EVENT MODAL
  // ===================================================

  const openEvent = (event) => {
    setSelectedEvent(event);
  };


  // ===================================================
  // CLOSE EVENT MODAL
  // ===================================================

  const closeEvent = () => {
    setSelectedEvent(null);
  };


  // ===================================================
  // FILTER EVENTS
  // ===================================================

  const filteredEvents = events.filter(
    (event) => event.schoolYear === selectedYear
  );


  // ===================================================
  // HOME PAGE PREVIEW
  // ===================================================

  if (preview) {

    return (

      <section
        className="
          relative
          overflow-hidden
          bg-[#CA1F7B]
          py-6
        "
      >

        {/* ==========================================
            BACKGROUND DECORATIONS
        ========================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -left-32
              top-10
              h-72
              w-72
              rounded-full
              bg-[#DF79B0]/30
              blur-3xl
            "
          />

          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-20
              bottom-0
              h-72
              w-72
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

        </div>


        <div className="relative z-10">

          {/* ==========================================
              HEADER
          ========================================== */}

          <div className="text-center">

            <span
              className="
                inline-block
                rounded-full
                border
                border-white
                bg-white
                px-5
                py-2
                text-sm
                font-bold
                tracking-[3px]
                text-[#CA1F7B]
              "
            >
              WHAT'S NEW?
            </span>


            <h2
              className="
                mt-5
                text-4xl
                font-black
                text-white
                sm:text-5xl
              "
            >
              Happening Now
            </h2>


            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-white
                sm:text-base
              "
            >
              Get a glimpse of the latest activities, events,
              and initiatives from the Supreme Student Government.
            </p>

          </div>


          {/* ==========================================
              FEATURED EVENT
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mt-10
              overflow-hidden
              rounded-[32px]
              border
              border-white
              bg-white
              shadow-2xl
            "
          >

            <div className="grid items-center lg:grid-cols-2">

              <div
                className="
                  relative
                  h-64
                  overflow-hidden
                  sm:h-80
                "
              >

                <img
                  src={eventPoster}
                  alt="Salubong sa Bagong Sebastino"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/30
                  "
                />

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    rounded-full
                    bg-[#CA1F7B]
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-white
                    shadow-lg
                  "
                >
                  FEATURED
                </div>

              </div>


              <div className="p-7 sm:p-9">

                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-[#CA1F7B]
                  "
                >
                  Latest SSG Activity
                </p>


                <h3
                  className="
                    mt-3
                    text-3xl
                    font-black
                    leading-tight
                    text-black
                    sm:text-4xl
                  "
                >
                  Salubong sa

                  <span className="block text-[#CA1F7B]">
                    Bagong Sebastino
                  </span>
                </h3>


                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-black
                    sm:text-base
                  "
                >
                  Welcome the new academic year with the SSG
                  through exciting activities, freebies, games,
                  prizes, and unforgettable Sebastino moments.
                </p>


                <div
                  className="
                    mt-5
                    flex
                    flex-col
                    gap-3
                    text-sm
                    text-black
                    sm:flex-row
                    sm:gap-6
                  "
                >

                  <div className="flex items-center gap-2">

                    <FaCalendarAlt className="text-[#CA1F7B]" />

                    August 17, 2026

                  </div>


                  <div className="flex items-center gap-2">

                    <FaMapMarkerAlt className="text-[#CA1F7B]" />

                    SSC-R Cavite

                  </div>

                </div>

              </div>

            </div>

          </motion.div>


          {/* ==========================================
              QUICK HIGHLIGHTS
          ========================================== */}

          <div
            className="
              mt-6
              grid
              gap-4
              sm:grid-cols-3
            "
          >

            {features.map((feature, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  y: -5,
                }}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white
                  bg-white
                  p-4
                  shadow-md
                "
              >

                <div
                  className="
                    h-14
                    w-14
                    shrink-0
                    overflow-hidden
                    rounded-xl
                  "
                >

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                </div>


                <div>

                  <div className="flex items-center gap-2">

                    <span className="text-[#CA1F7B]">
                      {feature.icon}
                    </span>


                    <h4
                      className="
                        text-sm
                        font-black
                        text-black
                      "
                    >
                      {feature.title}
                    </h4>

                  </div>


                  <p
                    className="
                      mt-1
                      line-clamp-2
                      text-xs
                      leading-5
                      text-black
                    "
                  >
                    {feature.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>


          {/* ==========================================
              VIEW MORE
          ========================================== */}

          <div className="mt-8 flex justify-center">

            <motion.button
              onClick={goToHappeningNow}
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
                hover:bg-[#C0C0C0]
              "
            >

              View What's Happening

              <FaArrowRight />

            </motion.button>

          </div>

        </div>

      </section>

    );

  }


  // ============================================================
  // FULL HAPPENING NOW SECTION
  // ============================================================

  return (

    <section
      id="happening-now"
      className="
        relative
        overflow-hidden
        bg-white
        py-28
      "
    >

      {/* ==========================================
          BACKGROUND DECORATIONS
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-[#CA1F7B]/10
            blur-3xl
          "
        />


        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-32
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#DF79B0]/15
            blur-3xl
          "
        />

      </div>


      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          lg:px-12
        "
      >

        {/* ==========================================
            SECTION HEADING
        ========================================== */}

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
          className="text-center"
        >

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#DF79B0]
              bg-[#DF79B0]/10
              px-6
              py-2
              text-sm
              font-bold
              tracking-[3px]
              text-[#CA1F7B]
            "
          >
            EVENTS
          </span>


          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              text-[#000000]
              sm:text-5xl
              md:text-6xl
            "
          >
            What's Happening

            <span
              className="
                block
                text-[#CA1F7B]
              "
            >
              at SSG
            </span>
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-8
              text-[#000000]/65
              sm:text-lg
            "
          >
            Stay updated with the latest activities, programs,
            and celebrations organized by the Supreme Student
            Government for the Sebastino community.
          </p>

        </motion.div>


        {/* ==========================================
            FEATURED EVENT
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-20
            overflow-hidden
            rounded-[32px]
            border
            border-[#C0C0C0]
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.10)]
          "
        >

          <div className="grid items-center lg:grid-cols-2">

            <div
              className="
                relative
                h-[380px]
                overflow-hidden
                sm:h-[450px]
                lg:h-[520px]
              "
            >

              <img
                src={eventPoster}
                alt="Salubong sa Bagong Sebastino"
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />


              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-black/10
                  to-transparent
                "
              />


              <div
                className="
                  absolute
                  left-6
                  top-6
                  rounded-full
                  bg-[#CA1F7B]
                  px-5
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[1.5px]
                  text-white
                  shadow-lg
                "
              >
                Featured Event
              </div>

            </div>


            <div
              className="
                relative
                bg-white
                p-8
                sm:p-10
                lg:p-14
              "
            >

              <div
                className="
                  absolute
                  left-0
                  top-10
                  hidden
                  h-20
                  w-1
                  rounded-r-full
                  bg-[#CA1F7B]
                  lg:block
                "
              />


              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#CA1F7B]
                "
              >
                Latest SSG Activity
              </p>


              <h3
                className="
                  mt-4
                  text-3xl
                  font-black
                  leading-tight
                  text-[#000000]
                  sm:text-4xl
                "
              >
                Salubong sa

                <span
                  className="
                    block
                    text-[#CA1F7B]
                  "
                >
                  Bagong Sebastino
                </span>
              </h3>


              <p
                className="
                  mt-5
                  text-base
                  leading-7
                  text-[#000000]/65
                  sm:text-lg
                "
              >
                Welcome the new academic year with the Supreme
                Student Government through exciting activities,
                freebies, games, prizes, and memorable Sebastino
                moments.
              </p>


              <div className="mt-7 space-y-4">

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    text-sm
                    font-semibold
                    text-[#000000]
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#DF79B0]/15
                      text-[#CA1F7B]
                    "
                  >
                    <FaCalendarAlt />
                  </div>

                  August 17, 2026

                </div>


                <div
                  className="
                    flex
                    items-center
                    gap-4
                    text-sm
                    font-semibold
                    text-[#000000]
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#DF79B0]/15
                      text-[#CA1F7B]
                    "
                  >
                    <FaMapMarkerAlt />
                  </div>

                  San Sebastian College – Recoletos de Cavite

                </div>

              </div>


              <motion.button
                onClick={() => openEvent(events[0])}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  mt-9
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
                  hover:bg-[#DF79B0]
                "
              >
                Explore the Event

                <FaArrowRight size={14} />

              </motion.button>

            </div>

          </div>

        </motion.div>


        {/* =====================================================
            SCHOOL YEAR FILTER
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
          className="mt-24"
        >

          <div className="text-center">

            <span
              className="
                inline-flex
                rounded-full
                border
                border-[#DF79B0]
                bg-[#DF79B0]/10
                px-6
                py-2
                text-sm
                font-bold
                tracking-[3px]
                text-[#CA1F7B]
              "
            >
              EVENT ARCHIVE
            </span>


            <h3
              className="
                mt-5
                text-3xl
                font-black
                text-[#000000]
                sm:text-4xl
              "
            >
              Explore SSG Events
            </h3>


            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-[#000000]/60
              "
            >
              Browse activities and programs organized by the
              Supreme Student Government by academic year.
            </p>

          </div>


          {/* ==========================================
              YEAR TABS
          ========================================== */}

          <div
            className="
              mx-auto
              mt-8
              flex
              max-w-xl
              flex-col
              gap-3
              rounded-2xl
              border
              border-[#C0C0C0]
              bg-white
              p-2
              shadow-sm
              sm:flex-row
            "
            role="tablist"
            aria-label="Academic Year"
          >

            {schoolYears.map((year) => {

              const active = selectedYear === year;

              return (

                <button
                  key={year}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedYear(year)}
                  className={`
                    flex-1
                    rounded-xl
                    px-5
                    py-3
                    text-sm
                    font-bold
                    transition
                    ${
                      active
                        ? "bg-[#CA1F7B] text-white shadow-md"
                        : "bg-white text-black hover:bg-[#DF79B0]/15"
                    }
                  `}
                >
                  S.Y. {year}
                </button>

              );

            })}

          </div>

        </motion.div>


        {/* =====================================================
            EVENT GRID
        ===================================================== */}

        <AnimatePresence mode="wait">

          <motion.div
            key={selectedYear}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              mt-10
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {filteredEvents.map((event) => (

              <motion.button
                key={event.id}
                type="button"
                onClick={() => openEvent(event)}
                whileHover={{
                  y: -7,
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
                  hover:border-[#DF79B0]
                  hover:shadow-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#CA1F7B]
                  focus:ring-offset-2
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-60
                    overflow-hidden
                  "
                >

                  <img
                    src={event.featuredImage}
                    alt={event.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />


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


                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      bg-white
                      px-3
                      py-1.5
                      text-xs
                      font-bold
                      text-[#CA1F7B]
                      shadow-md
                    "
                  >
                    {event.schoolYear}
                  </span>


                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      right-5
                    "
                  >

                    <h4
                      className="
                        text-xl
                        font-black
                        leading-tight
                        text-white
                      "
                    >
                      {event.title}
                    </h4>

                  </div>

                </div>


                {/* CARD INFORMATION */}

                <div className="p-6">

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-[#CA1F7B]
                    "
                  >
                    <FaCalendarAlt />

                    {event.date}

                  </div>


                  <p
                    className="
                      mt-3
                      line-clamp-3
                      text-sm
                      leading-6
                      text-black/60
                    "
                  >
                    {event.description}
                  </p>


                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      border-t
                      border-[#C0C0C0]
                      pt-4
                    "
                  >

                    <span
                      className="
                        text-sm
                        font-bold
                        text-[#CA1F7B]
                      "
                    >
                      View Event
                    </span>


                    <FaChevronRight
                      className="
                        text-[#CA1F7B]
                        transition
                        group-hover:translate-x-1
                      "
                    />

                  </div>

                </div>

              </motion.button>

            ))}

          </motion.div>

        </AnimatePresence>


        {/* =====================================================
            PRIZES
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
            mt-28
            text-center
          "
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#DF79B0]
              bg-[#DF79B0]/10
              px-6
              py-2
              text-sm
              font-bold
              tracking-[3px]
              text-[#CA1F7B]
            "
          >
            EXCITING PRIZES
          </span>


          <h3
            className="
              mt-5
              text-3xl
              font-black
              text-[#000000]
              sm:text-4xl
            "
          >
            Win Something Special
          </h3>


          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-[#000000]/60
            "
          >
            Check out some of the prizes prepared for
            our Sebastinos.
          </p>

        </motion.div>


        {/* PRIZE CARDS */}

        <div
          className="
            mt-10
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {prizes.map((prize, index) => (

            <motion.div
              key={index}
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
                delay: index * 0.12,
              }}
              whileHover={{
                y: -7,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-[#C0C0C0]
                bg-white
                shadow-sm
                transition
                hover:shadow-xl
              "
            >

              <div className="h-72 overflow-hidden">

                <img
                  src={prize.image}
                  alt={prize.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

              </div>


              <div className="p-6">

                <div
                  className="
                    mb-4
                    h-1
                    w-10
                    rounded-full
                    bg-[#CA1F7B]
                  "
                />


                <h4
                  className="
                    text-xl
                    font-black
                    text-[#000000]
                  "
                >
                  {prize.title}
                </h4>


                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-[#000000]/60
                  "
                >
                  {prize.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>


        {/* =====================================================
            EVENT FEATURES
        ===================================================== */}

        <div
          className="
            mt-28
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {features.map((feature, index) => (

            <motion.div
              key={index}
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
                y: -7,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-[#C0C0C0]
                bg-white
                shadow-sm
                transition
                hover:shadow-xl
              "
            >

              <div
                className="
                  relative
                  h-64
                  overflow-hidden
                "
              >

                <img
                  src={feature.image}
                  alt={feature.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />


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


                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#CA1F7B]
                      text-white
                      shadow-lg
                    "
                  >
                    {feature.icon}
                  </div>


                  <h4
                    className="
                      text-xl
                      font-black
                      text-white
                    "
                  >
                    {feature.title}
                  </h4>

                </div>

              </div>


              <div className="p-6">

                <p
                  className="
                    text-sm
                    leading-7
                    text-[#000000]/60
                  "
                >
                  {feature.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>


        {/* =====================================================
            BROCHURE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-28"
        >

          <div
            className="
              grid
              items-center
              gap-10
              overflow-hidden
              rounded-[32px]
              border
              border-[#C0C0C0]
              bg-[#DF79B0]/10
              p-6
              md:p-10
              lg:grid-cols-2
            "
          >

            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-[#C0C0C0]
                bg-white
                shadow-lg
              "
            >

              <img
                src={brochure}
                alt="Salubong sa Bagong Sebastino Brochure"
                className="
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />

            </div>


            <div className="p-2 md:p-4">

              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-[#DF79B0]
                  bg-white
                  px-5
                  py-2
                  text-sm
                  font-bold
                  tracking-wider
                  text-[#CA1F7B]
                "
              >
                EVENT BROCHURE
              </span>


              <h3
                className="
                  mt-5
                  text-3xl
                  font-black
                  text-[#000000]
                  sm:text-4xl
                "
              >
                Everything You Need to Know
              </h3>


              <p
                className="
                  mt-4
                  text-base
                  leading-8
                  text-[#000000]/60
                  sm:text-lg
                "
              >
                Check the official event brochure for the
                complete schedule, activities, games, and
                other important information.
              </p>


              <button
                type="button"
                className="
                  mt-7
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
                  hover:bg-[#DF79B0]
                "
              >

                <FaBookOpen />

                View Brochure

              </button>

            </div>

          </div>

        </motion.div>


        {/* =====================================================
            PREPARATION VIDEO
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-28"
        >

          <div className="text-center">

            <span
              className="
                inline-flex
                rounded-full
                border
                border-[#DF79B0]
                bg-[#DF79B0]/10
                px-6
                py-2
                text-sm
                font-bold
                tracking-[3px]
                text-[#CA1F7B]
              "
            >
              BEHIND THE SCENES
            </span>


            <h3
              className="
                mt-5
                text-3xl
                font-black
                text-[#000000]
                sm:text-4xl
              "
            >
              Preparing for the Celebration
            </h3>


            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-[#000000]/60
              "
            >
              Take a look behind the scenes as the SSG
              prepares everything for our fellow Sebastinos.
            </p>

          </div>


          <div
            className="
              relative
              mx-auto
              mt-10
              max-w-5xl
              overflow-hidden
              rounded-[32px]
              border
              border-[#C0C0C0]
              bg-[#000000]
              shadow-xl
            "
          >

            <video
              controls
              playsInline
              className="h-auto w-full"
            >

              <source
                src={preparationVideo}
                type="video/mp4"
              />

              Your browser does not support the video tag.

            </video>


            <div
              className="
                pointer-events-none
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >

              <div
                className="
                  rounded-full
                  bg-[#CA1F7B]/90
                  p-6
                  text-white
                  shadow-xl
                "
              >
                <FaPlay size={25} />
              </div>

            </div>

          </div>

        </motion.div>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-28
            overflow-hidden
            rounded-[32px]
            bg-[#CA1F7B]
            p-10
            text-center
            shadow-xl
            md:p-14
          "
        >

          <h3
            className="
              text-3xl
              font-black
              text-white
              sm:text-4xl
            "
          >
            Ready to Welcome a New Sebastino Journey?
          </h3>


          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-white/85
              sm:text-lg
            "
          >
            Follow the SSG and stay connected with everything
            happening around campus.
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


      {/* =====================================================
          EVENT MODAL
      ===================================================== */}

      <AnimatePresence>

        {selectedEvent && (

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
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/70
              p-4
              backdrop-blur-sm
              sm:p-6
            "
            onClick={closeEvent}
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-h-[92vh]
                w-full
                max-w-5xl
                overflow-y-auto
                rounded-[28px]
                bg-white
                shadow-2xl
              "
            >

              {/* ==========================================
                  CLOSE BUTTON
              ========================================== */}

              <button
                type="button"
                onClick={closeEvent}
                aria-label="Close event preview"
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
                  text-[#000000]
                  shadow-lg
                  transition
                  hover:bg-[#CA1F7B]
                  hover:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#CA1F7B]
                "
              >

                <FaTimes />

              </button>


              {/* ==========================================
                  MODAL HERO IMAGE
              ========================================== */}

              <div
                className="
                  relative
                  h-64
                  overflow-hidden
                  sm:h-80
                  lg:h-[400px]
                "
              >

                <img
                  src={selectedEvent.featuredImage}
                  alt={selectedEvent.title}
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
                    bottom-7
                    left-6
                    right-16
                    sm:left-10
                  "
                >

                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-[#CA1F7B]
                      px-4
                      py-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-[1.5px]
                      text-white
                    "
                  >
                    S.Y. {selectedEvent.schoolYear}
                  </span>


                  <h2
                    id="event-modal-title"
                    className="
                      mt-4
                      text-3xl
                      font-black
                      leading-tight
                      text-white
                      sm:text-4xl
                      lg:text-5xl
                    "
                  >
                    {selectedEvent.title}
                  </h2>

                </div>

              </div>


              {/* ==========================================
                  MODAL CONTENT
              ========================================== */}

              <div className="p-6 sm:p-10">

                <div
                  className="
                    grid
                    gap-8
                    lg:grid-cols-[1.2fr_.8fr]
                  "
                >

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
                      Event Overview
                    </p>


                    <p
                      className="
                        mt-4
                        text-base
                        leading-8
                        text-[#000000]/70
                      "
                    >
                      {selectedEvent.description}
                    </p>
{/* Raffle Registration */}
{selectedEvent.registrationText && (
  <p className="mt-5 text-sm font-semibold leading-6 text-[#000000]">
    {selectedEvent.registrationText.split("REGISTER HERE")[0]}

    <a
      href={selectedEvent.registrationLink}
      target="_blank"
      rel="noopener noreferrer"
      className="font-black text-[#CA1F7B] underline decoration-2 underline-offset-4 transition hover:text-[#DF79B0]"
    >
      REGISTER HERE
    </a>
  </p>
)}

<div>
  <strong>Date:</strong> {selectedEvent.date}
</div>
                  </div>


                  {/* EVENT DETAILS */}

                  <div
                    className="
                      rounded-2xl
                      border
                      border-[#C0C0C0]
                      bg-[#DF79B0]/10
                      p-6
                    "
                  >

                    <h3
                      className="
                        text-lg
                        font-black
                        text-[#000000]
                      "
                    >
                      Event Details
                    </h3>


                    <div className="mt-5 space-y-5">

                      <div className="flex items-start gap-4">

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#CA1F7B]
                            text-white
                          "
                        >
                          <FaCalendarAlt />
                        </div>


                        <div>

                          <p
                            className="
                              text-xs
                              font-bold
                              uppercase
                              tracking-wider
                              text-black/50
                            "
                          >
                            Date
                          </p>

                          <p
                            className="
                              mt-1
                              text-sm
                              font-bold
                              text-black
                            "
                          >
                            {selectedEvent.date}
                          </p>

                        </div>

                      </div>


                      <div className="flex items-start gap-4">

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#CA1F7B]
                            text-white
                          "
                        >
                          <FaMapMarkerAlt />
                        </div>


                        <div>

                          <p
                            className="
                              text-xs
                              font-bold
                              uppercase
                              tracking-wider
                              text-black/50
                            "
                          >
                            Location
                          </p>

                          <p
                            className="
                              mt-1
                              text-sm
                              font-bold
                              text-black
                            "
                          >
                            {selectedEvent.location}
                          </p>

                        </div>

                      </div>


                      <div className="flex items-start gap-4">

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#CA1F7B]
                            text-white
                          "
                        >
                          <FaUserTie />
                        </div>


                        <div>

                          <p
                            className="
                              text-xs
                              font-bold
                              uppercase
                              tracking-wider
                              text-black/50
                            "
                          >
                            Project Head
                          </p>

                          <p
                            className="
                              mt-1
                              text-sm
                              font-bold
                              text-black
                            "
                          >
                            {selectedEvent.head}
                          </p>

                        </div>

                      </div>


                      <div className="flex items-start gap-4">

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#DF79B0]
                            text-white
                          "
                        >
                          <FaUsersIcon />

                        </div>


                        <div>

                          <p
                            className="
                              text-xs
                              font-bold
                              uppercase
                              tracking-wider
                              text-black/50
                            "
                          >
                            Co-Head
                          </p>

                          <p
                            className="
                              mt-1
                              text-sm
                              font-bold
                              text-black
                            "
                          >
                            {selectedEvent.coHead}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>


                {/* ==========================================
                    PHOTO GALLERY
                ========================================== */}

                <div className="mt-12">

                  <div
                    className="
                      flex
                      flex-col
                      justify-between
                      gap-3
                      sm:flex-row
                      sm:items-end
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
                        Event Gallery
                      </p>


                      <h3
                        className="
                          mt-2
                          text-2xl
                          font-black
                          text-[#000000]
                        "
                      >
                        Moments & Highlights
                      </h3>

                    </div>


                    <span
                      className="
                        text-sm
                        font-semibold
                        text-black/50
                      "
                    >
                      {selectedEvent.galleryImages.length} photos
                    </span>

                  </div>


                  <div
                    className="
                      mt-6
                      grid
                      grid-cols-2
                      gap-3
                      sm:grid-cols-3
                      lg:grid-cols-5
                    "
                  >

                    {selectedEvent.galleryImages.map(
                      (image, index) => (

                        <motion.div
                          key={index}
                          whileHover={{
                            scale: 1.03,
                          }}
                          className="
                            aspect-square
                            overflow-hidden
                            rounded-2xl
                            border
                            border-[#C0C0C0]
                            bg-white
                          "
                        >

                          <img
                            src={image}
                            alt={`${selectedEvent.title} gallery ${index + 1}`}
                            className="
                              h-full
                              w-full
                              object-cover
                            "
                          />

                        </motion.div>

                      )
                    )}

                  </div>

                </div>


                {/* ==========================================
                    MODAL FOOTER
                ========================================== */}

                <div
                  className="
                    mt-10
                    flex
                    justify-end
                    border-t
                    border-[#C0C0C0]
                    pt-6
                  "
                >

                  <button
                    type="button"
                    onClick={closeEvent}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#CA1F7B]
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition
                      hover:bg-[#DF79B0]
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

    </section>

  );
}


// =====================================================
// SMALL ICON COMPONENT
// =====================================================
//
// Kept separate so the main import section stays clean.
// =====================================================

function FaUsersIcon() {

  return (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >

      <path
        fillRule="evenodd"
        d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM3.75 20.25a6.75 6.75 0 0113.5 0v.75H3.75v-.75zM17.25 10.5a3 3 0 113.75 2.91 7.74 7.74 0 00-2.34-.81 4.48 4.48 0 00-1.41-2.1zM19.5 20.25v.75h.75v-.75a6.72 6.72 0 00-2.05-4.84c1.03.09 1.96.4 2.8.9a5.25 5.25 0 012.25 3.94h-3.75z"
        clipRule="evenodd"
      />

    </svg>

  );

}