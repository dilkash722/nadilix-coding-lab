import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import {
  User,
  Phone,
  BookOpen,
  Wallet,
  Save,
  X,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { addPayment } from "@/services/paymentService";
import { toast } from "sonner";

// shadcn
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function StudentForm({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course_id: "",
    total_fee: 0,
    first_payment: "",
  });

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    const { data, error } = await supabase
      .from("courses")
      .select("id, name, fee");

    if (error) {
      console.error("course fetch error:", error);
      return;
    }

    setCourses(data || []);
  }

  // course select → auto fee set
  function handleCourseChange(value) {
    const selected = courses.find((c) => String(c.id) === String(value));

    setForm((prev) => ({
      ...prev,
      course_id: value,
      total_fee: selected?.fee || 0,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const firstPayment = Number(form.first_payment || 0);

      if (!form.name || !form.phone || !form.course_id) {
        toast.error("Please fill all required fields", {
          icon: <XCircle size={16} />,
        });
        return;
      }

      const { data: student, error: studentError } = await supabase
        .from("students")
        .insert([
          {
            name: form.name,
            phone: form.phone,
            course_id: form.course_id,
          },
        ])
        .select()
        .single();

      if (studentError) throw studentError;

      if (firstPayment > 0) {
        await addPayment(student.id, firstPayment);
      }

      toast.success("Student added successfully", {
        icon: <CheckCircle size={16} />,
      });

      onSuccess && onSuccess();
      onClose();
    } catch (err) {
      console.error(err);

      toast.error(err.message || "Something went wrong", {
        icon: <XCircle size={16} />,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#02040a] px-4">
      {/* Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#0a0c12] border border-white/5 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
          <h2 className="text-white text-base font-medium flex items-center gap-2">
            <User size={16} className="text-blue-400" />
            Add Student
          </h2>

          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {/* Name */}
          <div>
            <label className="text-xs text-slate-400">Student Name</label>
            <div className="flex items-center gap-2 mt-1 bg-white/5 border border-white/10 rounded-lg px-3">
              <User size={16} className="text-blue-400" />
              <input
                type="text"
                placeholder="Enter name"
                className="w-full bg-transparent py-2 outline-none text-white"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs text-slate-400">Phone</label>
            <div className="flex items-center gap-2 mt-1 bg-white/5 border border-white/10 rounded-lg px-3">
              <Phone size={16} className="text-blue-400" />
              <input
                type="text"
                placeholder="Enter phone"
                className="w-full bg-transparent py-2 outline-none text-white"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
          </div>

          {/* Course (FULL WIDTH) */}
          <div>
            <label className="text-xs text-slate-400">Course</label>

            <Select value={form.course_id} onValueChange={handleCourseChange}>
              <SelectTrigger className="mt-1 w-full bg-white/5 border border-white/10 text-white">
                <div className="flex items-center gap-2 w-full">
                  <BookOpen size={16} className="text-blue-400" />
                  <SelectValue placeholder="Select Course" />
                </div>
              </SelectTrigger>

              <SelectContent
                position="popper"
                className="bg-[#0a0c12] border-white/10 text-white z-50"
              >
                {courses.map((c) => (
                  <SelectItem key={c.id} value={String(c.id)}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Total Fee (AUTO) */}
          <div>
            <label className="text-xs text-slate-400">Total Fee</label>
            <div className="flex items-center gap-2 mt-1 bg-white/5 border border-white/10 rounded-lg px-3 opacity-70">
              <Wallet size={16} className="text-blue-400" />
              <input
                type="number"
                value={form.total_fee}
                readOnly
                className="w-full bg-transparent py-2 outline-none text-white"
              />
            </div>
          </div>

          {/* First Payment */}
          <div>
            <label className="text-xs text-slate-400">First Payment</label>
            <div className="flex items-center gap-2 mt-1 bg-white/5 border border-white/10 rounded-lg px-3">
              <Wallet size={16} className="text-green-400" />
              <input
                type="number"
                placeholder="Enter first payment"
                className="w-full bg-transparent py-2 outline-none text-white"
                onChange={(e) =>
                  setForm({ ...form, first_payment: e.target.value })
                }
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 
              bg-white/5 border border-white/10 text-slate-400
              hover:bg-white/10 hover:border-white/20 hover:text-white 
                transition-all duration-300 active:scale-[0.98]"
            >
              <Save size={14} />
              {loading ? "Saving..." : "Save Student"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
