import { motion } from "framer-motion";
import {
  FaUsers,
  FaGift,
  FaHandshake,
  FaStar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUsers size={40} />,
    title: "Meet New Friends",
    description:
      "Start your college journey by connecting with fellow Sebastinos through exciting activities.",
  },
  {
    icon: <FaGift size={40} />,
    title: "Exclusive Giveaways",
    description:
      "Join games and raffles for a chance to win exciting prizes from the SSG.",
  },
  {
    icon: <FaHandshake size={40} />,
    title: "Build Connections",
    description:
      "Get to know student organizations and become part of the SSC-R community.",
  },
  {
    icon: <FaStar size={40} />,
    title: "Create Memories",
    description:
      "Celebrate your first day with fun experiences you'll remember throughout college.",
  },
];

export default function AboutEvent() {
  return (
    <section
      id="about"
      className="bg-[#FFF8F2] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-[#A31621]">
            ABOUT THE EVENT
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#2D2D2D]">
            Welcome Future Sebastinos!
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Salubong sa Bagong Sebastino is your official welcome event
            organized by the Supreme Student Government. Enjoy games,
            activities, and a chance to win exclusive prizes while becoming
            part of the Sebastino community.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: .6,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="rounded-3xl border border-red-100 bg-white p-8 shadow-xl transition"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#A31621] text-[#D4AF37] shadow-lg">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#2D2D2D]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}