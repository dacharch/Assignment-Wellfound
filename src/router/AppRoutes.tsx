import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

import UsersList from "../pages/users/UsersList";
import UserDetails from "../pages/users/UserDetails";
import Analytics from "../pages/analytics/Analytics";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Dashboard Layout Wrapper */}
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>

      {/* Fallback Route */}
      <Route
        path="*"
        element={
          <div className="p-10 text-xl font-semibold text-gray-700">
            404 — Page Not Found
          </div>
        }
      />
    </Routes>
  );
}
