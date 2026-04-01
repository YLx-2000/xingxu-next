import { cn } from '@/lib/utils';

const toneMap = {
  blue: 'border-sky-200 bg-sky-50 text-sky-700',
  green: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  amber: 'border-amber-200 bg-amber-50 text-amber-700',
  slate: 'border-slate-200 bg-slate-50 text-slate-700',
  purple: 'border-violet-200 bg-violet-50 text-violet-700',
  rose: 'border-rose-200 bg-rose-50 text-rose-700',
};

export default function Badge({ children, tone = 'blue' }) {
  return (
    <span className={cn('inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium', toneMap[tone])}>
      {children}
    </span>
  );
}
