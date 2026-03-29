import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  MapPin,
  Phone,
  Zap,
  ShieldCheck,
  Mail,
  User,
  BookOpen,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Supabase client import (configured in lib folder)
import { supabase } from "@/lib/supabase";

// Toast notification (sonner)
import { toast } from "sonner";

export default function ContactPage() {
  // Form state (controlled inputs)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "",
    hidden: "",
  });

  // Loading state for submit button
  const [loading, setLoading] = useState(false);

  // Animation variants (framer-motion)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // honeypot (bot detect)
    if (form.hidden) return;

    // validation
    if (!form.name || form.name.trim().length < 3) {
      toast.error("Enter valid name");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      toast.error("Enter valid 10 digit phone");
      return;
    }

    if (!form.course) {
      toast.error("Select course");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.from("enquiries").insert([
        {
          name: form.name.trim(),
          phone: form.phone,
          course: form.course,
        },
      ]);

      if (error) throw error;

      toast.success(`Thanks ${form.name}, we’ll contact you soon.`);

      setForm({
        name: "",
        phone: "",
        course: "",
        hidden: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#02040a] text-white min-h-screen font-sans selection:bg-blue-600/30 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Simple Professional Label */}
          <span className="text-blue-500 text-xs font-bold uppercase tracking-widest block mb-4">
            Get in Touch
          </span>

          {/* Clean, Strong Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Contact <span className="text-blue-500">Nadilix</span>
          </h2>

          {/* Simple, Professional Description */}
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Reach out for <span className="text-slate-200">course details</span>
            , admissions, and expert training guidance to start your career.
          </p>

          {/* Subtle Minimal Divider */}
          <div className="w-12 h-1 bg-blue-500/30 mx-auto mt-12 rounded-full" />
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Info Cards */}
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
              className="flex-1 p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs text-blue-500">{card.label}</p>
                  <h3 className="text-lg text-white">{card.value}</h3>
                  <p className="text-sm text-slate-500">{card.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Form Section */}
        <motion.div className="lg:col-span-7 bg-slate-950/40 border border-white/5 p-10 md:p-12 rounded-[3rem]">
          {/* Form Start */}
          <form className="space-y-10" onSubmit={handleSubmit}>
            {/* Honeypot (hidden spam trap) */}
            <input
              type="text"
              value={form.hidden}
              onChange={(e) => setForm({ ...form, hidden: e.target.value })}
              className="hidden"
            />

            {/* Heading */}
            <div className="space-y-2 border-l-2 border-blue-600 pl-5 mb-6">
              <span className="text-sm text-blue-500 font-medium">
                Enquiry Form
              </span>
              <h3 className="text-2xl text-white">Request a Call Back</h3>
            </div>

            {/* Name Input */}
            <div className="flex items-center gap-3 border-b border-slate-800 py-2">
              <User size={18} />
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                placeholder="Full Name"
                className="bg-transparent border-0"
              />
            </div>

            {/* Phone Input */}
            <div className="flex items-center gap-3 border-b border-slate-800 py-2">
              <Phone size={18} />
              <Input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                type="tel"
                placeholder="+91 Mobile Number"
                className="bg-transparent border-0"
              />
            </div>

            {/* Course Select */}
            <div className="relative border-b border-slate-800 py-2">
              <BookOpen
                size={18}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white"
              />

              <Select
                onValueChange={(value) => setForm({ ...form, course: value })}
              >
                <SelectTrigger className="w-full pl-7 bg-transparent border-0 text-white">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>

                <SelectContent
                  position="popper"
                  className="bg-slate-950/90 backdrop-blur-2xl border border-white/10 text-white w-[--radix-select-trigger-width]"
                >
                  <SelectItem value="Full Stack Development">
                    Full Stack Development
                  </SelectItem>
                  <SelectItem value="Front End Development">
                    Front End Development
                  </SelectItem>
                  <SelectItem value="Data Analytics">
                    Data Analytics with Python
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-blue-600"
            >
              {loading ? "Submitting..." : "Submit Now"}
              <Zap size={18} />
            </Button>
          </form>
          {/* Form End */}
        </motion.div>
      </section>
    </div>
  );
}
