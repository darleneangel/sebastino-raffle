import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-gradient-to-br from-[#7A1019] via-[#A31621] to-[#C1272D]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
        >
          {/* Logo */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-yellow-300 bg-white shadow-2xl"
          >
            <span className="text-5xl">🏫</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-10 text-center text-5xl font-black text-white"
          >
            Salubong sa
            <br />
            Bagong Sebastino
          </motion.h1>

          <motion.div
            animate={{
              width: ["0%", "100%"],
            }}
            transition={{
              duration: 2,
            }}
            className="mt-12 h-2 w-64 rounded-full bg-yellow-300"
          />

          <p className="mt-6 text-white/80">
            Preparing your experience...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}