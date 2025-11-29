import React from "react";

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({
  rows = 8,
  columns = 5,
}) => {
  return (
    <div className="w-full border rounded-lg overflow-hidden animate-pulse bg-white">
      {/* Table Header Skeleton */}
      <div className="grid border-b bg-gray-100" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, i) => (
          <div key={i} className="h-10 flex items-center px-4">
            <div className="h-3 w-20 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>

      {/* Table Rows Skeleton */}
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div
          key={rowIdx}
          className="grid border-b last:border-b-0"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {Array.from({ length: columns }).map((_, colIdx) => (
            <div key={colIdx} className="h-12 flex items-center px-4">
              <div className="h-3 w-full bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;
