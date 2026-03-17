import { Link } from "react-router-dom";
import { MapPin, Phone, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02040a] border-t border-white/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
          {/* BRAND */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-col items-start select-none">
              <Link to="/" className="group outline-none select-none">
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                  {/* Left Block */}
                  <div className="flex flex-col justify-center min-w-fit sm:min-w-[130px] leading-[1.1]">
                    <h2 className="text-[20px] sm:text-[22px] font-medium tracking-[0.015em] text-white">
                      NADILIX
                    </h2>

                    <div className="flex items-center gap-1 mt-[1px]">
                      <span className="h-[1px] w-3 sm:w-4 bg-slate-600" />

                      <span className="text-[8px] sm:text-[10px] font-medium tracking-[0.22em] text-slate-400 uppercase group-hover:text-blue-400 transition">
                        CODING LAB
                      </span>

                      <span className="h-[1px] w-3 sm:w-4 bg-slate-600" />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-5 sm:h-6 w-[1px] bg-gradient-to-b from-transparent via-slate-700 to-transparent" />

                  {/* Right Block */}
                  <div className="flex flex-col justify-center min-w-fit sm:min-w-[130px] leading-[1.3]">
                    <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] text-blue-500 uppercase">
                      Full Stack
                    </span>

                    <span className="mt-[2px] text-[8px] sm:text-[9px] font-medium tracking-[0.16em] text-slate-400 uppercase group-hover:text-emerald-400 transition-colors duration-300">
                      Data Analytics
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              Practical software training where students learn through live
              coding, clear concepts, and real project practice.
            </p>

            <div className="flex gap-4 pt-2">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-slate-600 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COURSES */}
          <div className="lg:col-span-3">
            <h3 className="text-sm text-white mb-5 tracking-wide">Courses</h3>

            <ul className="space-y-3 text-sm">
              {[
                "Full Stack Development",
                "Frontend with React",
                "Data Analytics with Python",
                "Programming Languages",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/courses"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-4">
            <h3 className="text-sm text-white mb-5 tracking-wide">Contact</h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={16} className="text-blue-500" />
                +91 7763937638
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={16} className="text-blue-500" />
                Katihar, Bihar
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-600 text-center md:text-left">
            © {currentYear} Nadilix. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-600 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
