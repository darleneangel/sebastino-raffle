import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background */}

          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ scale: .8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .8, opacity: 0 }}
          >

            <div className="w-full max-w-lg rounded-[40px] bg-white p-12 text-center shadow-2xl">

              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <FaCheckCircle
                  size={90}
                  className="mx-auto text-green-500"
                />
              </motion.div>

              <h2 className="mt-8 text-4xl font-black text-[#A31621]">
                Registration Successful!
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-8">
                Thank you for joining the

                <span className="font-bold">
                  {" "}Salubong sa Bagong Sebastino{" "}
                </span>

                Grand Raffle.

                We wish you the best of luck!
              </p>

              <button
                onClick={onClose}
                className="mt-10 rounded-full bg-[#A31621] px-10 py-4 font-bold text-white hover:bg-[#7C1018] transition"
              >
                Continue
              </button>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}