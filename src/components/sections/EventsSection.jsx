import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserTie,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaPlay,
  FaTrophy,
  FaClock,
  FaInfoCircle,
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
// OFFICIAL SSG COLORS
// =====================================================
//
// White      #FFFFFF
// Black      #000000
// Dark Pink  #CA1F7B
// Light Pink #DF79B0
// Silver     #C0C0C0
// Dark       #8E1457
//
// =====================================================


// =====================================================
// SALUBONG PRIZES
// =====================================================

const salubongPrizes = [
  {
    image: prize1,
    title: "Orashare E-Fan",
    description:
      "One of the exciting prize packages prepared for participating Sebastinianss.",
    type: "Special Prize",
  },

  {
    image: prize2,
    title: "Salubong Tote Bag",
    description:
      "Another special reward prepared as part of the Salubong celebration.",
    type: "Event Prize",
  },

  {
    image: prize3,
    title: "Salubong Tote Bag",
    description:
      "A special reward prepared by the Supreme Student Government.",
    type: "Special Award",
  },
];


// =====================================================
// SALUBONG GALLERY
// =====================================================

const salubongGallery = [
  {
    image: eventPoster,
    title: "Official Salubong Poster",
    description:
      "The official visual material introducing Salubong sa Bagong Sebastinians.",
  },

  {
    image: freebies,
    title: "Welcome Freebies",
    description:
      "Prepared freebies and welcome materials for students.",
  },

  {
    image: photobooth,
    title: "Photobooth Setup",
    description:
      "A dedicated space where Sebastinianss can capture memories from the celebration.",
  },

  {
    image: asop,
    title: "ASOP",
    description:
      "Academic Student Orientation Program materials and activities.",
  },

  {
    image: brochure,
    title: "Event Brochure",
    description:
      "Official event information, schedules, and activity details.",
  },
];


// =====================================================
// EVENT ARCHIVE
// =====================================================

const events = [
  {
    id: "salubong-2026",

    schoolYear: "2026–2027",

    title: "Salubong sa Bagong Sebastinians",

    category: "Campus Welcome",

    status: "Upcoming",

    date: "August 17, 2026",

    month: 7,

    day: 17,

    year: 2026,

    time: "7:00 AM – 11:00 AM",

    location:
      "San Sebastian College – Recoletos de Cavite",

    head: "SSG Executive Board",

    coHead: "SSG Committees and Volunteers",

    description:
      "Salubong sa Bagong Sebastinians is an SSG-led welcome celebration designed to officially open the new academic year. The activity provides students with opportunities to connect with fellow Sebastinianss, participate in engaging activities, enjoy prepared freebies, capture memorable moments, and become familiar with the programs and initiatives of the Supreme Student Government.",

    rationale:
      "The Salubong initiative was designed to create a welcoming and engaging environment for both new and returning Sebastinianss. Beyond welcoming students to a new academic year, the event introduces the SSG as an accessible student organization committed to student engagement, campus participation, and service.",

    featuredImage: eventPoster,

    galleryImages: salubongGallery.map(
      (item) => item.image
    ),

    preparationImages: [
      freebies,
      photobooth,
      brochure,
      asop,
      eventPoster,
    ],

    registrationText:
      "WANT TO WIN A TOTE BAG OR AN E-FAN? REGISTER HERE",

    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdzsuUTBsJXqFAJFVFq3-kXU2ytpHo4jPLwUJktIKmfCTZw6Q/viewform?usp=publish-editor",
  },
{
    id: "avishala-2026",

    schoolYear: "2026–2027",

    title: "Avishala 2026",

    category: "Campus Welcome",

    status: "Upcoming",

    date: "August 28, 2026",

    month: 7,

    day: 28,

    year: 2026,

    time: "7:00 AM – 11:00 AM",

    location:
      "San Sebastian College – Recoletos de Cavite",

    head: "SSG Executive Board",

    coHead: "SSG Committees and Volunteers",

    description:
      "Salubong sa Bagong Sebastinians is an SSG-led welcome celebration designed to officially open the new academic year. The activity provides students with opportunities to connect with fellow Sebastinianss, participate in engaging activities, enjoy prepared freebies, capture memorable moments, and become familiar with the programs and initiatives of the Supreme Student Government.",

    rationale:
      "The Salubong initiative was designed to create a welcoming and engaging environment for both new and returning Sebastinianss. Beyond welcoming students to a new academic year, the event introduces the SSG as an accessible student organization committed to student engagement, campus participation, and service.",

    featuredImage: eventPoster,

    galleryImages: salubongGallery.map(
      (item) => item.image
    ),

    preparationImages: [
      freebies,
      photobooth,
      brochure,
      asop,
      eventPoster,
    ],

    registrationText:
      "WANT TO WIN A TOTE BAG OR AN E-FAN? REGISTER HERE",

    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdzsuUTBsJXqFAJFVFq3-kXU2ytpHo4jPLwUJktIKmfCTZw6Q/viewform?usp=publish-editor",
  },
  {
    id: "student-engagement-2025",

    schoolYear: "2025–2026",

    title: "Student Engagement Activities",

    category: "Student Engagement",

    status: "Completed",

    date: "August 24, 2026",

    month: 7,

    day: 15,

    year: 2025,

    time: "School Year 2025–2026",

    location:
      "San Sebastian College – Recoletos de Cavite",

    head: "SSG Executive Board",

    coHead: "SSG Committees",

    description:
      "A collection of student-centered activities conducted during the academic year to encourage participation, collaboration, and active involvement within the school community.",

    rationale:
      "These activities supported the SSG's role in encouraging student participation and creating opportunities for collaboration throughout the academic year.",

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
    id: "salubong-2026",

    schoolYear: "2026–2027",

    title: "Salubong sa Bagong Sebastinians",

    category: "Campus Welcome",

    status: "Upcoming",

    date: "August 24, 2026",

    month: 7,

    day: 17,

    year: 2026,

    time: "7:00 AM – 11:00 AM",

    location:
      "San Sebastian College – Recoletos de Cavite",

    head: "SSG Executive Board",

    coHead: "SSG Committees and Volunteers",

    description:
      "Salubong sa Bagong Sebastinians is an SSG-led welcome celebration designed to officially open the new academic year. The activity provides students with opportunities to connect with fellow Sebastinianss, participate in engaging activities, enjoy prepared freebies, capture memorable moments, and become familiar with the programs and initiatives of the Supreme Student Government.",

    rationale:
      "The Salubong initiative was designed to create a welcoming and engaging environment for both new and returning Sebastinianss. Beyond welcoming students to a new academic year, the event introduces the SSG as an accessible student organization committed to student engagement, campus participation, and service.",

    featuredImage: eventPoster,

    galleryImages: salubongGallery.map(
      (item) => item.image
    ),

    preparationImages: [
      freebies,
      photobooth,
      brochure,
      asop,
      eventPoster,
    ],

    registrationText:
      "WANT TO WIN A TOTE BAG OR AN E-FAN? REGISTER HERE",

    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdzsuUTBsJXqFAJFVFq3-kXU2ytpHo4jPLwUJktIKmfCTZw6Q/viewform?usp=publish-editor",
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
// CALENDAR MONTHS
// =====================================================

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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

  const [selectedYear, setSelectedYear] =
    useState("2026–2027");

  const [selectedEvent, setSelectedEvent] =
    useState(null);

  const [calendarDate, setCalendarDate] =
    useState(new Date(2026, 7, 1));

  const [calendarEvent, setCalendarEvent] =
    useState(null);

  const [salubongTab, setSalubongTab] =
    useState("overview");

  const [galleryImage, setGalleryImage] =
    useState(null);


  // ===================================================
  // NAVIGATION
  // ===================================================

  const goToSection = (section) => {

    if (setActiveSection) {
      setActiveSection(section);
    }

    requestAnimationFrame(() => {

      setTimeout(() => {

        const element =
          document.getElementById(section);

        if (element) {

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }, 50);

    });

  };


  const goToHappeningNow = () => {
    goToSection("happening-now");
  };


  // ===================================================
  // EVENT FILTER
  // ===================================================

  const filteredEvents = events.filter(
    (event) =>
      event.schoolYear === selectedYear
  );


  // ===================================================
  // CALENDAR
  // ===================================================

  const calendarYear =
    calendarDate.getFullYear();

  const calendarMonth =
    calendarDate.getMonth();

  const firstDay =
    new Date(
      calendarYear,
      calendarMonth,
      1
    ).getDay();

  const daysInMonth =
    new Date(
      calendarYear,
      calendarMonth + 1,
      0
    ).getDate();


  const calendarDays = useMemo(() => {

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (
      let day = 1;
      day <= daysInMonth;
      day++
    ) {
      days.push(day);
    }

    return days;

  }, [
    firstDay,
    daysInMonth,
  ]);


  const getEventsForDay = (day) => {

    if (!day) {
      return [];
    }

    return events.filter(
      (event) =>
        event.year === calendarYear &&
        event.month === calendarMonth &&
        event.day === day
    );
  };


  const previousMonth = () => {

    setCalendarDate(
      new Date(
        calendarYear,
        calendarMonth - 1,
        1
      )
    );

    setCalendarEvent(null);
  };


  const nextMonth = () => {

    setCalendarDate(
      new Date(
        calendarYear,
        calendarMonth + 1,
        1
      )
    );

    setCalendarEvent(null);
  };


  // ===================================================
  // OPEN / CLOSE MODALS
  // ===================================================

  const openEvent = (event) => {
    setSelectedEvent(event);
  };


  const closeEvent = () => {
    setSelectedEvent(null);
  };


  const openSalubong = () => {

    setSalubongTab("overview");

    setSelectedEvent(events[0]);

  };


  // ===================================================
  // ESCAPE KEY
  // ===================================================

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {

        setSelectedEvent(null);
        setGalleryImage(null);
        setCalendarEvent(null);

      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, []);


  // ===================================================
  // PREVIEW
  // ===================================================

  if (preview) {

    return (

      <section
        className="
          relative
          overflow-hidden
          bg-[#CA1F7B]
          px-6
          py-16
          sm:px-8
          lg:px-12
        "
      >

        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">

          <motion.div
            animate={{
              x: [0, 50, 0],
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
              h-80
              w-80
              rounded-full
              bg-[#DF79B0]/30
              blur-3xl
            "
          />

          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-20
              bottom-0
              h-80
              w-80
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

        </div>


        <div className="relative z-10 mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="text-center">

            <span
              className="
                inline-flex
                rounded-full
                bg-white
                px-5
                py-2
                text-xs
                font-black
                tracking-[3px]
                text-[#CA1F7B]
              "
            >
              WHAT'S HAPPENING
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
              Salubong sa
              <span className="block text-[#DF79B0]">
                Bagong Sebastinians
              </span>
            </h2>


            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-white/85
                sm:text-base
              "
            >
              Welcome the new academic year with
              the Supreme Student Government through
              exciting activities, freebies, games,
              prizes, and memorable Sebastinians moments.
            </p>

          </div>


          {/* FEATURE CARD */}

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
              mt-10
              overflow-hidden
              rounded-[32px]
              border
              border-white
              bg-white
              shadow-2xl
            "
          >

            <div className="grid lg:grid-cols-2">

              <div
                className="
                  relative
                  h-72
                  overflow-hidden
                  sm:h-96
                "
              >

                <img
                  src={eventPoster}
                  alt="Salubong sa Bagong Sebastinians"
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
                    from-black/70
                    via-transparent
                    to-transparent
                  "
                />

                <span
                  className="
                    absolute
                    left-5
                    top-5
                    rounded-full
                    bg-[#CA1F7B]
                    px-4
                    py-2
                    text-xs
                    font-black
                    uppercase
                    tracking-wider
                    text-white
                  "
                >
                  Featured
                </span>

              </div>


              <div className="p-7 sm:p-10">

                <span
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[2px]
                    text-[#CA1F7B]
                  "
                >
                  SSG FLAGSHIP EVENT
                </span>


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
                    Bagong Sebastinians
                  </span>
                </h3>


                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-black/65
                    sm:text-base
                  "
                >
                  An exciting campus welcome
                  celebration created to bring
                  Sebastinianss together at the beginning
                  of the academic year.
                </p>


                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3 text-sm font-semibold">

                    <FaCalendarAlt
                      className="text-[#CA1F7B]"
                    />

                    August 17, 2026

                  </div>


                  <div className="flex items-center gap-3 text-sm font-semibold">

                    <FaMapMarkerAlt
                      className="text-[#CA1F7B]"
                    />

                    San Sebastian College –
                    Recoletos de Cavite

                  </div>

                </div>


                <motion.button
                  onClick={openSalubong}
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
                    px-6
                    py-3.5
                    text-sm
                    font-black
                    text-white
                    shadow-lg
                    transition
                    hover:bg-[#DF79B0]
                  "
                >
                  View Full Salubong Showcase
                  <FaArrowRight />

                </motion.button>

              </div>

            </div>

          </motion.div>


          <div className="mt-7 flex justify-center">

            <motion.button
              onClick={goToHappeningNow}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                rounded-full
                bg-white
                px-7
                py-3.5
                font-black
                text-[#CA1F7B]
                shadow-xl
              "
            >
              Explore Events
              <FaArrowRight className="ml-2 inline" />
            </motion.button>

          </div>

        </div>

      </section>

    );
  }


  // ===================================================
  // MAIN SECTION
  // ===================================================

  return (

    <section
      id="happening-now"
      className="
        relative
        overflow-hidden
        bg-[#FDF0F5]
        py-24
        sm:py-28
      "
    >

      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
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
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
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
          sm:px-8
          lg:px-12
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

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
          className="text-center"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#DF79B0]
              bg-[#DF79B0]/10
              px-5
              py-2
              text-xs
              font-black
              tracking-[3px]
              text-[#CA1F7B]
              sm:text-sm
            "
          >
            EVENTS & PROJECTS
          </span>


          <h2
            className="
              mt-5
              text-4xl
              font-black
              leading-tight
              text-black
              sm:text-5xl
              md:text-6xl
            "
          >
            What's Happening

            <span className="block bg-gradient-to-r
      from-[#8E1457]
      via-[#CA1F7B]
      to-[#DF79B0]
      bg-clip-text
      text-transparent">
              at SSG
            </span>
          </h2>


          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-sm
              leading-7
              text-black/60
              sm:text-lg
              sm:leading-8
            "
          >
            Discover upcoming activities, explore the
            SSG calendar, and revisit programs and
            initiatives from previous academic years.
          </p>

        </motion.div>


        {/* =================================================
            SALUBONG FEATURED SHOWCASE
        ================================================= */}

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
            duration: 0.7,
          }}
          className="
            mt-16
            overflow-hidden
            rounded-[36px]
            border
            border-[#C0C0C0]
            bg-white
            shadow-[0_25px_70px_rgba(0,0,0,0.10)]
          "
        >

          <div className="grid lg:grid-cols-[1.15fr_.85fr]">

            {/* IMAGE */}

            <div
              className="
                relative
                min-h-[330px]
                overflow-hidden
                sm:min-h-[430px]
                lg:min-h-[540px]
              "
            >

              <img
                src={eventPoster}
                alt="Salubong sa Bagong Sebastinians"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-1000
                  hover:scale-105
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
                  left-6
                  top-6
                  rounded-full
                  bg-[#CA1F7B]
                  px-5
                  py-2
                  text-xs
                  font-black
                  uppercase
                  tracking-wider
                  text-white
                  shadow-xl
                  sm:left-8
                  sm:top-8
                "
              >
                Featured Event
              </div>


              <div
                className="
                  absolute
                  bottom-7
                  left-6
                  right-6
                  sm:bottom-10
                  sm:left-10
                "
              >

                <p
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[2px]
                    text-[#DF79B0]
                  "
                >
                  SSG • AY 2026–2027
                </p>


                <h3
                  className="
                    mt-2
                    text-3xl
                    font-black
                    leading-tight
                    text-white
                    sm:text-5xl
                  "
                >
                  Salubong sa
                  <span className="block text-[#DF79B0]">
                    Bagong Sebastinians
                  </span>
                </h3>

              </div>

            </div>


            {/* INFORMATION */}

            <div
              className="
                flex
                flex-col
                justify-center
                p-7
                sm:p-10
                lg:p-12
              "
            >

              <span
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[2px]
                  text-[#CA1F7B]
                "
              >
                SSG FLAGSHIP SHOWCASE
              </span>


              <h3
                className="
                  mt-3
                  text-2xl
                  font-black
                  text-black
                  sm:text-3xl
                "
              >
                Welcome to a New
                Sebastinians Journey
              </h3>


              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-black/65
                  sm:text-base
                "
              >
                Salubong brings new and returning
                Sebastinianss together through welcoming
                activities, student engagement,
                giveaways, games, and memorable
                campus experiences.
              </p>


              {/* META */}

              <div className="mt-7 space-y-4">

                <div className="flex items-start gap-4">

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


                  <div>

                    <p
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-wider
                        text-black/40
                      "
                    >
                      Date & Time
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-bold
                        text-black
                      "
                    >
                      August 17, 2026
                    </p>

                  </div>

                </div>


                <div className="flex items-start gap-4">

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


                  <div>

                    <p
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-wider
                        text-black/40
                      "
                    >
                      Venue
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-bold
                        text-black
                      "
                    >
                      Main Campus Quadrangle &
                      School Lobby
                    </p>

                  </div>

                </div>

              </div>


              <motion.button
                onClick={openSalubong}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  mt-8
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  bg-[#CA1F7B]
                  px-6
                  py-3.5
                  text-sm
                  font-black
                  text-white
                  shadow-lg
                  transition
                  hover:bg-[#DF79B0]
                "
              >
                View Full Salubong Showcase
                <FaArrowRight />

              </motion.button>

            </div>

          </div>

        </motion.div>


        {/* =================================================
            COMPACT CALENDAR
        ================================================= */}

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
                px-5
                py-2
                text-xs
                font-black
                tracking-[3px]
                text-[#CA1F7B]
                sm:text-sm
              "
            >
              SSG CALENDAR
            </span>


            <h3
              className="
                mt-5
                text-3xl
                font-black
                text-black
                sm:text-4xl
              "
            >
              Events Calendar
            </h3>


            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-7
                text-black/55
              "
            >
              Check scheduled SSG activities and
              important student government dates.
            </p>

          </div>


          {/* CALENDAR CARD */}

          <div
            className="
              mx-auto
              mt-10
              max-w-5xl
              overflow-hidden
              rounded-[28px]
              border
              border-[#C0C0C0]
              bg-white
              shadow-xl
            "
          >

            {/* CALENDAR HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#C0C0C0]
                bg-[#CA1F7B]
                px-5
                py-5
                text-white
                sm:px-7
              "
            >

              <button
                type="button"
                onClick={previousMonth}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  transition
                  hover:bg-white
                  hover:text-[#CA1F7B]
                "
                aria-label="Previous month"
              >
                <FaChevronLeft />
              </button>


              <div className="text-center">

                <p
                  className="
                    text-xl
                    font-black
                    sm:text-2xl
                  "
                >
                  {months[calendarMonth]}
                </p>

                <p className="text-xs font-bold text-white/70">
                  {calendarYear}
                </p>

              </div>


              <button
                type="button"
                onClick={nextMonth}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  transition
                  hover:bg-white
                  hover:text-[#CA1F7B]
                "
                aria-label="Next month"
              >
                <FaChevronRight />
              </button>

            </div>


            {/* DAYS OF WEEK */}

            <div
              className="
                grid
                grid-cols-7
                border-b
                border-[#C0C0C0]
                bg-[#DF79B0]/10
              "
            >

              {[
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
              ].map((day) => (

                <div
                  key={day}
                  className="
                    px-1
                    py-3
                    text-center
                    text-[10px]
                    font-black
                    uppercase
                    tracking-wider
                    text-[#CA1F7B]
                    sm:text-xs
                  "
                >
                  {day}
                </div>

              ))}

            </div>


            {/* NUMBERED CALENDAR */}

            <div
              className="
                grid
                grid-cols-7
              "
            >

              {calendarDays.map(
                (day, index) => {

                  const dayEvents =
                    getEventsForDay(day);

                  const hasEvent =
                    dayEvents.length > 0;

                  return (

                    <div
                      key={index}
                      className="
                        relative
                        min-h-[70px]
                        border-b
                        border-r
                        border-[#C0C0C0]/60
                        p-2
                        sm:min-h-[90px]
                        sm:p-3
                      "
                    >

                      {day && (

                        <button
                          type="button"
                          onClick={() => {

                            if (hasEvent) {
                              setCalendarEvent(
                                dayEvents[0]
                              );
                            }

                          }}
                          className={`
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            text-xs
                            font-bold
                            transition
                            sm:h-8
                            sm:w-8
                            sm:text-sm
                            ${
                              hasEvent
                                ? "bg-[#CA1F7B] text-white shadow-md hover:bg-[#DF79B0]"
                                : "text-black hover:bg-[#DF79B0]/10"
                            }
                          `}
                        >
                          {day}
                        </button>

                      )}


                      {hasEvent && (

                        <div className="mt-2">

                          <div
                            className="
                              hidden
                              truncate
                              text-[10px]
                              font-bold
                              text-[#CA1F7B]
                              sm:block
                            "
                          >
                            {dayEvents[0].title}
                          </div>


                          <div
                            className="
                              flex
                              gap-1
                              sm:hidden
                            "
                          >

                            {dayEvents.map(
                              (_, eventIndex) => (

                                <span
                                  key={eventIndex}
                                  className="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-[#CA1F7B]
                                  "
                                />

                              )
                            )}

                          </div>

                        </div>

                      )}

                    </div>

                  );

                }
              )}

            </div>


            {/* LEGEND */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-5
                border-t
                border-[#C0C0C0]
                px-5
                py-4
                text-xs
                font-semibold
                text-black/55
              "
            >

              <div className="flex items-center gap-2">

                <span
                  className="
                    h-3
                    w-3
                    rounded-full
                    bg-[#CA1F7B]
                  "
                />

                SSG Event

              </div>


              <div className="flex items-center gap-2">

                <FaInfoCircle
                  className="text-[#DF79B0]"
                />

                Click a marked date for details

              </div>

            </div>

          </div>

        </motion.div>


        {/* =================================================
            CALENDAR EVENT TOOLTIP / POPUP
        ================================================= */}

        <AnimatePresence>

          {calendarEvent && (

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 10,
                scale: 0.96,
              }}
              className="
                fixed
                bottom-6
                left-1/2
                z-50
                w-[calc(100%-32px)]
                max-w-md
                -translate-x-1/2
                rounded-2xl
                border
                border-[#C0C0C0]
                bg-white
                p-5
                shadow-2xl
              "
            >

              <button
                type="button"
                onClick={() =>
                  setCalendarEvent(null)
                }
                className="
                  absolute
                  right-4
                  top-4
                  text-black/40
                  transition
                  hover:text-[#CA1F7B]
                "
              >
                <FaTimes />
              </button>


              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#DF79B0]/15
                  px-3
                  py-1
                  text-[10px]
                  font-black
                  uppercase
                  tracking-wider
                  text-[#CA1F7B]
                "
              >
                {calendarEvent.status}
              </span>


              <h4
                className="
                  mt-3
                  pr-6
                  text-lg
                  font-black
                  text-black
                "
              >
                {calendarEvent.title}
              </h4>


              <div className="mt-3 space-y-2 text-xs text-black/60">

                <div className="flex items-center gap-2">

                  <FaClock
                    className="text-[#CA1F7B]"
                  />

                  {calendarEvent.time}

                </div>


                <div className="flex items-center gap-2">

                  <FaMapMarkerAlt
                    className="text-[#CA1F7B]"
                  />

                  {calendarEvent.location}

                </div>

              </div>


              <button
                type="button"
                onClick={() => {

                  openEvent(calendarEvent);
                  setCalendarEvent(null);

                }}
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#CA1F7B]
                  px-4
                  py-2
                  text-xs
                  font-bold
                  text-white
                  transition
                  hover:bg-[#DF79B0]
                "
              >
                View Details
                <FaArrowRight />

              </button>

            </motion.div>

          )}

        </AnimatePresence>


        {/* =================================================
            EVENT ARCHIVE
        ================================================= */}

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
                px-5
                py-2
                text-xs
                font-black
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
                text-black
                sm:text-4xl
              "
            >
              Explore SSG Projects
            </h3>


            <p
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-sm
                leading-7
                text-black/55
              "
            >
              Browse student government programs and
              activities organized by academic year.
            </p>

          </div>


          {/* YEAR TABS */}

          <div
            className="
              mx-auto
              mt-8
              flex
              max-w-xl
              flex-col
              gap-2
              rounded-2xl
              border
              border-[#C0C0C0]
              bg-white
              p-2
              shadow-sm
              sm:flex-row
            "
          >

            {schoolYears.map((year) => {

              const active =
                selectedYear === year;

              return (

                <button
                  key={year}
                  type="button"
                  onClick={() =>
                    setSelectedYear(year)
                  }
                  className={`
                    flex-1
                    rounded-xl
                    px-5
                    py-3
                    text-sm
                    font-black
                    transition
                    ${
                      active
                        ? "bg-[#CA1F7B] text-white shadow-md"
                        : "text-black hover:bg-[#DF79B0]/10"
                    }
                  `}
                >
                  S.Y. {year}
                </button>

              );

            })}

          </div>

        </motion.div>


        {/* ARCHIVE GRID */}

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
                onClick={() =>
                  openEvent(event)
                }
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
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-56
                    overflow-hidden
                  "
                >

                  <img
                    src={event.featuredImage}
                    alt={event.title}
                    loading="lazy"
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
                      from-black/75
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
                      text-[10px]
                      font-black
                      uppercase
                      tracking-wider
                      text-[#CA1F7B]
                      shadow
                    "
                  >
                    {event.category}
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


                {/* CARD BODY */}

                <div className="p-5">

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        font-bold
                        text-[#CA1F7B]
                      "
                    >

                      <FaCalendarAlt />

                      {event.date}

                    </div>


                    <span
                      className={`
                        rounded-full
                        px-2.5
                        py-1
                        text-[9px]
                        font-black
                        uppercase
                        ${
                          event.status === "Upcoming"
                            ? "bg-[#DF79B0]/15 text-[#CA1F7B]"
                            : "bg-black/5 text-black/50"
                        }
                      `}
                    >
                      {event.status}
                    </span>

                  </div>


                  <p
                    className="
                      mt-3
                      line-clamp-2
                      text-sm
                      leading-6
                      text-black/55
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
                        text-xs
                        font-black
                        uppercase
                        tracking-wider
                        text-[#CA1F7B]
                      "
                    >
                      View Project
                    </span>


                    <FaArrowRight
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


        {/* =================================================
            FINAL CTA
        ================================================= */}

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
            mt-24
            overflow-hidden
            rounded-[32px]
            bg-[#CA1F7B]
            p-8
            text-center
            shadow-xl
            sm:p-12
          "
        >

          <h3
            className="
              text-2xl
              font-black
              text-white
              sm:text-3xl
            "
          >
            Stay Connected With SSG
          </h3>


          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-white/80
              sm:text-base
            "
          >
            Keep up with student activities,
            announcements, programs, and future
            SSG initiatives.
          </p>


          <motion.button
            onClick={() =>
              goToSection("contact")
            }
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              mt-6
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-6
              py-3.5
              text-sm
              font-black
              text-[#CA1F7B]
              shadow-lg
              transition
              hover:bg-[#DF79B0]
              hover:text-white
            "
          >
            Connect With SSG
            <FaArrowRight />

          </motion.button>

        </motion.div>

      </div>


      {/* =================================================
          EVENT MODAL
      ================================================= */}

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
            onClick={closeEvent}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/75
              p-3
              backdrop-blur-sm
              sm:p-6
            "
            role="dialog"
            aria-modal="true"
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="
                relative
                max-h-[94vh]
                w-full
                max-w-6xl
                overflow-y-auto
                rounded-[28px]
                bg-white
                shadow-2xl
              "
            >

              {/* CLOSE */}

              <button
                type="button"
                onClick={closeEvent}
                className="
                  absolute
                  right-4
                  top-4
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  shadow-xl
                  transition
                  hover:bg-[#CA1F7B]
                  hover:text-white
                "
                aria-label="Close"
              >
                <FaTimes />
              </button>


              {/* =================================================
                  SALUBONG SPECIAL SHOWCASE
              ================================================= */}

              {selectedEvent.id ===
                "salubong-2026" ? (

                <>

                  {/* HERO */}

                  <div
                    className="
                      relative
                      h-64
                      overflow-hidden
                      sm:h-80
                      lg:h-[420px]
                    "
                  >

                    <img
                      src={
                        selectedEvent.featuredImage
                      }
                      alt={
                        selectedEvent.title
                      }
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
                        from-black/85
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
                        sm:bottom-10
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
                          text-[10px]
                          font-black
                          uppercase
                          tracking-wider
                          text-white
                        "
                      >
                        S.Y. 2026–2027
                      </span>


                      <h2
                        className="
                          mt-4
                          text-3xl
                          font-black
                          leading-tight
                          text-white
                          sm:text-5xl
                        "
                      >
                        Salubong sa
                        <span className="block text-[#DF79B0]">
                          Bagong Sebastinians
                        </span>
                      </h2>

                    </div>

                  </div>


                  {/* TABS */}

                  <div
                    className="
                      sticky
                      top-0
                      z-20
                      flex
                      overflow-x-auto
                      border-b
                      border-[#C0C0C0]
                      bg-white
                      px-4
                      sm:px-8
                    "
                  >

                    {[
                      {
                        id: "overview",
                        label: "Overview",
                        icon: <FaInfoCircle />,
                      },

                      {
                        id: "preparation",
                        label: "Preparation",
                        icon: <FaImages />,
                      },

                      {
                        id: "videos",
                        label: "Videos",
                        icon: <FaPlay />,
                      },

                      {
                        id: "prizes",
                        label: "Prizes",
                        icon: <FaTrophy />,
                      },
                    ].map((tab) => (

                      <button
                        key={tab.id}
                        type="button"
                        onClick={() =>
                          setSalubongTab(
                            tab.id
                          )
                        }
                        className={`
                          relative
                          flex
                          shrink-0
                          items-center
                          gap-2
                          px-4
                          py-4
                          text-xs
                          font-black
                          transition
                          sm:px-6
                          sm:text-sm
                          ${
                            salubongTab ===
                            tab.id
                              ? "text-[#CA1F7B]"
                              : "text-black/45 hover:text-[#CA1F7B]"
                          }
                        `}
                      >

                        {tab.icon}

                        {tab.label}

                        {salubongTab ===
                          tab.id && (

                          <motion.div
                            layoutId="salubong-tab"
                            className="
                              absolute
                              bottom-0
                              left-0
                              right-0
                              h-1
                              rounded-t-full
                              bg-[#CA1F7B]
                            "
                          />

                        )}

                      </button>

                    ))}

                  </div>


                  {/* TAB CONTENT */}

                  <div className="p-6 sm:p-10">

                    <AnimatePresence
                      mode="wait"
                    >

                      {/* OVERVIEW */}

                      {salubongTab ===
                        "overview" && (

                        <motion.div
                          key="overview"
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -10,
                          }}
                        >

                          <div
                            className="
                              grid
                              gap-10
                              lg:grid-cols-[1.2fr_.8fr]
                            "
                          >

                            <div>

                              <span
                                className="
                                  text-xs
                                  font-black
                                  uppercase
                                  tracking-[2px]
                                  text-[#CA1F7B]
                                "
                              >
                                Event Overview
                              </span>


                              <h3
                                className="
                                  mt-3
                                  text-2xl
                                  font-black
                                  text-black
                                  sm:text-3xl
                                "
                              >
                                Welcome, Sebastinianss.
                              </h3>


                              <p
                                className="
                                  mt-5
                                  text-sm
                                  leading-8
                                  text-black/65
                                  sm:text-base
                                "
                              >
                                {
                                  selectedEvent.description
                                }
                              </p>


                              <p
                                className="
                                  mt-5
                                  text-sm
                                  leading-8
                                  text-black/65
                                  sm:text-base
                                "
                              >
                                {
                                  selectedEvent.rationale
                                }
                              </p>


                              {selectedEvent.registrationText && (

                                <div
                                  className="
                                    mt-6
                                    rounded-2xl
                                    border
                                    border-[#DF79B0]
                                    bg-[#DF79B0]/10
                                    p-5
                                  "
                                >

                                  <p
                                    className="
                                      text-sm
                                      font-black
                                      text-[#CA1F7B]
                                    "
                                  >
                                    Registration
                                  </p>


                                  <p
                                    className="
                                      mt-2
                                      text-sm
                                      leading-6
                                      text-black/70
                                    "
                                  >
                                    {
                                      selectedEvent
                                        .registrationText
                                        .split(
                                          "REGISTER HERE"
                                        )[0]
                                    }

                                    <a
                                      href={
                                        selectedEvent.registrationLink
                                      }
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="
                                        ml-1
                                        font-black
                                        text-[#CA1F7B]
                                        underline
                                      "
                                    >
                                      REGISTER HERE
                                    </a>

                                  </p>

                                </div>

                              )}

                            </div>


                            {/* DETAILS */}

                            <div
                              className="
                                rounded-3xl
                                border
                                border-[#C0C0C0]
                                bg-[#FDF0F5]
                                p-6
                              "
                            >

                              <h4
                                className="
                                  text-lg
                                  font-black
                                  text-black
                                "
                              >
                                Event Details
                              </h4>


                              <div className="mt-6 space-y-5">

                                <DetailRow
                                  icon={<FaCalendarAlt />}
                                  label="Date"
                                  value={
                                    selectedEvent.date
                                  }
                                />

                                <DetailRow
                                  icon={<FaClock />}
                                  label="Schedule"
                                  value={
                                    selectedEvent.time
                                  }
                                />

                                <DetailRow
                                  icon={<FaMapMarkerAlt />}
                                  label="Venue"
                                  value="Main Campus Quadrangle & School Lobby"
                                />

                                <DetailRow
                                  icon={<FaUserTie />}
                                  label="Organizing Body"
                                  value={
                                    selectedEvent.head
                                  }
                                />

                              </div>

                            </div>

                          </div>

                        </motion.div>

                      )}


                      {/* PREPARATION */}

                      {salubongTab ===
                        "preparation" && (

                        <motion.div
                          key="preparation"
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -10,
                          }}
                        >

                          <span
                            className="
                              text-xs
                              font-black
                              uppercase
                              tracking-[2px]
                              text-[#CA1F7B]
                            "
                          >
                            Behind The Scenes
                          </span>


                          <h3
                            className="
                              mt-3
                              text-2xl
                              font-black
                              text-black
                              sm:text-3xl
                            "
                          >
                            Preparing the Celebration
                          </h3>


                          <p
                            className="
                              mt-4
                              max-w-3xl
                              text-sm
                              leading-7
                              text-black/60
                            "
                          >
                            Explore the preparation,
                            materials, installations,
                            and creative work behind
                            the Salubong celebration.
                          </p>


                          <div
                            className="
                              mt-8
                              grid
                              grid-cols-2
                              gap-4
                              sm:grid-cols-3
                            "
                          >

                            {selectedEvent.preparationImages.map(
                              (image, index) => (

                                <motion.button
                                  key={index}
                                  type="button"
                                  whileHover={{
                                    scale: 1.03,
                                  }}
                                  onClick={() =>
                                    setGalleryImage(
                                      image
                                    )
                                  }
                                  className="
                                    group
                                    relative
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
                                    alt={`Salubong preparation ${index + 1}`}
                                    loading="lazy"
                                    className="
                                      h-full
                                      w-full
                                      object-cover
                                      transition
                                      duration-500
                                      group-hover:scale-105
                                    "
                                  />


                                  <div
                                    className="
                                      absolute
                                      inset-0
                                      flex
                                      items-center
                                      justify-center
                                      bg-black/0
                                      text-white
                                      transition
                                      group-hover:bg-black/30
                                    "
                                  >

                                    <FaImages
                                      className="
                                        opacity-0
                                        transition
                                        group-hover:opacity-100
                                      "
                                    />

                                  </div>

                                </motion.button>

                              )
                            )}

                          </div>

                        </motion.div>

                      )}


                      {/* VIDEOS */}

                      {salubongTab ===
                        "videos" && (

                        <motion.div
                          key="videos"
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -10,
                          }}
                        >

                          <span
                            className="
                              text-xs
                              font-black
                              uppercase
                              tracking-[2px]
                              text-[#CA1F7B]
                            "
                          >
                            Media Recap
                          </span>


                          <h3
                            className="
                              mt-3
                              text-2xl
                              font-black
                              text-black
                              sm:text-3xl
                            "
                          >
                            Salubong Video Highlights
                          </h3>


                          <p
                            className="
                              mt-4
                              max-w-3xl
                              text-sm
                              leading-7
                              text-black/60
                            "
                          >
                            Watch the preparation and
                            promotional materials
                            created for Salubong.
                          </p>


                          <div
                            className="
                              mt-8
                              overflow-hidden
                              rounded-3xl
                              bg-black
                              shadow-xl
                            "
                          >

                            <video
                              controls
                              playsInline
                              className="
                                max-h-[600px]
                                w-full
                              "
                            >

                              <source
                                src={
                                  preparationVideo
                                }
                                type="video/mp4"
                              />

                              Your browser does not
                              support the video tag.

                            </video>

                          </div>


                          <div
                            className="
                              mt-4
                              flex
                              items-center
                              gap-2
                              text-xs
                              font-semibold
                              text-black/45
                            "
                          >

                            <FaPlay
                              className="text-[#CA1F7B]"
                            />

                            Salubong preparation
                            and behind-the-scenes
                            video

                          </div>

                        </motion.div>

                      )}


                      {/* PRIZES */}

                      {salubongTab ===
                        "prizes" && (

                        <motion.div
                          key="prizes"
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -10,
                          }}
                        >

                          <span
                            className="
                              text-xs
                              font-black
                              uppercase
                              tracking-[2px]
                              text-[#CA1F7B]
                            "
                          >
                            Contest & Rewards
                          </span>


                          <h3
                            className="
                              mt-3
                              text-2xl
                              font-black
                              text-black
                              sm:text-3xl
                            "
                          >
                            Salubong Prizes
                          </h3>


                          <p
                            className="
                              mt-4
                              max-w-3xl
                              text-sm
                              leading-7
                              text-black/60
                            "
                          >
                            Discover the prizes prepared
                            for participating Sebastinians
                            throughout the celebration.
                          </p>


                          <div
                            className="
                              mt-8
                              grid
                              gap-5
                              sm:grid-cols-3
                            "
                          >

                            {salubongPrizes.map(
                              (prize, index) => (

                                <motion.div
                                  key={index}
                                  whileHover={{
                                    y: -5,
                                  }}
                                  className="
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-[#C0C0C0]
                                    bg-white
                                    shadow-sm
                                  "
                                >

                                  <div
                                    className="
                                      h-52
                                      overflow-hidden
                                    "
                                  >

                                    <img
                                      src={
                                        prize.image
                                      }
                                      alt={
                                        prize.title
                                      }
                                      className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition
                                        duration-500
                                        hover:scale-105
                                      "
                                    />

                                  </div>


                                  <div className="p-5">

                                    <span
                                      className="
                                        inline-flex
                                        rounded-full
                                        bg-[#DF79B0]/15
                                        px-3
                                        py-1
                                        text-[9px]
                                        font-black
                                        uppercase
                                        tracking-wider
                                        text-[#CA1F7B]
                                      "
                                    >
                                      {prize.type}
                                    </span>


                                    <h4
                                      className="
                                        mt-3
                                        text-lg
                                        font-black
                                        text-black
                                      "
                                    >
                                      {prize.title}
                                    </h4>


                                    <p
                                      className="
                                        mt-2
                                        text-xs
                                        leading-6
                                        text-black/55
                                      "
                                    >
                                      {
                                        prize.description
                                      }
                                    </p>

                                  </div>

                                </motion.div>

                              )
                            )}

                          </div>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </div>

                </>

              ) : (

              

                /* =================================================
                   NORMAL ARCHIVE EVENT MODAL
                ================================================= */

                <>

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
                      src={
                        selectedEvent.featuredImage
                      }
                      alt={
                        selectedEvent.title
                      }
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
                        via-black/10
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
                          font-black
                          text-white
                        "
                      >
                        S.Y. {selectedEvent.schoolYear}
                      </span>


                      <h2
                        className="
                          mt-4
                          text-3xl
                          font-black
                          text-white
                          sm:text-5xl
                        "
                      >
                        {selectedEvent.title}
                      </h2>

                    </div>

                  </div>


                  <div className="p-6 sm:p-10">

                    <div
                      className="
                        grid
                        gap-8
                        lg:grid-cols-[1.2fr_.8fr]
                      "
                    >

                      <div>

                        <span
                          className="
                            text-xs
                            font-black
                            uppercase
                            tracking-[2px]
                            text-[#CA1F7B]
                          "
                        >
                          Event Overview
                        </span>


                        <p
                          className="
                            mt-4
                            text-sm
                            leading-8
                            text-black/65
                            sm:text-base
                          "
                        >
                          {
                            selectedEvent.description
                          }
                        </p>

                      </div>


                      <div
                        className="
                          rounded-2xl
                          bg-[#FDF0F5]
                          p-6
                        "
                      >

                        <h4
                          className="
                            font-black
                            text-black
                          "
                        >
                          Event Details
                        </h4>


                        <div className="mt-5 space-y-5">

                          <DetailRow
                            icon={<FaCalendarAlt />}
                            label="Date"
                            value={
                              selectedEvent.date
                            }
                          />

                          <DetailRow
                            icon={<FaMapMarkerAlt />}
                            label="Location"
                            value={
                              selectedEvent.location
                            }
                          />

                          <DetailRow
                            icon={<FaUserTie />}
                            label="Project Head"
                            value={
                              selectedEvent.head
                            }
                          />

                        </div>

                      </div>

                    </div>


                    {/* GALLERY */}

                    <div className="mt-12">

                      <span
                        className="
                          text-xs
                          font-black
                          uppercase
                          tracking-[2px]
                          text-[#CA1F7B]
                        "
                      >
                        Event Gallery
                      </span>


                      <div
                        className="
                          mt-5
                          grid
                          grid-cols-2
                          gap-3
                          sm:grid-cols-3
                          lg:grid-cols-5
                        "
                      >

                        {selectedEvent.galleryImages.map(
                          (image, index) => (

                            <button
                              key={index}
                              type="button"
                              onClick={() =>
                                setGalleryImage(
                                  image
                                )
                              }
                              className="
                                aspect-square
                                overflow-hidden
                                rounded-2xl
                                border
                                border-[#C0C0C0]
                              "
                            >

                              <img
                                src={image}
                                alt={`${selectedEvent.title} ${index + 1}`}
                                loading="lazy"
                                className="
                                  h-full
                                  w-full
                                  object-cover
                                  transition
                                  duration-500
                                  hover:scale-105
                                "
                              />

                            </button>

                          )
                        )}

                      </div>

                    </div>

                  </div>

                </>

              )}

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>


      {/* =================================================
          IMAGE LIGHTBOX
      ================================================= */}

      <AnimatePresence>

        {galleryImage && (

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
            onClick={() =>
              setGalleryImage(null)
            }
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              bg-black/90
              p-4
              backdrop-blur-sm
            "
          >

            <button
              type="button"
              onClick={() =>
                setGalleryImage(null)
              }
              className="
                absolute
                right-5
                top-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                shadow-xl
                transition
                hover:bg-[#CA1F7B]
                hover:text-white
              "
              aria-label="Close image"
            >
              <FaTimes />
            </button>


            <motion.img
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              src={galleryImage}
              alt="Expanded gallery"
              className="
                max-h-[90vh]
                max-w-[95vw]
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />

          </motion.div>

        )}

      </AnimatePresence>

    </section>

  );
}


// =====================================================
// DETAIL ROW
// =====================================================

function DetailRow({
  icon,
  label,
  value,
}) {

  return (

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
          bg-[#CA1F7B]
          text-white
        "
      >
        {icon}
      </div>


      <div>

        <p
          className="
            text-[10px]
            font-black
            uppercase
            tracking-wider
            text-black/40
          "
        >
          {label}
        </p>


        <p
          className="
            mt-1
            text-sm
            font-bold
            leading-6
            text-black
          "
        >
          {value}
        </p>

      </div>

    </div>

  );
}