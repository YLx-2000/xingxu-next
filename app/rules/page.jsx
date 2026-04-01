import SiteHeader from '@/components/nav/site-header';
import SectionTitle from '@/components/ui/section-title';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const rules = [
  {
    title: '内容范围',
    items: [
      '平台主要面向未竟创意、梦境碎片、奇思假说与难题构想。',
      '鼓励发布具有继续讨论、补充和推进价值的创意内容。',
      '当前版本以演示展示与内测筛选为主，适合提交可被共创的想法。',
    ],
  },
  {
    title: '不鼓励的内容',
    items: [
      '纯情绪宣泄、树洞式倾诉和无明确创意目标的内容。',
      '攻击性表达、人身冒犯、恶意引战或低质量灌水。',
      '与平台定位无关的普通闲聊、广告信息和重复发布内容。',
    ],
  },
  {
    title: '互动方式',
    items: [
      '欢迎通过留言、回复和补充建议参与同一创意的讨论。',
      '互动建议聚焦于补充思路、优化结构、提出风险或帮助落地。',
      '平台更鼓励有建设性的回应，而不是简单刷屏式互动。',
    ],
  },
  {
    title: '演示审核',
    items: [
      '内测演示版暂未开放完整自动审核闭环。',
      '提交内容会优先进入演示筛选，再决定是否展示。',
      '通过筛选的内容可进入创意广场、详情页或专题推荐展示。',
    ],
  },
];

export default function RulesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1500px] px-4 py-6 md:px-8 md:py-8">
      <SiteHeader currentPath="/rules" />
      <div className="mt-6 space-y-6">
        <section className="rounded-[32px] border border-white/80 bg-white/90 p-8 shadow-soft">
          <SectionTitle
            eyebrow="平台规则"
            title="让创意更容易被理解，也更容易被认真回应"
            desc="星叙 1.0 内测演示版优先服务于匿名创意协作、高质量内容筛选与轻量孵化展示，因此平台规则会更关注内容质量与共创氛围。"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['聚焦创意表达', Sparkles],
              ['保障匿名协作', ShieldCheck],
              ['鼓励有效回应', CheckCircle2],
            ].map(([label, Icon]) => (
              <div key={label} className="rounded-3xl border border-slate-100 bg-slate-50 p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-medium text-slate-900">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {rules.map((group) => (
            <div key={group.title} className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
              <h2 className="text-2xl font-semibold text-slate-950">{group.title}</h2>
              <div className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-600" />
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
