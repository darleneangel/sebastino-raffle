import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300 }}
      type={type}
      onClick={onClick}
      className={`rounded-full bg-[#D4AF37] px-8 py-4 font-bold text-[#A31621] shadow-lg hover:shadow-xl transition ${className}`}
    >
      {children}
    </motion.button>
  );
}