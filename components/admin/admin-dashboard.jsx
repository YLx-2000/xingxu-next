import { BadgeCheck, FlaskConical, Medal, Sparkles, Stars, Trophy } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title';
import Badge from '@/components/ui/badge';
import { adminMetrics, growthLevels, reviewQueue } from '@/data/ideas';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <section className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
        <SectionTitle
          eyebrow="简单后台"
          title="管理创意内容、互动讨论与推荐展示"
          desc="后台用于查看平台内容状态、审核创意、管理互动质量，并整理值得继续推进的优质项目。"
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {adminMetrics.map((item) => (
            <div key={item.label} className="rounded-[26px] border border-slate-100 bg-slate-50 p-5">
              <div className="text-sm text-slate-500">{item.label}</div>
              <div className="mt-2 text-3xl font-semibold text-slate-900">{item.value}</div>
              <div className="mt-2 text-sm text-slate-500">{item.hint}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
          <SectionTitle eyebrow="审核队列" title="处理待发布创意与讨论内容" desc="管理员可以在这里查看新内容、筛除低质量信息，并保留真正适合继续推进的创意。" />
          <div className="space-y-3">
            {reviewQueue.map((item) => (
              <div key={item.id} className="rounded-[24px] border border-slate-100 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge tone={item.action.includes('通过') ? 'green' : 'rose'}>{item.action}</Badge>
                      <span className="text-xs text-slate-400">{item.id}</span>
                    </div>
                    <div className="mt-2 font-medium text-slate-900">{item.title}</div>
                  </div>
                  <Badge tone={item.risk === '低' ? 'green' : item.risk === '中' ? 'amber' : 'rose'}>风险 {item.risk}</Badge>
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{item.reason}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button type="button" className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white">通过发布</button>
                  <button type="button" className="rounded-2xl bg-rose-600 px-4 py-2 text-sm font-medium text-white">退回修改</button>
                  <button type="button" className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">转人工复核</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-6">
          <section className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
            <SectionTitle eyebrow="用户成长" title="记录持续参与和高质量贡献" desc="平台会鼓励真正愿意补充思路、推动创意进展的用户持续参与。" />
            <div className="space-y-3">
              {growthLevels.map((item, index) => (
                <div key={item.name} className="rounded-[24px] bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                      {index === 0 ? <Stars className="h-5 w-5" /> : index === 1 ? <SunIcon /> : <BadgeCheck className="h-5 w-5" />}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{item.name}</div>
                      <div className="text-sm text-slate-500">{item.rule}</div>
                    </div>
                  </div>
                  <div className="mt-3 rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">可获得：{item.perk}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
            <SectionTitle eyebrow="推荐与整理" title="把优质内容整理成更清晰的展示结果" desc="管理员可以把高潜内容组织成精选列表、专题推荐和后续孵化方向。" />
            <div className="grid gap-3">
              {[
                { label: '每日精选', desc: '展示当天最值得被看见的创意和回应', icon: Sparkles },
                { label: '本周推荐', desc: '整理最近讨论活跃且内容质量高的创意', icon: Trophy },
                { label: '专题整理', desc: '把相近主题内容归纳成可浏览的专题页', icon: Medal },
                { label: '孵化候选', desc: '挑选适合继续做原型、展示或合作的项目', icon: FlaskConical },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="rounded-2xl bg-white p-3 text-sky-700 shadow-sm">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{item.label}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SunIcon() {
  return <span className="text-lg leading-none">☀</span>;
}
