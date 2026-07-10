import { motion } from "framer-motion";

export default function FloatingBlob({
  className = "",
}) {
  return (
    <motion.div
      animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
      }}
      className={`absolute rounded-full blur-3xl ${className}`}
    />
  );
}