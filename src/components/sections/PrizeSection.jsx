import { motion } from "framer-motion";
import { FaImages, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Replace these with your own images
import img1 from "../../assets/gallery/gallery1.jpg";
import img2 from "../../assets/gallery/gallery2.jpg";
import img3 from "../../assets/gallery/gallery3.jpg";
import img4 from "../../assets/gallery/gallery4.jpg";
import img5 from "../../assets/gallery/gallery5.jpg";
import img6 from "../../assets/gallery/gallery6.jpg";

const featured = [
  {
    image: img1,
    title: "General Assembly",
    subtitle: "Empowering future student leaders.",
  },
  {
    image: img2,
    title: "Student Well Being Summit",
    subtitle: "Serving with compassion and purpose.",
  },
  {
    image: img3,
    title: "Meeting the Officers!",
    subtitle: "Creating unforgettable Sebastinians memories.",
  },
  {
    image: img4,
    title: "Meeting the Officers!",
    subtitle: "Creating unforgettable Sebastinians memories.",
  },
  {
    image: img5,
    title: "Meeting the Officers!",
    subtitle: "Creating unforgettable Sebastinians memories.",
  },
  {
    image: img6,
    title: "Meeting the Officers!",
    subtitle: "Creating unforgettable Sebastinians memories.",
  },
];

const gallery = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[var(--cream)] py-28"
    >

      {/* Background Blobs */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-100 blur-3xl opacity-50"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-[var(--primary)]">

            <FaImages />

            CAMPUS LIFE

          </span>

          <h2 className="mt-6 text-5xl font-black text-[var(--text)] md:text-6xl">

            Every Moment.
            <span className="block text-[var(--primary)]">
              Every Memory.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">

            Discover the vibrant moments that define the
            Supreme Student Government. From leadership
            programs and outreach initiatives to campus
            celebrations and student engagement activities,
            every event reflects our commitment to serving
            the Sebastinians community.

          </p>

        </motion.div>

        {/* Featured Carousel */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
            ]}
            navigation
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
            }}
            loop
            className="rounded-[35px]"
          >

            {featured.map((item, index) => (

              <SwiperSlide key={index}>

                <div className="relative overflow-hidden rounded-[35px]">

                  <img
                    src={item.image}
                    className="h-[600px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-12 left-10 max-w-xl">

                    <span className="rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-xl">

                      Supreme Student Government

                    </span>

                    <h3 className="mt-5 text-5xl font-black text-white">

                      {item.title}

                    </h3>

                    <p className="mt-4 text-lg text-white/90">

                      {item.subtitle}

                    </p>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </motion.div>

        {/* Gallery */}

        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-3">

          {gallery.map((image, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >

              <img
                src={image}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[var(--primary)]/90 via-transparent to-transparent p-6 opacity-0 transition duration-500 group-hover:opacity-100">

                <h3 className="text-xl font-bold text-white">

                  Student Activity

                </h3>

                <p className="mt-2 text-white/90">

                  Creating memorable experiences
                  for every Sebastinians.

                </p>

                <button className="mt-5 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2 font-semibold text-[var(--primary)]">

                  View Photo

                  <FaArrowRight />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}