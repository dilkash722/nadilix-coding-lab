import { Users, BookOpen } from "lucide-react";

export default function DashboardTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-2 bg-white/5 border border-white/10 p-1 rounded-xl">
      <button
        onClick={() => setActiveTab("enquiry")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200
        ${
          activeTab === "enquiry"
            ? "bg-white text-slate-800"
            : "text-slate-400 hover:text-white hover:bg-white/5"
        }`}
      >
        <Users size={16} />
        Enquiries
      </button>

      <button
        onClick={() => setActiveTab("student")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200
        ${
          activeTab === "student"
            ? "bg-white text-slate-800"
            : "text-slate-400 hover:text-white hover:bg-white/5"
        }`}
      >
        <BookOpen size={16} />
        Students
      </button>
    </div>
  );
}
