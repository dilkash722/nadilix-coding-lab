import { supabase } from "@/lib/supabase";

// ordinal helper
function getOrdinal(n) {
  if (n % 100 >= 11 && n % 100 <= 13) return `${n}th`;

  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
}

// get payments
export async function getPayments(studentId) {
  if (!studentId) return [];

  const { data, error } = await supabase
    .from("payments")
    .select("*")
    .eq("student_id", studentId)
    .order("created_at", { ascending: true });

  if (error) throw error;
  return data || [];
}

// ADD PAYMENT (FINAL)
export async function addPayment(studentId, amount, method = "cash") {
  if (!amount || amount <= 0) {
    throw new Error("Invalid amount");
  }

  // 1. count existing payments
  const { data, error: countError } = await supabase
    .from("payments")
    .select("id")
    .eq("student_id", studentId);

  if (countError) throw countError;

  const installmentNumber = (data?.length || 0) + 1;

  // 2. generate note
  const installment = `${getOrdinal(installmentNumber)} Installment`;

  // 3. insert payment
  const { error } = await supabase.from("payments").insert([
    {
      student_id: studentId,
      amount,
      installment,
      payment_method: method,
    },
  ]);

  if (error) throw error;
}
