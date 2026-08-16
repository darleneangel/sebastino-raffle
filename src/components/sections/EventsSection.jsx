import { motion } from "framer-motion";
import {
  FaGift,
  FaCamera,
  FaMusic,
  FaBookOpen,
  FaArrowRight,
  FaPlay,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";


// ===============================
// EVENT IMAGES
// ===============================

import eventPoster from "../../assets/events/salubong-poster.jpg";

import prize1 from "../../assets/events/prize-1.jpg";
import prize2 from "../../assets/events/prize-2.jpg";
import prize3 from "../../assets/events/prize-3.jpg";

import freebies from "../../assets/events/freebies.jpg";
import photobooth from "../../assets/events/photobooth.jpg";
import asop from "../../assets/events/asop.jpg";
import brochure from "../../assets/events/brochure.jpg";

import preparationVideo from "../../assets/events/preparation.mp4";


// ===============================
// PRIZES
// ===============================

const prizes = [
  {
    image: prize1,
    title: "Prize #1",
    description:
      "One of our exciting prizes prepared for Sebastinos!",
  },

  {
    image: prize2,
    title: "Prize #2",
    description:
      "Another special prize waiting to be won.",
  },

  {
    image: prize3,
    title: "Prize #3",
    description:
      "A special reward prepared by the SSG.",
  },
];


// ===============================
// EVENT FEATURES
// ===============================

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


export default function EventsSection({
  preview = false,
  setActiveSection,
}) {


  // ===============================
  // NAVIGATION
  // ===============================

  const goToHappeningNow = () => {

    if (setActiveSection) {
      setActiveSection("happening-now");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  // ============================================================
  // HOME PAGE PREVIEW
  // ============================================================

  if (preview) {

    return (

      <section
        className="
          relative
          overflow-hidden
          py-4
        "
      >

        {/* =====================================
            DECORATIONS
        ===================================== */}

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
              bg-white/10
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
              bg-pink-200/10
              blur-3xl
            "
          />

        </div>


        <div className="relative z-10">


          {/* =====================================
              HEADER
          ===================================== */}

          <div className="text-center">

            <span
              className="
                inline-block
                rounded-full
                border
                border-white/20
                bg-white/15
                px-5
                py-2
                text-sm
                font-bold
                tracking-[3px]
                text-pink-100
                backdrop-blur-md
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
                text-white/70
                sm:text-base
              "
            >
              Get a glimpse of the latest activities, events,
              and initiatives from the Supreme Student Government.
            </p>

          </div>


          {/* =====================================
              FEATURED EVENT PREVIEW
          ===================================== */}

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
              border-white/20
              bg-white/10
              shadow-2xl
              backdrop-blur-md
            "
          >

            <div className="grid items-center lg:grid-cols-2">


              {/* IMAGE */}

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
                    bg-gradient-to-t
                    from-black/50
                    via-transparent
                    to-transparent
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


              {/* INFORMATION */}

              <div className="p-7 sm:p-9">

                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-pink-100
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
                    text-white
                    sm:text-4xl
                  "
                >
                  Salubong sa

                  <span className="block text-pink-100">
                    Bagong Sebastino
                  </span>
                </h3>


                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-white/70
                    sm:text-base
                  "
                >
                  Welcome the new academic year with the SSG
                  through exciting activities, freebies, games,
                  prizes, and unforgettable Sebastino moments.
                </p>


                {/* DETAILS */}

                <div
                  className="
                    mt-5
                    flex
                    flex-col
                    gap-3
                    text-sm
                    text-white/80
                    sm:flex-row
                    sm:gap-6
                  "
                >

                  <div className="flex items-center gap-2">

                    <FaCalendarAlt
                      className="text-pink-100"
                    />

                     August 17, 2026

                  </div>


                  <div className="flex items-center gap-2">

                    <FaMapMarkerAlt
                      className="text-pink-100"
                    />

                    SSC-R Cavite

                  </div>

                </div>

              </div>

            </div>

          </motion.div>


          {/* =====================================
              QUICK HIGHLIGHTS
          ===================================== */}

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
                  border-white/15
                  bg-white/10
                  p-4
                  backdrop-blur-md
                "
              >

                {/* IMAGE */}

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


                {/* TEXT */}

                <div>

                  <div className="flex items-center gap-2">

                    <span className="text-pink-100">
                      {feature.icon}
                    </span>


                    <h4
                      className="
                        text-sm
                        font-black
                        text-white
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
                      text-white/60
                    "
                  >
                    {feature.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>


          {/* =====================================
              VIEW MORE BUTTON
          ===================================== */}

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
        bg-gradient-to-b
        from-white
        via-pink-50
        to-white
        py-28
      "
    >

      {/* =====================================
          BACKGROUND DECORATION
      ===================================== */}

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
            x: [0, 70, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="
            absolute
            -left-32
            top-20
            h-96
            w-96
            rounded-full
            bg-pink-300/20
            blur-3xl
          "
        />


        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
          className="
            absolute
            right-0
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-pink-200/30
            blur-3xl
          "
        />

      </div>


      <div className="relative mx-auto max-w-7xl px-6">


        {/* =====================================
            SECTION HEADING
        ===================================== */}

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
            duration: 0.7,
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
            EVENTS
          </span>


          <h2
            className="
              mt-6
              text-5xl
              font-black
              text-gray-900
              md:text-6xl
            "
          >

            What's Happening

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
              at SSG
            </span>

          </h2>


          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-lg
              leading-8
              text-gray-600
            "
          >
            Stay updated with the latest activities,
            programs, and celebrations organized by the
            Supreme Student Government.
          </p>

        </motion.div>


        {/* =====================================
            FEATURED EVENT
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
            rounded-[40px]
            bg-gradient-to-br
            from-[#CA1F7B]
            to-[#8E1457]
            shadow-2xl
          "
        >

          <div className="grid items-center lg:grid-cols-2">


            {/* EVENT IMAGE */}

            <div
              className="
                relative
                h-[400px]
                overflow-hidden
                lg:h-[500px]
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
                  bg-gradient-to-r
                  from-black/20
                  to-transparent
                "
              />

            </div>


            {/* EVENT INFORMATION */}

            <div className="p-10 text-white lg:p-14">

              <span
                className="
                  rounded-full
                  bg-white/20
                  px-4
                  py-2
                  text-sm
                  font-semibold
                "
              >
                FEATURED EVENT
              </span>


              <h3
                className="
                  mt-6
                  text-4xl
                  font-black
                  leading-tight
                  md:text-5xl
                "
              >

                Salubong sa
                <br />
                Bagong Sebastino

              </h3>


              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-white/85
                "
              >
                Welcome the new academic year with the
                Supreme Student Government! Join us for a
                celebration filled with activities, freebies,
                games, prizes, and unforgettable Sebastino
                moments.
              </p>


              {/* DETAILS */}

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4">

                  <div className="rounded-full bg-white/20 p-3">

                    <FaCalendarAlt />

                  </div>

                  <span>
                    May 21, 2026
                  </span>

                </div>


                <div className="flex items-center gap-4">

                  <div className="rounded-full bg-white/20 p-3">

                    <FaMapMarkerAlt />

                  </div>

                  <span>
                    San Sebastian College – Recoletos de Cavite
                  </span>

                </div>

              </div>


              <motion.a
                href="#gallery"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-7
                  py-4
                  font-bold
                  text-[#CA1F7B]
                  shadow-xl
                "
              >

                Explore the Event

                <FaArrowRight />

              </motion.a>

            </div>

          </div>

        </motion.div>


        {/* =====================================
            PRIZES
        ===================================== */}

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
          className="
            mt-28
            text-center
          "
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
            EXCITING PRIZES
          </span>


          <h3
            className="
              mt-6
              text-4xl
              font-black
              text-gray-900
            "
          >
            Win Something Special
          </h3>


          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-gray-600
            "
          >
            Check out some of the prizes prepared for
            our Sebastinos.
          </p>

        </motion.div>


        <div
          className="
            mt-12
            grid
            gap-8
            md:grid-cols-3
          "
        >

          {prizes.map((prize, index) => (

            <motion.div
              key={index}
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-pink-100
                bg-white
                shadow-xl
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
                    group-hover:scale-110
                  "
                />

              </div>


              <div className="p-7">

                <h4
                  className="
                    text-2xl
                    font-black
                    text-gray-900
                  "
                >
                  {prize.title}
                </h4>


                <p
                  className="
                    mt-3
                    leading-7
                    text-gray-600
                  "
                >
                  {prize.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>


        {/* =====================================
            EVENT FEATURES
        ===================================== */}

        <div
          className="
            mt-28
            grid
            gap-8
            md:grid-cols-2
          "
        >

          {features.map((feature, index) => (

            <motion.div
              key={index}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-pink-100
                bg-white
                shadow-xl
              "
            >

              <div
                className="
                  relative
                  h-72
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
                    group-hover:scale-110
                  "
                />


                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    to-transparent
                  "
                />


                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    flex
                    items-center
                    gap-3
                    text-white
                  "
                >

                  <div
                    className="
                      rounded-full
                      bg-[#CA1F7B]
                      p-3
                    "
                  >
                    {feature.icon}
                  </div>


                  <h4
                    className="
                      text-2xl
                      font-black
                    "
                  >
                    {feature.title}
                  </h4>

                </div>

              </div>


              <div className="p-7">

                <p
                  className="
                    leading-7
                    text-gray-600
                  "
                >
                  {feature.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>


        {/* =====================================
            BROCHURE
        ===================================== */}

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
          className="mt-28"
        >

          <div
            className="
              grid
              items-center
              gap-10
              rounded-[40px]
              bg-pink-50
              p-6
              md:p-10
              lg:grid-cols-2
            "
          >

            <div
              className="
                overflow-hidden
                rounded-[30px]
                shadow-xl
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


            <div className="p-4">

              <span
                className="
                  rounded-full
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
                  mt-6
                  text-4xl
                  font-black
                  text-gray-900
                "
              >
                Everything You Need to Know
              </h3>


              <p
                className="
                  mt-5
                  text-lg
                  leading-8
                  text-gray-600
                "
              >
                Check the official event brochure for the
                complete schedule, activities, games, and
                other important information.
              </p>


              <button
                className="
                  mt-8
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

                <FaBookOpen />

                View Brochure

              </button>

            </div>

          </div>

        </motion.div>


        {/* =====================================
            PREPARATION VIDEO
        ===================================== */}

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
          className="mt-28"
        >

          <div className="text-center">

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
              BEHIND THE SCENES
            </span>


            <h3
              className="
                mt-6
                text-4xl
                font-black
                text-gray-900
              "
            >
              Preparing for the Celebration
            </h3>


            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-gray-600
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
              mt-12
              max-w-5xl
              overflow-hidden
              rounded-[35px]
              bg-black
              shadow-2xl
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


        {/* =====================================
            FINAL CTA
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
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
            rounded-[40px]
            bg-gradient-to-r
            from-[#CA1F7B]
            to-[#DF79B0]
            p-10
            text-center
            shadow-2xl
            md:p-14
          "
        >

          <h3
            className="
              text-4xl
              font-black
              text-white
            "
          >
            Ready to Welcome a New Sebastino Journey?
          </h3>


          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              text-white/90
            "
          >
            Follow the SSG and stay connected with everything
            happening around campus.
          </p>


          <a
            href="#contact"
            className="
              mt-8
              inline-flex
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

            Connect With SSG

            <FaArrowRight />

          </a>

        </motion.div>

      </div>

    </section>

  );
}