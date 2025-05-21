// src/components/Reviews.jsx
import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Mike Johnson",
    rating: 5,
    text: "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!",
  },
  {
    id: 2,
    name: "David Martinez",
    rating: 5,
    text: "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
  },
  {
    id: 3,
    name: "Chris Taylor",
    rating: 5,
    text: "The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reviews.map((r) => (
            <motion.div
              key={r.id}
              className="relative bg-gray-800 rounded-xl p-8 overflow-hidden shadow-lg"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 15px 25px rgba(0,0,0,0.3)" }}
            >
              {/* Decorative quote marks */}
              <span className="absolute top-4 left-4 text-6xl text-gray-700">“</span>
              <span className="absolute bottom-4 right-4 text-6xl text-gray-700 rotate-180">“</span>

              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-amber-500 ${
                      i < r.rating ? "" : "text-gray-600"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                {r.text}
              </p>

              {/* Reviewer */}
              <p className="font-semibold text-white text-right">
                — {r.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
