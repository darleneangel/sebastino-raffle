import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

import ssgLogo from "../../assets/logos/ssg-logo.jpg";

// =====================================================
// NAVIGATION LINKS
// Make sure these IDs match the IDs of your sections.
// =====================================================

const links = [
  { name: "Home", to: "Home" },
  { name: "About Us", to: "aboutus" },
  { name: "Events", to: "events" },
  { name: "Gallery", to: "gallery" },
  { name: "Contact", to: "contact" },
];

export default function Navbar({
  activeSection,
  setActiveSection,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // =====================================================
  // DETECT SCROLL POSITION
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // NAVIGATION HANDLER
  // =====================================================

 const handleNavigation = (section) => {
  if (setActiveSection) {
    setActiveSection(section);
  }

  setMobileOpen(false);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  // =====================================================
  // HOME / LOGO HANDLER
  // =====================================================

  const handleHome = () => {
    setActiveSection("Home");
    setMobileOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <motion.nav
  initial={{ y: -80 }}
  animate={{ y: 0 }}
  className={`
    fixed
    top-0
    left-0
    z-50
    w-full
    border-b
    border-white/10
    transition-all
    duration-500
    ${
      scrolled
        ? "bg-[#8E1457]/10 backdrop-blur-xl shadow-sm"
        : "bg-[#CA1F7B] shadow-md"
    }
  `}
>

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1600px]
            items-center
            justify-between
            px-5
            py-3
            sm:px-8
            lg:px-12
            xl:px-16
          "
        >

          {/* =================================================
              LOGO + ORGANIZATION NAME
          ================================================= */}

          <motion.button
            onClick={handleHome}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              flex
              items-center
              gap-3
              text-left
            "
            aria-label="Go to Home"
          >

            {/* LOGO */}

            <div
              className={`
                relative
                h-12
                w-12
                shrink-0
                overflow-hidden
                rounded-full
                border-2
                bg-white
                shadow-md
                transition-all
                duration-500
                sm:h-14
                sm:w-14
                ${
                  scrolled
                    ? "border-[#CA1F7B]"
                    : "border-white"
                }
              `}
            >

              <img
                src={ssgLogo}
                alt="Supreme Student Government Logo"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

            </div>


            {/* ORGANIZATION NAME */}

            <div className="hidden sm:block">

              <h1
                className={`
                  text-sm
                  font-black
                  leading-tight
                  transition-colors
                  duration-500
                  md:text-base
                  ${
                    scrolled
                      ? "text-[#CA1F7B]"
                      : "text-white"
                  }
                `}
              >
                Supreme Student Government
              </h1>

              <p
                className={`
                  mt-0.5
                  text-[10px]
                  font-medium
                  leading-tight
                  transition-colors
                  duration-500
                  md:text-xs
                  ${
                    scrolled
                      ? "text-[#000000]/60"
                      : "text-white/85"
                  }
                `}
              >
                San Sebastian College – Recoletos de Cavite
              </p>

            </div>

          </motion.button>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div
            className="
              hidden
              items-center
              gap-7
              lg:flex
              xl:gap-9
            "
          >

            {links.map((item) => {

              const isActive =
                activeSection === item.to;

              return (
                <button
                  key={item.to}
                  onClick={() =>
                    handleNavigation(item.to)
                  }
                  className={`
                    group
                    relative
                    cursor-pointer
                    py-2
                    text-sm
                    font-bold
                    transition-colors
                    duration-300
                    xl:text-[15px]

                    ${
                      scrolled
                        ? isActive
                          ? "text-[#CA1F7B]"
                          : "text-[#000000]/75"
                        : isActive
                          ? "text-white"
                          : "text-white/90"
                    }

                    ${
                      scrolled
                        ? "hover:text-[#CA1F7B]"
                        : "hover:text-white"
                    }
                  `}
                >

                  {item.name}

                  {/* UNDERLINE */}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }

                      ${
                        scrolled
                          ? "bg-[#CA1F7B]"
                          : "bg-white"
                      }
                    `}
                  />

                </button>
              );
            })}


            {/* =================================================
                JOIN / CONNECT BUTTON
            ================================================= */}

            <motion.button
              onClick={() =>
                handleNavigation("contact")
              }
              whileHover={{
                scale: 1.04,
                y: -1,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className={`
                flex
                items-center
                gap-2
                rounded-full
                px-5
                py-2.5
                text-sm
                font-black
                shadow-md
                transition-all
                duration-300

                ${
                  scrolled
                    ? "bg-[#CA1F7B] text-white hover:bg-[#DF79B0]"
                    : "bg-white text-[#CA1F7B] hover:bg-[#DF79B0] hover:text-white"
                }
              `}
            >

              Connect With SSG

              <FaArrowRight size={12} />

            </motion.button>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              transition-all
              duration-300
              lg:hidden

              ${
                scrolled
                  ? "bg-[#DF79B0]/15 text-[#CA1F7B] hover:bg-[#DF79B0]/25"
                  : "bg-white/15 text-white backdrop-blur-md hover:bg-white/25"
              }
            `}
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >

            {mobileOpen ? (
              <HiX size={27} />
            ) : (
              <HiMenuAlt3 size={27} />
            )}

          </button>

        </div>
      </motion.nav>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              left-4
              right-4
              top-[76px]
              z-40
              overflow-hidden
              rounded-3xl
              border
              border-[#C0C0C0]/50
              bg-white/98
              p-5
              shadow-2xl
              backdrop-blur-xl
              lg:hidden
            "
          >

            {/* MOBILE MENU HEADER */}

            <div
              className="
                mb-4
                border-b
                border-[#C0C0C0]/50
                pb-4
              "
            >

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#DF79B0]
                "
              >
                SSG Official
              </p>

              <h2
                className="
                  mt-1
                  text-lg
                  font-black
                  text-[#CA1F7B]
                "
              >
                Supreme Student Government
              </h2>

            </div>


            {/* MOBILE LINKS */}

            <div
              className="
                flex
                flex-col
                gap-1
              "
            >

              {links.map((item) => {

                const isActive =
                  activeSection === item.to;

                return (
                  <button
                    key={item.to}
                    onClick={() =>
                      handleNavigation(item.to)
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3
                      text-left
                      text-base
                      font-bold
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? "bg-[#DF79B0]/15 text-[#CA1F7B]"
                          : "text-[#000000]/75 hover:bg-[#DF79B0]/10 hover:text-[#CA1F7B]"
                      }
                    `}
                  >

                    <span>
                      {item.name}
                    </span>

                    {isActive && (
                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-[#CA1F7B]
                        "
                      />
                    )}

                  </button>
                );
              })}

            </div>


            {/* MOBILE CTA */}

            <button
              onClick={() =>
                handleNavigation("contact")
              }
              className="
                mt-5
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#CA1F7B]
                px-6
                py-3.5
                font-black
                text-white
                shadow-md
                transition-all
                hover:bg-[#DF79B0]
              "
            >

              Connect With SSG

              <FaArrowRight size={13} />

            </button>

          </motion.div>

        )}
      </AnimatePresence>
    </>
  );
}