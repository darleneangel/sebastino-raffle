import { motion } from "framer-motion";
import { FaUsers, FaGift, FaCalendarAlt } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={40} />,
    number: "300+",
    title: "Freshmen",
    color: "bg-[#A31621]",
  },
  {
    icon: <FaGift size={40} />,
    number: "10",
    title: "Totebags to be Won",
    color: "bg-[#D4AF37]",
  },
  {
    icon: <FaCalendarAlt size={40} />,
    number: "August 3, 2026",
    title: "Raffle Draw",
    color: "bg-[#0F766E]",
  },
];

export default function EventStats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#A31621] via-[#8F1625] to-[#6F1018] py-28">

      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl"></div>
        <div className="absolute right-20 bottom-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center"
        >
          <span className="rounded-full bg-yellow-300/20 px-5 py-2 text-sm font-semibold text-yellow-300">
            EVENT INFORMATION
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Be Part of the Celebration
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            Join hundreds of fellow Sebastinos in welcoming a new academic
            journey while getting a chance to win exclusive prizes.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {stats.map((item,index)=>(
            <motion.div
              key={index}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:index*.15}}
              whileHover={{
                y:-12,
                scale:1.03,
              }}
              className="rounded-[35px] border border-white/10 bg-white/10 p-10 text-center backdrop-blur-xl shadow-2xl"
            >

              <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-white ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="mt-8 text-5xl font-black text-yellow-300">
                {item.number}
              </h3>

              <p className="mt-3 text-lg text-white">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}