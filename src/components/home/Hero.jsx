import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700">

      {/* Floating circles */}
      <div className="absolute h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl top-10 left-10"></div>
      <div className="absolute h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl bottom-0 right-0"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-4 text-yellow-300 font-semibold tracking-[6px]"
        >
          SALUBONG SA BAGONG SEBASTINO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .2 }}
          className="text-6xl font-black text-white md:text-8xl"
        >
          GRAND
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="text-5xl font-bold text-yellow-300 md:text-7xl"
        >
          RAFFLE
        </motion.h2>

        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="my-10 flex justify-center"
        >
          <div className="flex h-44 w-44 items-center justify-center rounded-full bg-yellow-400 shadow-2xl">

            <FaGift
              size={90}
              className="text-red-900"
            />

          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mx-auto max-w-2xl text-xl text-white"
        >
          Like & Follow our official Facebook Page and get a chance to
          win an exclusive <i class="fas fa-creative-commons-sampling-plus    "></i> Tote Bag.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: .95,
          }}
          className="mt-10 rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold text-red-900 shadow-xl transition"
        >
          Join the Raffle
        </motion.button>

      </div>
    </section>
  );
}