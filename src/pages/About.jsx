// src/pages/About.jsx
import { motion } from "framer-motion";

const wrapperVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 }
  }
};

const itemSlideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const itemSlideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <motion.div
      className="w-screen bg-white"
      variants={wrapperVariants}
      initial="hidden"
      animate="visible"
    >
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col-reverse md:flex-row items-center md:space-x-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Text */}
            <motion.div
              className="w-full md:w-1/2 mt-8 md:mt-0"
              variants={itemSlideInLeft}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About TEST Barber
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Established in 2010, TEST Barber has been providing premium grooming services for men
                with a focus on quality, style, and customer satisfaction. Our team of skilled barbers
                combines traditional techniques with modern trends to deliver the perfect look for
                every client.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We pride ourselves on creating a welcoming atmosphere where clients can relax and
                enjoy their grooming experience. From classic cuts to contemporary styles, hot towel
                shaves to beard trims, we offer a full range of services to meet all your grooming needs.
              </p>
              <motion.button
                className="inline-block bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#barbers">Learn More</a>
              </motion.button>
            </motion.div>

            {/* Image */}
            <motion.div
              className="w-full md:w-1/2 relative"
              variants={itemSlideInRight}
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://img.freepik.com/premium-photo/barber-smiling-looking-attentive-while-combing-beard-his-client_376548-1473.jpg?ga=GA1.1.1264861903.1717471952&semt=ais_hybrid&w=740"
                  alt="Inside PMC Barber"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
              {/* Decorative square */}
              <div className="hidden md:block absolute -bottom-8 -right-8 bg-amber-500 h-32 w-32 rounded-lg shadow-md" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
