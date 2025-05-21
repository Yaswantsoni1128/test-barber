// src/components/WhyChooseUs.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Experienced Team",
      description:
        "15+ years honing classic & modern styles—our barbers are masters of their craft.",
      image:
        "https://img.freepik.com/premium-photo/hipster-young-good-looking-man-visiting-hairstylist-barber-barber-shop_473712-719.jpg?ga=GA1.1.1264861903.1717471952&semt=ais_hybrid&w=740",
      btnText: "Meet the Team",
      redirectTo: "#barbers"
    },
    {
      id: 2,
      title: "Premium Products",
      description:
        "We use top-tier hair and grooming products to keep you looking sharp long after you leave.",
      image:
        "https://img.freepik.com/free-photo/portrait-stylish-male-who-himself-shaving-while-sitting-barber-chair-hairdressing-salon_613910-18629.jpg?ga=GA1.1.1264861903.1717471952&semt=ais_hybrid&w=740",
      btnText: "Our Products",
      redirectTo:"#services"
    },
    {
      id: 3,
      title: "Relaxing Environment",
      description:
        "Sit back in our stylish, comfortable lounge—your time here is part of the experience.",
      image:
        "https://img.freepik.com/premium-photo/african-male-client-getting-haircut-barber-shop-from-professional-hairstylist_255667-7724.jpg?ga=GA1.1.1264861903.1717471952&semt=ais_hybrid&w=740",
      btnText: "Take a Tour",
      redirectTo: "#reviews"
    }
  ];

  const [current, setCurrent] = useState(0);
  const length = features.length;

  const next = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  // Optional auto-rotate
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="why-choose-us" className="relative h-screen bg-black text-white overflow-hidden">
      <AnimatePresence>
        {features.map((feat, idx) =>
          idx === current ? (
            <motion.div
              key={feat.id}
              className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                backgroundImage: `url(${feat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60" />
              <div className="relative z-10 max-w-xl">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                  {feat.title}
                </h2>
                <p className="text-lg sm:text-xl mb-6">{feat.description}</p>
                <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-2 rounded-md transition">
                  <a href={feat.redirectTo}>{feat.btnText}</a>
                </button>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full z-20"
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full z-20"
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3 z-20">
        {features.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-amber-500" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
