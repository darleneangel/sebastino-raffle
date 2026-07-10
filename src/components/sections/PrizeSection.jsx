import { motion } from "framer-motion";
import {
  FaGift,
  FaCheckCircle,
  FaStar,
  FaMedal,
} from "react-icons/fa";

export default function PrizeSection() {
  return (
    <section
      id="prize"
      className="relative overflow-hidden bg-gradient-to-br from-[#7A1019] via-[#A31621] to-[#C1272D] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
          className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 13,
          }}
          className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-yellow-400/20 px-5 py-2 text-sm font-semibold text-yellow-300">
            GRAND PRIZE
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Win an Exclusive
            <span className="block text-yellow-300">
              SSG Tote Bag
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/80">
            Participate in the Salubong sa Bagong Sebastino Grand Raffle and
            take home our exclusive limited-edition tote bag prepared by the
            Supreme Student Government.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4 text-white">
              <FaCheckCircle className="text-yellow-300" />
              Official SSG Merchandise
            </div>

            <div className="flex items-center gap-4 text-white">
              <FaStar className="text-yellow-300" />
              Limited Edition Design
            </div>

            <div className="flex items-center gap-4 text-white">
              <FaMedal className="text-yellow-300" />
              Exclusive for Event Participants
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 4,
            }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-yellow-300 blur-3xl opacity-40" />

            {/* Card */}
            <div className="relative flex h-[450px] w-[340px] items-center justify-center rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">

              {/* Replace this with your tote bag image later */}
              <FaGift
                size={170}
                className="text-yellow-300"
              />

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}