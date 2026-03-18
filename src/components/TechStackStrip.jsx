import {
  SiPython,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCplusplus,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

// YOUR ORIGINAL C SVG (same as diya tha)
function CIcon({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path
        fill="#283593"
        fillRule="evenodd"
        d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 
        c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566
        c0,3.766,0,15.101,0,18.867c0,0.762-0.418,1.466-1.097,1.847
        c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0
        c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434
        c0-3.766,0-15.101,0-18.867c0-0.762,0.418-1.466,1.097-1.847
        C9.451,10.837,19.549,5.169,22.903,3.286z"
      />
      <path
        fill="#5c6bc0"
        fillRule="evenodd"
        d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255
        c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836
        c3.343-1.872,13.405-7.507,16.748-9.38c0.677-0.379,1.594-0.371,2.271,0.008
        c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14
        s-14-6.273-14-14S16.273,10,24,10z
        M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7
        s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
      />
      <path
        fill="#3949ab"
        fillRule="evenodd"
        d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784
        c0,3.795-0.032,14.589,0.009,18.384
        c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
      />
    </svg>
  );
}

const row1 = [
  { Icon: SiPython, color: "#3776AB" },
  { Icon: SiMysql, color: "#4479A1" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiPostgresql, color: "#336791" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiNodedotjs, color: "#339933" },

  // Added
  { Icon: CIcon, color: null },
  { Icon: SiCplusplus, color: "#00599C" },
  { Icon: FaJava, color: "#F89820" },
];

const row2 = [
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiHtml5, color: "#E34F26" },
  { Icon: SiNextdotjs, color: "#FFFFFF" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: SiGithub, color: "#FFFFFF" },
  { Icon: SiCss3, color: "#1572B6" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiExpress, color: "#FFFFFF" },
];

function Row({ icons, reverse }) {
  const items = [...icons, ...icons, ...icons];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-16 w-max items-center ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
      >
        {items.map(({ Icon, color }, i) => (
          <Icon key={i} size={44} style={color ? { color } : undefined} />
        ))}
      </div>
    </div>
  );
}

export default function TechStackStrip() {
  return (
    <div className="py-10 space-y-8">
      <Row icons={row1} />
      <Row icons={row2} reverse />
    </div>
  );
}
