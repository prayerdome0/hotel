import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
}

export default function SectionHeading({ badge, title, subtitle, align = 'left', action }: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}>
      <div className={`space-y-2 ${centered ? 'max-w-2xl' : ''}`}>
        {badge && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            {badge}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-bold text-white">{title}</h2>
        {subtitle && <p className="text-sm sm:text-base text-slate-400 max-w-2xl">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
