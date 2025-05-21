// src/pages/Services.jsx
import { motion } from "framer-motion";
import {Link} from "react-router-dom"

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Haircut",
      description: "Classic or modern haircut tailored to your style",
      price: "$30",
      image: "https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20861.jpg"
    },
    {
      id: 2,
      title: "Beard Trim",
      description: "Professional beard grooming and shaping",
      price: "$20",
      image: "https://img.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_1303-20953.jpg"
    },
    {
      id: 3,
      title: "Hot Towel Shave",
      description: "Traditional hot towel shave with straight razor",
      price: "$35",
      image: "https://img.freepik.com/premium-photo/barber-wipes-beard-man-after-washing-barbershop_84738-3754.jpg"
    },
    {
      id: 4,
      title: "Hair + Beard Combo",
      description: "Complete grooming package for hair and beard",
      price: "$45",
      image: "https://img.freepik.com/premium-photo/making-haircut-look-perfect-young-bearded-man-getting-haircut-by-hairdresser_425904-16293.jpg"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of premium grooming services tailored to meet your
            specific needs and preferences.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-amber-500 font-bold text-2xl">
                    {service.price}
                  </span>
                  <motion.button
                    className="bg-amber-500 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="#contact">Book Now</a>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
