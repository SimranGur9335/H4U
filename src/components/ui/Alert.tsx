import React, { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
}

export const Alert: React.FC<AlertProps> = ({
  className,
  variant = 'info',
  title,
  children,
  ...props
}) => {
  const variants = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    error: 'bg-rose-50 border-rose-200 text-rose-900',
  };

  return (
    <div
      role="alert"
      className={cn('p-4 rounded-md border text-sm', variants[variant], className)}
      {...props}
    >
      {title && <h4 className="font-semibold mb-1 tracking-tight">{title}</h4>}
      <div className="leading-relaxed">{children}</div>
    </div>
  );
};
