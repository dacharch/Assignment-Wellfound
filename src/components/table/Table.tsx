import React from 'react';
type Column<T> = { key: string; header: string; render?: (row: T) => React.ReactNode; className?: string };

export function Table<T extends { id: string }>({ columns, data }: { columns: Column<T>[]; data: T[] }) {
  return (
    <div className="bg-white shadow-sm rounded-md overflow-auto">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={`text-left px-4 py-3 text-sm text-gray-600 ${c.className ?? ''}`}>{c.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t last:border-b">
              {columns.map((c) => (
                <td key={c.key} className="px-4 py-3 text-sm text-gray-700 align-top">
                  {c.render ? c.render(row) : (row as any)[c.key]}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-4 py-6 text-center text-gray-500">No records</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
