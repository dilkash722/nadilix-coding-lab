import { useEffect, useState, useCallback } from "react";
import { getPayments } from "@/services/paymentService";

export function usePayments(studentId) {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPayments = useCallback(async (id) => {
    if (!id) {
      setPayments([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const data = await getPayments(id);

      setPayments(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Payment fetch error:", err);
      setError(err.message || "Failed to load payments");
      setPayments([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    //student change hote hi reset
    setPayments([]);
    setError(null);

    if (studentId) {
      loadPayments(studentId);
    }
  }, [studentId, loadPayments]);

  return {
    payments,
    loading,
    error,
    reload: () => {
      if (studentId) loadPayments(studentId);
    },
  };
}
