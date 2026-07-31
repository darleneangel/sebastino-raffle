import Container from "./Container";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[var(--dark)] text-white">

      <Container>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-black">
              Supreme Student Government
            </h2>

            <p className="mt-4 text-pink-100 leading-7">
              Empowering student leaders, fostering collaboration,
              and serving every Sebastino through meaningful
              programs and initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-pink-100">

              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Events
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Recruitment
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Contact Us
            </h3>

            <div className="space-y-4 text-pink-100">

              <div className="flex gap-3">
                <FaEnvelope className="mt-1" />
                <span>ssg@sscr.edu.ph</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  Supreme Student Government Office
                  <br />
                  SSCR Campus
                </span>
              </div>

              <div className="flex gap-3">
                <FaClock className="mt-1" />
                <span>
                  Monday – Friday
                  <br />
                  8:00 AM – 5:00 PM
                </span>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Connect With Us
            </h3>

            <p className="text-pink-100">
              Follow us for the latest announcements,
              campus activities, and student updates.
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[var(--primary)]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[var(--primary)]"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-pink-100">
          © 2026 Supreme Student Government • San Sebastian College – Recoletos de Cavite. All Rights Reserved.
        </div>

      </Container>

    </footer>
  );
}