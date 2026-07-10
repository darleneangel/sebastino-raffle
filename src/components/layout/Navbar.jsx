import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ssgLogo from "../../assets/logos/ssg-logo.png";

const links = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "How to Join", to: "how-to-join" },
  { name: "Prize", to: "prize" },
  { name: "Facebook", to: "facebook" },
  { name: "Register", to: "register" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#7A1019]/85 backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex w-full items-center justify-between px-10 lg:px-16 py-4">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <img
              src={ssgLogo}
              alt="SSG Logo"
              className="h-12 w-12 rounded-full bg-white object-contain"
            />

            <div>
              <h1 className="text-lg font-black text-white">
                Supreme Student Government
              </h1>

              <p className="text-xs text-yellow-300">
                Salubong Sa Bagong Sebastino 2026
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={700}
                spy={true}
                offset={-80}
                activeClass="text-yellow-300"
                className="cursor-pointer font-semibold text-white transition hover:text-yellow-300"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="register"
              smooth={true}
              duration={700}
              offset={-80}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255,215,0,.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 font-bold text-red-900"
              >
                Join Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white lg:hidden"
          >
            {mobileOpen ? (
              <HiX size={32} />
            ) : (
              <HiMenuAlt3 size={32} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-3xl bg-[#7A1019]/95 p-6 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-6">

              {links.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  onClick={() => setMobileOpen(false)}
                  className="cursor-pointer text-lg font-semibold text-white hover:text-yellow-300"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="register"
                smooth={true}
                duration={700}
                offset={-80}
                onClick={() => setMobileOpen(false)}
              >
                <button className="w-full rounded-full bg-yellow-400 py-3 font-bold text-red-900">
                  Join Now
                </button>
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}