import React, { useMemo, useState, useEffect } from 'react';
import { useUsersStore } from '../../store/useUsersStore';
import { Table } from '../../components/table/Table';
import Pagination from '../../components/table/Pagination';
import UserFilters from '../../components/users/UserFilters';
import EditUserModal from '../../components/users/EditUserModal';
import type { User } from '../../types/user';
import { Link } from 'react-router-dom';


export default function UsersList() {
  const { users, filters, setFilters, updateUser, loadUsers } = useUsersStore();

  const [page, setPage] = useState(1);
  const limit = 10;
  const [editing, setEditing] = useState<User | null>(null);

 
  useEffect(() => {
    loadUsers();  
    console.log(loadUsers)
  }, []);

  const filtered = useMemo(() => {
    let arr = users.slice();
    if (filters.status !== 'all') arr = arr.filter((u) => u.status === filters.status);
    if (filters.name) arr = arr.filter((u) => u.name.toLowerCase().includes(filters.name.toLowerCase()));
    const sortBy = filters.sortBy ?? 'createdAt';
    const sortDir = filters.sortDir ?? 'desc';
    arr.sort((a,b) => {
      const av = (a as any)[sortBy]; const bv = (b as any)[sortBy];
      if (sortBy === 'createdAt') {
        return sortDir === 'asc' ? new Date(av).getTime() - new Date(bv).getTime() : new Date(bv).getTime() - new Date(av).getTime();
      }
      return sortDir === 'asc' ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
    });
    return arr;
  }, [users, filters]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / limit));
  const pageData = filtered.slice((page - 1) * limit, page * limit);

  const columns = [
    { key: 'avatar', header: 'Avatar', render: (u: User) => <img src={u.avatar} alt="" className="w-8 h-8 rounded-full" /> },
    { key: 'name', header: 'Name', render: (u: User) => <div className="font-medium">{u.name}</div> },
    { key: 'email', header: 'Email', render: (u: User) => <div className="text-sm text-gray-600">{u.email}</div> },
    { key: 'status', header: 'Status', render: (u: User) => <span className={`px-2 py-1 rounded text-xs ${u.status==='active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{u.status}</span> },
    { key: 'createdAt', header: 'Created', render: (u: User) => new Date(u.createdAt).toLocaleDateString() },
    { key: 'actions', header: 'Actions', render: (u: User) => <div className="flex gap-2"><Link to={`/users/${u.id}`} className="text-indigo-600">View</Link><button onClick={()=>setEditing(u)} className="text-sm px-2 py-1 border rounded">Edit</button></div> }
  ];

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Users</h2>
        <p className="text-sm text-gray-500">Manage your users</p>
      </div>

      <UserFilters filters={filters as any} onChange={(patch)=> setFilters(patch as any)} />

      <Table columns={columns} data={pageData} />

      <Pagination page={page} onPage={setPage} totalPages={pageCount} />

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
