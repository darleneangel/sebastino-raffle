import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaHeart,
  FaUserEdit,
  FaGift,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaFacebookF />,
    title: "Like our Facebook Page",
    description:
      "Support the official SSG Facebook page by giving it a Like.",
  },
  {
    icon: <FaHeart />,
    title: "Follow the Page",
    description:
      "Follow the page to stay updated with campus events and announcements.",
  },
  {
    icon: <FaUserEdit />,
    title: "Register",
    description:
      "Fill out the raffle registration form with your student information.",
  },
  {
    icon: <FaGift />,
    title: "You're In!",
    description:
      "Wait for the official raffle draw and good luck winning the exclusive tote bag!",
  },
];

export default function HowToJoin() {
  return (
    <section
      id="how-to-join"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#FFF8F2] to-[#FFF2DD] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#A31621]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-[#A31621]">
            HOW TO JOIN
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#2D2D2D]">
            Join the Grand Raffle in 4 Easy Steps
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Complete the following steps to secure your raffle entry and get a
            chance to win the exclusive SSG Tote Bag.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-20 max-w-4xl">

          {/* Vertical Line */}
          <div className="absolute left-8 top-8 h-[85%] w-1 rounded-full bg-[#D4AF37] hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="relative mb-10 flex items-start gap-6 rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-lg"
            >
              {/* Number Circle */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#A31621] text-2xl text-[#D4AF37] shadow-lg">
                {step.icon}
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#A31621]">
                  Step {index + 1}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}