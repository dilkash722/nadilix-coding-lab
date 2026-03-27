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
  LayoutDashboard,
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
  const [user, setUser] = useState(null);

  // user fetch + listener
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // logout
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      toast.success("Logged out");
      navigate("/");
    } else {
      toast.error("Logout failed");
    }
  };

  // scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // body scroll lock
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
            className="group flex items-center gap-3 sm:gap-3 lg:gap-4 shrink-0"
          >
            {/* LEFT */}
            <div className="flex flex-col justify-center leading-[1.1]">
              <h1 className="text-[22px] sm:text-[28px] lg:text-[32px] font-extrabold tracking-[0.015em] text-white">
                NADILIX
              </h1>

              <div className="flex items-center gap-1 mt-[2px]">
                <span className="h-[1px] w-4 sm:w-4 bg-slate-600" />
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-medium tracking-[0.22em] text-slate-400 uppercase">
                  CODING LAB
                </span>
                <span className="h-[1px] w-4 sm:w-4 bg-slate-600" />
              </div>
            </div>

            {/* Divider */}
            <div className="h-6 sm:h-6 lg:h-7 w-[1px] bg-gradient-to-b from-transparent via-slate-700 to-transparent" />

            {/* RIGHT */}
            <div className="flex flex-col justify-center leading-[1.2]">
              <span className="text-[10px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.16em] text-blue-500 uppercase">
                Full Stack
              </span>

              <span className="mt-[2px] text-[9px] sm:text-[9px] lg:text-[10px] font-medium tracking-[0.16em] text-slate-400 uppercase group-hover:text-emerald-400 transition-colors duration-300">
                Data Analytics
              </span>
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

            <Link
              to={user ? "/admin/dashboard" : "/admin"}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition"
            >
              {user ? <LayoutDashboard size={16} /> : <Shield size={16} />}
              {user ? "Dashboard" : "Admin"}
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

              {/* Branding same as navbar */}
              <div className="mb-10">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col leading-[1.1]">
                    <h1 className="text-[24px] font-extrabold text-white">
                      NADILIX
                    </h1>

                    <div className="flex items-center gap-1 mt-[2px]">
                      <span className="h-[1px] w-4 bg-slate-600" />
                      <span className="text-[10px] tracking-[0.22em] text-slate-400 uppercase">
                        CODING LAB
                      </span>
                      <span className="h-[1px] w-4 bg-slate-600" />
                    </div>
                  </div>

                  <div className="h-6 w-[1px] bg-gradient-to-b from-transparent via-slate-700 to-transparent" />

                  <div className="flex flex-col">
                    <span className="text-[10px] text-blue-500 uppercase">
                      Full Stack
                    </span>
                    <span className="text-[9px] text-slate-400 uppercase">
                      Data Analytics
                    </span>
                  </div>
                </div>
              </div>

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

              {/* Admin Button same behavior as desktop */}
              <div className="mt-8">
                <Link
                  to={user ? "/admin/dashboard" : "/admin"}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 p-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition"
                >
                  {user ? <LayoutDashboard size={18} /> : <Shield size={18} />}
                  {user ? "Dashboard" : "Admin Login"}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
