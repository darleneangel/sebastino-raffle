import { motion } from "framer-motion";
import { FaArrowDown, FaGift } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#6F1018] via-[#A31621] to-[#C1272D]">

      {/* Decorative Background */}
      <div className="absolute inset-0">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
          }}
          className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
          }}
          className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl"
        />

      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-28 pb-16 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-semibold text-yellow-300">
            SUPREME STUDENT GOVERNMENT
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Salubong sa
            <span className="block text-yellow-300">
              Bagong Sebastino
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
            Celebrate the beginning of your Sebastino journey and get a chance
            to win an exclusive SSG Tote Bag by joining our official raffle.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              href="#register"
              className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-red-900 shadow-xl"
            >
              Join the Raffle
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#how-to-join"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md"
            >
              Learn More
            </motion.a>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-[40px] bg-yellow-300 blur-3xl opacity-40" />

            <div className="relative flex h-[420px] w-[340px] items-center justify-center rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">

              <FaGift
                size={150}
                className="text-yellow-300"
              />

            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >

        <FaArrowDown size={28} />

      </motion.div>

    </section>
  );
}