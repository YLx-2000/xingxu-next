import Link from 'next/link';
import Image from 'next/image';
import { Brain, ClipboardCheck, Lightbulb, Rocket, ShieldCheck, Sparkles, Trophy, Users } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title';

const features = [
  {
    icon: ShieldCheck,
    title: '匿名协作',
    desc: '以匿名方式发布创意、补充思路，让表达更轻松也更安全。',
  },
  {
    icon: ClipboardCheck,
    title: '高质量筛选',
    desc: '围绕有推进价值的内容进行整理和展示，减少低质量灌水。',
  },
  {
    icon: Lightbulb,
    title: '创意落地',
    desc: '帮助灵感逐步形成更清晰的结构、原型方向和展示成果。',
  },
  {
    icon: Rocket,
    title: '轻量孵化',
    desc: '为优质创意提供继续推进的入口，适合演示、路演与后续开发。',
  },
];

const participation = [
  {
    icon: Brain,
    title: '你有什么未完成的创意？',
    desc: '把那个还没有机会认真展开的想法先记录下来，让更多人看见它。',
  },
  {
    icon: Users,
    title: '你希望别人怎样帮你补全思路？',
    desc: '邀请其他用户补充视角、优化结构，或一起完善展示方式。',
  },
  {
    icon: Rocket,
    title: '你的创意想先做成展示原型还是继续开发？',
    desc: '可以先用于内测演示，也可以为后续真实开发打下基础。',
  },
];

export default function HeroSection() {
  return (
    <div className="space-y-8">
      <section className="hero-cosmic overflow-hidden rounded-[36px] border border-white/70 shadow-glow">
        <div className="hero-cosmic-overlay p-8 md:p-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/95 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              星叙 XingXu
            </div>

            <div className="mx-auto mt-8 flex justify-center">
              <div className="hero-logo-shell relative flex h-[220px] w-[220px] items-center justify-center rounded-full md:h-[320px] md:w-[320px]">
                <Image
                  src="/xingxu-logo-circle.png"
                  alt="星叙 XingXu 主 Logo"
                  fill
                  sizes="(max-width: 768px) 220px, 320px"
                  className="object-contain p-1"
                  priority
                />
              </div>
            </div>

            <div className="mt-6 text-4xl font-semibold tracking-tight text-white drop-shadow-[0_8px_24px_rgba(15,23,42,0.35)] md:text-6xl">
              星叙 / XingXu
            </div>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/90 md:text-xl">
              面向未竟创意、梦境碎片、奇思假说与难题构想的匿名创意协作平台。
            </p>
            <div className="mx-auto mt-4 inline-flex rounded-2xl border border-white/20 bg-white/10 px-5 py-2 text-lg font-medium text-white/95 shadow-[0_12px_36px_rgba(37,99,235,0.25)] backdrop-blur">
              匿名创意协作平台
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-3 rounded-[30px] border border-white/80 bg-white/92 p-4 shadow-soft md:p-5">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div key={item.title} className="rounded-[26px] border border-slate-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 shadow-sm">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">{item.title}</div>
              <div className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft md:p-8">
        <SectionTitle
          eyebrow="参与进来"
          title="让用户连起来"
          desc="从发布、浏览到交流互动，让创意在平台里持续被看见、被回应和被推进。"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {participation.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-slate-100 bg-slate-50 p-5">
              <div className="w-fit rounded-2xl bg-white p-3 text-sky-700 shadow-sm">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-lg font-semibold leading-7 text-slate-900">{item.title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/publish" className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700">
            申请内测
          </Link>
          <Link href="/square" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-700">
            进入创意广场
          </Link>
          <Link href="/rules" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-700">
            查看平台规则
          </Link>
        </div>
      </section>
    </div>
  );
}
