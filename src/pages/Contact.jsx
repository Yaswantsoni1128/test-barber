// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-blue-400 uppercase mb-2">
            Book Your Appointment
          </p>
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-400 mt-2">
            Ready for a fresh look? Book your appointment today or drop us a line.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Info Card */}
          <motion.div
            variants={item}
            className="bg-gray-800 rounded-xl p-8 shadow-lg space-y-8"
          >
            {[
              {
                icon: <MapPin size={20} className="text-white" />,
                label: "Address",
                value: "Near Indian Institute of Information Technology Una",
              },
              {
                icon: <Phone size={20} className="text-white" />,
                label: "Phone",
                value: "+919999999999",
              },
              {
                icon: <Clock size={20} className="text-white" />,
                label: "Business Hours",
                value: "Mon–Fri: 9 AM–7 PM, Sat: 9 AM–5 PM, Sun: Closed",
              },
            ].map((info, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {info.label}
                  </h3>
                  <p className="text-gray-400 text-sm">{info.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            variants={item}
            className="bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Book Your Appointment</h3>
            <form
              className="space-y-4"
              action="https://formspree.io/f/xzzrwllb"
              method="POST"
              autoComplete="off"
            >
              {[
                {
                  id: "name",
                  name: "name",
                  label: "Your Name",
                  type: "text",
                  placeholder: "Enter your full name"
                },
                {
                  id: "phone",
                  name: "phone",
                  label: "Phone Number",
                  type: "tel",
                  placeholder: "Enter your phone number"
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-gray-300 mb-1 text-sm"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="service" className="block text-gray-300 mb-1 text-sm">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select an option</option>
                  <option value="haircut">Haircut</option>
                  <option value="beard">Beard Trim</option>
                  <option value="shave">Hot Towel Shave</option>
                  <option value="combo">Hair + Beard Combo</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-gray-300 mb-1 text-sm">
                  Preferred Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-1 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your style preferences or any questions"
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
