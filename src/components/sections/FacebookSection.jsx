import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function FacebookSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FDF0F5] py-28"
    >
      {/* Background Decorations */}
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-100 blur-3xl opacity-60"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold tracking-wider text-[var(--primary)]">
            CONNECT WITH US
          </span>

          <h2 className="mt-6 text-5xl font-black text-[var(--text)] md:text-6xl">
            Stay Connected
            <span className="block text-[var(--primary)]">
              Beyond the Campus
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Follow our official social media accounts to stay informed about
            announcements, student opportunities, campus activities, and the
            latest updates from the Supreme Student Government.
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* Facebook */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group rounded-[32px] border border-pink-100 bg-white p-10 shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center gap-5">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg transition duration-300 group-hover:scale-110">

                <FaFacebookF size={36} />

              </div>

              <div>

                <h3 className="text-3xl font-black text-[var(--text)]">
                  Facebook
                </h3>

                <p className="text-gray-500">
                  SSC-R de Cavite Supreme Student Government
                </p>

              </div>

            </div>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[var(--primary)]" />
                Official Announcements
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[var(--primary)]" />
                Campus Events
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[var(--primary)]" />
                Student Opportunities
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[var(--primary)]" />
                Organization Updates
              </div>

            </div>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://www.facebook.com/BasteCaviteSSG"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-8 py-4 font-semibold text-white transition hover:bg-[var(--dark)]"
            >
              Visit Facebook

              <FaArrowRight />
            </motion.a>

          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group rounded-[32px] border border-pink-100 bg-white p-10 shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center gap-5">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 text-white shadow-lg transition duration-300 group-hover:scale-110">

                <FaInstagram size={36} />

              </div>

              <div>

                <h3 className="text-3xl font-black text-[var(--text)]">
                  Instagram
                </h3>

                <p className="text-gray-500">
                  @bastecavitessg
                </p>

              </div>

            </div>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[var(--primary)]" />
                Campus Highlights
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[var(--primary)]" />
                Event Photos
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[var(--primary)]" />
                Student Stories
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[var(--primary)]" />
                Behind-the-Scenes Updates
              </div>

            </div>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://www.instagram.com/bastecavitessg?fbclid=IwY2xjawTypzZwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMVZNc2hZdjhKaUxBd01JNFdzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe6nlKMfZ2pas_as7T6vY8K5xYd5YROCHUBB-74o1BVx6BecGJYtEa7sMj_ng_aem_JwEd7Qjqd6WnGOhFmZhl9g"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--primary)] px-8 py-4 font-semibold text-white transition hover:bg-[var(--dark)]"
            >
              Follow on Instagram

              <FaArrowRight />
            </motion.a>

          </motion.div>

        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[32px] border border-pink-100 bg-white p-10 shadow-xl"
        >

          <h3 className="text-3xl font-black text-[var(--primary)]">
            Need Assistance?
          </h3>

          <p className="mt-3 text-gray-600">
            You may also reach us through our official office and email.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-pink-100 p-4 text-[var(--primary)]">
                <FaMapMarkerAlt size={22} />
              </div>

              <div>
                <h4 className="font-bold">Office</h4>
                <p className="text-sm text-gray-500">
                  SSG Office, San Sebastian College – Recoletos de Cavite
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-pink-100 p-4 text-[var(--primary)]">
                <FaEnvelope size={22} />
              </div>

              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-sm text-gray-500">
                  ssg@sscrdecavite.edu.ph
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-pink-100 p-4 text-[var(--primary)]">
                <FaClock size={22} />
              </div>

              <div>
                <h4 className="font-bold">Office Hours</h4>
                <p className="text-sm text-gray-500">
                  Monday – Friday • 8:00 AM – 5:00 PM
                </p>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}