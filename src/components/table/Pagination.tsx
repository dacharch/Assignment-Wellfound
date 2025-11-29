
export default function Pagination({ page, onPage, totalPages }: { page: number; onPage: (p: number) => void; totalPages: number }) {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="text-sm text-gray-600">Page {page} of {totalPages}</div>
      <div className="flex gap-2">
        <button onClick={() => onPage(Math.max(1, page - 1))} className="px-3 py-1 rounded border">Prev</button>
        <button onClick={() => onPage(Math.min(totalPages, page + 1))} className="px-3 py-1 rounded border">Next</button>
      </div>
    </div>
  );
}
