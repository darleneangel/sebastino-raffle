import { motion } from "framer-motion";
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

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-12">

        <div
          className="
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[64px]
            bg-[#8E1457]
            shadow-2xl
          "
        >

          <div
            className="
              grid
              items-center
              gap-10
              px-7
              py-10
              sm:px-10
              lg:grid-cols-[.8fr_1.2fr]
              lg:px-14
              lg:py-14
            "
          >

            {/* LOGO */}

            <div
              className="
                flex
                justify-center
                lg:justify-start
              "
            >

              <div
                className="
                  flex
                  h-100
                  w-100
                  items-center
                  justify-center
                  rounded-full
                  
                  bg-none
                  p-7
                  
                "
              >

                <img
                  src={sscrLogo}
                  alt="SSCR Logo"
                  className="h-full w-full object-contain"
                />

              </div>

            </div>


            {/* INFORMATION */}

            <div>

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#DF79B0]
                  px-4
                  py-2
                  text-xs
                  font-black
                  uppercase
                  tracking-[2px]
                  text-white
                "
              >
                Admissions
              </span>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-black
                  leading-tight
                  text-white
                  sm:text-4xl
                  lg:text-4xl
                "
              >
                Admissions Still Ongoing —

                <span className="block text-[#DF79B0]">
                  Secure Your Future at SSCR
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-base
                  leading-7
                  text-white/80
                "
              >
                Discover quality Recoletos education,
                industry-aligned curricula, and a vibrant
                student life designed to prepare Sebastinos
                for meaningful careers and service.
              </p>


              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >

                <a
                  href="https://sscr.edu/Beta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-white
                    px-6
                    py-3.5
                    font-black
                    text-[#CA1F7B]
                    transition
                    hover:bg-[#DF79B0]
                    hover:text-white
                  "
                >
                  View SSCR Official Page
                  <FaArrowRight size={13} />
                </a>

                <a
                  href="https://sscr.edu/Beta/Admission.html"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/40
                    px-6
                    py-3.5
                    font-black
                    text-white
                    transition
                    hover:bg-white
                    hover:text-[#CA1F7B]
                  "
                >
                  Explore Offered Courses
                  <FaSearch size={13} />
                </a>

              </div>

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