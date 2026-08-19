import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion";
import {
  FaBullhorn,
  FaCalendarAlt,
  FaFileAlt,
  FaSearch,
  FaArrowRight,
  FaGraduationCap,
  FaFacebookF,
  FaUserShield,
  FaChurch,
  FaHeart,
  FaLaptop,
  FaUniversity,
} from "react-icons/fa";


// =====================================================
// SSCR / SSG GALLERY
// =====================================================

import ssgGallery1 from "../../assets/gallery/ssg-1.jpg";
import ssgGallery2 from "../../assets/gallery/ssg-2.jpg";
import sscrGallery1 from "../../assets/gallery/sscr-1.jpg";
import sscrGallery2 from "../../assets/gallery/sscr-2.jpg";
import sscrLogo from "../../assets/logos/sscr-logo.png";

// =====================================================
// HERO FEATURES
// =====================================================

const portalFeatures = [
  {
    icon: <FaBullhorn />,
    title: "Announcements & Updates",
    description:
      "Stay informed with official advisories, campus announcements, and SSG updates in one centralized space.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Events & Activities",
    description:
      "Discover upcoming campus activities, programs, guidelines, and student engagement opportunities.",
  },
  {
    icon: <FaFileAlt />,
    title: "Transparency & Documents",
    description:
      "Access important SSG documents, public updates, initiatives, and student clearance information.",
  },
];

const institutionalGallery = [
  {
    image: ssgGallery1,
    category: "SSG",
    title: "Serving the Sebastinian Community",

    description:
      "The Supreme Student Government serves as an avenue for student representation, leadership, and participation within the Sebastinian community. Through its programs, projects, campaigns, and student-centered initiatives, the SSG works to address student concerns, encourage active participation, and create meaningful opportunities for students to contribute to campus life. Its work is grounded in service, collaboration, accountability, and the development of responsible student leaders.",

  },

  {
    image: ssgGallery2,
    category: "SSG",
    title: "Student Leadership in Action",

    description:
      "Student leadership goes beyond holding an organizational position. The SSG provides opportunities for students to work together, organize activities, communicate with their fellow Sebastinos, and contribute to the improvement of the school community. Through collaboration with students, administrators, organizations, and different offices, the SSG helps transform student ideas and concerns into meaningful programs and initiatives.",

  },

  {
    image: sscrGallery1,
    category: "SSCR",
    title: "San Sebastian College – Recoletos de Cavite",

    description:
      "San Sebastian College – Recoletos de Cavite is a Catholic educational institution that forms students through academic learning, community engagement, values formation, and service. As part of the Recollect tradition, the institution seeks to develop students not only in their chosen fields but also as individuals capable of contributing responsibly to society. The Sebastinian experience combines education, formation, community, and service in preparing students for their future roles.",

  },

  {
    image: sscrGallery2,
    category: "SSCR",
    title: "A Community of Learning and Service",

    description:
      "The Sebastinian community brings together students, faculty, administrators, personnel, and organizations in an environment centered on learning and service. Beyond the classroom, students are encouraged to participate in activities that develop leadership, collaboration, social responsibility, and a deeper sense of community. These experiences help students understand that education is not only about academic achievement but also about becoming responsible members of the community.",

  },
];
// =====================================================
// QUICK DIRECTORY
// =====================================================

const directory = [
  {
    category: "Academic Departments & Colleges",
    items: [
      {
        icon: <FaGraduationCap />,
        name: "College of Arts and Sciences",
        shortName: "CAS",
        link: "https://www.facebook.com/profile.php?id=100057338234555",
      },
      {
        icon: <FaUserShield />,
        name: "College of Criminal Justice Education",
        shortName: "CCJE",
        link: "https://www.facebook.com/profile.php?id=100057209479524",
      },
      {
        icon: <FaUniversity />,
        name: "College of Accountancy, Business Administration, Hospitality Management, and Tourism Management",
        shortName: "CABAHM",
        link: "https://www.facebook.com/profile.php?id=61571699486206",
      },
      {
        icon: <FaLaptop />,
        name: "College of Engineering and Information Technology",
        shortName: "CEIT",
        link: "https://www.facebook.com/profile.php?id=61563950141860",
      },
      {
        icon: <FaHeart />,
        name: "College of Nursing",
        shortName: "CON",
        link: "https://www.facebook.com/profile.php?id=100063998951244",
      },
      {
        icon: <FaGraduationCap />,
        name: "Senior High School",
        shortName: "SHS",
        link: "https://www.facebook.com/sscrdecaviteshs",
      },
      {
        icon: <FaUniversity />,
        name: "Basic Education",
        shortName: "BE",
        link: "https://www.facebook.com/profile.php?id=100057579094442",
      },
    ],
  },
  {
    category: "Administrative Offices & Student Services",
    items: [
      {
        icon: <FaChurch />,
        name: "Campus Ministry Office",
        shortName: "CMO",
        description:
          "Spiritual activities, values formation, and campus ministry",
        link: "https://www.facebook.com/bastecavitecampusministryoffice",
      },
      {
        icon: <FaLaptop />,
        name: "ICT Center",
        shortName: "STUDENT SERVICES",
        description:
          "Technical assistance, records, and billing clearances",
        link: "https://www.facebook.com/BasteICT",
      },
      {
        icon: <FaLaptop />,
        name: "Registrar",
        shortName: "Registrar",
        description:
          "Technical assistance, records, and billing clearances",
        link: "https://www.facebook.com/profile.php?id=100064026794213",
      },
      {
        icon: <FaLaptop />,
        name: "Alumni",
        shortName: "Alumni",
        description:
          "Technical assistance, records, and billing clearances",
        link: "https://www.facebook.com/bastecavitealumni",
      },
      {
        icon: <FaLaptop />,
        name: "Library",
        shortName: "Library",
        description:
          "Technical assistance, records, and billing clearances",
        link: "https://www.facebook.com/profile.php?id=100064133408013",
      },
      {
        icon: <FaLaptop />,
        name: "Finance Office",
        shortName: "Finance",
        description:
          "Technical assistance, records, and billing clearances",
        link: "https://www.facebook.com/profile.php?id=100063707546807",
      },
      {
        icon: <FaLaptop />,
        name: "Admission and Scholarship Office",
        shortName: "Admission",
        description:
          "Technical assistance, records, and billing clearances",
        link: "https://www.facebook.com/admissionandscholarships",
      },
      {
        icon: <FaLaptop />,
        name: "Student Affairs and Services",
        shortName: "Student Affairs",
        description:
          "Technical assistance, records, and billing clearances",
        link: "https://www.facebook.com/profile.php?id=100057615902479",
      },
      {
        icon: <FaLaptop />,
        name: "Center for Research and Creative Works",
        shortName: "CRCW",
        description:
          "Technical assistance, records, and billing clearances",
        link: "https://www.facebook.com/profile.php?id=100075936867992",
      },
      {
        icon: <FaLaptop />,
        name: "READS and ARCORES",
        shortName: "READS and ARCORES",
        description:
          "Technical assistance, records, and billing clearances",
        link: "https://www.facebook.com/bastecavitereads",
      },
    ],
  },
  {
    category: "School Portal",
    items: [
      {
        icon: <FaGraduationCap />,
        name: "San Sebastian College – Recoletos de Cavite School Portal",
        shortName: "SSCR School Portal",
        link: "https://www.sscr.edu/SchoolPortal/signin",
      },
      {
        icon: <FaGraduationCap />,
        name: "San Sebastian College – Recoletos de Cavite School Learning Management System",
        shortName: "SSCR LMS",
        link: "https://sscr.cerebro.ph/login/index.php",
      },
    ],
  },
];

// =====================================================
// COMPONENT
// =====================================================

export default function Hero({ setActiveSection }) {
  // =====================================================
  // SECTION NAVIGATION
  // =====================================================
 const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  const goToSection = (section) => {
    if (setActiveSection) {
      setActiveSection(section);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================================
  // ANIMATION VARIANTS
  // =====================================================

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <main id="Home">

      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section
  className="
    relative
    overflow-hidden
    bg-[#FDF0F5]
    px-6
    pb-20
    pt-32
    sm:px-8
    lg:px-12
    lg:pb-28
    lg:pt-40
  "
>

        {/* BACKGROUND DECORATION */}

       <div className="pointer-events-none absolute inset-0 overflow-hidden">

  <motion.div
    animate={{
      x: [0, 40, 0],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -left-40
      top-10
      h-[400px]
      w-[400px]
      rounded-full
      bg-[#DF79B0]/10
      blur-3xl
    "
  />

  <motion.div
    animate={{
      x: [0, -30, 0],
      y: [0, 30, 0],
    }}
    transition={{
      duration: 16,
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
      bg-[#CA1F7B]/5
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
          "
        >

          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[1.15fr_.85fr]
              lg:gap-20
            "
          >

            {/* LEFT */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{
                duration: 0.7,
              }}
            >

              {/* LABEL */}

              <div
  className="
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-[#DF79B0]/40
    bg-[#DF79B0]/10
    px-5
    py-2
    text-xs
    font-bold
    uppercase
    tracking-[2px]
    text-[#8E1457]
  "
>
  Supreme Student Government
</div>


              {/* HEADLINE */}

              <h1
  className="
    mt-7
    max-w-4xl
    text-4xl
    font-black
    leading-[1.05]
    tracking-tight
    text-[#171717]
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
  "
>
  <span
    className="
      bg-gradient-to-r
      from-[#8E1457]
      via-[#CA1F7B]
      to-[#DF79B0]
      bg-clip-text
      text-transparent
    "
  >
    One Studentry. One Voice,
  </span>

  <span className="block text-[#171717]">
    One Purpose.
  </span>
</h1>


              {/* DESCRIPTION */}

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  leading-8
                  text-black/55
                  sm:text-lg
                "
              >
                The Supreme Student Government serves as the voice
                of the student body by promoting student welfare,
                encouraging meaningful participation, and facilitating
                programs and activities that strengthen the Sebastino
                community.
              </p>


              {/* CTA BUTTONS */}

              <div
                className="
                  mt-9
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                "
              >

                <motion.button
                  onClick={() => goToSection("aboutus")}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#FFFAFC]
                    px-7
                    py-4
                    font-black
                    text-[#CA1F7B]
                    shadow-xl
                    transition
                    hover:bg-[#DF79B0]
                    hover:text-white
                  "
                >
                  Explore SSG Portal
                  <FaArrowRight size={14} />
                </motion.button>


                <a
                  href="https://sscr.edu/Enrollment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-white/50
                    bg-white/10
                    px-7
                    py-4
                    font-black
                    text-black/80
                    shadow-xl
                    backdrop-blur-sm
                    transition
                    hover:bg-black/10
                    hover:text-[#CA1F7B]
                  "
                >
                  Apply to SSCR Now
                  <FaGraduationCap />
                </a>

              </div>

            </motion.div>


            {/* RIGHT — VALUES CARD */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="
                relative
                mx-auto
                w-full
                max-w-xl
              "
            >

              <div
                className="
                  rounded-[32px]
                  border
                  border-white/30
                  bg-white
                  p-7
                  shadow-2xl
                  sm:p-9
                "
              >

                <div className="text-center">

                  <img
                    src={sscrLogo}
                    alt="San Sebastian College - Recoletos de Cavite"
                    className="
                      mx-auto
                      h-28
                      w-auto
                      object-contain
                      sm:h-50
                    "
                  />

                  <div className="mt-5">

                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[3px]
                        text-[#CA1F7B]
                      "
                    >
                      San Sebastian College – Recoletos
                    </p>

                    <h2
                      className="
                        mt-2
                        text-2xl
                        font-black
                        text-black
                        sm:text-3xl
                      "
                    >
                      Caritas. Veritas. Unitas.
                    </h2>

                    <p
                      className="
                        mt-2
                        text-md
                        leading-6
                        text-black/60
                      "
                    >
                      Forming students through faith,
                      truth, unity, and meaningful service.
                    </p>

                  </div>

                </div>


                {/* VALUES */}

                <div
                  className="
                    mt-7
                    
                    grid
                    grid-cols-3
                    gap-3
                  "
                >

                  {[
                    ["Caritas", "Love"],
                    ["Veritas", "Truth"],
                    ["Unitas", "Unity"],
                  ].map(([title, subtitle]) => (

                    <div
                      key={title}
                      className="
                        rounded-2xl
                        bg-[#DF79B0]/10
                        px-3
                        py-4
                        text-center
                      "
                    >

                      <p
                        className="
                          text-md
                          font-black
                          text-[#CA1F7B]
                        "
                      >
                        {title}
                      </p>

                      <p
                        className="
                          
                          text-[13px]
                          font-semibold
                          uppercase
                          tracking-wider
                          text-black/50
                        "
                      >
                        {subtitle}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          </div>


          {/* =================================================
              FEATURE HIGHLIGHTS
          ================================================= */}

          <div
            className="
              mt-16
              grid
              gap-4
              md:grid-cols-3
              
            "
          >

            {portalFeatures.map((feature, index) => (

              <motion.div
                key={feature.title}
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
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  rounded-3xl
                  border
                  border-[#C0C0C0]/50
                  bg-white
                  shadow-sm
                  text-[#171717]
                  p-6
                  backdrop-blur-md
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    text-[#CA1F7B]
                    shadow-md
                  "
                >
                  {feature.icon}
                </div>

                <h3
                  className="
                    mt-5
                    text-lg
                    font-black
                    text-black/80
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-black/70
                  "
                >
                  {feature.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          ADMISSIONS BANNER
      ================================================= */}

<section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">

  <div
    className="
      mx-auto
      max-w-7xl
      overflow-hidden
      rounded-[28px]
      bg-[#8E1457]
      shadow-[0_20px_60px_rgba(142,20,87,0.20)]
      sm:rounded-[40px]
    "
  >

    <div
      className="
        grid
        items-center
        gap-6
        px-6
        py-8
        sm:gap-8
        sm:px-8
        sm:py-10
        md:grid-cols-[220px_1fr]
        md:px-10
        lg:grid-cols-[280px_1fr]
        lg:gap-12
        lg:px-14
        lg:py-12
      "
    >

      {/* =====================================================
          SSCR LOGO
      ===================================================== */}

      <div
        className="
          flex
          justify-center
          md:justify-start
        "
      >

        <div
          className="
            flex
            h-36
            w-36
            items-center
            justify-center
            sm:h-44
            sm:w-44
            lg:h-56
            lg:w-56
          "
        >

          <img
            src={sscrLogo}
            alt="San Sebastian College – Recoletos de Cavite Logo"
            className="
              h-full
              w-full
              object-contain
            "
          />

        </div>

      </div>


      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <div className="text-center md:text-left">

        {/* LABEL */}

        <span
          className="
            inline-flex
            rounded-full
            bg-[#DF79B0]
            px-4
            py-1.5
            text-[10px]
            font-black
            uppercase
            tracking-[2px]
            text-white
            sm:px-5
            sm:py-2
            sm:text-xs
          "
        >
          Admissions
        </span>


        {/* HEADLINE */}

        <h2
          className="
            mt-4
            text-2xl
            font-black
            leading-tight
            text-white
            sm:mt-5
            sm:text-3xl
            lg:text-4xl
          "
        >
          Admissions Still Ongoing —

          <span
            className="
              block
              text-[#DF79B0]
            "
          >
            Secure Your Future at SSCR
          </span>
        </h2>


        {/* DESCRIPTION */}

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            leading-6
            text-white/80
            sm:mt-5
            sm:text-base
            sm:leading-7
            md:mx-0
          "
        >
          Discover quality Recoletos education,
          industry-aligned curricula, and a vibrant
          student life designed to prepare Sebastinos
          for meaningful careers and service.
        </p>


        {/* =================================================
            CORE VALUES
        ================================================= */}

        <div
          className="
            mt-5
            flex
            flex-wrap
            justify-center
            gap-2
            sm:gap-3
            md:justify-start
          "
        >

          <span
            className="
              rounded-full
              border
              border-white/20
              bg-white/10
              px-3
              py-1.5
              text-xs
              font-bold
              text-white
            "
          >
            Caritas
          </span>

          <span
            className="
              rounded-full
              border
              border-white/20
              bg-white/10
              px-3
              py-1.5
              text-xs
              font-bold
              text-white
            "
          >
            Veritas
          </span>

          <span
            className="
              rounded-full
              border
              border-white/20
              bg-white/10
              px-3
              py-1.5
              text-xs
              font-bold
              text-white
            "
          >
            Unitas
          </span>

        </div>


        {/* =================================================
            BUTTONS
        ================================================= */}

        <div
          className="
            mt-6
            flex
            flex-col
            gap-3
            sm:flex-row
            md:justify-start
          "
        >

          {/* OFFICIAL PAGE */}

          <a
            href="https://sscr.edu/Beta/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-white
              px-5
              py-3
              text-sm
              font-black
              text-[#8E1457]
              transition
              duration-300
              hover:bg-[#DF79B0]
              hover:text-white
              sm:w-auto
              sm:px-6
              sm:py-3.5
            "
          >
            View SSCR Official Page

            <FaArrowRight size={12} />
          </a>


          {/* COURSES */}

          <a
            href="https://sscr.edu/Beta/Admission.html"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-white/40
              px-5
              py-3
              text-sm
              font-black
              text-white
              transition
              duration-300
              hover:bg-white
              hover:text-[#8E1457]
              sm:w-auto
              sm:px-6
              sm:py-3.5
            "
          >
            Explore Offered Courses

            <FaSearch size={12} />
          </a>

        </div>

      </div>

    </div>

  </div>

</section>

{/* =====================================================
    SSG + SSCR INSTITUTIONAL GALLERY
===================================================== */}

<section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-12">

  <div className="mx-auto max-w-7xl">

    {/* =================================================
        SECTION HEADER
    ================================================= */}

    <div className="mx-auto max-w-3xl text-center">

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
          uppercase
          tracking-[2px]
          text-[#8E1457]
        "
      >
        OUR COMMUNITY
      </span>

      <h2
        className="
          mt-5
          text-3xl
          font-black
          leading-tight
          text-[#000000]
          sm:text-4xl
          lg:text-5xl
        "
      >
        One Community.
        <span className="block text-[#8E1457]">
          One Sebastinian Spirit.
        </span>
      </h2>

      <p
        className="
          mt-5
          text-sm
          leading-7
          text-[#000000]/60
          sm:text-base
        "
      >
        Discover the people, places, and values that make up
        the Sebastinian community — from student leadership
        through the SSG to the wider San Sebastian College –
        Recoletos de Cavite community.
      </p>

    </div>


    {/* =================================================
        CAROUSEL
    ================================================= */}

    <div
      className="
        mt-12
        flex
        snap-x
        snap-mandatory
        gap-5
        overflow-x-auto
        pb-6
        scrollbar-hide
      "
    >

      {institutionalGallery.map((item, index) => (
  <motion.button
    key={index}
    type="button"

    onClick={() => {
      setSelectedGalleryItem(item);
    }}

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
      y: -6,
    }}

    whileTap={{
      scale: 0.98,
    }}

    className="
      group
      min-w-[85%]
      snap-center
      overflow-hidden
      rounded-[28px]
      border
      border-[#C0C0C0]/60
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
      sm:min-w-[55%]
      lg:min-w-[38%]
    "
    aria-label={`View more information about ${item.title}`}
  >

    {/* IMAGE */}

    <div
      className="
        relative
        h-64
        overflow-hidden
        sm:h-72
      "
    >

      <img
        src={item.image}
        alt={item.title}
        className="
          h-full
          w-full
          object-cover
          transition
          duration-700
          group-hover:scale-105
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
          left-5
          top-5
          rounded-full
          bg-[#8E1457]
          px-4
          py-2
          text-[10px]
          font-black
          uppercase
          tracking-[1.5px]
          text-white
        "
      >
        {item.category}
      </span>

      {/* VIEW INDICATOR */}

      <span
        className="
          absolute
          bottom-5
          right-5
          rounded-full
          bg-white/95
          px-3
          py-2
          text-[10px]
          font-black
          uppercase
          tracking-wider
          text-[#8E1457]
          opacity-0
          transition
          duration-300
          group-hover:opacity-100
        "
      >
        View Details
      </span>

    </div>


    {/* CONTENT */}

    <div className="p-6">

      <h3
        className="
          text-xl
          font-black
          leading-tight
          text-[#000000]
        "
      >
        {item.title}
      </h3>

      <p
        className="
          mt-3
          line-clamp-3
          text-sm
          leading-7
          text-[#000000]/60
        "
      >
        {item.description}
      </p>

      <div
        className="
          mt-4
          text-sm
          font-black
          text-[#CA1F7B]
        "
      >
        Learn more →
      </div>

    </div>

  </motion.button>
      ))}
    </div>

    


    {/* =================================================
        SCROLL INDICATOR
    ================================================= */}

    <AnimatePresence>
      {selectedGalleryItem && (
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
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedGalleryItem(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
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
            transition={{
              duration: 0.25,
            }}
            className="
              relative
              max-h-[92vh]
              w-full
              max-w-5xl
              overflow-y-auto
              rounded-[28px]
              bg-white
              shadow-2xl
              sm:rounded-[36px]
            "
          >
            {/* =================================================
            CLOSE BUTTON
        ================================================= */}

            <button
              type="button"
              onClick={() => {
                setSelectedGalleryItem(null);
              }}
              className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-black/60
            text-2xl
            font-light
            text-white
            backdrop-blur-md
            transition
            hover:bg-[#CA1F7B]
            focus:outline-none
            focus:ring-2
            focus:ring-white
          "
              aria-label="Close gallery details"
            >
              ×
            </button>

            {/* =================================================
            IMAGE
        ================================================= */}

            <div
              className="
            relative
            h-[260px]
            w-full
            overflow-hidden
            bg-[#8E1457]
            sm:h-[400px]
            lg:h-[500px]
          "
            >
              <img
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.title}
                className="
              h-full
              w-full
              object-cover
            "
              />

              {/* Image overlay */}

              <div
                className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-transparent
              to-transparent
            "
              />

              {/* Category */}

              <span
                className="
              absolute
              bottom-6
              left-6
              rounded-full
              bg-[#CA1F7B]
              px-4
              py-2
              text-xs
              font-black
              uppercase
              tracking-[2px]
              text-white
            "
              >
                {selectedGalleryItem.category}
              </span>
            </div>

            {/* =================================================
            INFORMATION
        ================================================= */}

            <div
              className="
            p-6
            sm:p-8
            lg:p-10
          "
            >
              <div
                className="
              h-1
              w-12
              rounded-full
              bg-[#CA1F7B]
            "
              />

              <h2
                id="gallery-modal-title"
                className="
              mt-4
              text-2xl
              font-black
              leading-tight
              text-[#000000]
              sm:text-3xl
              lg:text-4xl
            "
              >
                {selectedGalleryItem.title}
              </h2>

              <p
                className="
              mt-5
              max-w-4xl
              text-sm
              leading-7
              text-[#000000]/65
              sm:text-base
              sm:leading-8
            "
              >
                {selectedGalleryItem.description}
              </p>

              {/* =================================================
              CATEGORY INFORMATION
          ================================================= */}

              <div
                className="
              mt-7
              rounded-2xl
              border
              border-[#DF79B0]/30
              bg-[#DF79B0]/10
              p-5
            "
              >
                <p
                  className="
                text-xs
                font-black
                uppercase
                tracking-[2px]
                text-[#CA1F7B]
              "
                >
                  {selectedGalleryItem.category === "SSG"
                    ? "Supreme Student Government"
                    : "San Sebastian College – Recoletos de Cavite"}
                </p>

                <p
                  className="
                mt-2
                text-sm
                leading-6
                text-[#000000]/60
              "
                >
                  {selectedGalleryItem.category === "SSG"
                    ? "Student leadership, representation, service, and community engagement."
                    : "Catholic education, holistic formation, community, and service."}
                </p>
              </div>

              {/* CLOSE */}

              <div className="mt-7 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedGalleryItem(null);
                  }}
                  className="
                rounded-full
                bg-[#8E1457]
                px-6
                py-3
                text-sm
                font-black
                text-white
                transition
                hover:bg-[#CA1F7B]
                focus:outline-none
                focus:ring-2
                focus:ring-[#CA1F7B]
                focus:ring-offset-2
              "
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    <div className="mt-2 flex justify-center">

      <div
        className="
          flex
          items-center
          gap-2
          text-xs
          font-semibold
          text-[#000000]/40
        "
      >

        <span
          className="
            h-1.5
            w-8
            rounded-full
            bg-[#CA1F7B]
          "
        />

        <span>
          Swipe to explore
        </span>

      </div>

    </div>


    {/* =================================================
        INFORMATION BLOCKS
    ================================================= */}

    <div
      className="
        mt-16
        grid
        gap-6
        md:grid-cols-2
      "
    >

      {/* =================================================
          ABOUT SSG
      ================================================= */}

      <div
        className="
          rounded-[28px]
          border
          border-[#DF79B0]/30
          bg-[#DF79B0]/8
          p-7
          sm:p-9
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
          Student Leadership
        </span>

        <h3
          className="
            mt-3
            text-2xl
            font-black
            text-[#000000]
            sm:text-3xl
          "
        >
          Supreme Student Government
        </h3>

        <p
          className="
            mt-4
            text-sm
            leading-7
            text-[#000000]/65
            sm:text-base
          "
        >
          The Supreme Student Government serves as a central
          student leadership body that represents the student
          community. Through its programs, activities, and
          initiatives, the SSG provides opportunities for
          students to participate, collaborate, lead, and
          contribute to campus life.
        </p>

        <button
          onClick={() => {
            if (setActiveSection) {
              setActiveSection("aboutus");
            }

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="
            mt-6
            font-bold
            text-[#CA1F7B]
            transition
            hover:text-[#8E1457]
          "
        >
          Learn more about SSG →
        </button>

      </div>


      {/* =================================================
          ABOUT SSCR
      ================================================= */}

      <div
        className="
          rounded-[28px]
          border
          border-[#C0C0C0]/70
          bg-[#8E1457]
          p-7
          text-white
          sm:p-9
        "
      >

        <span
          className="
            text-xs
            font-black
            uppercase
            tracking-[2px]
            text-[#DF79B0]
          "
        >
          Our Institution
        </span>

        <h3
          className="
            mt-3
            text-2xl
            font-black
            sm:text-3xl
          "
        >
          San Sebastian College –
          <span className="block text-[#DF79B0]">
            Recoletos de Cavite
          </span>
        </h3>

        <p
          className="
            mt-4
            text-sm
            leading-7
            text-white/80
            sm:text-base
          "
        >
          SSCR de Cavite is a Catholic institution committed
          to quality Christian community-oriented education.
          Its formative mission seeks to develop members of
          the Sebastinian community into Christ-centered,
          professional, and socially responsible leaders.
        </p>

        <a
          href="https://sscr.edu/Beta/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6
            inline-flex
            font-bold
            text-white
            transition
            hover:text-[#DF79B0]
          "
        >
          Visit SSCR Official Website →
        </a>

      </div>

    </div>


    {/* =================================================
        AUGUSTINIAN VALUES
    ================================================= */}

    <div className="mt-16">

      <div className="text-center">

        <span
          className="
            inline-flex
            rounded-full
            bg-[#CA1F7B]
            px-5
            py-2
            text-xs
            font-black
            uppercase
            tracking-[2px]
            text-white
          "
        >
          OUR VALUES
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
          Guided by Augustinian Values
        </h3>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-sm
            leading-7
            text-[#000000]/60
            sm:text-base
          "
        >
          The Sebastinian community is shaped by values that
          encourage reflection, truth, freedom, community,
          friendship, and justice.
        </p>

      </div>


      {/* VALUES */}

      <div
        className="
          mt-10
          grid
          gap-4
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >

        {[
          {
            title: "Interiority",
            description:
              "Taking time for reflection and looking inward in the search for truth.",
          },
          {
            title: "Truth",
            description:
              "Seeking and living by truth as a foundation for responsible action.",
          },
          {
            title: "Freedom",
            description:
              "Using freedom responsibly while living with purpose and grace.",
          },
          {
            title: "Community",
            description:
              "Putting the common good first and building a community founded on cooperation.",
          },
          {
            title: "Friendship",
            description:
              "Building meaningful relationships through love, trust, and genuine concern for others.",
          },
          {
            title: "Solidarity & Justice",
            description:
              "Standing with others and promoting fairness, compassion, and social responsibility.",
          },
        ].map((value, index) => (

          <motion.div
            key={value.title}
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
              delay: index * 0.08,
            }}
            className="
              rounded-2xl
              border
              border-[#C0C0C0]/60
              bg-white
              p-6
              transition
              hover:-translate-y-1
              hover:border-[#DF79B0]
              hover:shadow-lg
            "
          >

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
                text-lg
                font-black
                text-[#8E1457]
              "
            >
              {value.title}
            </h4>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-[#000000]/60
              "
            >
              {value.description}
            </p>

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</section>

      {/* =================================================
          STUDENT INQUIRY DIRECTORY
      ================================================= */}

      <section
  className="
    bg-[#FFF6FB]
    px-6
    py-20
    sm:px-8
    lg:px-12
  "
>

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

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
                uppercase
                tracking-[2px]
                text-[#CA1F7B]
              "
            >
              Student Support
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-black
                text-black
                sm:text-4xl
                md:text-5xl
              "
            >
              Student Inquiry &

              <span className="text-[#CA1F7B]">
                {" "}Clearance Directory
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-black/55
                sm:text-base
              "
            >
              Need assistance? Connect directly with the
              appropriate academic department or administrative
              office through their official communication channels.
            </p>

          </div>


          {/* DIRECTORY GROUPS */}

          <div className="mt-14 space-y-16">

            {directory.map((group) => (

              <div key={group.category}>

                <div
                  className="
                    mb-7
                    flex
                    items-center
                    gap-4
                  "
                >

                  <div
                    className="
                      h-8
                      w-1
                      rounded-full
                      bg-[#CA1F7B]
                    "
                  />

                  <h3
                    className="
                      text-xl
                      font-black
                      text-black
                      sm:text-2xl
                    "
                  >
                    {group.category}
                  </h3>

                </div>


                <div className="grid gap-3 md:grid-cols-2">

  {group.items.map((item) => (

    <a
      key={item.name}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-[#C0C0C0]/50
        bg-white
        px-5
        py-4
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#DF79B0]
        hover:shadow-md
      "
    >

      {/* ICON */}

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#DF79B0]/10
          text-[#CA1F7B]
          transition
          group-hover:bg-[#CA1F7B]
          group-hover:text-white
        "
      >
        {item.icon}
      </div>


      {/* NAME */}

      <div className="min-w-0 flex-1">

        <p
          className="
            text-sm
            font-bold
            leading-5
            text-[#171717]
          "
        >
          {item.shortName}
        </p>

        <p
          className="
            mt-0.5
            line-clamp-1
            text-xs
            text-black/50
          "
        >
          {item.name}
        </p>

      </div>


      {/* FACEBOOK */}

      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#CA1F7B]/5
          text-[#CA1F7B]
          transition
          group-hover:bg-[#CA1F7B]
          group-hover:text-white
        "
      >
        <FaFacebookF size={12} />
      </div>

    </a>

  ))}

</div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}