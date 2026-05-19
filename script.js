const profile = {
  name: "你的名字",
  role: "Researcher / Builder / Problem Solver",
  summary:
    "我关注智能系统、人机协作与数据驱动决策，喜欢把研究问题做成可验证、可展示、可落地的产品原型。这一页既是个人简介，也是我持续迭代研究与工程实践的入口。",
  keywords: [
    "LLM Systems",
    "Human-AI Collaboration",
    "Information Retrieval",
    "Trustworthy ML",
    "Interactive Visualization"
  ],
  research: [
    {
      title: "智能体与工作流编排",
      text: "探索大模型驱动的多步骤推理、工具调用与自动化协作，让复杂任务可以被拆解、执行并可追踪。",
      tags: ["Agent", "Planning", "Tool Use"]
    },
    {
      title: "检索增强与知识系统",
      text: "关注从异构数据中提取可靠上下文，将知识检索、重排与生成结合，提升问答与分析系统的稳定性。",
      tags: ["RAG", "Ranking", "Knowledge Base"]
    },
    {
      title: "可解释交互与可视分析",
      text: "将模型能力与可视化结合，让研究成果不仅能工作，还能被直观理解、调试与展示。",
      tags: ["Visualization", "UX", "Interpretability"]
    }
  ],
  experience: [
    {
      period: "2025 - Present",
      title: "研究者 / 开发者",
      org: "你的实验室或团队",
      detail: "围绕智能系统、研究工程化与交互展示开展工作，负责原型设计、实验迭代与技术呈现。"
    },
    {
      period: "2023 - 2025",
      title: "研究生阶段",
      org: "你的学校或机构",
      detail: "聚焦机器学习、信息检索或相关方向，参与科研项目、实验平台建设与学术表达。"
    },
    {
      period: "Earlier",
      title: "基础训练与跨学科积累",
      org: "你的经历补充",
      detail: "在编程、数学、写作与协作中持续打磨能力，形成面向问题的研究与实现习惯。"
    }
  ],
  projects: [
    {
      title: "Research Copilot",
      text: "一个把论文阅读、要点抽取、问题追踪和知识串联整合到一起的研究辅助原型。",
      tags: ["LLM", "Summarization", "Workflow"]
    },
    {
      title: "Interactive Demo Site",
      text: "将研究成果做成可以公开展示的交互页面，用程序驱动的动画提升理解与传播效果。",
      tags: ["Frontend", "Animation", "Storytelling"]
    },
    {
      title: "Retrieval Evaluation Toolkit",
      text: "面向检索与问答系统的评测工具，帮助比较不同数据组织、检索策略和重排方案。",
      tags: ["Evaluation", "IR", "Analysis"]
    },
    {
      title: "Experiment Dashboard",
      text: "把实验日志、关键指标和阶段结论整合成仪表盘，减少重复分析成本。",
      tags: ["Dashboard", "Data", "Monitoring"]
    }
  ],
  interestsSummary:
    "工作之外，我也持续从运动、阅读、摄影、旅行和音乐里获取灵感。这些兴趣让我在研究中更关注节奏、结构、叙事和长期投入。",
  interests: ["阅读", "摄影", "跑步", "旅行", "音乐", "咖啡"],
  contactNote:
    "欢迎交流研究、合作项目、技术实现或有趣的想法。你可以把这里替换成你的邮箱、GitHub、Google Scholar、LinkedIn 或个人社交链接。",
  contacts: [
    { label: "Email", href: "mailto:your.name@example.com" },
    { label: "GitHub", href: "https://github.com/yourname" },
    { label: "Scholar", href: "https://scholar.google.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" }
  ]
};

const setText = (id, text) => {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = text;
  }
};

setText("hero-name", profile.name);
setText("hero-summary", profile.summary);
setText("interests-summary", profile.interestsSummary);
setText("contact-note", profile.contactNote);

const roleNode = document.getElementById("hero-role");
const keywordStack = document.getElementById("keyword-stack");
const researchGrid = document.getElementById("research-grid");
const timeline = document.getElementById("timeline");
const projectsGrid = document.getElementById("projects-grid");
const interestOrbits = document.getElementById("interest-orbits");
const contactLinks = document.getElementById("contact-links");
const focusCounter = document.getElementById("focus-counter");

function typeText(node, text, speed = 55) {
  let index = 0;

  const tick = () => {
    node.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) {
      window.setTimeout(tick, speed);
    }
  };

  tick();
}

function animateCounter(node, target) {
  const duration = 1800;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = `${Math.round(target * eased)}%`;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function renderKeywordPills() {
  profile.keywords.forEach((keyword, index) => {
    const pill = document.createElement("div");
    pill.className = "keyword-pill";
    pill.textContent = keyword;
    pill.style.setProperty("--drift", `${index % 2 === 0 ? 12 : -8}px`);
    pill.style.setProperty("--delay", `${index * 0.18}s`);
    keywordStack.appendChild(pill);
  });
}

function renderResearch() {
  profile.research.forEach((item) => {
    const card = document.createElement("article");
    card.className = "research-card reveal";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="research-tags">
        ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    `;
    researchGrid.appendChild(card);
  });
}

function renderTimeline() {
  profile.experience.forEach((item) => {
    const card = document.createElement("article");
    card.className = "timeline-item";
    card.innerHTML = `
      <div class="timeline-meta">${item.period} / ${item.org}</div>
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
    `;
    timeline.appendChild(card);
  });
}

function renderProjects() {
  profile.projects.forEach((item) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="project-tags">
        ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

function renderInterests() {
  const radii = ["96px", "132px", "170px", "132px", "96px", "170px"];
  const durations = ["18s", "22s", "26s", "20s", "24s", "28s"];
  profile.interests.forEach((item, index) => {
    const node = document.createElement("div");
    node.className = "interest-node";
    node.style.setProperty("--angle", `${index * 60}deg`);
    node.style.setProperty("--radius", radii[index % radii.length]);
    node.style.setProperty("--duration", durations[index % durations.length]);
    node.innerHTML = `<span>${item}</span>`;
    interestOrbits.appendChild(node);
  });
}

function renderContacts() {
  profile.contacts.forEach((item) => {
    const link = document.createElement("a");
    link.className = "contact-link";
    link.href = item.href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = item.label;
    contactLinks.appendChild(link);
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal, .timeline-item").forEach((node) => observer.observe(node));
}

function setupProjectMotion() {
  projectsGrid.addEventListener("pointermove", (event) => {
    const cards = projectsGrid.querySelectorAll(".project-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${py * -4}deg) rotateY(${px * 6}deg) translateY(-3px)`;
    });
  });

  projectsGrid.addEventListener("pointerleave", () => {
    projectsGrid.querySelectorAll(".project-card").forEach((card) => {
      card.style.transform = "";
    });
  });
}

function setupCanvas() {
  const canvas = document.getElementById("hero-canvas");
  const ctx = canvas.getContext("2d");
  const points = [];
  const pointCount = 42;
  const pointer = { x: 0, y: 0, active: false };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function seedPoints() {
    points.length = 0;
    for (let i = 0; i < pointCount; i += 1) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    points.forEach((point) => {
      point.x += point.vx;
      point.y += point.vy;

      if (point.x < 0 || point.x > canvas.width) {
        point.vx *= -1;
      }
      if (point.y < 0 || point.y > canvas.height) {
        point.vy *= -1;
      }

      ctx.beginPath();
      ctx.arc(point.x, point.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(98, 208, 255, 0.8)";
      ctx.fill();
    });

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const distance = Math.hypot(dx, dy);
        if (distance < 120) {
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.strokeStyle = `rgba(140, 184, 255, ${0.16 - distance / 900})`;
          ctx.stroke();
        }
      }

      if (pointer.active) {
        const pdx = points[i].x - pointer.x;
        const pdy = points[i].y - pointer.y;
        const pdist = Math.hypot(pdx, pdy);
        if (pdist < 160) {
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.strokeStyle = `rgba(255, 184, 92, ${0.22 - pdist / 900})`;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    resize();
    seedPoints();
  });

  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });

  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  resize();
  seedPoints();
  draw();
}

renderKeywordPills();
renderResearch();
renderTimeline();
renderProjects();
renderInterests();
renderContacts();
typeText(roleNode, profile.role);
animateCounter(focusCounter, 96);
setupReveal();
setupProjectMotion();
setupCanvas();
