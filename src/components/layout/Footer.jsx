import Container from "./Container";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer({ setActiveSection }) {

  const goTo = (section) => {
    if (setActiveSection) {
      setActiveSection(section);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 bg-[var(--secondary)] text-[var(--black)]">
      <Container>
        <div className="py-14 sm:py-16">
          <div className="overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-xl">
            <div className="grid gap-12 p-8 sm:p-10 md:grid-cols-2 lg:grid-cols-4 lg:p-12">

              {/* ABOUT */}
              <div>
                <div className="mb-5 h-1 w-12 rounded-full bg-[var(--primary)]" />
                <h2 className="text-2xl font-black text-[var(--primary)]">
                  Supreme Student Government
                </h2>
                <p className="mt-4 leading-7 text-black/60">
                  Empowering student leaders, fostering
                  collaboration, and serving every Sebastino
                  through meaningful programs and initiatives.
                </p>
              </div>

              {/* QUICK LINKS */}
              <div>
                <h3 className="mb-5 text-lg font-black text-[var(--black)]">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      type="button"
                      onClick={() => goTo("hero")}
                      className="text-black/60 transition hover:text-[var(--primary)]"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => goTo("aboutus")}
                      className="text-black/60 transition hover:text-[var(--primary)]"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => goTo("events")}
                      className="text-black/60 transition hover:text-[var(--primary)]"
                    >
                      Events
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => goTo("gallery")}
                      className="text-black/60 transition hover:text-[var(--primary)]"
                    >
                      Gallery
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => goTo("aboutus")}
                      className="text-black/60 transition hover:text-[var(--primary)]"
                    >
                      Officers
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => goTo("contact")}
                      className="text-black/60 transition hover:text-[var(--primary)]"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <h3 className="mb-5 text-lg font-black text-[var(--black)]">
                  Contact Us
                </h3>
                <div className="space-y-4 text-black/60">
                  <div className="flex gap-3">
                    <FaEnvelope className="mt-1 shrink-0 text-[var(--primary)]" />
                    <span>ssg@sscr.edu.ph</span>
                  </div>
                  <div className="flex gap-3">
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-[var(--primary)]" />
                    <span>
                      Supreme Student Government Office
                      <br />
                      SSCR Campus
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <FaClock className="mt-1 shrink-0 text-[var(--primary)]" />
                    <span>
                      Monday – Friday
                      <br />
                      8:00 AM – 5:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div>
                <h3 className="mb-5 text-lg font-black text-[var(--black)]">
                  Connect With Us
                </h3>
                <p className="leading-7 text-black/60">
                  Follow us for the latest announcements,
                  campus activities, and student updates.
                </p>
                <div className="mt-6 flex gap-4">
                  <a
                    href="#"
                    aria-label="SSG Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[var(--dark)]"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    aria-label="SSG Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[var(--dark)]"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

            </div>

            {/* COPYRIGHT */}
            <div className="border-t border-[var(--silver)]/50 bg-[var(--primary)] px-6 py-6 text-center text-sm text-white">
              © 2026 Supreme Student Government •
              San Sebastian College – Recoletos de Cavite.
              All Rights Reserved.
            </div>

          </div>
        </div>
      </Container>
    </footer>
  );
}