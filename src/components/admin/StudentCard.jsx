import {
  Phone,
  BookOpen,
  Wallet,
  CheckCircle,
  Clock,
  Calendar,
  CreditCard,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { useState } from "react";
import PaymentModal from "@/components/admin/PaymentModal";
import PaymentHistory from "@/components/admin/PaymentHistory";

export default function StudentCard({ item, refresh }) {
  const [showModal, setShowModal] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // ✅ TOTAL from course
  const total = Number(item.courses?.fee || 0);

  // ✅ PAID from payments
  const paid =
    item.payments?.reduce((sum, p) => sum + Number(p.amount), 0) || 0;

  // ✅ REMAINING
  const remaining = total - paid;

  // ✅ INSTALLMENTS
  const installments = item.payments?.length || 0;

  const isCompleted = remaining <= 0;

  const status = isCompleted
    ? {
        text: "Completed",
        color: "bg-green-600/20 text-green-400",
        icon: <CheckCircle size={14} />,
      }
    : {
        text: "Active",
        color: "bg-blue-600/20 text-blue-400",
        icon: <Clock size={14} />,
      };

  const progress = total ? (paid / total) * 100 : 0;

  return (
    <div className="relative bg-transparent border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition">
      {/* Status */}
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
          <span>{item.courses?.name || "No Course"}</span>
        </div>

        <div className="flex items-center gap-3">
          <Calendar size={16} className="text-blue-400" />
          <span>{item.join_date || "N/A"}</span>
        </div>

        <div className="flex items-center gap-3">
          <CreditCard size={16} className="text-blue-400" />
          <span>{installments} Installments</span>
        </div>
      </div>

      {/* Fees */}
      <div className="mt-6 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-400">Total</span>
          <span className="text-white flex items-center gap-1">
            <Wallet size={14} /> ₹{total}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Paid</span>
          <span className="text-green-400">₹{paid}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Remaining</span>
          <span className="text-red-400">₹{remaining}</span>
        </div>

        {/* Progress */}
        <div className="w-full h-2 bg-white/10 rounded-full mt-3">
          <div
            className="h-2 bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 pt-4 border-t border-white/10 flex gap-2">
        <button
          onClick={() => setShowModal(true)}
          disabled={remaining <= 0}
          className={`flex items-center justify-center gap-1 px-3 py-1.5 text-xs rounded-lg transition
            ${
              remaining <= 0
                ? "bg-green-600/30 text-green-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500 text-white"
            }`}
        >
          <CreditCard size={14} />
          {remaining <= 0 ? "Paid" : "Pay"}
        </button>

        <button
          onClick={() => setShowHistory(!showHistory)}
          className="flex items-center justify-center gap-1 px-3 py-1.5 text-xs border border-white/20 hover:border-white/40 rounded-lg text-white hover:bg-white/10 transition"
        >
          {showHistory ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          History
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <PaymentModal
          student={item}
          onClose={() => setShowModal(false)}
          onSuccess={refresh}
        />
      )}

      {/* History */}
      {showHistory && <PaymentHistory studentId={item.id} />}
    </div>
  );
}
