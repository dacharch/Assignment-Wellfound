import React from 'react';
import clsx from 'clsx';

export default function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      {...props}
      className={clsx('px-3 py-1.5 rounded-md text-sm font-medium shadow-sm inline-flex items-center gap-2', className)}
    >
      {children}
    </button>
  );
}
