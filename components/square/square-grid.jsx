'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Filter, Search } from 'lucide-react';
import Badge from '@/components/ui/badge';
import SectionTitle from '@/components/ui/section-title';
import { ideas } from '@/data/ideas';
import { cn } from '@/lib/utils';

export default function SquareGrid() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('全部分类');
  const [status, setStatus] = useState('全部状态');
  const [incubationOnly, setIncubationOnly] = useState(false);

  const filtered = useMemo(() => {
    return ideas.filter((idea) => {
      const hitKeyword =
        !keyword ||
        idea.title.includes(keyword) ||
        idea.summary.includes(keyword) ||
        idea.tags.some((tag) => tag.includes(keyword));
      const hitCategory = category === '全部分类' || idea.category === category;
      const hitStatus = status === '全部状态' || idea.status === status;
      const hitIncubation = !incubationOnly || idea.incubation;
      return hitKeyword && hitCategory && hitStatus && hitIncubation;
    });
  }, [keyword, category, status, incubationOnly]);

  return (
    <div className="space-y-6">
      <section className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
        <SectionTitle
          eyebrow="创意广场"
          title="发现正在被推进的创意"
          desc="浏览不同主题和阶段的创意内容，找到你感兴趣的方向，然后参与回应、留言和共创。"
        />
        <div className="grid gap-4 lg:grid-cols-[1.2fr_repeat(3,0.55fr)]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="搜索创意主题、标签或关键词"
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-sky-400"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-sky-400"
          >
            {['全部分类', '未竟创意', '梦境碎片', '奇思假说', '难题构想'].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-sky-400"
          >
            {['全部状态', '待筛选', '共创中', '孵化观察'].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setIncubationOnly((v) => !v)}
            className={cn(
              'inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium transition',
              incubationOnly ? 'border-sky-400 bg-sky-50 text-sky-700' : 'border-slate-200 bg-white text-slate-600'
            )}
          >
            <Filter className="h-4 w-4" />
            仅看孵化项目
          </button>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
        {filtered.map((idea) => (
          <article key={idea.id} className="rounded-[28px] border border-white/80 bg-white/90 p-5 shadow-soft">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="blue">{idea.category}</Badge>
              <Badge tone={idea.incubation ? 'green' : 'slate'}>{idea.status}</Badge>
              <Badge tone="amber">质量 {idea.quality}</Badge>
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-8 text-slate-950">{idea.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{idea.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {idea.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
              <MetaItem label="编号" value={idea.anonymousId} />
              <MetaItem label="阶段" value={idea.stage} />
              <MetaItem label="热度" value={String(idea.heat)} />
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="text-sm text-slate-500">协作激励 {idea.reward}</div>
              <Link href={`/idea/${idea.id}`} className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-sky-700">
                查看详情
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function MetaItem({ label, value }) {
  return (
    <div>
      <div className="text-xs text-slate-400">{label}</div>
      <div className="mt-1 font-medium text-slate-800">{value}</div>
    </div>
  );
}
