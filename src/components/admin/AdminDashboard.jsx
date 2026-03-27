import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

import DashboardTabs from "./DashboardTabs";
import EnquiryList from "./EnquiryList";
import StudentList from "./StudentList";
import { toast } from "sonner";
import avatar from "@/assets/avtar.jpg";

// icons
import { LogOut, LogIn, CheckCircle, XCircle } from "lucide-react";

// shadcn
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("enquiry");
  const [enquiries, setEnquiries] = useState([]);
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    checkUser();
  }, []);

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  }

  const fetchData = async () => {
    try {
      const { data: eData } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      const { data: sData } = await supabase
        .from("students")
        .select(
          `
          *,
          courses (id, name, duration, fee),
          payments (*)
        `,
        )
        .order("created_at", { ascending: false });

      setEnquiries(eData || []);
      setStudents(sData || []);
    } catch (err) {
      console.error(err);
    }
  };

  async function handleLogout() {
    try {
      await supabase.auth.signOut();

      toast.success("Logged out successfully", {
        icon: <CheckCircle size={16} />,
      });

      navigate("/admin");
    } catch (err) {
      toast.error("Logout failed", {
        icon: <XCircle size={16} />,
      });
    }
  }

  return (
    <div className="relative min-h-screen bg-[#02040a] text-slate-300">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        {/* Header */}
        <div className="mb-8 border border-white/10 rounded-2xl px-4 sm:px-6 py-5">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <img
                src={avatar}
                alt="avatar"
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border border-white/10"
              />

              <div>
                <h2 className="text-white text-base sm:text-lg font-semibold">
                  Md Dilkash
                </h2>
                <p className="text-xs text-slate-400">
                  Admin • Nadilix Coding Lab
                </p>
              </div>
            </div>

            {/* RIGHT (shadcn buttons) */}
            <div>
              {user ? (
                <Button
                  onClick={handleLogout}
                  className="flex items-center gap-2 
  bg-red-600 text-white 
  hover:bg-red-700 
  transition"
                >
                  <LogOut size={16} />
                  Logout
                </Button>
              ) : (
                <Button
                  onClick={() => navigate("/admin")}
                  className="flex items-center gap-2 
  bg-green-600 text-white 
  hover:bg-green-700 
  transition"
                >
                  <LogIn size={16} />
                  Login
                </Button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 flex justify-start">
            <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>

        {/* Content */}
        {activeTab === "enquiry" ? (
          <EnquiryList enquiries={enquiries} refresh={fetchData} />
        ) : (
          <StudentList students={students} refresh={fetchData} />
        )}
      </div>
    </div>
  );
}
