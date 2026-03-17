import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TechStackStrip from "@/components/TechStackStrip";
import {
  Terminal,
  Cpu,
  Workflow,
  Laptop,
  Layers,
  Code2,
  Database,
  BrainCircuit,
  ArrowRight,
  MonitorPlay,
  Presentation,
  GitBranch,
  Zap,
  Binary,
  Code,
  Shapes,
  BookOpen,
  MessageCircle,
} from "lucide-react";

const HomePage = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="bg-[#02040a] text-slate-300 min-h-screen font-sans selection:bg-blue-600/30 overflow-x-hidden relative">
      {/* --- ADVANCED ANIMATED BACKGROUND --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />

        {/* Engineering Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* --- 1) HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-6 flex items-center justify-center overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          {/* Small Tag */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-slate-400 font-light tracking-wide"
          >
            Nadilix Software Training | Katihar
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="mt-6 text-[clamp(3rem,8vw,6rem)] leading-tight text-white font-extrabold uppercase"
          >
            Learn to Build
            <span className="text-blue-500"> Real Software </span>
            Projects
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-3xl mx-auto text-slate-400 text-[17px] md:text-[19px] leading-relaxed font-normal"
          >
            Nadilix is a practical coding and data training center where
            students build real software projects and gain real-world
            development experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium text-base transition"
            >
              <BookOpen size={18} />
              Explore Courses
            </Link>

            <a
              href="https://wa.me/917763937638"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/10 bg-white/5 text-white hover:bg-white hover:text-black rounded-lg font-medium text-base transition"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- 2) WHAT MAKES US DIFFERENT (BENTO STYLE) --- */}
      <section className="relative z-10 pt-8 pb-20 px-6 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="space-y-4 mb-12">
          <span className="text-blue-500 text-xs uppercase">
            Practical Learning
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter text-white leading-tight uppercase">
            Code Practice
          </h2>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[280px] gap-6">
          {/* Box 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-8 bg-[#0a0c12] border border-white/5 p-8 md:p-10 rounded-[3.5rem] group shadow-2xl"
          >
            <div className="space-y-6">
              <div className="p-4 bg-blue-600/10 w-fit rounded-xl text-blue-500">
                <MonitorPlay size={30} />
              </div>

              <h3 className="text-2xl md:text-4xl  text-white leading-snug tracking-tight uppercase">
                Live Coding
              </h3>

              <p className="text-slate-400 text-sm md:text-lg leading-relaxed max-w-md">
                Software is built step by step in real time so beginners clearly
                understand how development actually works.
              </p>
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-4 bg-[#0a0c12] border border-white/5 p-8 md:p-10 rounded-[3.5rem] group shadow-2xl"
          >
            <div className="space-y-5">
              <div className="p-4 bg-indigo-600/10 w-fit rounded-xl text-indigo-400">
                <BrainCircuit size={28} />
              </div>

              <h3 className="text-xl md:text-2xl  text-white leading-snug tracking-tight uppercase">
                AI Assisted Learning
              </h3>

              <p className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed">
                Students learn how to use AI tools in their daily coding
                workflow for faster and smarter development.
              </p>
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-4 bg-[#0a0c12] border border-white/5 p-8 md:p-10 rounded-[3.5rem] group shadow-2xl"
          >
            <div className="space-y-5">
              <div className="p-4 bg-blue-500/10 w-fit rounded-xl text-blue-400">
                <Laptop size={28} />
              </div>

              <h3 className="text-xl md:text-2xl  text-white leading-snug tracking-tight uppercase">
                Bring Your Laptop
              </h3>

              <p className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed">
                Students write, test, and run code on their own systems just
                like a real developer workspace.
              </p>
            </div>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="md:col-span-8 relative bg-blue-600 p-8 md:p-12 rounded-[3rem] text-white overflow-hidden group shadow-[0_30px_60px_-15px_rgba(37,99,235,0.4)]"
          >
            {/* Background Text */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-[100px] md:text-[160px] font-black opacity-10 tracking-tight select-none pointer-events-none transition-transform duration-700 group-hover:translate-x-4">
              Nadilix
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-2">
              <div className="p-4 bg-white/20 w-fit rounded-xl">
                <Workflow size={30} />
              </div>

              <h3 className="text-3xl md:text-5xl  leading-[1.1] tracking-tight">
                Real Workflow
              </h3>

              <p className="text-blue-100 text-base md:text-lg max-w-lg leading-relaxed">
                Students observe how a project moves from planning to deployment
                during live sessions and understand the complete development
                process.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- TECH STACK STRIP SECTION --- */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-[77rem] mx-auto">
          {/* Heading */}
          <div className="space-y-4 mb-12">
            <span className="text-blue-500 text-xs  tracking-wide uppercase">
              Technology Stack
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl  tracking-tighter text-white leading-tight uppercase">
              Tech Stack
            </h2>
          </div>

          {/* Transparent Card */}
          <div className="border border-white/10 rounded-3xl px-8 md:px-14 py-10">
            <TechStackStrip />
          </div>
        </div>
      </section>

      {/* --- 3) HOW CLASSES RUN DAILY --- */}
      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <span className="text-blue-500 text-xs  tracking-wide uppercase">
              Practice System
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl  tracking-tighter text-white leading-tight uppercase">
              Daily Workflow
            </h2>
          </div>

          <p className="text-slate-400 w-full md:max-w-sm text-sm md:text-base leading-relaxed md:border-l border-white/10 md:pl-6">
            Our standard routine designed to build strong practical skills
            through daily coding and project work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Hidden Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -z-10" />

          {[
            {
              id: "01",
              icon: <Presentation size={28} />,
              title: "Whiteboard",
              desc: "Basic concepts and logic are explained on the board with simple examples.",
              gradient: "from-blue-600/20",
            },
            {
              id: "02",
              icon: <MonitorPlay size={28} />,
              title: "Live Coding",
              desc: "The trainer writes code on the screen and explains it line by line.",
              gradient: "from-indigo-600/20",
            },
            {
              id: "03",
              icon: <Shapes size={28} />,
              title: "Practice",
              desc: "Students write and run the same code on their own laptops.",
              gradient: "from-blue-500/20",
            },
            {
              id: "04",
              icon: <GitBranch size={28} />,
              title: "Small Task",
              desc: "A small task is given to practice what was learned.",
              gradient: "from-cyan-600/20",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <Card className="bg-[#0a0c12] border-white/5 rounded-[2.5rem] overflow-hidden h-full transition-all duration-500 group-hover:border-blue-500/40 shadow-2xl">
                <CardContent className="p-10 flex flex-col h-full relative z-10">
                  {/* Step Number Background */}
                  <div className="absolute top-4 right-6 text-8xl font-black text-white/[0.02] group-hover:text-blue-500/[0.05] transition-colors pointer-events-none">
                    {step.id}
                  </div>

                  <div
                    className={`mb-10 p-5 bg-slate-900 rounded-3xl w-fit text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl`}
                  >
                    {step.icon}
                  </div>

                  <div className="space-y-4 relative">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-blue-600/50" />
                      <span className="text-blue-500 font-mono text-[10px] font-black uppercase tracking-[0.3em]">
                        Phase_{step.id}
                      </span>
                    </div>
                    <h3 className="text-2xl text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Glow */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </CardContent>

                {/* Subtle Glass Noise Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app')] opacity-[0.03] pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5) VISIT Nadilix INSTITUTE --- */}
      <section className="relative z-10 py-16 px-4 sm:px-6 text-center">
        <div className="relative group overflow-hidden w-full max-w-6xl mx-auto bg-blue-600 rounded-[2.5rem] md:rounded-[3rem] px-6 sm:px-10 md:px-20 py-12 md:py-20 shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)]">
          {/* Background Nadilix Text */}
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 mr-15 text-[120px] md:text-[210px] font-black opacity-16 tracking-tighter select-none pointer-events-none group-hover:translate-x-6 transition-transform duration-700">
            Nadilix
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl md:text-7xl  text-white tracking-tight leading-[1.1] mb-6 uppercase">
              Visit Nadilix <br className="hidden sm:block" />
              Training Center
            </h2>

            <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
              See how real software training happens. Visit our center, watch
              live coding sessions, interact with the mentor, and understand the
              complete learning environment before joining.
            </p>

            <a
              href="YOUR_GOOGLE_MAP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-black hover:text-white h-14 md:h-16 px-10 md:px-14 rounded-2xl  text-sm md:text-lg uppercase tracking-[0.2em] transition-all shadow-xl"
            >
              Visit Now
              <ArrowRight size={18} className="ml-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
