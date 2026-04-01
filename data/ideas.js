export const ideas = [
  {
    id: '1',
    title: '把梦境碎片整理成可以被共创补完的互动叙事原型',
    category: '梦境碎片',
    stage: '概念成型',
    status: '共创中',
    reward: 68,
    quality: 92,
    heat: 168,
    incubation: true,
    anonymousId: 'XU-0719',
    tags: ['叙事设计', '互动体验', '网页原型'],
    summary:
      '发布者想把零散梦境转成可多人补充的互动叙事结构，先做成展示型原型，再考虑继续开发。',
    challenge:
      '怎样在保留梦境氛围的同时，让更多协作者能看懂、接住并继续补充这个创意？',
    needs: ['叙事结构建议', '页面呈现建议', '体验测试反馈'],
    milestones: ['梳理核心设定', '形成页面框架', '完成展示型原型'],
    featuredReplies: [
      {
        type: '落地建议',
        author: '协作者 S-12',
        score: 95,
        reward: 20,
        content: '建议先把梦境拆成场景、异常点、选择结果三部分，再用单页交互原型呈现，会更容易继续扩展。',
      },
      {
        type: '资源连接',
        author: '协作者 S-08',
        score: 88,
        reward: 16,
        content: '可以先用网页原型验证体验，不必急着做完整产品，先把最有吸引力的核心路径做好。',
      },
    ],
  },
  {
    id: '2',
    title: '为校园闲置实验器材设计匿名创意征集与再利用方案',
    category: '难题构想',
    stage: '问题定义',
    status: '待筛选',
    reward: 46,
    quality: 84,
    heat: 121,
    incubation: false,
    anonymousId: 'XU-2034',
    tags: ['校园创新', '资源整合', '流程设计'],
    summary:
      '不是二手交易，而是让学生匿名提交器材再利用想法，由其他人补全场景与执行流程。',
    challenge:
      '怎样让用户提交的内容更聚焦实际场景，而不是简单吐槽闲置问题？',
    needs: ['机制设计', '规则建议', '试点方案'],
    milestones: ['明确提交流程', '设计筛选规则', '整理试点展示'],
    featuredReplies: [
      {
        type: '补充思路',
        author: '协作者 S-03',
        score: 87,
        reward: 12,
        content: '可以要求填写使用对象、使用频率和再利用价值，帮助管理员更快筛选高质量内容。',
      },
    ],
  },
  {
    id: '3',
    title: '把小众脑洞整理成可以继续推进的微孵化项目清单',
    category: '未竟创意',
    stage: '验证中',
    status: '孵化观察',
    reward: 120,
    quality: 96,
    heat: 240,
    incubation: true,
    anonymousId: 'XU-3341',
    tags: ['商业化', '创意筛选', '价值转化'],
    summary:
      '平台希望把被回应、被补全、被验证的创意进一步整理成适合展示、路演或继续开发的项目清单。',
    challenge:
      '怎样定义一个创意是否值得进入孵化池，并且避免平台变成只看热度的内容社区？',
    needs: ['评分模型', '榜单机制', '后台规则'],
    milestones: ['确定评分维度', '设立推荐机制', '输出孵化候选清单'],
    featuredReplies: [
      {
        type: '落地建议',
        author: '协作者 S-02',
        score: 98,
        reward: 30,
        content: '可以从内容质量、协作深度、可执行性和资源匹配度四个维度评分，再决定是否进入孵化池。',
      },
      {
        type: '风险提醒',
        author: '协作者 S-07',
        score: 89,
        reward: 15,
        content: '不要只按热度排序，高价值但小众的创意也应该有被看见的入口，比如编辑推荐和专题展示。',
      },
      {
        type: '资源连接',
        author: '协作者 S-16',
        score: 86,
        reward: 10,
        content: '后台可以把内容按适合展示、适合继续开发、适合合作三个方向整理，方便后续推进。',
      },
    ],
  },
  {
    id: '4',
    title: '把“情绪翻译器”这个脑洞做成一个可体验的互动网页',
    category: '奇思假说',
    stage: '概念成型',
    status: '共创中',
    reward: 52,
    quality: 89,
    heat: 136,
    incubation: false,
    anonymousId: 'XU-5280',
    tags: ['脑洞实验', '交互脚本', '展示形式'],
    summary:
      '这是一个带有思辨色彩的装置设定，希望通过协作把它补全成可展示的网页或展览脚本。',
    challenge:
      '怎样让一个非常规想法既保留新鲜感，又拥有清晰、可推进的表达方式？',
    needs: ['世界观补完', '交互脚本', '页面草图'],
    milestones: ['明确使用场景', '形成脚本结构', '做出展示页草图'],
    featuredReplies: [
      {
        type: '补充思路',
        author: '协作者 S-14',
        score: 91,
        reward: 16,
        content: '建议先从“误解被翻译后会发生什么”切入，比直接解释设备原理更容易吸引人参与。',
      },
    ],
  },
];

export const adminMetrics = [
  { label: '创意总量', value: '128', hint: '持续增长中的有效创意' },
  { label: '讨论活跃度', value: '63%', hint: '有留言或回复的创意占比' },
  { label: '孵化候选', value: '18', hint: '适合继续推进的项目' },
  { label: '内容通过率', value: '96%', hint: '通过审核进入展示的内容占比' },
];

export const reviewQueue = [
  {
    id: 'RV-101',
    title: '把宿舍矛盾写成连续情绪日志',
    reason: '更像个人情绪表达，不适合进入创意协作平台。',
    risk: '高',
    action: '建议退回',
  },
  {
    id: 'RV-102',
    title: '校园创意盲盒机制设计',
    reason: '目标清晰，便于被回应和继续共创。',
    risk: '低',
    action: '建议通过',
  },
  {
    id: 'RV-103',
    title: '匿名发泄墙升级版',
    reason: '偏树洞和吐槽，不符合平台定位。',
    risk: '中',
    action: '建议退回',
  },
  {
    id: 'RV-104',
    title: '把梦境记录转成互动展示页面',
    reason: '有明确的展示方向，适合进入创意区。',
    risk: '低',
    action: '建议通过',
  },
];

export const growthLevels = [
  {
    name: '星星协作者',
    rule: '持续输出清晰、有帮助的补充建议',
    perk: '推荐优先展示 / 协作徽章',
  },
  {
    name: '太阳创作者',
    rule: '发布高质量创意并积极推动讨论进展',
    perk: '专题推荐 / 孵化候选入口',
  },
  {
    name: '种子共创者',
    rule: '长期参与并帮助多个创意完成推进',
    perk: '精选身份标识 / 内测试用资格',
  },
];
