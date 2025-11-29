
type FiltersLocal = { name: string; status: 'all'|'active'|'inactive' };

export default function UserFilters({ filters, onChange }: { filters: FiltersLocal; onChange: (patch: Partial<FiltersLocal>) => void }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-4">
      <input
        value={filters.name}
        onChange={(e) => onChange({ name: e.target.value })}
        placeholder="Search by name..."
        className="px-3 py-2 border rounded-md flex-1"
      />
      <select value={filters.status} onChange={(e) => onChange({ status: e.target.value as any })}
        className="px-3 py-2 border rounded-md">
        <option value="all">All status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button onClick={() => onChange({ name: '' })} className="px-3 py-2 rounded-md border">Clear</button>
    </div>
  );
}
