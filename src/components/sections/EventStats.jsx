import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaUserTie,
  FaCalendarAlt,
  FaBuilding,
  FaFacebookF,
} from "react-icons/fa";

// ============================================================
// IMPORT YOUR IMAGES HERE
// ============================================================

// Example:
// import president from "../../assets/gallery/president.png";
// import event1 from "../../assets/gallery/event1.png";

// Replace these with your actual imported images.
// You can also use your existing imports if they already exist.

// ============================================================
// GALLERY DATA
// ============================================================

const galleryItems = [
  {
    id: 1,
    title: "SSG Executive Board",
    category: "Executive Board",
    division: "College Department",
    date: "AY 2025–2026",
    department: "Supreme Student Government",
    image: null,
    description:
      "The Supreme Student Government Executive Board serves as the official student leadership body representing the student community. The board works to promote student welfare, encourage active participation, and organize programs that contribute to campus life.",
    link: "#",
  },

  {
    id: 2,
    title: "Student Organizations",
    category: "ASOP / Academic Organizations",
    division: "College Department",
    date: "AY 2025–2026",
    department: "Academic Student Organizations",
    image: null,
    description:
      "Academic and student organizations provide Sebastinos with opportunities to develop leadership skills, pursue shared interests, participate in academic activities, and contribute to the wider school community.",
    link: "#",
  },

  {
    id: 3,
    title: "Campus Life",
    category: "Campus Facilities & Life",
    division: "College Department",
    date: "2025–2026",
    department: "SSCR Campus",
    image: null,
    description:
      "Campus life at San Sebastian College – Recoletos de Cavite brings together academics, student organizations, community activities, and meaningful experiences that shape the Sebastino experience.",
    link: "#",
  },

  {
    id: 4,
    title: "Major Campus Events",
    category: "Major Campus Events",
    division: "College Department",
    date: "2025–2026",
    department: "SSG and Student Organizations",
    image: null,
    description:
      "Major campus events provide opportunities for students to connect, celebrate school traditions, participate in activities, and strengthen their sense of community.",
    link: "#",
  },

  {
    id: 5,
    title: "Senior High School Community",
    category: "Campus Facilities & Life",
    division: "Senior High School",
    date: "2025–2026",
    department: "Senior High School",
    image: null,
    description:
      "The Senior High School community provides students with academic and extracurricular opportunities designed to prepare them for higher education, professional development, and responsible citizenship.",
    link: "#",
  },

  {
    id: 6,
    title: "Basic Education Community",
    category: "Campus Facilities & Life",
    division: "Junior High & Basic Education",
    date: "2025–2026",
    department: "Basic Education",
    image: null,
    description:
      "The Basic Education community nurtures students through a holistic educational environment grounded in academic development, character formation, and Augustinian values.",
    link: "#",
  },
];

// ============================================================
// OFFICER DATA
// ============================================================


const executiveOfficers = [
  {
    id: 101,
    name: "President",
    position: "SSG President",
    program: "Executive Board",
    image: null,
    description:
      "The SSG President provides overall leadership to the Supreme Student Government and represents the student body in official school activities and consultations.",
    responsibility:
      "Provides direction to the Executive Board, coordinates major student initiatives, and advocates for the welfare and interests of the student body.",
  },

  {
    id: 102,
    name: "Vice President",
    position: "Vice President",
    program: "Executive Board",
    image: null,
    description:
      "The Vice President assists the President in overseeing student government programs and activities while helping coordinate initiatives across student organizations.",
    responsibility:
      "Supports executive operations, coordinates student programs, and assists in ensuring that SSG initiatives are implemented effectively.",
  },

  {
    id: 103,
    name: "Secretary",
    position: "Secretary",
    program: "Executive Board",
    image: null,
    description:
      "The Secretary manages official documentation, correspondence, meeting records, and other administrative requirements of the student government.",
    responsibility:
      "Maintains accurate records, prepares official documents, and facilitates communication within the organization.",
  },

  {
    id: 104,
    name: "Treasurer",
    position: "Treasurer",
    program: "Executive Board",
    image: null,
    description:
      "The Treasurer is responsible for supporting the responsible management and documentation of SSG financial matters.",
    responsibility:
      "Maintains financial records, supports budget planning, and promotes transparency in student government activities.",
  },

  {
    id: 105,
    name: "Auditor",
    position: "Auditor",
    program: "Executive Board",
    image: null,
    description:
      "The Auditor helps ensure accountability and transparency in the financial activities of the Supreme Student Government.",
    responsibility:
      "Reviews financial records and helps promote proper documentation and accountability.",
  },

  {
    id: 106,
    name: "PRO",
    position: "Public Relations Officer",
    program: "Executive Board",
    image: null,
    description:
      "The Public Relations Officer helps communicate official announcements, programs, and initiatives of the SSG to the student community.",
    responsibility:
      "Manages public communication, announcements, and student-facing information.",
  },
];

// ============================================================
// FILTERS
// ============================================================

const divisions = [
  "All Divisions",
  "College Department",
  "Senior High School",
  "Junior High & Basic Education",
];

const categories = [
  "All Visuals",
  "Executive Board",
  "ASOP / Academic Organizations",
  "Campus Facilities & Life",
  "Major Campus Events",
];

// ============================================================
// ANIMATION VARIANTS
// ============================================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

// ============================================================
// GALLERY COMPONENT
// ============================================================

export default function Gallery() {
  const [selectedDivision, setSelectedDivision] =
    useState("All Divisions");

  const [selectedCategory, setSelectedCategory] =
    useState("All Visuals");

  const [selectedItem, setSelectedItem] =
    useState(null);

  const [selectedOfficer, setSelectedOfficer] =
    useState(null);

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  // ==========================================================
  // FILTER GALLERY
  // ==========================================================

  const filteredItems = galleryItems.filter((item) => {
    const divisionMatch =
      selectedDivision === "All Divisions" ||
      item.division === selectedDivision;

    const categoryMatch =
      selectedCategory === "All Visuals" ||
      item.category === selectedCategory;

    return divisionMatch && categoryMatch;
  });

  // ==========================================================
  // OPEN GALLERY ITEM
  // ==========================================================

  const openGallery = (item) => {
    const index = filteredItems.findIndex(
      (galleryItem) => galleryItem.id === item.id
    );

    setSelectedIndex(index);
    setSelectedItem(item);
  };

  // ==========================================================
  // NEXT IMAGE
  // ==========================================================

  const nextGallery = () => {
    if (!filteredItems.length) return;

    const nextIndex =
      (selectedIndex + 1) %
      filteredItems.length;

    setSelectedIndex(nextIndex);
    setSelectedItem(filteredItems[nextIndex]);
  };

  // ==========================================================
  // PREVIOUS IMAGE
  // ==========================================================

  const previousGallery = () => {
    if (!filteredItems.length) return;

    const previousIndex =
      (selectedIndex - 1 + filteredItems.length) %
      filteredItems.length;

    setSelectedIndex(previousIndex);
    setSelectedItem(filteredItems[previousIndex]);
  };

  // ==========================================================
  // ESC KEY
  // ==========================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
        setSelectedOfficer(null);
      }

      if (selectedItem && event.key === "ArrowRight") {
        nextGallery();
      }

      if (selectedItem && event.key === "ArrowLeft") {
        previousGallery();
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
  }, [
    selectedItem,
    selectedIndex,
    filteredItems,
  ]);

  // ==========================================================
  // BODY SCROLL LOCK
  // ==========================================================

  useEffect(() => {
    if (selectedItem || selectedOfficer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem, selectedOfficer]);

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <section
      id="gallery"
      className="
        relative
        overflow-hidden
        bg-[#FFF6FB]
        px-5
        py-24
        sm:px-8
        lg:px-12
      "
    >

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-[#DF79B0]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-[40%]
          h-96
          w-96
          rounded-full
          bg-[#CA1F7B]/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-12 text-center"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#DF79B0]/30
              bg-white
              px-5
              py-2
              text-sm
              font-black
              uppercase
              tracking-[2px]
              text-[#CA1F7B]
              shadow-sm
            "
          >
            SSG Visual Gallery
          </span>

          <h2
            className="
              mt-5
              text-4xl
              font-black
              leading-tight
              text-[#1F1F1F]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Celebrating
            <span
              className="
                ml-2
                bg-gradient-to-r
                from-[#8E1457]
                via-[#CA1F7B]
                to-[#DF79B0]
                bg-clip-text
                text-transparent
              "
            >
              Sebastino Life
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-8
              text-[#1F1F1F]/65
              sm:text-lg
            "
          >
            Explore the people, organizations, activities,
            and experiences that make up the vibrant
            community of San Sebastian College –
            Recoletos de Cavite.
          </p>

        </motion.div>


        {/* ===================================================
            DIVISION FILTER
        =================================================== */}

        <motion.div
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
            duration: 0.5,
          }}
          className="
            mb-5
            flex
            flex-wrap
            justify-center
            gap-2
          "
        >

          {divisions.map((division) => (
            <button
              key={division}
              onClick={() =>
                setSelectedDivision(division)
              }
              className={`
                rounded-full
                border
                px-5
                py-2.5
                text-sm
                font-bold
                transition-all
                duration-300
                sm:text-base

                ${
                  selectedDivision === division
                    ? "border-[#CA1F7B] bg-[#CA1F7B] text-white shadow-lg"
                    : "border-[#C0C0C0]/60 bg-white text-[#1F1F1F]/70 hover:border-[#DF79B0] hover:text-[#CA1F7B]"
                }
              `}
            >
              {division}
            </button>
          ))}

        </motion.div>


        {/* ===================================================
            CATEGORY FILTER
        =================================================== */}

        <motion.div
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
            duration: 0.5,
            delay: 0.1,
          }}
          className="
            mb-12
            flex
            flex-wrap
            justify-center
            gap-2
          "
        >

          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`
                rounded-xl
                px-4
                py-2
                text-sm
                font-bold
                transition-all
                duration-300
                sm:text-base

                ${
                  selectedCategory === category
                    ? "bg-[#8E1457] text-white shadow-md"
                    : "bg-white text-[#1F1F1F]/65 hover:bg-[#DF79B0]/15 hover:text-[#CA1F7B]"
                }
              `}
            >
              {category}
            </button>
          ))}

        </motion.div>


        {/* ===================================================
            GALLERY GRID
        =================================================== */}

        <AnimatePresence mode="wait">

          <motion.div
            key={`${selectedDivision}-${selectedCategory}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >

            {filteredItems.map((item) => (

              <motion.article
                key={item.id}
                variants={cardVariants}
                layout
                whileHover={{
                  y: -8,
                }}
                onClick={() =>
                  openGallery(item)
                }
                className="
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#DF79B0]/20
                  bg-white
                  shadow-sm
                  transition-shadow
                  duration-500
                  hover:shadow-2xl
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    bg-[#8E1457]/5
                  "
                >

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
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
                  ) : (
                    <div
                      className="
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center
                        bg-gradient-to-br
                        from-[#8E1457]
                        via-[#CA1F7B]
                        to-[#DF79B0]
                        px-6
                        text-center
                      "
                    >
                      <div>
                        <FaExpand
                          className="
                            mx-auto
                            mb-3
                            text-3xl
                            text-white/80
                          "
                        />

                        <p
                          className="
                            text-lg
                            font-black
                            text-white
                          "
                        >
                          {item.title}
                        </p>
                      </div>
                    </div>
                  )}


                  {/* OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-end
                      bg-gradient-to-t
                      from-[#8E1457]/95
                      via-[#8E1457]/30
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  >

                    <div
                      className="
                        w-full
                        translate-y-5
                        p-5
                        transition-transform
                        duration-500
                        group-hover:translate-y-0
                      "
                    >

                      <span
                        className="
                          inline-flex
                          rounded-full
                          bg-[#DF79B0]
                          px-3
                          py-1
                          text-xs
                          font-black
                          uppercase
                          tracking-wide
                          text-white
                        "
                      >
                        {item.category}
                      </span>

                      <h3
                        className="
                          mt-3
                          text-xl
                          font-black
                          text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          flex
                          items-center
                          gap-2
                          text-sm
                          font-bold
                          text-white/85
                        "
                      >
                        <FaExpand size={12} />
                        Expand / Read Details
                      </p>

                    </div>

                  </div>

                </div>


                {/* CARD INFO */}

                <div className="p-5">

                  <span
                    className="
                      text-xs
                      font-black
                      uppercase
                      tracking-[1.5px]
                      text-[#CA1F7B]
                    "
                  >
                    {item.category}
                  </span>

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-black
                      leading-tight
                      text-[#1F1F1F]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-[#1F1F1F]/55
                    "
                  >
                    {item.department}
                  </p>

                </div>

              </motion.article>

            ))}

          </motion.div>

        </AnimatePresence>


        {/* ===================================================
            EMPTY STATE
        =================================================== */}

        {filteredItems.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="
              rounded-3xl
              bg-white
              px-6
              py-16
              text-center
              shadow-sm
            "
          >
            <h3
              className="
                text-2xl
                font-black
                text-[#1F1F1F]
              "
            >
              No visuals found
            </h3>

            <p
              className="
                mt-3
                text-base
                text-[#1F1F1F]/60
              "
            >
              Try selecting a different division
              or category.
            </p>
          </motion.div>
        )}


        {/* ===================================================
            OFFICERS
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-10
            mt-28
            text-center
          "
        >

          <span
            className="
              text-sm
              font-black
              uppercase
              tracking-[2px]
              text-[#CA1F7B]
            "
          >
            Student Leadership
          </span>

          <h2
            className="
              mt-3
              text-4xl
              font-black
              text-[#1F1F1F]
              sm:text-5xl
            "
          >
            SSG Officers
            <span
              className="
                ml-2
                bg-gradient-to-r
                from-[#8E1457]
                to-[#DF79B0]
                bg-clip-text
                text-transparent
              "
            >
              AY 2025–2026
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-[#1F1F1F]/60
              sm:text-lg
            "
          >
            Meet the student leaders committed to
            serving, representing, and empowering
            the Sebastino community.
          </p>

        </motion.div>


        {/* OFFICER GRID */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {executiveOfficers.map((officer) => (

            <motion.article
              key={officer.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
              }}
              onClick={() =>
                setSelectedOfficer(officer)
              }
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-3xl
                border
                border-[#DF79B0]/20
                bg-white
                shadow-sm
                transition-shadow
                duration-500
                hover:shadow-2xl
              "
            >

              <div
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  bg-gradient-to-br
                  from-[#8E1457]
                  to-[#DF79B0]
                "
              >

                {officer.image ? (
                  <img
                    src={officer.image}
                    alt={officer.name}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-full
                      flex-col
                      items-center
                      justify-center
                      text-center
                    "
                  >

                    <FaUserTie
                      className="
                        text-6xl
                        text-white/80
                      "
                    />

                    <p
                      className="
                        mt-4
                        text-xl
                        font-black
                        text-white
                      "
                    >
                      {officer.position}
                    </p>

                  </div>
                )}

                <div
                  className="
                    absolute
                    inset-0
                    bg-[#8E1457]/0
                    transition-colors
                    duration-500
                    group-hover:bg-[#8E1457]/20
                  "
                />

              </div>


              <div className="p-6">

                <p
                  className="
                    text-sm
                    font-black
                    uppercase
                    tracking-[1.5px]
                    text-[#CA1F7B]
                  "
                >
                  {officer.position}
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-black
                    text-[#1F1F1F]
                  "
                >
                  {officer.name}
                </h3>

                <p
                  className="
                    mt-2
                    text-base
                    text-[#1F1F1F]/55
                  "
                >
                  {officer.program}
                </p>

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[#CA1F7B]
                  "
                >
                  <FaExpand size={12} />
                  View Officer Profile
                </div>

              </div>

            </motion.article>

          ))}

        </motion.div>

      </div>


      {/* =====================================================
          GALLERY MODAL
      ===================================================== */}

      <AnimatePresence>

        {selectedItem && (

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
              bg-black/80
              p-4
              backdrop-blur-md
            "
            onClick={() =>
              setSelectedItem(null)
            }
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                relative
                max-h-[92vh]
                w-full
                max-w-6xl
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-2xl
              "
            >

              {/* CLOSE */}

              <button
                onClick={() =>
                  setSelectedItem(null)
                }
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
                  bg-black/50
                  text-white
                  transition
                  hover:bg-[#CA1F7B]
                "
                aria-label="Close"
              >
                <FaTimes />
              </button>


              <div
                className="
                  grid
                  max-h-[92vh]
                  overflow-y-auto
                  lg:grid-cols-[1.25fr_.75fr]
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    flex
                    min-h-[300px]
                    items-center
                    justify-center
                    bg-[#1F1F1F]
                    p-5
                    sm:p-10
                  "
                >

                  {selectedItem.image ? (
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="
                        max-h-[70vh]
                        max-w-full
                        object-contain
                      "
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-80
                        w-full
                        items-center
                        justify-center
                        bg-gradient-to-br
                        from-[#8E1457]
                        to-[#DF79B0]
                        text-center
                      "
                    >
                      <h3
                        className="
                          px-8
                          text-3xl
                          font-black
                          text-white
                        "
                      >
                        {selectedItem.title}
                      </h3>
                    </div>
                  )}

                </div>


                {/* DETAILS */}

                <div className="p-7 sm:p-10">

                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-[#DF79B0]/15
                      px-4
                      py-2
                      text-sm
                      font-black
                      text-[#CA1F7B]
                    "
                  >
                    {selectedItem.category}
                  </span>

                  <h2
                    className="
                      mt-5
                      text-3xl
                      font-black
                      leading-tight
                      text-[#1F1F1F]
                      sm:text-4xl
                    "
                  >
                    {selectedItem.title}
                  </h2>


                  <div
                    className="
                      mt-6
                      space-y-4
                      border-y
                      border-[#C0C0C0]/30
                      py-5
                      text-sm
                      text-[#1F1F1F]/65
                    "
                  >

                    <div className="flex gap-3">
                      <FaCalendarAlt
                        className="mt-1 text-[#CA1F7B]"
                      />
                      <span>
                        {selectedItem.date}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <FaBuilding
                        className="mt-1 text-[#CA1F7B]"
                      />
                      <span>
                        {selectedItem.department}
                      </span>
                    </div>

                  </div>


                  <p
                    className="
                      mt-6
                      text-base
                      leading-8
                      text-[#1F1F1F]/70
                    "
                  >
                    {selectedItem.description}
                  </p>


                  <a
                    href={selectedItem.link}
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#CA1F7B]
                      px-6
                      py-3.5
                      text-sm
                      font-black
                      text-white
                      transition
                      hover:bg-[#8E1457]
                    "
                  >
                    <FaFacebookF size={13} />
                    Related Information
                  </a>

                </div>

              </div>


              {/* PREVIOUS */}

              <button
                onClick={previousGallery}
                className="
                  absolute
                  left-3
                  top-1/2
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-black/50
                  text-white
                  transition
                  hover:bg-[#CA1F7B]
                  sm:left-5
                "
                aria-label="Previous"
              >
                <FaChevronLeft />
              </button>


              {/* NEXT */}

              <button
                onClick={nextGallery}
                className="
                  absolute
                  right-3
                  top-1/2
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-black/50
                  text-white
                  transition
                  hover:bg-[#CA1F7B]
                  sm:right-5
                "
                aria-label="Next"
              >
                <FaChevronRight />
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>


      {/* =====================================================
          OFFICER MODAL
      ===================================================== */}

      <AnimatePresence>

        {selectedOfficer && (

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
              z-[110]
              flex
              items-center
              justify-center
              bg-black/70
              p-5
              backdrop-blur-md
            "
            onClick={() =>
              setSelectedOfficer(null)
            }
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
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
                rounded-3xl
                bg-white
                shadow-2xl
              "
            >

              <button
                onClick={() =>
                  setSelectedOfficer(null)
                }
                className="
                  absolute
                  right-5
                  top-5
                  z-10
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#8E1457]
                  text-white
                  transition
                  hover:bg-[#CA1F7B]
                "
                aria-label="Close officer profile"
              >
                <FaTimes />
              </button>


              <div
                className="
                  grid
                  md:grid-cols-[.8fr_1.2fr]
                "
              >

                {/* OFFICER IMAGE */}

                <div
                  className="
                    flex
                    min-h-[320px]
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-[#8E1457]
                    via-[#CA1F7B]
                    to-[#DF79B0]
                    p-8
                  "
                >

                  {selectedOfficer.image ? (
                    <img
                      src={selectedOfficer.image}
                      alt={selectedOfficer.name}
                      className="
                        h-full
                        max-h-[400px]
                        w-full
                        object-contain
                      "
                    />
                  ) : (
                    <FaUserTie
                      className="
                        text-[120px]
                        text-white/80
                      "
                    />
                  )}

                </div>


                {/* OFFICER DETAILS */}

                <div className="p-8 sm:p-10">

                  <span
                    className="
                      text-sm
                      font-black
                      uppercase
                      tracking-[2px]
                      text-[#CA1F7B]
                    "
                  >
                    {selectedOfficer.position}
                  </span>

                  <h2
                    className="
                      mt-3
                      text-4xl
                      font-black
                      text-[#1F1F1F]
                    "
                  >
                    {selectedOfficer.name}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-base
                      font-semibold
                      text-[#1F1F1F]/50
                    "
                  >
                    {selectedOfficer.program}
                  </p>

                  <div
                    className="
                      my-7
                      h-px
                      bg-[#C0C0C0]/40
                    "
                  />

                  <h3
                    className="
                      text-lg
                      font-black
                      text-[#8E1457]
                    "
                  >
                    About the Position
                  </h3>

                  <p
                    className="
                      mt-3
                      text-base
                      leading-8
                      text-[#1F1F1F]/70
                    "
                  >
                    {selectedOfficer.description}
                  </p>

                  <h3
                    className="
                      mt-7
                      text-lg
                      font-black
                      text-[#8E1457]
                    "
                  >
                    Responsibilities
                  </h3>

                  <p
                    className="
                      mt-3
                      text-base
                      leading-8
                      text-[#1F1F1F]/70
                    "
                  >
                    {selectedOfficer.responsibility}
                  </p>

                  <button
                    onClick={() =>
                      setSelectedOfficer(null)
                    }
                    className="
                      mt-8
                      rounded-full
                      bg-[#CA1F7B]
                      px-7
                      py-3.5
                      text-sm
                      font-black
                      text-white
                      transition
                      hover:bg-[#8E1457]
                    "
                  >
                    Close Profile
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