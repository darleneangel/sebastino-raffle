import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
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
    quote: "Leading with integrity and serving every Sebastinians.",
    image: president,
  },
  {
    name: "Ashlene Memije",
    position: "Vice President for Internal Affairs",
    quote: "Empowering every student through collaboration.",
    image: vpInternal,
  },
  {
    name: "Darlene Angel Custodio",
    position: "Vice President for External Affairs",
    quote: "Building stronger partnerships beyond the campus.",
    image: vpExternal,
  },
  {
    name: "Lennie Ann Cabanela",
    position: "Secretary",
    quote: "Keeping every initiative organized and transparent.",
    image: secretary,
  },
  {
    name: "Kim Cloie Canuto",
    position: "Treasurer",
    quote: "Managing resources responsibly for every project.",
    image: treasurer,
  },
  {
    name: "Carl Angelo Aquino",
    position: "Auditor",
    quote: "Ensuring accountability and excellence.",
    image: auditor,
  },
  {
    name: "Charisse Batayola",
    position: "Public Relations Officer",
    quote: "Connecting the SSG with every Sebastinians.",
    image: pro,
  },
];

export default function OfficersSection() {
  return (
    <section
      id="officers"
      className="relative overflow-hidden bg-gradient-to-b from-white via-pink-50 to-white py-28"
    >

      {/* Floating Background */}

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
          className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-pink-200/20 blur-3xl"
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="rounded-full bg-pink-100 px-6 py-2 text-sm font-bold tracking-[4px] text-[var(--primary)] dark:bg-pink-500/20">
            EXECUTIVE BOARD
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900 md:text-6xl">

            Meet Our

            <span className="block bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">

              Student Leaders

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 text-gray-600">

            Dedicated leaders committed to empowering students,
            promoting excellence, and creating meaningful opportunities
            for every Sebastinians.

          </p>

        </motion.div>

        {/* Slider */}

        <div className="relative mt-20">

          {/* Custom Navigation */}

          <button className="swiper-prev absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-4 shadow-xl transition hover:scale-110 dark:bg-[#1e1e1e] lg:flex">

            <FaChevronLeft className="text-pink-600" />

          </button>

          <button className="swiper-next absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-4 shadow-xl transition hover:scale-110 dark:bg-[#1e1e1e] lg:flex">

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

                <motion.div
                  whileHover={{
                    y: -10,
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

                  {/* Officer Image */}

                  <div className="relative h-80 overflow-hidden">

                    <img
                      src={officer.image}
                      alt={officer.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="absolute bottom-5 left-5 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-bold text-white">

                      {officer.position}

                    </div>

                  </div>

                  {/* Card Content */}

                  <div className="p-7">

                    <h3 className="text-2xl font-black text-gray-900">

                      {officer.name}

                    </h3>

                    <p className="mt-4 leading-7 italic text-gray-500 dark:text-gray-400">

                      "{officer.quote}"

                    </p>

                    <div className="mt-8 flex gap-4">

                      <button className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500 text-white transition hover:scale-110">

                        <FaFacebookF />

                      </button>

                      <button className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500 text-white transition hover:scale-110">

                        <FaEnvelope />

                      </button>

                    </div>

                  </div>

                </motion.div>

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

            <span className="rounded-full bg-pink-100 px-6 py-2 text-sm font-bold tracking-[4px] text-[var(--primary)] dark:bg-pink-500/20">
              ONE TEAM
            </span>

            <h2 className="mt-6 text-5xl font-black text-gray-900">
              The Executive Board
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 text-gray-600">
              Behind every successful student initiative is a team dedicated to
              leadership, collaboration, and service. Together, we continue to
              create programs that empower every Sebastinians.
            </p>

          </div>

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: .4,
            }}
            className="group relative mx-auto mt-14 max-w-6xl"
          >

            {/* Glow */}

            <div className="absolute inset-0 rounded-[40px] bg-pink-400/30 blur-3xl" />

            {/* Card */}

            <div className="relative overflow-hidden rounded-[40px] border border-pink-200 bg-white p-4 shadow-2xl dark:border-pink-500/20 dark:bg-[#1a1a1a]">

              <img
                src={executiveBoard}
                alt="Executive Board"
                className="h-[420px] w-full rounded-[28px] object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}

              <div className="absolute inset-4 rounded-[28px] bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Floating Badge */}

              <div className="absolute bottom-10 left-10">

                <span className="rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold tracking-wider text-white shadow-lg">
                  SUPREME STUDENT GOVERNMENT
                </span>

                <h3 className="mt-5 text-4xl font-black text-white">
                  Executive Board 2026
                </h3>

                <p className="mt-3 max-w-xl text-white/90">
                  United by leadership. Driven by service. Inspired by every
                  Sebastinians.
                </p>

              </div>

            </div>

          </motion.div>

          {/* Quote */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .3 }}
            className="mx-auto mt-16 max-w-4xl text-center"
          >

            <h3 className="text-3xl font-black text-[var(--primary)]">
              "Leadership is not about a position—it's about making a positive impact."
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600 text-gray-600">
              The Supreme Student Government remains committed to representing
              the student body with integrity, transparency, innovation, and
              excellence. Every project, event, and initiative is centered on
              creating a better campus experience for all Sebastinianss.
            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}