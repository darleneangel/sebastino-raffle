import { motion } from "framer-motion";
import {
  FaUsers,
  FaBullhorn,
  FaHandsHelping,
  FaLightbulb,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUsers size={40} />,
    title: "Student Representation",
    description:
      "We amplify the voices of every Sebastino by representing student interests and advocating for initiatives that create a positive campus experience.",
  },
  {
    icon: <FaBullhorn size={40} />,
    title: "Campus Engagement",
    description:
      "From leadership programs to campus-wide events, we create meaningful opportunities that encourage participation, collaboration, and school spirit.",
  },
  {
    icon: <FaHandsHelping size={40} />,
    title: "Service & Leadership",
    description:
      "We believe that leadership begins with service. Every project we organize is designed to inspire responsibility, compassion, and community involvement.",
  },
  {
    icon: <FaLightbulb size={40} />,
    title: "Innovation & Excellence",
    description:
      "Through creative initiatives and digital transformation, we continuously improve the student experience while preparing future leaders.",
  },
];

export default function AboutEvent() {
  return (
    <section
      id="about"
      className="bg-[var(--cream)] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="rounded-full bg-pink-100 px-6 py-2 text-sm font-semibold tracking-wider text-[var(--primary)]">
            WHO WE ARE
          </span>

          <h2 className="mt-6 text-5xl font-black text-[var(--text)] md:text-6xl">
            Empowering Student Leaders,
            <span className="block text-[var(--primary)]">
              Building a Better Campus.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-600">
            The Supreme Student Government serves as the highest student governing
            body of San Sebastian College – Recoletos de Cavite. We are committed
            to promoting servant leadership, strengthening student engagement,
            representing the voice of every Sebastino, and creating meaningful
            programs that inspire excellence, collaboration, and positive change.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

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
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-pink-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-[var(--secondary)] hover:shadow-2xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg transition duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-[var(--text)]">
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