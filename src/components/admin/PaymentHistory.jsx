import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { CreditCard } from "lucide-react";

export default function PaymentHistory({ studentId }) {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!studentId) return;

    fetchPayments();
  }, [studentId]);

  async function fetchPayments() {
    try {
      setLoading(true);

      console.log("Fetching for studentId:", studentId);

      const { data, error } = await supabase
        .from("payments")
        .select("*")
        .eq("student_id", studentId) // 🔥 important
        .order("payment_date", { ascending: true });

      if (error) throw error;

      console.log("Fetched payments:", data);

      setPayments(data || []);
    } catch (err) {
      console.error("Payment fetch error:", err);
    } finally {
      setLoading(false);
    }
  }

  if (!studentId) return null;

  if (loading) {
    return (
      <div className="mt-4 text-sm text-slate-400">Loading payments...</div>
    );
  }

  return (
    <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <CreditCard size={16} className="text-blue-400" />
        <h4 className="text-white text-sm font-medium">Payment History</h4>
      </div>

      {payments.length === 0 ? (
        <p className="text-xs text-slate-400">No payments for this student</p>
      ) : (
        <div className="overflow-x-auto max-h-60 overflow-y-auto">
          <table className="w-full text-xs text-left">
            <thead className="text-slate-400 border-b border-white/10">
              <tr>
                <th className="py-2 px-2">#</th>
                <th className="py-2 px-2">Date</th>
                <th className="py-2 px-2">Amount</th>
                <th className="py-2 px-2">Note</th>
                <th className="py-2 px-2">Method</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((p, index) => {
                const isLast = index === payments.length - 1;

                return (
                  <tr
                    key={p.id}
                    className={`border-b border-white/5 ${
                      isLast ? "bg-green-500/10" : ""
                    }`}
                  >
                    <td className="py-2 px-2 text-blue-400 font-medium">
                      {index + 1}
                    </td>

                    <td className="py-2 px-2 text-slate-300">
                      {new Date(p.payment_date).toLocaleDateString("en-CA")}
                    </td>

                    <td className="py-2 px-2 text-green-400 font-semibold">
                      ₹{p.amount}
                    </td>

                    <td className="py-2 px-2 text-slate-400">
                      {p.note || "-"}
                    </td>

                    <td className="py-2 px-2 text-slate-400">
                      {p.payment_method || "cash"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
