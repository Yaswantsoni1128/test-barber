// src/pages/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const allQuestions = [
  {
    id: 1,
    category: "General",
    question: "Do I need an appointment or can I walk in?",
    answer: "You can walk in anytime, but appointments guarantee no wait time.",
  },
  {
    id: 2,
    category: "General",
    question: "How long does a typical haircut take?",
    answer: "Most haircuts take about 30–45 minutes, depending on style.",
  },
  {
    id: 3,
    category: "Services",
    question: "What form of payment do you accept?",
    answer: "We accept cash, credit/debit cards, and mobile payments.",
  },
  {
    id: 4,
    category: "Pricing",
    question: "Do you offer any loyalty programs or discounts?",
    answer: "Yes—ask at checkout about our loyalty card and referral discounts.",
  },
  {
    id: 5,
    category: "Services",
    question: "What hair products do you use and sell?",
    answer: "We carry top-quality pomades, clays, and shampoos from X, Y, and Z brands.",
  },
];

const categories = ["All Questions", "General", "Services", "Pricing", "Support"];

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Questions");
  const [openId, setOpenId] = useState(null);

  const filtered = allQuestions.filter((q) =>
    (filter === "All Questions" || q.category === filter) &&
    q.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-[#0b1120] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Answers to common questions about our barbershop services.
        </p>

        {/* Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for questions…"
            className="w-full bg-[#1e293b] text-white placeholder-gray-400 rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1 rounded-full text-sm transition font-medium ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-[#1e293b] text-gray-300 hover:bg-[#334155]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filtered.map((q) => (
              <motion.div
                key={q.id}
                layout
                initial={{ borderRadius: 12 }}
                className="bg-[#1e293b] rounded-xl"
              >
                <button
                  onClick={() => setOpenId(openId === q.id ? null : q.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-semibold"
                >
                  <span className="flex-1">{q.question}</span>
                  <motion.div
                    animate={{ rotate: openId === q.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openId === q.id && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: "auto", opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-6 pb-5 text-gray-400 overflow-hidden"
                    >
                      {q.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-6">No questions found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
