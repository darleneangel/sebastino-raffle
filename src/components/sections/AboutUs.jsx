import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaUsers,
  FaStar,
  FaTimes,
  FaArrowRight,
  FaUniversity,
  FaShieldAlt,

  FaHandsHelping,
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaLock,
  FaHeart,
  FaHandshake,
  FaBalanceScale,
} from "react-icons/fa";

// =====================================================
// OFFICER ASSETS
// Keep your existing officer images.
// =====================================================

import president from "../../assets/officers/president.jpg";
import vpInternal from "../../assets/officers/vp-internal.jpg";
import vpExternal from "../../assets/officers/vp-external.jpg";
import secretary from "../../assets/officers/secretary.jpg";
import treasurer from "../../assets/officers/treasurer.jpg";
import auditor from "../../assets/officers/auditor.jpg";
import pro from "../../assets/officers/pro.jpg";

// =====================================================
// OFFICERS DATA
// Names, positions, and images preserved from your
// existing AboutUs.jsx.
// =====================================================

const officers = [
  {
    name: "Cristian Jeon Lasara",
    position: "President",
    image: president,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "s.cristianjeon.lasara@sscr.edu",
    facebook: "",
    bio:
      "The President serves as the primary student representative of the Supreme Student Government. The position provides direction to the executive board, coordinates with institutional offices, and ensures that student concerns and initiatives are properly represented.",
    responsibility:
      "Provides organizational direction, represents the student body, coordinates with institutional offices, and oversees the implementation of SSG programs and initiatives.",
    advocacy:
      "Promoting responsible student leadership, meaningful representation, and a responsive student government.",
    gallery: [president],
  },

  {
    name: "Ashlene Memije",
    position: "Vice President – Internal",
    image: vpInternal,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "s.ashlene.memije@sscr.edu",
    facebook: "",
    bio:
      "The Vice President for Internal Affairs assists in coordinating internal SSG operations and supports communication among officers, committees, and student representatives.",
    responsibility:
      "Coordinates internal operations, supports executive officers and committees, and helps maintain effective communication within the student government.",
    advocacy:
      "Strengthening teamwork, coordination, and student participation within the organization.",
    gallery: [vpInternal],
  },

  {
    name: "Darlene Angel Custodio",
    position: "Vice President – External",
    image: vpExternal,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "s.darleneangel.custodio@sscr.edu",
    facebook: "",
    bio:
      "The Vice President for External Affairs focuses on coordination and collaboration with student organizations, institutional partners, and other stakeholders.",
    responsibility:
      "Builds connections with organizations, offices, and external stakeholders while supporting collaborative student initiatives.",
    advocacy:
      "Creating stronger partnerships and opportunities that benefit the wider Sebastino community.",
    gallery: [vpExternal],
  },

  {
    name: "Lenie Ann Cabanela",
    position: "Secretary",
    image: secretary,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "s.lenieann.cabanela@sscr.edu",
    facebook: "",
    bio:
      "The Secretary manages official documentation, records, correspondence, and administrative matters of the Supreme Student Government.",
    responsibility:
      "Maintains official records, prepares documentation, manages correspondence, and supports the administrative functions of the SSG.",
    advocacy:
      "Promoting organized, transparent, and accessible student government documentation.",
    gallery: [secretary],
  },

  {
    name: "Kim Cloie Canuto",
    position: "Treasurer",
    image: treasurer,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "kimcloie.canuto@sscr.edu",
    facebook: "",
    bio:
      "The Treasurer is responsible for supporting responsible financial management and maintaining proper documentation of SSG funds and project-related financial activities.",
    responsibility:
      "Supports financial planning, documentation, monitoring, and responsible handling of resources for SSG activities.",
    advocacy:
      "Encouraging responsible financial stewardship and transparency in student government projects.",
    gallery: [treasurer],
  },

  {
    name: "Carl Angelo Aquino",
    position: "Auditor",
    image: auditor,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "carlangelo.aquino@sscr.edu",
    facebook: "",
    bio:
      "The Auditor helps promote financial accountability by reviewing financial records, supporting transparency, and ensuring that financial activities follow established procedures.",
    responsibility:
      "Reviews financial documentation and supports accountability and transparency in SSG financial activities.",
    advocacy:
      "Maintaining accountability, accuracy, and transparency in student government operations.",
    gallery: [auditor],
  },

  {
    name: "Charisse Batayola",
    position: "PRO",
    image: pro,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "charisse.batayola@sscr.edu",
    facebook: "",
    bio:
      "The Public Relations Officer handles public information and helps communicate SSG programs, announcements, initiatives, and activities to the student body.",
    responsibility:
      "Manages public information and helps ensure that official SSG announcements and initiatives are communicated clearly to students.",
    advocacy:
      "Building an informed and connected student community through accessible communication.",
    gallery: [pro],
  },
];

// =====================================================
// AUGUSTINIAN VALUES
// =====================================================

const augustinianValues = [
  {
    title: "Caritas",
    subtitle: "Charity & Love",
    icon: <FaHeart />,
    description:
      "Caritas reminds Sebastinians that leadership begins with genuine concern for others. It encourages compassion, service, solidarity, and a willingness to place the welfare of the community at the heart of every action.",
  },

  {
    title: "Veritas",
    subtitle: "Truth",
    icon: <FaBalanceScale />,
    description:
      "Veritas calls student leaders to uphold truth, honesty, integrity, and accountability. It guides the SSG toward transparent communication and responsible decision-making.",
  },

  {
    title: "Unitas",
    subtitle: "Unity",
    icon: <FaHandshake />,
    description:
      "Unitas emphasizes unity and collaboration. It encourages students, organizations, officers, and institutional partners to work together toward a stronger and more inclusive Sebastino community.",
  },
];

// =====================================================
// CORE GOALS
// =====================================================

const coreGoals = [
  {
    icon: <FaHandsHelping />,
    title: "Student Welfare & Advocacy",
    description:
      "Representing student concerns, supporting welfare initiatives, and promoting a campus environment where students feel heard and valued.",
  },

  {
    icon: <FaUniversity />,
    title: "Campus Vitality & Events",
    description:
      "Creating meaningful programs, activities, and experiences that strengthen student participation and campus life.",
  },

  {
    icon: <FaShieldAlt />,
    title: "Transparency & Governance",
    description:
      "Promoting responsible leadership, clear communication, accountability, and transparent student government operations.",
  },

  {
    icon: <FaUsers />,
    title: "Community Involvement",
    description:
      "Encouraging collaboration, volunteerism, student participation, and meaningful involvement in the wider community.",
  },
];

// =====================================================
// STANDING COMMITTEES
// =====================================================

const committees = [
  {
    title: "Committee on Academics & Student Welfare",
    description:
      "Focuses on academic concerns, student welfare, representation, and initiatives that support the overall student experience.",
  },

  {
    title: "Committee on Campus Events & Culture",
    description:
      "Supports campus activities, student engagement, cultural programs, and initiatives that strengthen Sebastino campus life.",
  },

  {
    title: "Committee on Public Relations & Media Management",
    description:
      "Supports official communications, announcements, digital content, media coordination, and public information initiatives.",
  },

  {
    title: "Committee on Finance & Logistics",
    description:
      "Assists with project resources, logistics, financial coordination, documentation, and operational support.",
  },

  {
    title: "Committee on Community Extension & Advocacy",
    description:
      "Promotes community involvement, volunteerism, outreach initiatives, and advocacy-centered student programs.",
  },
];

// =====================================================
// ABOUT US COMPONENT
// =====================================================

export default function AboutUs() {
  const [selectedOfficer, setSelectedOfficer] = useState(null);

  // ===================================================
  // OPEN OFFICER MODAL
  // ===================================================

  const openOfficer = (officer) => {
    setSelectedOfficer(officer);
  };

  // ===================================================
  // CLOSE OFFICER MODAL
  // ===================================================

  const closeOfficer = () => {
    setSelectedOfficer(null);
  };

  // ===================================================
  // ESC KEY SUPPORT
  // ===================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeOfficer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ===================================================
  // PREVENT BODY SCROLL WHEN MODAL IS OPEN
  // ===================================================

  useEffect(() => {
    if (selectedOfficer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedOfficer]);

  return (
    <section
      id="aboutus"
      className="
        relative
        overflow-hidden
        bg-[#FDF8FA]
        py-24
        sm:py-28
      "
    >
      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-[#DF79B0]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          -right-40
          absolute
          top-[35%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#CA1F7B]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          left-[40%]
          h-72
          w-72
          rounded-full
          bg-[#8E1457]/5
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#CA1F7B]/10
              px-5
              py-2
              text-xs
              font-black
              uppercase
              tracking-[2px]
              text-[#CA1F7B]
              sm:text-sm
            "
          >
            <FaUniversity />
            About the Supreme Student Government
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-[#171717]
              sm:text-5xl
              md:text-6xl
            "
          >
            Serving Students.
            <span
              className="
                block
                bg-gradient-to-r
                from-[#8E1457]
                via-[#CA1F7B]
                to-[#DF79B0]
                bg-clip-text
                text-transparent
              "
            >
              Leading With Purpose.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-base
              leading-8
              text-black/60
              sm:text-lg
            "
          >
            The Supreme Student Government serves as the supreme
            student governing body of San Sebastian College –
            Recoletos de Cavite. Through servant leadership,
            student advocacy, and meaningful programs, the SSG
            works to represent student concerns and strengthen
            the Sebastino community.
          </p>
        </motion.div>


        {/* =================================================
            INSTITUTIONAL OVERVIEW
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            mx-auto
            mt-16
            max-w-5xl
            rounded-[32px]
            border
            border-[#C0C0C0]/40
            bg-white
            p-7
            shadow-sm
            sm:p-10
            md:p-12
          "
        >
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">

            <div
              className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#CA1F7B]/10
                text-2xl
                text-[#CA1F7B]
              "
            >
              <FaUsers />
            </div>

            <div className="space-y-5">

              <p
                className="
                  text-base
                  leading-8
                  text-black/70
                  sm:text-lg
                "
              >
                The Supreme Student Government is committed to
                representing the student body and providing a
                responsible avenue for student participation,
                leadership, and advocacy. It serves as a bridge
                between students and the administration while
                supporting programs that contribute to academic,
                social, and community development.
              </p>

              <p
                className="
                  text-base
                  leading-8
                  text-black/70
                  sm:text-lg
                "
              >
                Guided by the Augustinian Recollect spirit of
                <strong className="text-[#CA1F7B]">
                  {" "}Caritas, Veritas, and Unitas
                </strong>
                , the SSG seeks to cultivate leaders who serve
                with compassion, act with integrity, and work
                toward unity. Its leadership is centered on
                student welfare, meaningful participation,
                academic excellence, and responsible service.
              </p>

            </div>

          </div>
        </motion.div>


        {/* =================================================
            VISION + MISSION
        ================================================= */}

        <div
          className="
            mt-20
            grid
            gap-6
            lg:grid-cols-2
          "
        >

          {/* VISION */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="
              rounded-[32px]
              border
              border-[#C0C0C0]/40
              bg-white
              p-8
              shadow-sm
              transition-shadow
              duration-300
              hover:shadow-xl
              sm:p-10
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#DF79B0]/15
                text-xl
                text-[#CA1F7B]
              "
            >
              <FaStar />
            </div>

            <p
              className="
                mt-6
                text-xs
                font-black
                uppercase
                tracking-[2px]
                text-[#CA1F7B]
                sm:text-sm
              "
            >
              Our Vision
            </p>

            <h2
              className="
                mt-3
                text-2xl
                font-black
                text-[#171717]
                sm:text-3xl
              "
            >
              A United and Empowered Sebastino Community
            </h2>

            <p
              className="
                mt-5
                text-base
                leading-8
                text-black/65
                sm:text-lg
              "
            >
              To shape a united, Christ-centered, socially
              responsible, and empowered Sebastinian student body
              that actively participates in building a meaningful
              and inclusive academic community.
            </p>

          </motion.div>


          {/* MISSION */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              bg-[#8E1457]
              p-8
              text-white
              shadow-xl
              sm:p-10
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-52
                w-52
                rounded-full
                bg-[#DF79B0]/15
                blur-2xl
              "
            />

            <div
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-white/10
                text-xl
                text-white
              "
            >
              <FaHandsHelping />
            </div>

            <p
              className="
                relative
                mt-6
                text-xs
                font-black
                uppercase
                tracking-[2px]
                text-[#DF79B0]
                sm:text-sm
              "
            >
              Our Mission
            </p>

            <h2
              className="
                relative
                mt-3
                text-2xl
                font-black
                sm:text-3xl
              "
            >
              Leadership Through Service
            </h2>

            <p
              className="
                relative
                mt-5
                text-base
                leading-8
                text-white/85
                sm:text-lg
              "
            >
              To advocate for student rights and welfare, organize
              impactful programs, encourage meaningful participation,
              and strengthen communication between the administration
              and the student body through responsible and responsive
              student governance.
            </p>

          </motion.div>

        </div>


        {/* =================================================
            CORE GOALS
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >

          <div className="text-center">

            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[2px]
                text-[#CA1F7B]
                sm:text-sm
              "
            >
              What We Stand For
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                text-[#171717]
                sm:text-4xl
              "
            >
              Our Core Goals
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-base
                leading-7
                text-black/55
              "
            >
              Four key areas guide the SSG in creating meaningful
              and responsive student leadership.
            </p>

          </div>


          <div
            className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {coreGoals.map((goal, index) => (

              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.2 },
                }}
                className="
                  rounded-3xl
                  border
                  border-[#C0C0C0]/40
                  bg-white
                  p-7
                  shadow-sm
                  transition-shadow
                  duration-300
                  hover:border-[#DF79B0]
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#CA1F7B]/10
                    text-xl
                    text-[#CA1F7B]
                  "
                >
                  {goal.icon}
                </div>

                <h3
                  className="
                    mt-5
                    text-lg
                    font-black
                    text-[#171717]
                    sm:text-xl
                  "
                >
                  {goal.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-black/60
                    sm:text-base
                  "
                >
                  {goal.description}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>


        {/* =================================================
            AUGUSTINIAN VALUES
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >

          <div className="text-center">

            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[2px]
                text-[#CA1F7B]
                sm:text-sm
              "
            >
              Our Foundation
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                text-[#171717]
                sm:text-4xl
              "
            >
              Caritas. Veritas. Unitas.
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-base
                leading-7
                text-black/55
              "
            >
              The values that inspire the Sebastino community to
              serve with compassion, lead with truth, and work
              together in unity.
            </p>

          </div>


          <div
            className="
              mt-10
              grid
              gap-5
              md:grid-cols-3
            "
          >

            {augustinianValues.map((value, index) => (

              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[#C0C0C0]/40
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#DF79B0]
                  hover:shadow-xl
                  sm:p-10
                "
              >

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-32
                    w-32
                    translate-x-10
                    -translate-y-10
                    rounded-full
                    bg-[#DF79B0]/10
                    blur-2xl
                    transition
                    duration-500
                    group-hover:scale-150
                  "
                />

                <div
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#8E1457]
                    to-[#CA1F7B]
                    text-2xl
                    text-white
                    shadow-lg
                  "
                >
                  {value.icon}
                </div>

                <h3
                  className="
                    relative
                    mt-6
                    text-3xl
                    font-black
                    text-[#8E1457]
                  "
                >
                  {value.title}
                </h3>

                <p
                  className="
                    relative
                    mt-1
                    text-sm
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#DF79B0]
                  "
                >
                  {value.subtitle}
                </p>

                <p
                  className="
                    relative
                    mt-5
                    text-base
                    leading-8
                    text-black/60
                  "
                >
                  {value.description}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>


        {/* =================================================
            EXECUTIVE BOARD
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="mt-28"
          id="officers"
        >

          <div className="text-center">

            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[2px]
                text-[#CA1F7B]
                sm:text-sm
              "
            >
              Student Leadership
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                text-[#171717]
                sm:text-4xl
                md:text-5xl
              "
            >
              Executive Board
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-base
                leading-7
                text-black/55
                sm:text-lg
              "
            >
              Meet the student leaders entrusted with serving,
              representing, and strengthening the Sebastino
              community.
            </p>

          </div>


          {/* OFFICER GRID */}

          <div
            className="
              mt-12
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {officers.map((officer, index) => (

              <motion.button
                key={officer.name}
                type="button"
                onClick={() => openOfficer(officer)}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
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
                  rounded-[28px]
                  border
                  border-[#C0C0C0]/50
                  bg-white
                  text-left
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#DF79B0]
                  hover:shadow-2xl
                "
              >

                {/* PHOTO */}

                <div
                  className="
                    relative
                    h-72
                    overflow-hidden
                    bg-[#F6E8EE]
                  "
                >

                  <img
                    src={officer.image}
                    alt={`${officer.name} - ${officer.position}`}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-36
                      bg-gradient-to-t
                      from-black/75
                      via-black/25
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white/95
                      px-4
                      py-2
                      text-xs
                      font-black
                      text-[#CA1F7B]
                      shadow-lg
                      backdrop-blur-md
                      transition
                      duration-300
                      group-hover:bg-[#CA1F7B]
                      group-hover:text-white
                    "
                  >
                    View Profile
                    <FaArrowRight
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>

                </div>


                {/* INFORMATION */}

                <div className="p-6">

                  <h3
                    className="
                      text-xl
                      font-black
                      leading-tight
                      text-[#171717]
                    "
                  >
                    {officer.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-bold
                      text-[#CA1F7B]
                      sm:text-base
                    "
                  >
                    {officer.position}
                  </p>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      border-t
                      border-[#C0C0C0]/30
                      pt-4
                    "
                  >

                    <span
                      className="
                        text-xs
                        font-medium
                        text-black/50
                      "
                    >
                      {officer.yearLevel}
                    </span>

                    <FaChevronRight
                      className="
                        text-[#DF79B0]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </div>

                </div>

              </motion.button>

            ))}

          </div>

        </motion.div>


        {/* =================================================
            COMMITTEES — COMING SOON
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >

          <div className="text-center">

            <div
              className="
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#DF79B0]/15
                px-5
                py-2
                text-xs
                font-black
                uppercase
                tracking-[2px]
                text-[#CA1F7B]
                sm:text-sm
              "
            >
              <FaUsers />
              Organization
            </div>

            <h2
              className="
                mt-5
                text-3xl
                font-black
                text-[#171717]
                sm:text-4xl
              "
            >
              SSG Standing Committees
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-base
                leading-7
                text-black/55
                sm:text-lg
              "
            >
              Academic Year 2026–2027 committees and volunteer
              branches will be introduced as recruitment
              opportunities become available.
            </p>

          </div>


          <div
            className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {committees.map((committee, index) => (

              <motion.div
                key={committee.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#C0C0C0]/40
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-[#DF79B0]
                  hover:shadow-xl
                "
              >

                {/* COMING SOON */}

                <span
                  className="
                    absolute
                    right-5
                    top-5
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    bg-[#DF79B0]/15
                    px-3
                    py-1.5
                    text-[10px]
                    font-black
                    uppercase
                    tracking-wider
                    text-[#CA1F7B]
                  "
                >
                  <FaLock size={9} />
                  Coming Soon
                </span>


                {/* ICON */}

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#CA1F7B]/10
                    text-xl
                    text-[#CA1F7B]
                    transition
                    duration-300
                    group-hover:bg-[#CA1F7B]
                    group-hover:text-white
                  "
                >
                  <FaUsers />
                </div>


                <h3
                  className="
                    mt-6
                    pr-24
                    text-lg
                    font-black
                    leading-6
                    text-[#171717]
                    sm:text-xl
                  "
                >
                  {committee.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-black/55
                    sm:text-base
                  "
                >
                  {committee.description}
                </p>


                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    text-[#CA1F7B]
                  "
                >
                  Applications opening soon
                  <FaArrowRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>


        {/* =================================================
            CLOSING STATEMENT
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="
            relative
            mt-28
            overflow-hidden
            rounded-[36px]
            bg-[#8E1457]
            px-7
            py-12
            text-center
            shadow-xl
            sm:px-10
            sm:py-14
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              -left-20
              -top-20
              h-60
              w-60
              rounded-full
              bg-[#DF79B0]/15
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -right-24
              h-72
              w-72
              rounded-full
              bg-[#CA1F7B]/30
              blur-3xl
            "
          />

          <div className="relative">

            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[3px]
                text-[#DF79B0]
                sm:text-sm
              "
            >
              Student Leadership
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              Your Voice. Your Community.
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-8
                text-white/80
                sm:text-lg
              "
            >
              The Supreme Student Government remains committed
              to listening, serving, and creating meaningful
              opportunities for every Sebastino.
            </p>

          </div>

        </motion.div>

      </div>


      {/* =====================================================
          OFFICER PROFILE MODAL
      ===================================================== */}

      <AnimatePresence>

        {selectedOfficer && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOfficer}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/75
              p-3
              backdrop-blur-md
              sm:p-6
            "
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedOfficer.name} profile`}
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
                duration: 0.3,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
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

              {/* CLOSE */}

              <button
                type="button"
                onClick={closeOfficer}
                aria-label="Close officer profile"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-black/60
                  text-white
                  shadow-lg
                  transition
                  hover:bg-[#CA1F7B]
                "
              >
                <FaTimes />
              </button>


              <div
                className="
                  grid
                  lg:grid-cols-[.85fr_1.15fr]
                "
              >

                {/* =================================================
                    OFFICER IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    min-h-[350px]
                    overflow-hidden
                    bg-[#F7E8EF]
                    lg:min-h-[650px]
                  "
                >

                  <img
                    src={selectedOfficer.image}
                    alt={selectedOfficer.position}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-48
                      bg-gradient-to-t
                      from-black/80
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-7
                      left-7
                      right-7
                      text-white
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
                      Executive Board
                    </p>

                    <h2
                      className="
                        mt-2
                        text-3xl
                        font-black
                        leading-tight
                      "
                    >
                      {selectedOfficer.name}
                    </h2>

                    <p className="mt-1 font-bold">
                      {selectedOfficer.position}
                    </p>

                  </div>

                </div>


                {/* =================================================
                    PROFILE CONTENT
                ================================================= */}

                <div className="p-7 sm:p-9 lg:p-12">

                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      bg-[#CA1F7B]/10
                      px-4
                      py-2
                      text-xs
                      font-black
                      uppercase
                      tracking-wider
                      text-[#CA1F7B]
                    "
                  >
                    Official SSG Officer
                  </span>


                  <h2
                    className="
                      mt-5
                      text-3xl
                      font-black
                      leading-tight
                      text-[#171717]
                      sm:text-4xl
                    "
                  >
                    {selectedOfficer.name}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-lg
                      font-bold
                      text-[#CA1F7B]
                    "
                  >
                    {selectedOfficer.position}
                  </p>


                  {/* BASIC INFORMATION */}

                  <div
                    className="
                      mt-7
                      grid
                      gap-3
                      sm:grid-cols-2
                    "
                  >

                    <div
                      className="
                        rounded-2xl
                        bg-[#FDF5F8]
                        p-4
                      "
                    >
                      <p
                        className="
                          text-[10px]
                          font-black
                          uppercase
                          tracking-wider
                          text-black/40
                        "
                      >
                        Department
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-bold
                          text-[#171717]
                        "
                      >
                        {selectedOfficer.department}
                      </p>
                    </div>


                    <div
                      className="
                        rounded-2xl
                        bg-[#FDF5F8]
                        p-4
                      "
                    >
                      <p
                        className="
                          text-[10px]
                          font-black
                          uppercase
                          tracking-wider
                          text-black/40
                        "
                      >
                        Academic Year
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-bold
                          text-[#171717]
                        "
                      >
                        {selectedOfficer.yearLevel}
                      </p>
                    </div>

                  </div>


                  {/* ABOUT */}

                  <div className="mt-8">

                    <h3
                      className="
                        text-xl
                        font-black
                        text-[#171717]
                      "
                    >
                      About the Officer
                    </h3>

                    <p
                      className="
                        mt-3
                        text-base
                        leading-8
                        text-black/65
                      "
                    >
                      {selectedOfficer.bio}
                    </p>

                  </div>


                  {/* RESPONSIBILITIES */}

                  <div className="mt-7">

                    <h3
                      className="
                        text-xl
                        font-black
                        text-[#171717]
                      "
                    >
                      Office Responsibilities
                    </h3>

                    <p
                      className="
                        mt-3
                        text-base
                        leading-8
                        text-black/65
                      "
                    >
                      {selectedOfficer.responsibility}
                    </p>

                  </div>


                  {/* ADVOCACY */}

                  <div
                    className="
                      mt-7
                      rounded-2xl
                      border-l-4
                      border-[#CA1F7B]
                      bg-[#CA1F7B]/5
                      p-5
                    "
                  >

                    <p
                      className="
                        text-xs
                        font-black
                        uppercase
                        tracking-wider
                        text-[#CA1F7B]
                      "
                    >
                      Leadership Advocacy
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        font-medium
                        leading-7
                        text-black/65
                      "
                    >
                      {selectedOfficer.advocacy}
                    </p>

                  </div>


                  {/* CONTACT */}

                  <div className="mt-8">

                    <h3
                      className="
                        text-xl
                        font-black
                        text-[#171717]
                      "
                    >
                      Official Contact
                    </h3>

                    <div
                      className="
                        mt-4
                        flex
                        flex-col
                        gap-3
                        sm:flex-row
                      "
                    >

                      <a
                        href={`mailto:${selectedOfficer.email}`}
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-3
                          rounded-full
                          bg-[#CA1F7B]
                          px-5
                          py-3
                          text-sm
                          font-black
                          text-white
                          transition
                          hover:bg-[#8E1457]
                        "
                      >
                        <FaEnvelope />
                        Email Officer
                      </a>


                      {selectedOfficer.facebook && (

                        <a
                          href={selectedOfficer.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            border
                            border-[#CA1F7B]/30
                            px-5
                            py-3
                            text-sm
                            font-black
                            text-[#CA1F7B]
                            transition
                            hover:bg-[#CA1F7B]
                            hover:text-white
                          "
                        >
                          <FaFacebookF />
                          Facebook
                        </a>

                      )}

                    </div>

                  </div>


                  {/* GALLERY */}

                  <div className="mt-9">

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <h3
                        className="
                          text-xl
                          font-black
                          text-[#171717]
                        "
                      >
                        Profile Gallery
                      </h3>

                      <span
                        className="
                          text-xs
                          font-bold
                          text-black/40
                        "
                      >
                        {selectedOfficer.gallery.length} photo
                        {selectedOfficer.gallery.length !== 1
                          ? "s"
                          : ""}
                      </span>

                    </div>


                    <div
                      className="
                        mt-4
                        grid
                        grid-cols-2
                        gap-3
                      "
                    >

                      {selectedOfficer.gallery.map(
                        (photo, index) => (

                          <motion.div
                            key={index}
                            whileHover={{
                              scale: 1.02,
                            }}
                            className="
                              overflow-hidden
                              rounded-2xl
                              bg-[#F7E8EF]
                            "
                          >

                            <img
                              src={photo}
                              alt={`${selectedOfficer.name} gallery ${
                                index + 1
                              }`}
                              loading="lazy"
                              className="
                                h-40
                                w-full
                                object-cover
                                transition
                                duration-500
                                hover:scale-105
                              "
                            />

                          </motion.div>

                        )
                      )}

                    </div>

                    {selectedOfficer.gallery.length === 1 && (

                      <p
                        className="
                          mt-3
                          text-xs
                          leading-5
                          text-black/40
                        "
                      >
                        Additional leadership and campus photos
                        can be added to this officer's gallery later.
                      </p>

                    )}

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}