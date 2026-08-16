import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import ssgLogo from "../../assets/logos/ssg-logo.jpg";

const links = [
  { name: "Home", to: "hero" },
  { name: "About Us", to: "aboutus" },
  { name: "Events", to: "events" },
  { name: "Officers", to: "officers" },
  { name: "Gallery", to: "gallery" },
  { name: "Contact", to: "contact" },
];

export default function Navbar({
  activeSection,
  setActiveSection,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    setMobileOpen(false);

    // Return to top when changing sections
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`
          fixed
          top-0
          left-0
          z-50
          w-full
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-[#CA1F7B]/90 backdrop-blur-xl shadow-2xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            flex
            w-full
            items-center
            justify-between
            px-6
            py-4
            lg:px-16
          "
        >

          {/* LOGO */}
          <motion.button
            onClick={() => handleNavigation("hero")}
            whileHover={{
              scale: 1.03,
            }}
            className="
              flex
              items-center
              gap-3
              text-left
            "
          >

            {/* Logo Circle */}
            <div
              className="
                relative
                h-14
                w-14
                overflow-hidden
                rounded-full
                border-2
                border-white
                bg-white
                shadow-[0_0_20px_rgba(236,72,153,.5)]
              "
            >

              {/* Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-pink-400
                  blur-md
                "
              />

              <img
                src={ssgLogo}
                alt="SSG Logo"
                className="
                  relative
                  z-10
                  h-full
                  w-full
                  object-cover
                "
              />

            </div>

            {/* Organization Name */}
            <div>

              <h1
                className="
                  text-lg
                  font-black
                  text-white
                "
              >
                Supreme Student Government
              </h1>

              <p
                className="
                  text-xs
                  text-pink-100
                "
              >
                San Sebastian College – Recoletos de Cavite
              </p>

            </div>

          </motion.button>


          {/* DESKTOP NAVIGATION */}
          <div
            className="
              hidden
              items-center
              gap-8
              lg:flex
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
                    relative
                    cursor-pointer
                    font-semibold
                    transition
                    ${
                      isActive
                        ? "text-pink-200"
                        : "text-white"
                    }
                    hover:text-pink-200

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:bg-pink-200
                    after:transition-all
                    ${
                      isActive
                        ? "after:w-full"
                        : "after:w-0"
                    }
                    hover:after:w-full
                  `}
                >
                  {item.name}
                </button>
              );
            })}


            {/* JOIN SSG */}
            <motion.button
              onClick={() =>
                handleNavigation("registration")
              }
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 25px rgba(223,121,176,.7)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-6
                py-3
                font-bold
                text-[#CA1F7B]
              "
            >

              Join SSG

              <FaArrowRight size={14} />

            </motion.button>

          </div>


          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="
              text-white
              lg:hidden
            "
          >
            {mobileOpen ? (
              <HiX size={32} />
            ) : (
              <HiMenuAlt3 size={32} />
            )}
          </button>

        </div>
      </motion.nav>


      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            className="
              fixed
              top-20
              left-4
              right-4
              z-40
              rounded-3xl
              bg-[#CA1F7B]/95
              p-6
              shadow-2xl
              backdrop-blur-xl
              lg:hidden
            "
          >

            <div
              className="
                flex
                flex-col
                gap-6
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
                      cursor-pointer
                      text-left
                      text-lg
                      font-semibold
                      transition
                      ${
                        isActive
                          ? "text-pink-200"
                          : "text-white"
                      }
                      hover:text-pink-200
                    `}
                  >
                    {item.name}
                  </button>
                );
              })}


              {/* MOBILE JOIN */}
              <button
                onClick={() =>
                  handleNavigation("registration")
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  py-3
                  font-bold
                  text-[#CA1F7B]
                "
              >
                Join SSG!
                <FaArrowRight size={14} />
              </button>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}