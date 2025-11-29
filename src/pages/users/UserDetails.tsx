import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useUsersStore } from "../../store/useUsersStore";
import EditUserModal from "../../components/users/EditUserModal";
import type { User } from "../../types/user";

export default function UserDetails() {
  const { id } = useParams();

  const { getById, updateUser, loadUsers } = useUsersStore();

  // Load user data (important)
  useEffect(() => {
    loadUsers();
  }, []);

  const user = getById(id!);
  const [editing, setEditing] = useState<User | null>(null);

  if (!user) {
    return (
      <div className="p-6">
        <div className="text-xl font-semibold text-red-600">
          User not found
        </div>
        <Link to="/users" className="text-indigo-600 underline mt-3 block">
          Back to Users
        </Link>
      </div>
    );
  }

  const activities = [
    "Logged in",
    "Updated profile",
    "Changed password",
    "Viewed analytics",
    "Logged out",
  ];

  return (
    <div className="max-w-3xl">
      <Link to="/users" className="text-indigo-600 underline text-sm mb-4 block">
        ← Back to Users
      </Link>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">User Details</h1>
        <button
          onClick={() => setEditing(user)}
          className="px-3 py-2 rounded-md bg-indigo-600 text-white"
        >
          Edit User
        </button>
      </div>

      <div className="bg-white shadow rounded-md p-6 mb-6">
        <div className="flex items-center gap-4">
          <img
            src={user.avatar}
            alt=""
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <span
              className={`px-3 py-1 mt-2 inline-block rounded text-sm ${
                user.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user.status}
            </span>
          </div>
        </div>

        <div className="mt-4 text-gray-500 text-sm">
          Joined: {new Date(user.createdAt).toLocaleDateString()}
        </div>
      </div>

      <div className="bg-white shadow rounded-md p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

        <ul className="space-y-2">
          {activities.map((act, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-gray-50 border rounded text-sm text-gray-700"
            >
              {act}
            </li>
          ))}
        </ul>
      </div>

      {editing && (
        <EditUserModal
          user={editing}
          open={!!editing}
          onClose={() => setEditing(null)}
          onSave={(patch) => updateUser(editing.id, patch)}
        />
      )}
    </div>
  );
}
