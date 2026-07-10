import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <p className="font-semibold tracking-[5px] text-[#A31621] uppercase">
        {subtitle}
      </p>

      <h2 className="mt-4 text-5xl font-black text-[#2D2D2D]">
        {title}
      </h2>
    </motion.div>
  );
}