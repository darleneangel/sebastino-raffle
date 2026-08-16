import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers,
  FaStar,
  FaBook,
  FaFilePdf,
  FaDownload,
  FaTimes,
  FaArrowRight,
  FaUniversity,
  FaShieldAlt,
  FaBullhorn,
  FaHandsHelping,
  FaChevronRight,
} from "react-icons/fa";

// =====================================================
// OFFICER ASSETS
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
// =====================================================

const officers = [
  {
    name: "President",
    position: "SSG President",
    image: president,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "ssg.president@sscr.edu",
    bio:
      "The President serves as the primary student representative of the Supreme Student Government. The position provides direction to the executive board, coordinates with institutional offices, and ensures that student concerns and initiatives are properly represented.",
  },

  {
    name: "Vice President",
    position: "Vice President – Internal",
    image: vpInternal,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "ssg.vpinternational@sscr.edu",
    bio:
      "The Vice President for Internal Affairs assists in coordinating internal SSG operations and supports communication among officers, committees, and student representatives.",
  },

  {
    name: "Vice President",
    position: "Vice President – External",
    image: vpExternal,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "ssg.vpexternal@sscr.edu",
    bio:
      "The Vice President for External Affairs focuses on coordination and collaboration with student organizations, institutional partners, and other stakeholders.",
  },

  {
    name: "Secretary",
    position: "SSG Secretary",
    image: secretary,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "ssg.secretary@sscr.edu",
    bio:
      "The Secretary manages official documentation, records, correspondence, and administrative matters of the Supreme Student Government.",
  },

  {
    name: "Treasurer",
    position: "SSG Treasurer",
    image: treasurer,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "ssg.treasurer@sscr.edu",
    bio:
      "The Treasurer is responsible for supporting responsible financial management and maintaining proper documentation of SSG funds and project-related financial activities.",
  },

  {
    name: "Auditor",
    position: "SSG Auditor",
    image: auditor,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "ssg.auditor@sscr.edu",
    bio:
      "The Auditor helps promote financial accountability by reviewing financial records, supporting transparency, and ensuring that financial activities follow established procedures.",
  },

  {
    name: "Public Relations Officer",
    position: "SSG PRO",
    image: pro,
    department: "Student Government",
    yearLevel: "A.Y. 2026–2027",
    email: "ssg.pro@sscr.edu",
    bio:
      "The Public Relations Officer handles public information and helps communicate SSG programs, announcements, initiatives, and activities to the student body.",
  },
];

// =====================================================
// CORE VALUES
// =====================================================

const coreValues = [
  {
    icon: <FaShieldAlt />,
    title: "Integrity & Transparency",
    description:
      "Promoting honest leadership and open communication regarding projects, decisions, and student government activities.",
  },

  {
    icon: <FaHandsHelping />,
    title: "Servant Leadership",
    description:
      "Putting student welfare, needs, concerns, and rights at the center of every leadership decision.",
  },

  {
    icon: <FaUsers />,
    title: "Inclusivity & Unity",
    description:
      "Ensuring that students from different departments and year levels have a voice and opportunity to participate.",
  },

  {
    icon: <FaStar />,
    title: "Excellence",
    description:
      "Striving to deliver meaningful activities, responsive student services, and quality leadership.",
  },
];

// =====================================================
// COMMITTEES
// =====================================================

const committees = [
  {
    title: "Committee on Student Rights",
    description:
      "Focused on student concerns, representation, welfare, and rights.",
  },

  {
    title: "Committee on Academics",
    description:
      "Supports academic initiatives, student concerns, and learning-related programs.",
  },

  {
    title: "Committee on Finance",
    description:
      "Supports responsible financial planning, monitoring, and accountability.",
  },

  {
    title: "Committee on Culture & Arts",
    description:
      "Promotes student creativity, culture, talents, and campus activities.",
  },

  {
    title: "Committee on Sports",
    description:
      "Supports student participation in sports and wellness-oriented activities.",
  },

  {
    title: "Student Engagement Committee",
    description:
      "Encourages student participation and collaboration across the campus community.",
  },
];

// =====================================================
// ABOUT US COMPONENT
// =====================================================

export default function AboutUs() {
  // ===================================================
  // MODAL STATE
  // ===================================================

  const [selectedOfficer, setSelectedOfficer] = useState(null);

  const [activeDocument, setActiveDocument] = useState(null);

  // ===================================================
  // CLOSE MODALS
  // ===================================================

  const closeOfficerModal = () => {
    setSelectedOfficer(null);
  };

  const closeDocumentModal = () => {
    setActiveDocument(null);
  };

  return (
    <section
      id="aboutus"
      className="
        relative
        overflow-hidden
        bg-[var(--white)]
        py-24
      "
    >
      {/* =================================================
          BACKGROUND DECORATIONS
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
          absolute
          -right-40
          top-[35%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#CA1F7B]/10
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
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
              text-sm
              font-bold
              uppercase
              tracking-[2px]
              text-[var(--primary)]
            "
          >
            <FaUniversity />

            About the SSG
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              text-[var(--black)]
              md:text-5xl
            "
          >
            Serving Students.
            <span className="block text-[var(--primary)]">
              Leading With Purpose.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-black/65
              md:text-lg
            "
          >
            Learn more about the Supreme Student Government, its
            leadership, values, responsibilities, and commitment to
            serving the Sebastino community.
          </p>
        </motion.div>

        {/* =================================================
            MISSION & VISION
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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-[30px]
              border
              border-[#C0C0C0]/40
              bg-[var(--white)]
              p-8
              shadow-lg
              md:p-10
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
                text-2xl
                text-[var(--primary)]
              "
            >
              <FaStar />
            </div>

            <p
              className="
                mt-6
                text-sm
                font-bold
                uppercase
                tracking-[2px]
                text-[var(--primary)]
              "
            >
              Our Vision
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-black
                text-[var(--black)]
              "
            >
              A Stronger Student Community
            </h2>

            <p
              className="
                mt-5
                leading-8
                text-black/65
              "
            >
              To foster an inclusive, empowered, proactive, and
              connected campus environment where every Sebastino is
              encouraged to participate, lead, and contribute to the
              development of the student community.
            </p>
          </motion.div>

          {/* MISSION */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-[30px]
              bg-[var(--primary)]
              p-8
              text-[var(--white)]
              shadow-lg
              md:p-10
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
                bg-white/15
                text-2xl
                text-[var(--white)]
              "
            >
              <FaHandsHelping />
            </div>

            <p
              className="
                mt-6
                text-sm
                font-bold
                uppercase
                tracking-[2px]
                text-white
              "
            >
              Our Mission
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Leadership Through Service
            </h2>

            <p className="mt-5 leading-8 text-white/85">
              To advocate for student welfare, promote responsible
              leadership, organize meaningful programs, strengthen
              student participation, and maintain transparent and
              responsive governance for the Sebastino community.
            </p>
          </motion.div>
        </div>

        {/* =================================================
            CORE VALUES
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <div className="text-center">
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[2px]
                text-[var(--primary)]
              "
            >
              What Guides Us
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                text-[var(--black)]
                md:text-4xl
              "
            >
              Our Core Values
            </h2>
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
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="
                  rounded-3xl
                  border
                  border-[#C0C0C0]/40
                  bg-[var(--white)]
                  p-7
                  shadow-sm
                  transition
                  hover:shadow-lg
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
                    text-[var(--primary)]
                  "
                >
                  {value.icon}
                </div>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-black
                    text-[var(--black)]
                  "
                >
                  {value.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
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
            EXECUTIVE OFFICERS
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28"
          id="officers"
        >
          <div className="text-center">
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[2px]
                text-[var(--primary)]
              "
            >
              Student Leadership
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                text-[var(--black)]
                md:text-4xl
              "
            >
              Executive Officers
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-black/60
              "
            >
              Meet the student leaders serving the Sebastino
              community for Academic Year 2026–2027.
            </p>
          </div>

          {/* OFFICER GRID */}

          <div
            className="
              mt-10
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {officers.map((officer, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={() => setSelectedOfficer(officer)}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#C0C0C0]/50
                  bg-[var(--white)]
                  text-left
                  shadow-sm
                  transition
                  hover:border-[#DF79B0]
                  hover:shadow-xl
                "
              >
                {/* PHOTO */}

                <div className="relative h-72 overflow-hidden">
                  <img
                    src={officer.image}
                    alt={officer.position}
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
                      inset-x-0
                      bottom-0
                      h-32
                      bg-gradient-to-t
                      from-black/70
                      to-transparent
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-4
                      left-4
                      rounded-full
                      bg-[var(--primary)]
                      px-3
                      py-1
                      text-xs
                      font-bold
                      text-[var(--white)]
                    "
                  >
                    VIEW PROFILE
                  </span>
                </div>

                {/* INFORMATION */}

                <div className="p-6">
                  <h3
                    className="
                      text-xl
                      font-black
                      text-[var(--black)]
                    "
                  >
                    {officer.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-bold
                      text-[var(--primary)]
                    "
                  >
                    {officer.position}
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      justify-between
                      text-xs
                      text-black/50
                    "
                  >
                    <span>{officer.yearLevel}</span>

                    <FaChevronRight
                      className="
                        text-[var(--secondary)]
                        transition
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
            STANDING COMMITTEES
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <div className="text-center">
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[2px]
                text-[var(--primary)]
              "
            >
              Organization
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                text-[var(--black)]
                md:text-4xl
              "
            >
              Standing Committees
            </h2>

            <p className="mt-4 text-black/60">
              Explore the committees supporting different areas of
              student representation and engagement.
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
              <div
                key={index}
                className="
                  relative
                  rounded-3xl
                  border
                  border-[#C0C0C0]/40
                  bg-[var(--white)]
                  p-7
                  shadow-sm
                "
              >
                <span
                  className="
                    absolute
                    right-5
                    top-5
                    rounded-full
                    bg-[#DF79B0]/15
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-[var(--primary)]
                  "
                >
                  Coming Soon
                </span>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#CA1F7B]/10
                    text-[var(--primary)]
                  "
                >
                  <FaUsers />
                </div>

                <h3
                  className="
                    mt-5
                    pr-24
                    text-lg
                    font-black
                    text-[var(--black)]
                  "
                >
                  {committee.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-black/55
                  "
                >
                  {committee.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            TRANSPARENCY HUB
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28"
          id="transparency"
        >
          <div className="text-center">
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[2px]
                text-[var(--primary)]
              "
            >
              Accountability
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                text-[var(--black)]
                md:text-4xl
              "
            >
              Transparency Hub
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-black/60
              "
            >
              Access official SSG documents and financial
              information to promote transparency and accountability.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              gap-6
              md:grid-cols-2
            "
          >
            {/* CONSTITUTION */}

            <motion.button
              type="button"
              whileHover={{ y: -5 }}
              onClick={() =>
                setActiveDocument("constitution")
              }
              className="
                rounded-3xl
                border
                border-[#C0C0C0]/50
                bg-[var(--white)]
                p-8
                text-left
                shadow-sm
                transition
                hover:border-[#DF79B0]
                hover:shadow-lg
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
                  text-2xl
                  text-[var(--primary)]
                "
              >
                <FaBook />
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-black
                  text-[var(--black)]
                "
              >
                SSG Constitution & Bylaws
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                  text-black/60
                "
              >
                Review the governing principles, responsibilities,
                organizational structure, and procedures of the
                Supreme Student Government.
              </p>

              <span
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-[var(--primary)]
                "
              >
                View Document
                <FaArrowRight />
              </span>
            </motion.button>

            {/* FINANCIAL REPORTS */}

            <motion.button
              type="button"
              whileHover={{ y: -5 }}
              onClick={() =>
                setActiveDocument("financial")
              }
              className="
                rounded-3xl
                border
                border-[#C0C0C0]/50
                bg-[var(--white)]
                p-8
                text-left
                shadow-sm
                transition
                hover:border-[#DF79B0]
                hover:shadow-lg
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
                  text-2xl
                  text-[var(--primary)]
                "
              >
                <FaFilePdf />
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  font-black
                  text-[var(--black)]
                "
              >
                Financial Reports
              </h3>

              <p
                className="
                  mt-3
                  leading-7
                  text-black/60
                "
              >
                Access financial reports and summaries for SSG
                projects and activities during the current academic
                year.
              </p>

              <span
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-[var(--primary)]
                "
              >
                View Financial Reports
                <FaArrowRight />
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* =================================================
            STUDENT ADVOCACY
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <div className="text-center">
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[2px]
                text-[var(--primary)]
              "
            >
              Student Advocacy
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                text-[var(--black)]
                md:text-4xl
              "
            >
              What We Do
            </h2>
          </div>

          <div
            className="
              mt-10
              grid
              gap-6
              md:grid-cols-3
            "
          >
            {/* GRIEVANCE */}

            <div
              className="
                rounded-3xl
                border
                border-[#C0C0C0]/40
                bg-[var(--white)]
                p-7
                shadow-sm
              "
            >
              <FaBullhorn
                className="
                  text-3xl
                  text-[var(--primary)]
                "
              />

              <h3
                className="
                  mt-5
                  text-xl
                  font-black
                  text-[var(--black)]
                "
              >
                Grievance & Concern Desk
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-black/60
                "
              >
                Provides students with a channel to raise concerns,
                suggestions, and issues requiring student government
                assistance.
              </p>
            </div>

            {/* PROJECT EXECUTION */}

            <div
              className="
                rounded-3xl
                border
                border-[#C0C0C0]/40
                bg-[var(--white)]
                p-7
                shadow-sm
              "
            >
              
              

              <h3
                className="
                  mt-5
                  text-xl
                  font-black
                  text-[var(--black)]
                "
              >
                Project Execution
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-black/60
                "
              >
                Supports campus-wide activities, orientation
                programs, student initiatives, and meaningful
                community events.
              </p>
            </div>

            {/* DEPARTMENTAL SUPPORT */}

            <div
              className="
                rounded-3xl
                border
                border-[#C0C0C0]/40
                bg-[var(--white)]
                p-7
                shadow-sm
              "
            >
              <FaUsers
                className="
                  text-3xl
                  text-[var(--primary)]
                "
              />

              <h3
                className="
                  mt-5
                  text-xl
                  font-black
                  text-[var(--black)]
                "
              >
                Departmental Support
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-black/60
                "
              >
                Coordinates with institutional offices and student
                organizations to help streamline student activities
                and initiatives.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            CLOSING CTA
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-28
            rounded-[35px]
            bg-[var(--primary)]
            p-10
            text-center
            shadow-xl
            md:p-14
          "
        >
          <h2
            className="
              text-3xl
              font-black
              text-[var(--white)]
              md:text-4xl
            "
          >
            Your Voice. Your Community. Your SSG.
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              leading-7
              text-white/85
            "
          >
            The Supreme Student Government remains committed to
            listening, serving, and creating opportunities for every
            Sebastino.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          OFFICER MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedOfficer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOfficerModal}
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
            "
            role="dialog"
            aria-modal="true"
            aria-label="Officer profile"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-4xl
                overflow-y-auto
                rounded-[30px]
                bg-[var(--white)]
                shadow-2xl
              "
            >
              {/* CLOSE */}

              <button
                type="button"
                onClick={closeOfficerModal}
                aria-label="Close officer profile"
                className="
                  absolute
                  right-5
                  top-5
                  z-10
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-black/60
                  text-[var(--white)]
                  transition
                  hover:bg-[var(--primary)]
                "
              >
                <FaTimes />
              </button>

              <div className="grid md:grid-cols-[.8fr_1.2fr]">

                {/* PHOTO */}

                <div className="h-[350px] md:h-full">
                  <img
                    src={selectedOfficer.image}
                    alt={selectedOfficer.position}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </div>

                {/* CONTENT */}

                <div className="p-8 md:p-10">

                  <span
                    className="
                      inline-block
                      rounded-full
                      bg-[#CA1F7B]/10
                      px-4
                      py-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-[var(--primary)]
                    "
                  >
                    Executive Officer
                  </span>

                  <h2
                    className="
                      mt-5
                      text-3xl
                      font-black
                      text-[var(--black)]
                    "
                  >
                    {selectedOfficer.name}
                  </h2>

                  <p
                    className="
                      mt-1
                      text-lg
                      font-bold
                      text-[var(--primary)]
                    "
                  >
                    {selectedOfficer.position}
                  </p>

                  <div
                    className="
                      mt-6
                      space-y-3
                      rounded-2xl
                      bg-black/[.03]
                      p-5
                    "
                  >
                    <p className="text-sm text-black/65">
                      <strong className="text-[var(--black)]">
                        Department:
                      </strong>{" "}
                      {selectedOfficer.department}
                    </p>

                    <p className="text-sm text-black/65">
                      <strong className="text-[var(--black)]">
                        Academic Year:
                      </strong>{" "}
                      {selectedOfficer.yearLevel}
                    </p>

                    <p className="text-sm text-black/65">
                      <strong className="text-[var(--black)]">
                        Official Email:
                      </strong>{" "}
                      {selectedOfficer.email}
                    </p>
                  </div>

                  <h3
                    className="
                      mt-7
                      text-lg
                      font-black
                      text-[var(--black)]
                    "
                  >
                    About the Officer
                  </h3>

                  <p
                    className="
                      mt-3
                      leading-8
                      text-black/65
                    "
                  >
                    {selectedOfficer.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          DOCUMENT MODAL
      ===================================================== */}

      <AnimatePresence>
        {activeDocument && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDocumentModal}
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
            "
            role="dialog"
            aria-modal="true"
            aria-label="SSG document"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-3xl
                overflow-y-auto
                rounded-[30px]
                bg-[var(--white)]
                p-8
                shadow-2xl
                md:p-10
              "
            >

              {/* CLOSE */}

              <button
                type="button"
                onClick={closeDocumentModal}
                aria-label="Close document"
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-black/5
                  text-[var(--black)]
                  transition
                  hover:bg-[var(--primary)]
                  hover:text-white
                "
              >
                <FaTimes />
              </button>

              {/* ==========================================
                  CONSTITUTION
              ========================================== */}

              {activeDocument === "constitution" && (
                <>
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#CA1F7B]/10
                      text-2xl
                      text-[var(--primary)]
                    "
                  >
                    <FaBook />
                  </div>

                  <h2
                    className="
                      mt-6
                      text-3xl
                      font-black
                      text-[var(--black)]
                    "
                  >
                    SSG Constitution & Bylaws
                  </h2>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-black/60
                    "
                  >
                    Official governing document of the Supreme
                    Student Government. The document provides the
                    organizational framework, responsibilities,
                    rights, and procedures governing student
                    leadership.
                  </p>

                  <div
                    className="
                      mt-8
                      rounded-2xl
                      border
                      border-[#C0C0C0]/40
                      bg-black/[.02]
                      p-6
                    "
                  >
                    <div className="flex items-center gap-4">
                      <FaFilePdf
                        className="
                          text-3xl
                          text-[var(--primary)]
                        "
                      />

                      <div>
                        <h3
                          className="
                            font-bold
                            text-[var(--black)]
                          "
                        >
                          SSG Constitution & Bylaws.pdf
                        </h3>

                        <p className="text-sm text-black/50">
                          Official SSG document
                        </p>
                      </div>
                    </div>

                    {/* 
                      Replace "#" with the actual PDF path
                      once the document is available.
                    */}

                    <a
                        href="/documents/ssg-constitution-bylaws.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download
  className="
    mt-6
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-[var(--primary)]
    px-6
    py-3
    font-bold
    text-[var(--white)]
    transition
    hover:bg-[var(--secondary)]
  "
>
  <FaDownload />
  Download PDF
</a>
                  </div>
                </>
              )}

              {/* ==========================================
                  FINANCIAL REPORTS
              ========================================== */}

              {activeDocument === "financial" && (
                <>
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#DF79B0]/15
                      text-2xl
                      text-[var(--primary)]
                    "
                  >
                    <FaFilePdf />
                  </div>

                  <h2
                    className="
                      mt-6
                      text-3xl
                      font-black
                      text-[var(--black)]
                    "
                  >
                    Financial Reports
                  </h2>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-black/60
                    "
                  >
                    Financial documentation for SSG activities
                    and projects during Academic Year 2026–2027.
                  </p>

                  {/* SEMESTER */}

                  <div
                    className="
                      mt-8
                      rounded-2xl
                      border
                      border-[#DF79B0]/40
                      bg-[#DF79B0]/10
                      p-6
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-[var(--primary)]
                      "
                    >
                      Financial Report
                    </p>

                    <h3
                      className="
                        mt-2
                        text-xl
                        font-black
                        text-[var(--black)]
                      "
                    >
                      1st Semester S.Y. 2026–2027
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-black/60
                      "
                    >
                      Financial report and summary of SSG
                      activities and expenditures for the first
                      semester.
                    </p>

                    {/* 
                      Replace "#" with the actual PDF path.
                    */}

                    <a
                      href="/documents/financial-report-1st-sem-2026-2027.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download
  className="
    mt-5
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-[var(--primary)]
    px-6
    py-3
    font-bold
    text-[var(--white)]
    transition
    hover:bg-[var(--secondary)]
  "
>
  <FaDownload />
  View / Download Report
</a>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}