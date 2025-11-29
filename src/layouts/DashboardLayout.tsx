import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-200">
      {/* LEFT — SIDEBAR */}
      <Sidebar />

      {/* RIGHT — CONTENT AREA */}
      <div className="flex-1 flex justify-center items-start p-6">
        
        {/* BIG BEAUTIFUL BOX */}
        <div className="w-full max-w-[1100px] bg-white rounded-xl shadow-lg p-8 min-h-[85vh]">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
