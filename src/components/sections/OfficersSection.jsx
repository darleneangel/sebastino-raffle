import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaUserTie,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Officer Images
import president from "../../assets/officers/president.jpg";
import vpInternal from "../../assets/officers/vp-internal.jpg";
import vpExternal from "../../assets/officers/vp-external.jpg";
import secretary from "../../assets/officers/secretary.jpg";
import treasurer from "../../assets/officers/treasurer.jpg";
import auditor from "../../assets/officers/auditor.jpg";
import pro from "../../assets/officers/pro.jpg";

// Executive Board Image
import executiveBoard from "../../assets/officers/executive-board.jpg";

const officers = [
  {
    name: "Cristian Lasara",
    position: "President",
    quote: "Leading with integrity and serving every Sebastino.",
    image: president,
    description:
      "As President of the Supreme Student Government, Cristian leads the executive board in planning, coordinating, and implementing student-centered programs and initiatives.",
    responsibilities: [
      "Leads the Executive Board",
      "Represents the student body",
      "Oversees SSG programs and initiatives",
      "Promotes student welfare and engagement",
    ],
    facebook: "#",
    email: "mailto:ssg@sscr.edu",
  },

  {
    name: "Ashlene Memije",
    position: "Vice President for Internal Affairs",
    quote: "Empowering every student through collaboration.",
    image: vpInternal,
    description:
      "The Vice President for Internal Affairs focuses on strengthening coordination within the organization and ensuring that internal SSG activities are properly organized.",
    responsibilities: [
      "Coordinates internal SSG activities",
      "Supports executive board operations",
      "Assists in student-centered programs",
      "Strengthens collaboration among officers",
    ],
    facebook: "#",
    email: "mailto:ssg@sscr.edu",
  },

  {
    name: "Darlene Angel Custodio",
    position: "Vice President for External Affairs",
    quote: "Building stronger partnerships beyond the campus.",
    image: vpExternal,
    description:
      "The Vice President for External Affairs builds relationships between the SSG and external organizations, partners, and stakeholders to create meaningful opportunities for students.",
    responsibilities: [
      "Develops external partnerships",
      "Coordinates with organizations and stakeholders",
      "Represents the SSG in external activities",
      "Creates opportunities for student collaboration",
    ],
    facebook: "#",
    email: "mailto:ssg@sscr.edu",
  },

  {
    name: "Lennie Ann Cabanela",
    position: "Secretary",
    quote: "Keeping every initiative organized and transparent.",
    image: secretary,
    description:
      "The Secretary maintains important organizational records and documentation while helping ensure that SSG activities and decisions remain properly documented.",
    responsibilities: [
      "Maintains official records",
      "Prepares meeting documentation",
      "Organizes SSG files and communications",
      "Supports administrative operations",
    ],
    facebook: "#",
    email: "mailto:ssg@sscr.edu",
  },

  {
    name: "Kim Cloie Canuto",
    position: "Treasurer",
    quote: "Managing resources responsibly for every project.",
    image: treasurer,
    description:
      "The Treasurer oversees the organization's financial documentation and helps ensure that resources are managed responsibly for student programs and activities.",
    responsibilities: [
      "Maintains financial records",
      "Assists in budget planning",
      "Monitors SSG funds and expenses",
      "Promotes financial accountability",
    ],
    facebook: "#",
    email: "mailto:ssg@sscr.edu",
  },

  {
    name: "Carl Angelo Aquino",
    position: "Auditor",
    quote: "Ensuring accountability and excellence.",
    image: auditor,
    description:
      "The Auditor helps promote transparency and accountability by reviewing financial records and ensuring that organizational transactions are properly documented.",
    responsibilities: [
      "Reviews financial records",
      "Checks organizational transactions",
      "Promotes transparency",
      "Supports financial accountability",
    ],
    facebook: "#",
    email: "mailto:ssg@sscr.edu",
  },

  {
    name: "Charisse Batayola",
    position: "Public Relations Officer",
    quote: "Connecting the SSG with every Sebastino.",
    image: pro,
    description:
      "The Public Relations Officer communicates SSG activities, announcements, and initiatives to students while helping strengthen the organization's connection with the student community.",
    responsibilities: [
      "Handles SSG public communications",
      "Promotes events and activities",
      "Shares announcements with students",
      "Strengthens SSG-student communication",
    ],
    facebook: "#",
    email: "mailto:ssg@sscr.edu",
  },
];

export default function OfficersSection() {
  const [selectedOfficer, setSelectedOfficer] = useState(null);

  const openOfficer = (index) => {
    setSelectedOfficer(index);
  };

  const closeOfficer = () => {
    setSelectedOfficer(null);
  };

  const nextOfficer = () => {
    setSelectedOfficer((current) =>
      current === officers.length - 1 ? 0 : current + 1
    );
  };

  const previousOfficer = () => {
    setSelectedOfficer((current) =>
      current === 0 ? officers.length - 1 : current - 1
    );
  };

  const officer =
    selectedOfficer !== null ? officers[selectedOfficer] : null;

  return (
    <section
      id="officers"
      className="relative overflow-hidden bg-gradient-to-b from-white via-pink-50 to-white py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
          }}
          className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-pink-300/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
          }}
          className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-pink-200/20 blur-3xl"
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <span className="rounded-full bg-pink-100 px-6 py-2 text-sm font-bold tracking-[4px] text-[var(--primary)]">
            EXECUTIVE BOARD
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900 md:text-6xl">
            Meet Our

            <span className="block bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
              Student Leaders
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Dedicated leaders committed to empowering students,
            promoting excellence, and creating meaningful opportunities
            for every Sebastino.
          </p>

        </motion.div>

        {/* ================= SLIDER ================= */}

        <div className="relative mt-20">

          {/* Previous */}

          <button
            className="swiper-prev absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-4 shadow-xl transition hover:scale-110 lg:flex"
          >
            <FaChevronLeft className="text-pink-600" />
          </button>

          {/* Next */}

          <button
            className="swiper-next absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-4 shadow-xl transition hover:scale-110 lg:flex"
          >
            <FaChevronRight className="text-pink-600" />
          </button>

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
            ]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >

            {officers.map((officer, index) => (

              <SwiperSlide key={index}>

                {/* CLICKABLE CARD */}

                <motion.button
                  type="button"
                  onClick={() => openOfficer(index)}
                  whileHover={{
                    y: -10,
                  }}
                  whileTap={{
                    scale: 0.50,
                  }}
                  className="
                    group
                    w-full
                    overflow-hidden
                    rounded-[35px]
                    border
                    border-pink-100
                    bg-white
                    text-left
                    shadow-xl
                    transition
                    hover:shadow-2xl
                    focus:outline-none
                    focus:ring-4
                    focus:ring-pink-200
                  "
                >

                  {/* Image */}

                  <div className="relative h-80 overflow-hidden">

                    <img
                      src={officer.image}
                      alt={officer.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        scale
                        transition
                        duration-700
                        group-hover:scale-95
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Position */}

                    <div className="absolute bottom-5 left-5 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-bold text-white">
                      {officer.position}
                    </div>

                    {/* Click Hint */}

                    <div className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-2 text-xs font-bold text-pink-600 opacity-0 shadow-lg transition group-hover:opacity-100">
                      View Profile
                    </div>

                  </div>

                  {/* Content */}

                  <div className="p-7">

                    <h3 className="text-2xl font-black text-gray-900">
                      {officer.name}
                    </h3>

                    <p className="mt-4 leading-7 italic text-gray-500">
                      "{officer.quote}"
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-pink-600">
                      <FaUserTie />
                      Click to learn more
                    </div>

                  </div>

                </motion.button>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

        {/* ================= EXECUTIVE BOARD PHOTO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >

          <div className="text-center">

            <span className="rounded-full bg-pink-100 px-6 py-2 text-sm font-bold tracking-[4px] text-[var(--primary)]">
              ONE TEAM
            </span>

            <h2 className="mt-6 text-5xl font-black text-gray-900">
              The Executive Board
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Behind every successful student initiative is a team dedicated
              to leadership, collaboration, and service.
            </p>

          </div>

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.4,
            }}
            className="group relative mx-auto mt-14 max-w-6xl"
          >

            <div className="absolute inset-0 rounded-[40px] bg-pink-400/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-pink-200 bg-white p-4 shadow-2xl">

              <img
                src={executiveBoard}
                alt="Executive Board"
                className="
                  h-[420px]
                  w-full
                  rounded-[28px]
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-4 rounded-[28px] bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-10 left-10">

                <span className="rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold tracking-wider text-white shadow-lg">
                  SUPREME STUDENT GOVERNMENT
                </span>

                <h3 className="mt-5 text-4xl font-black text-white">
                  Executive Board 2026
                </h3>

                <p className="mt-3 max-w-xl text-white/90">
                  United by leadership. Driven by service. Inspired by every
                  Sebastino.
                </p>

              </div>

            </div>

          </motion.div>

          {/* Quote */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-16 max-w-4xl text-center"
          >

            <h3 className="text-3xl font-black text-[var(--primary)]">
              "Leadership is not about a position—it's about making a positive
              impact."
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Supreme Student Government remains committed to representing
              the student body with integrity, transparency, innovation, and
              excellence.
            </p>

          </motion.div>

        </motion.div>

      </div>

      {/* ================================================= */}
      {/* OFFICER PROFILE MODAL */}
      {/* ================================================= */}

      <AnimatePresence>

        {officer && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/60
              p-4
              backdrop-blur-md
            "
            onClick={closeOfficer}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 22,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-5xl
                overflow-y-auto
                rounded-[35px]
                bg-white
                shadow-2xl
              "
            >

              {/* Close */}

              <button
                onClick={closeOfficer}
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
                  bg-white/90
                  text-gray-700
                  shadow-lg
                  transition
                  hover:scale-110
                  hover:bg-pink-100
                  hover:text-pink-600
                "
              >
                <FaTimes />
              </button>

              <div className="grid md:grid-cols-2">

                {/* ================= IMAGE ================= */}

                <div className="relative min-h-[450px] overflow-hidden bg-pink-100">

                  <motion.img
                    key={officer.image}
                    initial={{
                      opacity: 0,
                      scale: 1.05,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    src={officer.image}
                    alt={officer.name}
                    className="
                      h-full
                      min-h-[450px]
                      w-full
                      object-cover
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent" />

                  <div className="absolute bottom-8 left-8">

                    <span className="rounded-full bg-pink-500 px-5 py-2 text-sm font-bold text-white shadow-lg">
                      {officer.position}
                    </span>

                  </div>

                </div>

                {/* ================= INFORMATION ================= */}

                <div className="flex flex-col justify-center p-8 md:p-12">

                  <p className="text-sm font-bold uppercase tracking-[3px] text-pink-500">
                    SSG Executive Board
                  </p>

                  <h2 className="mt-3 text-4xl font-black text-gray-900 md:text-5xl">
                    {officer.name}
                  </h2>

                  <h3 className="mt-3 text-xl font-bold text-pink-600">
                    {officer.position}
                  </h3>

                  <div className="my-7 h-px bg-pink-100" />

                  <p className="text-lg leading-8 text-gray-600">
                    {officer.description}
                  </p>

                  {/* Quote */}

                  <div className="mt-7 rounded-2xl bg-pink-50 p-5">

                    <p className="italic leading-7 text-pink-700">
                      "{officer.quote}"
                    </p>

                  </div>

                  {/* Responsibilities */}

                  <div className="mt-7">

                    <h4 className="font-black text-gray-900">
                      Key Responsibilities
                    </h4>

                    <ul className="mt-4 space-y-3">

                      {officer.responsibilities.map(
                        (responsibility, index) => (

                          <motion.li
                            key={index}
                            initial={{
                              opacity: 0,
                              x: -10,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay: index * 0.08,
                            }}
                            className="flex items-start gap-3 text-gray-600"
                          >

                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pink-500" />

                            {responsibility}

                          </motion.li>

                        )
                      )}

                    </ul>

                  </div>

                  {/* Social */}

                  <div className="mt-8 flex gap-3">

                    <a
                      href={officer.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-pink-500
                        text-white
                        transition
                        hover:scale-110
                      "
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href={officer.email}
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-pink-500
                        text-white
                        transition
                        hover:scale-110
                      "
                    >
                      <FaEnvelope />
                    </a>

                  </div>

                </div>

              </div>

              {/* ================= MODAL NAVIGATION ================= */}

              <div className="flex items-center justify-between border-t border-pink-100 bg-pink-50 px-6 py-4">

                <button
                  onClick={previousOfficer}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-5
                    py-3
                    font-bold
                    text-pink-600
                    shadow
                    transition
                    hover:scale-105
                  "
                >
                  <FaChevronLeft />
                  Previous
                </button>

                <span className="text-sm font-semibold text-gray-500">
                  {selectedOfficer + 1} / {officers.length}
                </span>

                <button
                  onClick={nextOfficer}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-5
                    py-3
                    font-bold
                    text-pink-600
                    shadow
                    transition
                    hover:scale-105
                  "
                >
                  Next
                  <FaChevronRight />
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}