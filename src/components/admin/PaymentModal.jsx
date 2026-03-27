import { useState, useMemo } from "react";
import { addPayment } from "@/services/paymentService";
import {
  X,
  CreditCard,
  User,
  Wallet,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export default function PaymentModal({ student, onClose, onSuccess }) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ calculate from course + payments
  const total = student.courses?.fee || 0;

  const paid =
    student.payments?.reduce((sum, p) => sum + Number(p.amount), 0) || 0;

  const remaining = total - paid;

  async function handleSubmit() {
    try {
      const value = Number(amount);

      if (!value || value <= 0) {
        toast.error("Enter valid amount", {
          icon: <XCircle size={16} />,
        });
        return;
      }

      if (value > remaining) {
        toast.error("Amount exceeds remaining fee", {
          icon: <XCircle size={16} />,
        });
        return;
      }

      setLoading(true);

      await addPayment(student.id, value);

      toast.success("Payment added successfully", {
        icon: <CheckCircle size={16} />,
      });

      onSuccess && onSuccess();
      onClose();
    } catch (err) {
      toast.error(err.message || "Payment failed", {
        icon: <XCircle size={16} />,
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#02040a] px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative w-full max-w-md bg-[#0a0c12] border border-white/5 rounded-3xl shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-blue-400" />
            <h3 className="text-white text-base font-medium">Make Payment</h3>
          </div>

          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Student Info */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-3">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <User size={14} />
              <span>{student.name}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
              <Wallet size={14} />
              <span>Remaining: ₹{remaining}</span>
            </div>
          </div>

          {/* Input */}
          <div>
            <label className="text-xs text-slate-400 mb-1 block">
              Enter Amount
            </label>

            <input
              type="number"
              placeholder="e.g. 2000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-2 px-5 py-4 border-t border-white/10">
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 flex items-center gap-2"
          >
            <CreditCard size={14} />
            {loading ? "Processing..." : "Confirm"}
          </Button>

          <Button variant="secondary" onClick={onClose} className="flex-1">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
