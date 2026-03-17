import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Terminal,
  Code2,
  BrainCircuit,
  ArrowRight,
  Code,
  Zap,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Programming With AI",
    subtitle: "Core Languages for Real Development",
    desc: "Learn industry level programming languages with AI assisted guidance and build real world applications step by step.",
    stack: ["Python", "JavaScript", "Java", "C", "C++", "MySQL", "MongoDB"],
    points: [
      "Strong programming fundamentals",
      "Hands-on coding with real languages",
      "Build projects with backend and databases",
    ],
    icon: <Code size={40} className="text-indigo-500" />,
    border: "group-hover:border-indigo-500/50",
    bgGlow: "bg-indigo-500/5",
  },
  {
    title: "Frontend Development",
    subtitle: "Build Interactive Web UI",
    desc: "Learn how to create responsive and interactive user interfaces using React with simple real world projects.",
    stack: [
      "HTML5",
      "CSS3",
      "Tailwind",
      "JS",
      "React",
      "Vite",
      "Git",
      "GitHub",
      "AI Coding",
    ],
    points: [
      "React basics made easy",
      "Build responsive UI step by step",
      "Run your project live on local server",
    ],
    icon: <Code2 size={40} className="text-blue-500" />,
    border: "group-hover:border-blue-500/50",
    bgGlow: "bg-blue-500/5",
  },
  {
    title: "Full Stack Development",
    subtitle: "Build Complete Web Projects",
    desc: "Learn how frontend, backend, and database work together by building simple real world projects step by step.",
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Next.js",
      "Tailwind",
      "Git",
      "GitHub",
      "AI Coding",
    ],
    points: [
      "Frontend, backend, and database basics",
      "Simple APIs and data handling",
      "Cloud deployment step by step",
    ],
    icon: <Terminal size={40} className="text-indigo-500" />,
    border: "group-hover:border-indigo-500/50",
    bgGlow: "bg-indigo-500/5",
  },
  {
    title: "Data Analytics & Python",
    subtitle: "Learn Data Step by Step",
    desc: "Understand data basics, perform simple analysis with Python, and create clear charts using real datasets.",
    stack: [
      "Python Core",
      "Pandas",
      "NumPy",
      "Statistics",
      "Seaborn",
      "MySQL",
      "Matplotlib",
      "Plotly",
      "Excel",
      "AI Coding",
    ],
    points: [
      "Data basics and simple analysis",
      "Charts and visual reports",
      "Working with real datasets step by step",
    ],
    icon: <BrainCircuit size={40} className="text-emerald-500" />,
    border: "group-hover:border-emerald-500/50",
    bgGlow: "bg-emerald-500/5",
  },
];

export default function Courses() {
  return (
    <div className="bg-[#02040a] text-white min-h-screen font-sans pb-24 selection:bg-blue-600/30">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.15,
          }}
          className="max-w-5xl mx-auto space-y-6"
        >
          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-blue-500 font-medium tracking-wide"
          >
            Our Programs
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl  text-white leading-tight uppercase"
          >
            We Offers
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Well structured training programs focused on strong fundamentals,
            practical skills, and real project experience used in the software
            industry.
          </motion.p>
        </motion.div>
      </section>
      {/* --- COURSE GRID --- */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`group relative p-8 md:p-12 bg-[#05070a] border border-white/5 rounded-[2.5rem] transition-all duration-500 ${course.border} hover:bg-black/40 overflow-hidden`}
          >
            <div
              className={`absolute inset-0 ${course.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
            />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-blue-600/10 transition-all duration-500">
                  {course.icon}
                </div>

                <div className="text-right">
                  <div className="text-xs font-medium tracking-wide text-blue-500 mb-1">
                    Course Path
                  </div>
                  <div className="h-1 w-10 bg-blue-600 ml-auto rounded-full" />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl  tracking-tight mb-3 group-hover:text-blue-500 transition-colors">
                {course.title}
              </h2>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                {course.desc}
              </p>

              {/* POINTS LIST */}
              <ul className="space-y-3 mb-8 border-l border-white/10 pl-4">
                {course.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-blue-500 shrink-0"
                    />
                    <span className="text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="mb-10">
                <p className="text-xs font-medium tracking-wide text-slate-500 mb-4 flex items-center gap-2">
                  <Zap size={10} className="fill-current" /> Technical Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {course.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-slate-400 group-hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center gap-6 pt-6 border-t border-white/5 flex-wrap">
                <Button className="bg-white text-black hover:bg-blue-600 hover:text-white h-11 px-8 rounded-xl font-medium text-sm tracking-wide transition-all shadow-md">
                  Visit Center <ArrowRight size={14} className="ml-2" />
                </Button>

                <button className="text-sm font-medium tracking-wide text-slate-600 hover:text-white transition-colors">
                  Batch Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
