import React, { useState } from 'react';
import Button from '../ui/Button';
import type { User } from '../../types/user';

export default function EditUserModal({ user, open, onClose, onSave }: { user: User; open: boolean; onClose: ()=>void; onSave: (patch: Partial<User>) => void }) {
  const [name, setName] = useState(user?.name ?? '');
  const [status, setStatus] = useState<User['status']>(user?.status ?? 'active');
  React.useEffect(()=> { if(user){ setName(user.name); setStatus(user.status)}}, [user]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-md shadow-lg w-full max-w-md p-5">
        <h3 className="text-lg font-semibold mb-3">Edit User</h3>
        <div className="flex flex-col gap-3">
          <input value={name} onChange={(e)=>setName(e.target.value)} className="px-3 py-2 border rounded" />
          <select value={status} onChange={(e)=>setStatus(e.target.value as any)} className="px-3 py-2 border rounded">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <Button onClick={onClose} className="bg-gray-100">Cancel</Button>
          <Button onClick={() => { if(name.trim().length < 2){ alert('Name at least 2 chars'); return } onSave({ name: name.trim(), status }); onClose(); }} className="bg-indigo-600 text-white">Save</Button>
        </div>
      </div>
    </div>
  );
}
