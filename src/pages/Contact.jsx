import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Zap, ShieldCheck, Mail } from "lucide-react";

export default function ContactPage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="bg-[#02040a] text-white min-h-screen font-sans selection:bg-blue-600/30 overflow-x-hidden">
      {/* --- HERO --- */}
      <section className="relative pt-28 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-blue-500 font-medium tracking-wide"
          >
            Get in Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl  text-white leading-tight uppercase"
          >
            Contact Nadilix
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Reach out for course details, admissions, and training guidance.
          </motion.p>
        </motion.div>
      </section>
      {/* --- CONTENT GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* LEFT CARDS */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {[
            {
              label: "Terminal_Loc",
              value: "Madhav Niketan Pani Tanki Chowk, Katihar, Bihar",
              sub: "854105 // Nadilix_Coding_Lab",
              icon: <MapPin size={22} />,
            },
            {
              label: "Direct_Line",
              value: "+91 7763937638",
              sub: "MON-FRI // 10:00 AM - 05:00 PM",
              icon: <Phone size={22} />,
            },
            {
              label: "Digital_Mail",
              value: "danieldilkash@gamil.com",
              sub: "24/7 // Instant Sync",
              icon: <Mail size={22} />,
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="flex-1 p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl hover:border-blue-500/30 transition-all group flex flex-col justify-center"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {card.icon}
                </div>

                <div>
                  <p className="text-xs text-blue-500 font-medium mb-1">
                    {card.label.replace("_", " ")}
                  </p>

                  <h3 className="text-lg md:text-xl  text-white mb-1">
                    {card.value}
                  </h3>

                  <p className="text-sm text-slate-500">{card.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 bg-slate-950/40 border border-white/5 p-10 md:p-12 rounded-[3rem] backdrop-blur-3xl shadow-2xl relative flex flex-col justify-between"
        >
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-blue-600 text-xs font-medium px-5 py-2 rounded-full text-white flex items-center gap-2">
            <ShieldCheck size={14} /> System Active
          </div>

          <form
            className="space-y-12 h-full flex flex-col justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2 border-l-2 border-blue-600 pl-5 mb-8">
              <span className="text-sm text-blue-500 font-medium">
                Contact Form
              </span>
              <h3 className="text-2xl md:text-3xl  text-white">
                Send Your Details
              </h3>
            </div>

            <div className="space-y-10 mb-12">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-slate-800 focus:border-blue-600 py-2 text-base font-medium outline-none text-white placeholder:text-slate-700"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-slate-800 focus:border-blue-600 py-2 text-base font-medium outline-none text-white placeholder:text-slate-700"
                  placeholder="+91 Mobile"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400 mb-2 block">
                  Message
                </label>
                <textarea
                  rows="1"
                  className="w-full bg-transparent border-b border-slate-800 focus:border-blue-600 py-2 text-base font-medium outline-none text-white placeholder:text-slate-700 resize-none"
                  placeholder="Details..."
                />
              </div>
            </div>

            <button className="w-full h-16 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2">
              Send Message
              <Zap size={18} />
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
