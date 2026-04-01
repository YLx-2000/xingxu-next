'use client';

import { useMemo, useState } from 'react';
import { CheckCircle2, FileCheck, Lock, Rocket, Target } from 'lucide-react';
import Badge from '@/components/ui/badge';
import SectionTitle from '@/components/ui/section-title';
import { cn } from '@/lib/utils';

export default function PublishForm() {
  const [form, setForm] = useState({
    title: '把梦境里出现的城市逻辑做成一页可展示的交互原型',
    category: '梦境碎片',
    stage: '概念成型',
    confidentiality: '全匿名发布',
    problem: '我有一个比较完整但还很零散的梦境设定，想把它整理成别人愿意看、愿意参与，也能继续补充的网页原型。',
    value: '我希望先验证这种表达方式是否适合做成互动展示，也希望找到更懂叙事和前端的人一起完善。',
    collaboration: '希望获得叙事结构建议、页面呈现建议和展示方式建议。',
    expected: '希望先形成一页原型、清晰的内容结构，以及一份适合展示的创意说明。',
    reward: 66,
    tags: '梦境碎片, 叙事设计, 互动原型',
  });

  const qualityChecklist = [
    '内容是否属于未竟创意、梦境碎片、奇思假说或难题构想',
    '是否说明了真实问题，而不是单纯情绪表达或泛泛而谈',
    '是否写清楚希望别人从哪些方向参与协作',
    '是否有明确的阶段目标，例如原型、方案、展示或继续开发',
    '是否避免无关闲聊、攻击性内容和低质量灌水',
  ];

  const previewTags = useMemo(() => form.tags.split(',').map((t) => t.trim()).filter(Boolean), [form.tags]);

  return (
    <div className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr]">
      <div className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
        <SectionTitle
          eyebrow="申请内测"
          title="提交一个适合演示和内测的创意方向"
          desc="当前版本仍处于内测演示阶段。填写关键信息后，你的内容会先进入演示审核，再决定是否展示在平台中。"
        />

        <div className="mb-5 rounded-3xl border border-sky-100 bg-[linear-gradient(180deg,#fafdff_0%,#f2f8ff_100%)] p-4 text-sm leading-6 text-slate-600">
          说明：当前版本主要用于内测演示与功能展示，暂未开放完整的自动审核闭环。现阶段提交内容将以人工筛选和演示展示为主。
        </div>

        <div className="space-y-4">
          <Field label="创意标题">
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-400"
              placeholder="用一句话概括你的创意主题"
            />
          </Field>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="创意分类">
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-sky-400"
              >
                {['未竟创意', '梦境碎片', '奇思假说', '难题构想'].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
            <Field label="当前阶段">
              <select
                value={form.stage}
                onChange={(e) => setForm({ ...form, stage: e.target.value })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-sky-400"
              >
                {['问题定义', '概念成型', '验证中', '待孵化'].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="发布方式">
            <div className="grid gap-3 md:grid-cols-3">
              {['全匿名发布', '匿名+仅展示编号', '匿名+审核后展示'].map((mode) => (
                <button
                  type="button"
                  key={mode}
                  onClick={() => setForm({ ...form, confidentiality: mode })}
                  className={cn(
                    'rounded-2xl border px-4 py-3 text-left text-sm transition',
                    form.confidentiality === mode ? 'border-sky-400 bg-sky-50 text-sky-700' : 'border-slate-200 bg-white text-slate-600'
                  )}
                >
                  <div className="flex items-center gap-2 font-medium">
                    <Lock className="h-4 w-4" />
                    {mode}
                  </div>
                </button>
              ))}
            </div>
          </Field>

          {[
            ['核心问题', 'problem'],
            ['为什么它值得继续推进', 'value'],
            ['你希望获得哪些协作', 'collaboration'],
            ['你期待的阶段成果', 'expected'],
          ].map(([label, key]) => (
            <Field key={key} label={label}>
              <textarea
                rows={4}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-sky-400"
              />
            </Field>
          ))}

          <div className="grid gap-4 md:grid-cols-[0.72fr_0.28fr]">
            <Field label="标签">
              <input
                value={form.tags}
                onChange={(e) => setForm({ ...form, tags: e.target.value })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-400"
                placeholder="例如：叙事设计, 城市想象, 互动体验"
              />
            </Field>
            <Field label="协作激励">
              <input
                type="number"
                value={form.reward}
                onChange={(e) => setForm({ ...form, reward: Number(e.target.value) })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-400"
              />
            </Field>
          </div>

          <button type="button" className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-700">
            演示提交
            <FileCheck className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
          <SectionTitle
            eyebrow="发布建议"
            title="完善这些信息，会更容易通过演示筛选"
            desc="在正式提交前，先确认内容清晰、目标明确，这样你的创意更容易被理解、被收藏和被参与。"
          />
          <div className="space-y-3">
            {qualityChecklist.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                <span className="text-sm leading-6 text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
          <SectionTitle
            eyebrow="发布预览"
            title="你的内容将以演示卡片形式展示"
            desc="通过筛选后，创意会以结构化卡片形式出现，方便用户浏览、讨论、收藏和继续共创。"
          />

          <div className="rounded-[28px] border border-slate-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="blue">{form.category}</Badge>
              <Badge tone="slate">{form.stage}</Badge>
              <Badge tone="green">{form.confidentiality}</Badge>
              <Badge tone="amber">激励 {form.reward}</Badge>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{form.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{form.problem}</p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <InfoCard icon={Target} title="期待的协作" content={form.collaboration} />
              <InfoCard icon={Rocket} title="阶段成果" content={form.expected} />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {previewTags.map((tag) => (
                <span key={tag} className="rounded-full bg-sky-50 px-3 py-1 text-xs text-sky-700">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      {children}
    </label>
  );
}

function InfoCard({ icon: Icon, title, content }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <div className="mb-2 flex items-center gap-2 font-medium text-slate-900">
        <Icon className="h-4 w-4 text-sky-700" />
        {title}
      </div>
      <div className="text-sm leading-6 text-slate-600">{content}</div>
    </div>
  );
}
