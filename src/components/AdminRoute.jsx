import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export default function AdminRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
      setLoading(false);
    }

    checkUser();
  }, []);

  if (loading) return null;

  // not logged in → login page
  if (!user) {
    return <Navigate to="/admin" replace />;
  }

  // logged in → dashboard
  return children;
}
