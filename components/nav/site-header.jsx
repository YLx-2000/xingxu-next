import Link from 'next/link';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: '首页' },
  { href: '/square', label: '创意广场' },
  { href: '/publish', label: '发布创意' },
  { href: '/about', label: '关于我们' },
  { href: '/rules', label: '平台规则' },
];

export default function SiteHeader({ currentPath = '/' }) {
  return (
    <header className="rounded-[30px] border border-white/70 bg-white/78 p-4 shadow-glow backdrop-blur md:p-5">
      <div className="rounded-[24px] border border-slate-100 bg-white/82 p-4 md:p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <Link href="/" className="flex items-center gap-4">
            <div className="logo-shell relative flex h-14 w-14 items-center justify-center rounded-full md:h-16 md:w-16">
              <Image
                src="/xingxu-logo-circle.png"
                alt="星叙 XingXu Logo"
                fill
                sizes="64px"
                className="object-contain p-[2px]"
                priority
              />
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">星叙</div>
              <div className="text-sm text-slate-500">XingXu · 匿名创意协作平台</div>
            </div>
          </Link>

          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium transition',
                  currentPath === item.href
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-200'
                    : 'bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-700'
                )}
              >
                <Sparkles className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-4 grid gap-4 rounded-[24px] border border-sky-100 bg-[linear-gradient(90deg,rgba(14,165,233,0.06),rgba(37,99,235,0.03))] p-4 md:grid-cols-[1fr_auto] md:items-center md:p-5">
          <div>
            <div className="text-sm font-medium text-sky-700">星叙 1.0 内测演示版</div>
            <div className="mt-1 text-sm leading-6 text-slate-600 md:text-base">
              面向未竟创意、梦境碎片、奇思假说与难题构想，提供匿名协作、内容筛选与轻量孵化展示。
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">蓝白科技感</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">创意协作</span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">项目官网风格</span>
          </div>
        </div>
      </div>
    </header>
  );
}
