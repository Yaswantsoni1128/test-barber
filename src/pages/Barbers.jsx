import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Barbers() {
  const barbers = [
    {
      id: 1,
      name: "Michael Johnson",
      position: "Master Barber",
      description:
        "15+ years of experience in classic and modern styles. Known for precision cuts and attention to detail.",
      image:
        "https://img.freepik.com/premium-photo/bearded-hipster-wear-waistcoat-brutal-bearded-servant-hipster-barman-waistcoat-gloves_265223-135.jpg?ga=GA1.1.1264861903.1717471952&semt=ais_hybrid&w=740",
    },
    {
      id: 2,
      name: "David Smith",
      position: "Senior Barber",
      description:
        "Specializes in precision fades and beard sculpting. Loved by clients for his creative styling.",
      image:
        "https://img.freepik.com/free-photo/portrait-male-hairdresser-standing-black-armchair_23-2147839802.jpg?ga=GA1.1.1264861903.1717471952&semt=ais_hybrid&w=740",
    },
    {
      id: 3,
      name: "Robert Wilson",
      position: "Barber Stylist",
      description:
        "Expert in trendy cuts and creative styling. Passionate about helping you find your best look.",
      image:
        "https://img.freepik.com/free-photo/handsome-stylish-bearded-male-with-tattoo-arm-dressed-flannel-shirt-drinks-coffee-barbershop_613910-14697.jpg?ga=GA1.1.1264861903.1717471952&semt=ais_hybrid&w=740",
    },
  ];

  return (
    <section id="barbers" className="py-20 bg-[#0b1120] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-500 font-medium"
          >
            Expert Stylists
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Meet <span className="text-amber-500">Our Barbers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
          </motion.p>
        </div>

        {/* Barber Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {barbers.map((barber) => (
            <motion.div
              key={barber.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-[#1e293b] rounded-xl shadow-lg overflow-hidden text-center flex flex-col p-6"
            >
              <img
                src={barber.image}
                alt={barber.name}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <div className="border-t-4 border-amber-500 w-12 mx-auto my-3"></div>
              <h3 className="text-lg font-bold text-white mb-1">{barber.name}</h3>
              <p className="text-amber-500 font-medium mb-3">{barber.position}</p>
              <p className="text-gray-400 text-sm mb-4">{barber.description}</p>
              <div className="mt-auto flex justify-center space-x-4">
                <a
                  href="#"
                  className="bg-[#0f172a] p-2 rounded-full hover:bg-amber-500 transition"
                >
                  <Instagram size={18} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-[#0f172a] p-2 rounded-full hover:bg-amber-500 transition"
                >
                  <Facebook size={18} className="text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
