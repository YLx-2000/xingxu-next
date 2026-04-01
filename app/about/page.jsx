import SiteHeader from '@/components/nav/site-header';
import SectionTitle from '@/components/ui/section-title';
import { Compass, Lightbulb, Rocket, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: Lightbulb,
    title: '我们关注什么',
    desc: '关注那些还未完全成型，但值得被理解、被回应和被继续推进的创意。',
  },
  {
    icon: ShieldCheck,
    title: '我们为什么强调匿名',
    desc: '希望降低表达门槛，让用户先把想法说出来，再在更安全的环境里获得协作。',
  },
  {
    icon: Compass,
    title: '我们希望形成什么氛围',
    desc: '不是普通论坛，也不是聊天软件，而是一个更清晰、更克制的创意协作平台。',
  },
  {
    icon: Rocket,
    title: '我们要把创意带到哪里',
    desc: '从想法表达走向内容筛选、原型展示和轻量孵化，让优质内容继续生长。',
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1500px] px-4 py-6 md:px-8 md:py-8">
      <SiteHeader currentPath="/about" />
      <div className="mt-6 space-y-6">
        <section className="rounded-[32px] border border-white/80 bg-white/90 p-8 shadow-soft">
          <SectionTitle
            eyebrow="关于我们"
            title="星叙想做的，不只是一个能发内容的网站"
            desc="星叙希望围绕匿名创意协作、高质量内容筛选、思路落地与轻量孵化，建立一个更适合创意表达和共创推进的空间。"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-slate-100 bg-slate-50 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-950">平台定位</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <p>
                星叙围绕未竟创意、梦境碎片、奇思假说与难题构想展开，强调让用户在匿名环境中表达想法，并获得更聚焦的协作回应。
              </p>
              <p>
                平台当前以 1.0 内测演示版形式呈现，主要展示首页、创意广场、演示提交、创意详情、平台规则与后台管理等基础能力。
              </p>
              <p>
                我们希望它呈现出的气质更接近创新项目官网与创意协作平台，而不是泛社交产品或普通聊天工具。
              </p>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-slate-950">当前阶段</h2>
            <div className="mt-4 space-y-3">
              {[
                '当前版本用于内测演示与项目展示。',
                '创意提交以演示筛选与人工审核为主。',
                '后续可继续补充账号、审核闭环、推荐机制和更完整的数据管理。',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
