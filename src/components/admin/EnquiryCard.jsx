import { supabase } from "@/lib/supabase";
import {
  Phone,
  BookOpen,
  CheckCircle,
  XCircle,
  ArrowRightCircle,
} from "lucide-react";

export default function EnquiryCard({ item, refresh }) {
  const updateStatus = async (status) => {
    await supabase.from("enquiries").update({ status }).eq("id", item.id);
    refresh();
  };

  const handleConvert = async () => {
    await supabase.from("students").insert([
      {
        name: item.name,
        phone: item.phone,
        course: item.course,
        total_fee: 0,
      },
    ]);

    await updateStatus("converted");
  };

  // status badge style
  const getStatus = () => {
    switch (item.status) {
      case "converted":
        return {
          text: "Converted",
          color: "bg-green-600/20 text-green-400",
          icon: <CheckCircle size={14} />,
        };
      case "rejected":
        return {
          text: "Rejected",
          color: "bg-red-600/20 text-red-400",
          icon: <XCircle size={14} />,
        };
      default:
        return {
          text: "New",
          color: "bg-blue-600/20 text-blue-400",
          icon: <ArrowRightCircle size={14} />,
        };
    }
  };

  const status = getStatus();

  return (
    <div className="relative bg-transparent border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition">
      {/* Status Badge */}
      <div
        className={`absolute top-4 right-4 flex items-center gap-1 px-3 py-1 text-xs rounded-full ${status.color}`}
      >
        {status.icon}
        {status.text}
      </div>

      {/* Name */}
      <h2 className="text-lg text-white font-medium mb-5">{item.name}</h2>

      {/* Info */}
      <div className="space-y-3 text-sm text-slate-300">
        <div className="flex items-center gap-3">
          <Phone size={16} className="text-blue-400" />
          <span>{item.phone}</span>
        </div>

        <div className="flex items-center gap-3">
          <BookOpen size={16} className="text-blue-400" />
          <span>{item.course}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        {/* Convert */}
        {item.status !== "converted" && (
          <button
            onClick={handleConvert}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm transition"
          >
            <CheckCircle size={16} />
            Convert
          </button>
        )}

        {/* Reject */}
        {item.status !== "rejected" && (
          <button
            onClick={() => updateStatus("rejected")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm transition"
          >
            <XCircle size={16} />
            Reject
          </button>
        )}
      </div>
    </div>
  );
}
