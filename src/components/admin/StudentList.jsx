import { useState } from "react";
import StudentCard from "./StudentCard";
import StudentForm from "@/components/admin/StudentForm";

import {
  Users,
  UserPlus,
  Search,
  Clock,
  CheckCircle,
  Wallet,
} from "lucide-react";

export default function StudentList({ students = [], refresh }) {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  // helpers
  const getPaid = (s) =>
    s.payments?.reduce((sum, p) => sum + Number(p.amount), 0) || 0;

  const getTotal = (s) => s.courses?.fee || 0;

  // search filter
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        {/* Left */}
        <div className="flex items-center gap-2">
          <Users className="text-blue-400" size={20} />
          <h2 className="text-white text-lg font-medium">
            Students Management
          </h2>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* Search */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 w-full sm:w-64">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-500"
            />
          </div>

          {/* Add Button */}
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-3 sm:px-4 py-2 rounded-lg text-sm text-white transition whitespace-nowrap"
          >
            <UserPlus size={16} />
            <span className="hidden sm:inline">Add Student</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* Total Students */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Users size={18} className="text-blue-400" />
          </div>

          <div>
            <p className="text-xs text-slate-400">Total Students</p>
            <p className="text-white text-xl font-semibold">
              {students.length}
            </p>
          </div>
        </div>

        {/* Active */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Clock size={18} className="text-blue-400" />
          </div>

          <div>
            <p className="text-xs text-slate-400">Active</p>
            <p className="text-blue-400 text-xl font-semibold">
              {
                students.filter((s) => {
                  const paid = getPaid(s);
                  const total = getTotal(s);
                  return paid < total;
                }).length
              }
            </p>
          </div>
        </div>

        {/* Completed */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-green-500/10 rounded-lg">
            <CheckCircle size={18} className="text-green-400" />
          </div>

          <div>
            <p className="text-xs text-slate-400">Completed</p>
            <p className="text-green-400 text-xl font-semibold">
              {
                students.filter((s) => {
                  const paid = getPaid(s);
                  const total = getTotal(s);
                  return total > 0 && paid >= total;
                }).length
              }
            </p>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
          <div className="p-2 bg-green-500/10 rounded-lg">
            <Wallet size={18} className="text-green-400" />
          </div>

          <div>
            <p className="text-xs text-slate-400">Total Revenue</p>
            <p className="text-white text-xl font-semibold">
              ₹{students.reduce((sum, s) => sum + getPaid(s), 0)}
            </p>
          </div>
        </div>
      </div>

      {/* List */}
      {filteredStudents.length === 0 ? (
        <div className="text-center text-slate-400 mt-20">
          No students found
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredStudents.map((item) => (
            <StudentCard key={item.id} item={item} refresh={refresh} />
          ))}
        </div>
      )}

      {/* Student Form */}
      {showForm && (
        <StudentForm onClose={() => setShowForm(false)} onSuccess={refresh} />
      )}
    </>
  );
}
