// src/components/Gallery.jsx
import React from "react";
import { motion } from "framer-motion";

const images = [
  // Replace these with your real image URLs
  "https://img.freepik.com/premium-photo/african-male-client-getting-haircut-barber-shop-from-professional-hairstylist_255667-7724.jpg?ga=GA1.1.1264861903.1717471952&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/master-cuts-hair-beard-men-barbershop_104603-5232.jpg?ga=GA1.1.1264861903.1717471952&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/man-getting-his-beard-shaved-with-razor_107420-94762.jpg?ga=GA1.1.1264861903.1717471952&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/barber-thinking-hairstyle-customer_23-2148298291.jpg?ga=GA1.1.1264861903.1717471952&semt=ais_hybrid&w=740"
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Check out some of our recent work and get inspired for your next visit.
          </p>
        </div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-lg h-48 sm:h-64 bg-gray-200"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
