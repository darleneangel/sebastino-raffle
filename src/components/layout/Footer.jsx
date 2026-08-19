import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer({ setActiveSection }) {
  const goTo = (section) => {
    if (setActiveSection) {
      setActiveSection(section);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-12 border-t border-[var(--secondary)] bg-[var(--primary)] text-white">

      {/* =========================================
          MAIN FOOTER
      ========================================= */}
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* =====================================
              01 — SSG BRANDING
          ===================================== */}
          <div>

            <div className="flex items-center gap-3">

              {/* LOGO */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full  p-1 ">
                <img
                  src="/images/ssg-logo.png"
                  alt="SSG Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-sm font-extrabold leading-tight">
                  Supreme Student Government
                </h2>

                <p className="mt-0.5 text-[11px] text-white/70">
                  College Department
                </p>
              </div>

            </div>

            <p className="mt-4 text-xs font-semibold leading-5 text-white/90">
              San Sebastian College - Recoletos de Cavite
            </p>

            <p className="mt-2 max-w-xs text-[11px] leading-5 text-white/65">
              In Caritas, Veritas, et Unitas — Serving the
              Sebastinian Community with Leadership and Integrity.
            </p>

          </div>


          {/* =====================================
              02 — QUICK LINKS
          ===================================== */}
          <div>

            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>

            <div className="space-y-2">

              <button
                type="button"
                onClick={() => goTo("hero")}
                className="block text-left text-xs text-white/70 transition duration-200 hover:translate-x-1 hover:text-[var(--secondary)]"
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => goTo("aboutus")}
                className="block text-left text-xs text-white/70 transition duration-200 hover:translate-x-1 hover:text-[var(--secondary)]"
              >
                About Us
              </button>

              <button
                type="button"
                onClick={() => goTo("officers")}
                className="block text-left text-xs text-white/70 transition duration-200 hover:translate-x-1 hover:text-[var(--secondary)]"
              >
                Executive Directory
              </button>

              <button
                type="button"
                onClick={() => goTo("events")}
                className="block text-left text-xs text-white/70 transition duration-200 hover:translate-x-1 hover:text-[var(--secondary)]"
              >
                Events & Projects
              </button>

              <button
                type="button"
                onClick={() => goTo("gallery")}
                className="block text-left text-xs text-white/70 transition duration-200 hover:translate-x-1 hover:text-[var(--secondary)]"
              >
                Visual Gallery
              </button>

            </div>

          </div>


          {/* =====================================
              03 — CONTACT
          ===================================== */}
          <div>

            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white">
              Contact & Office
            </h3>

            <div className="space-y-3">

              {/* LOCATION */}
              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[var(--secondary)]" />

                <p className="text-xs leading-5 text-white/70">
                  Student Government Office
                  <br />
                  Main Campus Lobby / Student Center
                  <br />
                  San Sebastian College - Recoletos de Cavite
                </p>

              </div>


              {/* EMAIL */}
              <div className="flex items-center gap-3">

                <FaEnvelope className="shrink-0 text-[var(--secondary)]" />

                <a
                  href="mailto:ssg@sscrdc.edu.ph"
                  className="text-xs text-white/70 transition hover:text-[var(--secondary)]"
                >
                  ssg@sscrdc.edu.ph
                </a>

              </div>


              {/* OFFICE HOURS */}
              <div className="flex items-start gap-3">

                <FaClock className="mt-0.5 shrink-0 text-[var(--secondary)]" />

                <p className="text-xs leading-5 text-white/70">
                  Monday – Friday
                  <br />
                  8:00 AM – 5:00 PM
                </p>

              </div>

            </div>

          </div>


          {/* =====================================
              04 — CONNECT
          ===================================== */}
          <div>

            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white">
              Connect With Us
            </h3>

            <p className="text-xs leading-5 text-white/70">
              Follow the SSG for announcements, student
              activities, events, and campus updates.
            </p>


            {/* SOCIAL BUTTONS */}
            <div className="mt-4 flex gap-2.5">

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/BasteCaviteSSG"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SSG Facebook"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-sm
                  text-white
                  ring-1
                  ring-white/20
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--secondary)]
                  hover:ring-[var(--secondary)]
                "
              >
                <FaFacebookF />
              </a>


              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/bastecavitessg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SSG Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-sm
                  text-white
                  ring-1
                  ring-white/20
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--secondary)]
                  hover:ring-[var(--secondary)]
                "
              >
                <FaInstagram />
              </a>

            </div>


            {/* INQUIRY BUTTON */}
            <a
              href="mailto:ssg@sscrdc.edu.ph"
              className="
                mt-4
                inline-flex
                items-center
                rounded-md
                bg-white
                px-4
                py-2
                text-[11px]
                font-bold
                text-[var(--primary)]
                transition
                duration-300
                hover:bg-[var(--secondary)]
                hover:text-white
              "
            >
              <FaEnvelope className="mr-2" />
              Send an Inquiry
            </a>

          </div>

        </div>


        {/* =========================================
            BOTTOM BAR
        ========================================= */}
        <div className="mt-8 border-t border-white/15 pt-5">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            {/* COPYRIGHT */}
            <p className="text-[10px] leading-4 text-white/55">
              © Academic Year 2025–2026 Supreme Student Government.
              <br className="sm:hidden" />
              {" "}San Sebastian College - Recoletos de Cavite.
              All Rights Reserved.
            </p>


            {/* UTILITY LINKS */}
            <div className="flex flex-wrap items-center gap-4 text-[10px]">

              <button
                type="button"
                className="text-white/55 transition hover:text-white"
              >
                Privacy Policy
              </button>

              <button
                type="button"
                className="text-white/55 transition hover:text-white"
              >
                Student Charter
              </button>

              <button
                type="button"
                onClick={backToTop}
                className="flex items-center gap-1 font-semibold text-white/80 transition hover:text-[var(--secondary)]"
              >
                <FaArrowUp />
                Back to Top
              </button>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}