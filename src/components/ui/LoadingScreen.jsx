import { motion, AnimatePresence } from "framer-motion";
import ssgLogo from "../../assets/logos/ssg-logo.jpg";

export default function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="
            fixed
            inset-0
            z-[999]
            flex
            flex-col
            items-center
            justify-center
            overflow-hidden
            bg-gradient-to-br
            from-[#FFF1F8]
            via-[#FBCFE8]
            to-[#EC4899]
          "
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: {
              duration: 0.8,
            },
          }}
        >

          {/* Floating Background Glow */}

          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="
              absolute
              -top-20
              -left-20
              h-80
              w-80
              rounded-full
              bg-white/50
              blur-3xl
            "
          />


          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-0
              right-0
              h-96
              w-96
              rounded-full
              bg-pink-300/40
              blur-3xl
            "
          />



          {/* Logo */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
              relative
              h-44
              w-44
              overflow-hidden
              rounded-full
              border-4
              border-white
              bg-white
              shadow-[0_0_50px_rgba(236,72,153,.45)]
            "
          >

            {/* Glow Behind Logo */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                absolute
                inset-0
                rounded-full
                bg-pink-400
                blur-xl
              "
            />


            <img
              src={ssgLogo}
              alt="SSG Logo"
              className="
                relative
                z-10
                h-full
                w-full
                object-cover
              "
            />


          </motion.div>





          {/* Organization Name */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              mt-10
              text-center
              text-4xl
              font-black
              text-pink-700
              md:text-5xl
            "
          >

            Supreme Student
            <br />
            Government

          </motion.h1>





          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
            }}
            className="
              mt-4
              max-w-md
              px-6
              text-center
              text-sm
              font-medium
              tracking-wide
              text-pink-800
            "
          >
            San Sebastian College – Recoletos de Cavite
          </motion.p>





          {/* Loading Bar */}

          <div
            className="
              mt-12
              h-2
              w-64
              overflow-hidden
              rounded-full
              bg-white/70
              shadow-inner
            "
          >

            <motion.div
              initial={{
                x: "-100%",
              }}
              animate={{
                x: "100%",
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                h-full
                w-full
                rounded-full
                bg-pink-700
              "
            />

          </div>





          <motion.p
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              mt-6
              text-sm
              font-semibold
              text-pink-700
            "
          >
            Empowering Students. Serving the Community.
          </motion.p>


        </motion.div>
      )}
    </AnimatePresence>
  );
}