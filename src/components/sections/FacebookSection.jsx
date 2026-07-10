import { motion } from "framer-motion";
import { FaFacebookF, FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function FacebookSection() {
  return (
    <section
      id="facebook"
      className="relative overflow-hidden bg-[#FFF8F2] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            STEP 1
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#2D2D2D]">
            Follow Our Official Facebook Page
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Before joining the raffle, please like and follow the official
            Supreme Student Government Facebook page to stay updated on campus
            events, announcements, and the raffle winner.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[35px] bg-gradient-to-br from-blue-600 to-blue-800 p-10 text-white shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white/20 p-5">
                <FaFacebookF size={40} />
              </div>

              <div>
                <h3 className="text-3xl font-black">
                  SSC-R de Cavite
                </h3>

                <p className="opacity-80">
                  Supreme Student Government
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-300" />
                Official SSG Announcements
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-300" />
                Event Updates
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-300" />
                Raffle Winner Posting
              </div>

            </div>

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .95,
              }}
              href="https://www.facebook.com/BasteCaviteSSG"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-xl"
            >
              Open Facebook

              <FaArrowRight />
            </motion.a>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[35px] border border-yellow-200 bg-white p-10 shadow-xl">

              <h3 className="text-3xl font-black text-[#A31621]">
                Mission
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Complete the following before registering:
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                    1
                  </div>

                  Like the Facebook Page
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                    2
                  </div>

                  Follow the Facebook Page
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                    3
                  </div>

                  Return here and continue to registration
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}