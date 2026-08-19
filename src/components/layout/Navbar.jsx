import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

import ssgLogo from "../../assets/logos/ssg-logo.jpg";

// =====================================================
// NAVIGATION LINKS
// These values MUST match the cases in Home.jsx
// =====================================================

const links = [
  { name: "Home", to: "hero" },
  { name: "Events", to: "events" },
  { name: "Gallery", to: "gallery" },
  { name: "Contact", to: "contact" },
  { name: "About Us", to: "aboutus" },
];

export default function Navbar({
  activeSection,
  setActiveSection,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // =====================================================
  // SCROLL DETECTION
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // NAVIGATION
  // Because your website uses section switching,
  // we DON'T use href="#..." here.
  // =====================================================

  const handleNavigation = (section) => {
    if (setActiveSection) {
      setActiveSection(section);
    }

    setMobileOpen(false);

    // Always return to top when switching sections
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================================
  // CONNECT WITH SSG
  // =====================================================

  const handleConnect = () => {
    handleNavigation("contact");
  };

  // =====================================================
  // LOGO / HOME
  // =====================================================

  const handleLogoClick = () => {
    handleNavigation("hero");
  };

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          border-b
          transition-all
          duration-500

          ${
            scrolled
              ? `
                border-[#EBC9D7]
                bg-[#FDF0F5]/95
                shadow-md
                backdrop-blur-xl
              `
              : `
                border-[#EBC9D7]/70
                bg-[#FDF0F5]/80
                backdrop-blur-xl
              `
          }
        `}
      >

        <div
          className={`
            mx-auto
            flex
            w-full
            max-w-[1500px]
            items-center
            justify-between
            px-5
            transition-all
            duration-500
            sm:px-8
            lg:px-12
            ${
              scrolled
                ? "py-2.5"
                : "py-3.5"
            }
          `}
        >

          {/* =================================================
              BRANDING
          ================================================= */}

          <motion.button
            type="button"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
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
                shrink-0
                overflow-hidden
                
                transition-all
                duration-500

                ${
                  scrolled
                    ? "h-11 w-11"
                    : "h-12 w-12"
                }

                sm:h-12
                sm:w-12
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

              <div className="flex items-center gap-1.5">

                <span
                  className="
                    text-sm
                    font-bold
                    leading-tight
                    text-[#2D2530]
                    md:text-base
                  "
                >
                  Supreme Student Government
                </span>

                <span
                  className="
                    text-xs
                    text-[#8A8087]
                  "
                >
                  |
                </span>

                <span
                  className="
                    text-xs
                    font-medium
                    text-[#6B6268]
                    md:text-sm
                  "
                >
                  College Department
                </span>

              </div>

              <p
                className="
                  mt-0.5
                  text-[9px]
                  font-medium
                  text-[#8A8087]
                  md:text-[10px]
                "
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
              gap-6
              lg:flex
              xl:gap-8
            "
          >

            {links.map((item) => {

              const isActive =
                activeSection === item.to;

              return (
                <button
                  key={item.to}
                  type="button"
                  onClick={() =>
                    handleNavigation(item.to)
                  }
                  className={`
                    group
                    relative
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    xl:text-[15px]

                    ${
                      isActive
                        ? "font-semibold text-[#9F3F67]"
                        : "text-[#6B6268]"
                    }

                    hover:text-[#9F3F67]
                  `}
                >

                  {item.name}

                  {/* ANIMATED UNDERLINE */}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#C85C88]
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />

                </button>
              );
            })}


            {/* =================================================
                CONNECT WITH SSG CTA
            ================================================= */}

            <motion.button
              type="button"
              onClick={handleConnect}
              whileHover={{
                scale: 1.03,
                y: -1,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-[#C85C88]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:bg-[#9F3F67]
                hover:shadow-md
              "
            >

              Connect with SSG

              <FaArrowRight
                size={11}
              />

            </motion.button>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <motion.button
            type="button"
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            whileTap={{ scale: 0.92 }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-[#EBC9D7]
              bg-white
              text-[#2D2530]
              shadow-sm
              transition-all
              duration-300
              hover:bg-[#FDF0F5]
              lg:hidden
            "
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >

            {mobileOpen ? (
              <HiX size={24} />
            ) : (
              <HiMenuAlt3 size={24} />
            )}

          </motion.button>

        </div>
      </motion.nav>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>

        {mobileOpen && (

          <>
            {/* BACKDROP */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-[#2D2530]/20
                backdrop-blur-sm
                lg:hidden
              "
            />

            {/* DRAWER */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
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
                duration: 0.25,
              }}
              className="
                fixed
                left-4
                right-4
                top-[70px]
                z-40
                overflow-hidden
                rounded-2xl
                border
                border-[#EBC9D7]
                bg-[#FDF0F5]/95
                p-5
                shadow-xl
                backdrop-blur-xl
                lg:hidden
              "
            >

              {/* MOBILE HEADER */}

              <div
                className="
                  mb-4
                  border-b
                  border-[#EBC9D7]
                  pb-4
                "
              >

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-[#C85C88]
                  "
                >
                  SSG Official
                </p>

                <h2
                  className="
                    mt-1
                    text-base
                    font-bold
                    text-[#2D2530]
                  "
                >
                  Supreme Student Government
                </h2>

                <p
                  className="
                    mt-0.5
                    text-xs
                    text-[#8A8087]
                  "
                >
                  College Department
                </p>

              </div>


              {/* MOBILE LINKS */}

              <div className="flex flex-col">

                {links.map((item, index) => {

                  const isActive =
                    activeSection === item.to;

                  return (
                    <motion.button
                      key={item.to}
                      type="button"
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      onClick={() =>
                        handleNavigation(item.to)
                      }
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        border-b
                        border-[#EBC9D7]/60
                        px-3
                        py-3.5
                        text-left
                        text-sm
                        transition-all
                        duration-200

                        ${
                          isActive
                            ? "font-semibold text-[#9F3F67]"
                            : "font-medium text-[#6B6268]"
                        }

                        hover:translate-x-1
                        hover:text-[#9F3F67]
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
                            bg-[#C85C88]
                          "
                        />
                      )}

                    </motion.button>
                  );
                })}

              </div>


              {/* MOBILE CTA */}

              <motion.button
                type="button"
                onClick={handleConnect}
                whileTap={{ scale: 0.98 }}
                className="
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#C85C88]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  hover:bg-[#9F3F67]
                "
              >

                Connect with SSG

                <FaArrowRight size={12} />

              </motion.button>

            </motion.div>

          </>
        )}

      </AnimatePresence>
    </>
  );
}