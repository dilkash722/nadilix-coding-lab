import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Menu,
  X,
  Home,
  Info,
  BookOpen,
  Globe,
  ChevronRight,
  Shield,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Our Courses", path: "/courses", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Globe },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock (mobile menu)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#02040a]/90 backdrop-blur-xl border-b border-white/5 py-3 lg:py-4"
            : "bg-transparent py-4 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">
          {/* Branding */}
          <Link
            to="/"
            className="group flex flex-col items-start select-none outline-none shrink-0"
          >
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              <div className="flex flex-col justify-center min-w-fit sm:min-w-[130px] leading-[1.1]">
                <h1 className="text-md sm:text-[28px] lg:text-[32px] font-extrabold tracking-[0.015em] text-white">
                  NADILIX
                </h1>

                <div className="flex items-center gap-1 mt-[1px]">
                  <span className="h-[1px] w-3 sm:w-4 bg-slate-600" />
                  <span className="text-[8px] sm:text-[10px] lg:text-[11px] font-medium tracking-[0.22em] text-slate-400 uppercase">
                    CODING LAB
                  </span>
                  <span className="h-[1px] w-3 sm:w-4 bg-slate-600" />
                </div>
              </div>

              <div className="h-5 sm:h-6 lg:h-7 w-[1px] bg-gradient-to-b from-transparent via-slate-700 to-transparent" />

              <div className="flex flex-col justify-center min-w-fit sm:min-w-[130px] leading-[1.3]">
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.16em] text-blue-500 uppercase">
                  Full Stack
                </span>

                <span className="mt-[2px] sm:mt-[3px] text-[8px] sm:text-[9px] lg:text-[10px] font-medium tracking-[0.16em] text-slate-400 uppercase group-hover:text-emerald-400 transition-colors duration-300">
                  Data Analytics
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-2">
              {links.map((link) => {
                const Icon = link.icon;
                const active = pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[15px] font-medium transition ${
                      active ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Icon size={16} />
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Auth Button */}
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition"
            >
              <Shield size={16} />
              Admin
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2.5 bg-white/5 border border-white/10 rounded-lg text-white"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[140]"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0a0c12] z-[150] px-8 pt-20 pb-10 flex flex-col"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 p-2.5 bg-white/5 border border-white/10 rounded-lg text-white"
              >
                <X size={22} />
              </button>

              {/* Links */}
              <div className="space-y-4">
                {links.map((link, i) => {
                  const Icon = link.icon;
                  const active = pathname === link.path;

                  return (
                    <motion.div
                      key={link.path}
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between p-4 rounded-xl transition ${
                          active
                            ? "bg-blue-600 text-white"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={18} />
                          <span className="text-[16px] font-medium">
                            {link.name}
                          </span>
                        </div>
                        <ChevronRight size={18} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Auth Button Mobile */}
              <div className="mt-8">
                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 p-4 rounded-xl bg-red-600 text-white font-medium"
                  >
                    <Shield size={18} />
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/admin"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 p-4 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition font-medium"
                  >
                    <Shield size={18} />
                    Admin
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
