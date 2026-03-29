import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  BrainCircuit,
  ArrowRight,
  MonitorPlay,
  Presentation,
  GitBranch,
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
            className="mt-6 text-[clamp(2.5rem,6vw,6rem)] leading-[1.2] tracking-[-0.01em] text-white font-extrabold uppercase"
          >
            Learn to Build <br />
            <span className="text-blue-500">Real Software</span> <br />
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

      {/* --- CRAEER PATH --- */}
      <section className="relative z-10 px-6 py-32 max-w-7xl mx-auto overflow-hidden">
        {/* Section Header */}
        <div className="max-w-4xl text-left mb-20 relative">
          {/* Subtle Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1.5 bg-blue-600 rounded-full mb-8"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[clamp(2.5rem,7vw,4.5rem)] font-black text-white mb-8 tracking-[-0.05em] leading-[0.95] md:leading-[1]"
          >
            Master{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              In-Demand
            </span>
            <br />
            Industry Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed border-l-2 border-white/10 pl-8"
          >
            Learn modern skills that help you{" "}
            <span className="text-white font-medium">build, earn and grow</span>{" "}
            in the global tech landscape.
          </motion.p>
        </div>

        {/* Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Code2 size={28} />,
              title: "Frontend Development",
              desc: "Build modern UI using React, Tailwind and APIs.",
            },
            {
              icon: <Code2 size={28} />,
              title: "Full Stack Development",
              desc: "Build complete web apps with frontend, backend and database.",
            },
            {
              icon: <Database size={28} />,
              title: "Data Analytics",
              desc: "Work with real data using Python, SQL and dashboards.",
            },
            {
              icon: <BrainCircuit size={28} />,
              title: "Programming with AI",
              desc: "Use AI tools to code faster and build smarter projects.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative p-10 rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] hover:border-blue-500/40 transition-all duration-500 overflow-hidden"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-10 p-4 inline-block rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl shadow-blue-500/5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-10 text-[15px] font-light">
                  {item.desc}
                </p>

                <div className="flex items-center text-[11px] font-black text-blue-400 uppercase tracking-[0.2em] group-hover:gap-3 transition-all cursor-pointer">
                  Learn More{" "}
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE NADILIX--- */}
      <section className="relative z-10 px-4 md:px-6 py-20 bg-blue-600/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            {/* Heading with better letter spacing & line height */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-7xl font-black text-white mb-12 tracking-[-0.06em] leading-[0.9] md:leading-[0.95]"
            >
              <span className="opacity-50 font-light tracking-tight text-3xl md:text-4xl block mb-2">
                The Nadilix Advantage
              </span>
              Why Students <br />
              <span className="relative">
                <span className="bg-gradient-to-br from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  Choose Nadilix?
                </span>
                {/* Subtle underline for emphasis */}
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-blue-500/50 to-transparent rounded-full"
                />
              </span>
            </motion.h2>

            {/* List with modern spacing and glass-pills */}
            <div className="grid gap-5">
              {[
                "Real Project Learning",
                "Personal Guidance",
                "Modern Tech Stack Training",
                "Job Ready",
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/20 transition-all group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                    <CheckCircle2
                      className="text-emerald-500 group-hover:text-white"
                      size={20}
                    />
                  </div>

                  <span className="text-lg md:text-xl font-medium text-slate-200 tracking-tight">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="h-40 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-4">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-xs text-slate-400">Practical</span>
              </div>

              <div className="h-56 bg-blue-600 rounded-2xl flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl font-bold text-white">Live</span>
                <span className="text-sm text-white/80">Coding Sessions</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-56 bg-indigo-600 rounded-2xl flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl font-bold text-white">24/7</span>
                <span className="text-sm text-white/80">Expert Help</span>
              </div>

              <div className="h-40 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-4">
                <span className="text-3xl font-bold text-white">0%</span>
                <span className="text-xs text-slate-400 text-center">
                  Boring Theory
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* JOB ROLES */}
      <section className="relative z-10 px-4 md:px-6 py-20 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-16 text-left relative">
          {/* Chota decorative element */}
          <div className="w-12 h-1 bg-blue-600 rounded-full mb-6 opacity-80" />

          <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-black text-white mb-6 tracking-[-0.04em] leading-[1.1]">
            Ready for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Real-World
            </span>
            <br />
            Job Roles
          </h2>

          <p className="text-slate-400 text-lg md:text-xl font-light max-w-xl leading-relaxed border-l-2 border-white/10 pl-6">
            Bridge the gap between learning and earning. Get ready for these
            industry roles after completing your training.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Frontend Developer",
              desc: "Build modern UI using React, Tailwind and APIs.",
            },
            {
              title: "Backend Developer",
              desc: "Create APIs, manage databases and server logic.",
            },
            {
              title: "Full Stack Developer",
              desc: "Work on frontend, backend and database together.",
            },
            {
              title: "Data Analyst",
              desc: "Analyze data using Python, SQL and dashboards.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-xl"
            >
              {/* Icon */}
              <div className="mb-5 p-3 inline-flex rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition">
                <Briefcase size={22} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom line */}
              <div className="mt-5 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition">
                Explore role →
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- DAILY WORKFOLLOW -----*/}
      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10 relative">
          {/* Left Side: Heading Group */}
          <div className="space-y-4">
            {/* Main Impactful Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white tracking-[-0.05em] leading-[0.95]"
            >
              Daily{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
                Workflow
              </span>
            </motion.h2>
          </div>

          {/* Right Side: Description with Premium Border */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 w-full md:max-w-md text-lg md:text-xl font-light leading-relaxed md:border-l-2 border-blue-600/30 md:pl-8 opacity-80"
          >
            Our standard routine designed to build{" "}
            <span className="text-slate-200 font-medium whitespace-nowrap">
              strong practical skills
            </span>{" "}
            through daily coding and project work.
          </motion.p>
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
