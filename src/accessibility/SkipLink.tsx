import React from 'react';

interface SkipLinkProps {
  targetId?: string;
  label?: string;
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  targetId = 'main-content',
  label = 'Skip to main content',
}) => {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-brand-900 focus:text-white focus:font-medium focus:shadow-lg focus:rounded-b-md focus:top-0 focus:left-4"
    >
      {label}
    </a>
  );
};
