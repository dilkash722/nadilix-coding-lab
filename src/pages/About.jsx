import React from "react";
import { motion } from "framer-motion";
import avtar from "../assets/avtar.jpg";
import {
  Target,
  Eye,
  Terminal,
  Code2,
  BookOpen,
  UserCheck,
  ClipboardCheck,
  Cpu,
} from "lucide-react";

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-[#02040a] text-slate-300 min-h-screen font-sans selection:bg-blue-600/30 overflow-x-hidden">
      {/* Background Tech Elements */}
      <div
        className="fixed inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Simple Blue Label */}
          <span className="text-blue-500 text-xs font-bold uppercase tracking-widest block mb-4">
            About Nadilix
          </span>

          {/* Clean, Bold Heading - Not too heavy */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Real <span className="text-blue-500">Development</span>
          </h2>

          {/* Simple, Readable Description */}
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            We focus on{" "}
            <span className="text-slate-200">practical learning</span> where
            students write code daily, build projects step by step, and
            understand how real software development works in the industry.
          </p>

          {/* Simple Divider Line */}
          <div className="w-16 h-1 bg-blue-500/20 mx-auto mt-12 rounded-full" />
        </motion.div>
      </section>

      {/* --- FOUNDER SECTION --- */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-2xl overflow-hidden grid md:grid-cols-2"
          >
            {/* LEFT AVATAR */}
            <div className="flex justify-center items-center px-6 sm:px-8 md:px-0 py-10 md:py-14 w-full">
              <div className="relative mx-auto">
                {/* Outer subtle glow */}
                <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-2xl" />

                {/* Circular border avatar */}
                <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-white/20 p-3 bg-[#0a0c12]">
                  <img
                    src={avtar}
                    alt="Founder"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-8 md:p-10 space-y-6 flex flex-col justify-center">
              <div>
                <h2 className="text-2xl md:text-3xl  text-white uppercase tracking-tight font-bold">
                  Md Dilkhush
                </h2>
                <p className="text-blue-500 text-sm mt-1 uppercase tracking-wide font-medium">
                  Founder & Lead Mentor, Nadilix
                </p>
              </div>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Nadilix focuses on practical software learning through daily
                coding, real projects, and industry style workflow so students
                become confident independent developers.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10 text-sm">
                <div>
                  <p className="text-white font-medium">MCA, BCA</p>
                  <p className="text-slate-500">Academic base</p>
                </div>
                <div>
                  <p className="text-white font-medium">Live Projects</p>
                  <p className="text-slate-500">Hands-on work</p>
                </div>
                <div>
                  <p className="text-white font-medium">Full Stack</p>
                  <p className="text-slate-500">Modern tools</p>
                </div>
                <div>
                  <p className="text-white font-medium">Workflow</p>
                  <p className="text-slate-500">Industry practice</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- PILLARS --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl  mb-16 tracking-wide text-white uppercase">
          Nadilix Pillars
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <BookOpen />,
              title: "Easy Learning",
              sub: "Step by step guidance",
            },
            {
              icon: <UserCheck />,

              title: "Personal Mentorship",
              sub: "Direct doubt support",
            },
            {
              icon: <ClipboardCheck />,
              title: "Daily Practice",
              sub: "Regular hands on tasks",
            },
            {
              icon: <Code2 />,
              title: "Clean Coding",
              sub: "Good habits from start",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-blue-500/30 transition-all group"
            >
              <div className="text-blue-500 flex justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h5 className="text-lg  text-white tracking-tight">
                  {item.title}
                </h5>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-1">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
