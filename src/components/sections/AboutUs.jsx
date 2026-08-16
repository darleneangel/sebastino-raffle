import { motion } from "framer-motion";
import {
  FaUsers,
  FaCalendarAlt,
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="Home"
    className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[var(--dark)] via-[var(--primary)] to-[var(--secondary)]">

      {/* Background Blobs */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-200/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-28 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}yyyyyy
        >

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold tracking-wider text-white backdrop-blur-md">
            SUPREME STUDENT GOVERNMENT
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">
            Empowering
            <span className="block text-pink-200">
              Every Sebastino.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-pink-100">
            Welcome to the official website of the Supreme Student Government.
            Discover campus initiatives, participate in student activities,
            stay updated with announcements, and become part of a stronger
            student community.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-[var(--primary)] transition hover:scale-105">
              Upcoming Events
              <FaArrowRight />
            </button>

            <button className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
              Join the SSG
            </button>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative"
        >

          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

            <h2 className="mb-8 text-center text-2xl font-bold text-white">
              Student Leadership at a Glance
            </h2>

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-white/10 p-6 text-center">
                <FaCalendarAlt className="mx-auto mb-3 text-4xl text-pink-200" />
                <h3 className="text-4xl font-black text-white">35+</h3>
                <p className="mt-2 text-pink-100">
                  Campus Events
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 text-center">
                <FaUsers className="mx-auto mb-3 text-4xl text-pink-200" />
                <h3 className="text-4xl font-black text-white">800+</h3>
                <p className="mt-2 text-pink-100">
                  Student Volunteers
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 text-center">
                <FaBullhorn className="mx-auto mb-3 text-4xl text-pink-200" />
                <h3 className="text-4xl font-black text-white">120+</h3>
                <p className="mt-2 text-pink-100">
                  Announcements
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 text-center">
                <FaUsers className="mx-auto mb-3 text-4xl text-pink-200" />
                <h3 className="text-4xl font-black text-white">5000+</h3>
                <p className="mt-2 text-pink-100">
                  Students Served
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}