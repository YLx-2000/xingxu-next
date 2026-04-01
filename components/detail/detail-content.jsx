'use client';

import { useState } from 'react';
import { Bookmark, CircleDollarSign, Eye, Flag, Medal, MessagesSquare, Rocket, Target, Users, Wand2 } from 'lucide-react';
import Badge from '@/components/ui/badge';
import SectionTitle from '@/components/ui/section-title';

export default function DetailContent({ idea }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: '协作者 S-03',
      time: '2 分钟前',
      text: '这个方向很适合先做成一页展示型原型，先把核心流程跑通，再补充更完整的交互。',
      replyTo: null,
    },
    {
      id: 2,
      author: '协作者 S-11',
      time: '刚刚',
      text: '我比较关注它后续能不能扩展成比赛作品，如果可以，我愿意一起补充展示逻辑。',
      replyTo: '协作者 S-03',
    },
  ]);
  const [draftMessage, setDraftMessage] = useState('');
  const [replyTarget, setReplyTarget] = useState(null);

  function sendMessage() {
    if (!draftMessage.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        author: '你',
        time: '刚刚',
        text: draftMessage.trim(),
        replyTo: replyTarget,
      },
    ]);
    setDraftMessage('');
    setReplyTarget(null);
  }

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[34px] border border-white/80 bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_58%,#eef7ff_100%)] p-8 shadow-glow">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="blue">{idea.category}</Badge>
              <Badge tone="slate">{idea.stage}</Badge>
              <Badge tone={idea.incubation ? 'green' : 'amber'}>{idea.status}</Badge>
              <Badge tone="purple">匿名编号 {idea.anonymousId}</Badge>
            </div>
            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 md:text-4xl">{idea.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{idea.summary}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <MetricCard label="内容质量" value={idea.quality} />
            <MetricCard label="协作激励" value={idea.reward} accent />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <ActionButton primary icon={Wand2}>参与共创</ActionButton>
          <ActionButton icon={Rocket}>申请加入孵化</ActionButton>
          <ActionButton icon={Bookmark}>收藏创意</ActionButton>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-6">
          <section className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
            <SectionTitle eyebrow="创意说明" title="这个创意目前想解决什么问题" desc="先让大家快速理解背景、目标和当前阶段，再决定如何参与。" />
            <div className="rounded-3xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">{idea.challenge}</div>

            <div className="mt-5 grid gap-4">
              <InfoBlock icon={Users} title="当前更需要的协作">
                <div className="flex flex-wrap gap-2">
                  {idea.needs.map((need) => (
                    <span key={need} className="rounded-full bg-white px-3 py-1.5 text-xs text-slate-600 shadow-sm">
                      {need}
                    </span>
                  ))}
                </div>
              </InfoBlock>
              <InfoBlock icon={Flag} title="当前推进计划">
                <div className="space-y-2">
                  {idea.milestones.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-600">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-medium text-sky-700 shadow-sm">
                        {index + 1}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </InfoBlock>
            </div>
          </section>

          <section className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
            <SectionTitle eyebrow="互动讨论" title="和其他人一起补充、回复和讨论" desc="这里支持留言和回复，让用户围绕同一个创意继续交流，但整体呈现仍保持简洁克制。" />

            <div className="space-y-3">
              {messages.map((message) => (
                <div key={message.id} className="rounded-[24px] border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium text-slate-900">{message.author}</div>
                      <div className="text-xs text-slate-400">{message.time}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setReplyTarget(message.author)}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 transition hover:border-sky-200 hover:text-sky-700"
                    >
                      回复
                    </button>
                  </div>
                  {message.replyTo ? <div className="mt-2 text-xs text-sky-700">回复 @{message.replyTo}</div> : null}
                  <p className="mt-3 text-sm leading-7 text-slate-600">{message.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[26px] border border-sky-100 bg-[linear-gradient(180deg,#fafdff_0%,#f3f9ff_100%)] p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-medium text-slate-900">参与讨论</div>
                  <div className="text-xs text-slate-500">可以直接留言，也可以针对某位协作者进行回复</div>
                </div>
                {replyTarget ? (
                  <button
                    type="button"
                    onClick={() => setReplyTarget(null)}
                    className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs text-sky-700"
                  >
                    当前回复 @{replyTarget}
                  </button>
                ) : null}
              </div>
              <textarea
                rows={4}
                value={draftMessage}
                onChange={(e) => setDraftMessage(e.target.value)}
                placeholder="写下你的想法、建议或补充内容..."
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-sky-400"
              />
              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={sendMessage}
                  className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700"
                >
                  发送留言
                  <MessagesSquare className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
            <SectionTitle eyebrow="精选回应" title="已经收到的高质量建议" desc="平台会优先展示更有参考价值的回应，帮助发布者更快找到可推进的方向。" />
            <div className="space-y-4">
              {idea.featuredReplies.map((reply, index) => (
                <div key={`${reply.author}-${index}`} className="rounded-[26px] border border-slate-100 bg-slate-50 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone={reply.type === '落地建议' ? 'green' : reply.type === '风险提醒' ? 'rose' : reply.type === '资源连接' ? 'purple' : 'blue'}>
                        {reply.type}
                      </Badge>
                      <span className="text-sm text-slate-500">{reply.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Medal className="h-4 w-4 text-amber-500" />
                      质量 {reply.score}
                      <span className="mx-1 text-slate-300">·</span>
                      激励 +{reply.reward}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{reply.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-soft">
            <SectionTitle eyebrow="继续推进" title="一个创意可以怎样向前发展" desc="高质量内容不仅会收到回应，也有机会进入更深一步的整理与推进。" />
            <div className="grid gap-3 md:grid-cols-3">
              {[
                { icon: CircleDollarSign, title: '获得激励', desc: '优质回应和持续参与会获得协作激励' },
                { icon: Eye, title: '被更多人看见', desc: '内容有机会进入推荐、精选和专题展示' },
                { icon: Rocket, title: '进入后续孵化', desc: '高潜创意可继续整理为原型或项目方向' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                  <item.icon className="h-5 w-5 text-sky-700" />
                  <div className="mt-3 font-medium text-slate-900">{item.title}</div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, accent = false }) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/85 p-4 text-center shadow-sm">
      <div className="text-xs text-slate-500">{label}</div>
      <div className={accent ? 'mt-1 text-3xl font-semibold text-sky-700' : 'mt-1 text-3xl font-semibold text-slate-900'}>{value}</div>
    </div>
  );
}

function ActionButton({ children, icon: Icon, primary = false }) {
  return (
    <button
      type="button"
      className={primary ? 'inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-700' : 'inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-700'}
    >
      {children}
      <Icon className="h-4 w-4" />
    </button>
  );
}

function InfoBlock({ icon: Icon, title, children }) {
  return (
    <div className="rounded-3xl bg-slate-50 p-5">
      <div className="mb-2 flex items-center gap-2 font-medium text-slate-900">
        <Icon className="h-4 w-4 text-sky-700" />
        {title}
      </div>
      {children}
    </div>
  );
}
