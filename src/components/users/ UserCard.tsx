import type { User } from "../../types/user";

export default function UserCard({ user }: { user: User }) {
  if (!user) return null;

  return (
    <div className="p-4 border rounded bg-white">
      <img src={user.avatar} className="w-12 h-12 rounded-full" />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}
