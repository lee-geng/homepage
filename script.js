const profile = {
  name: "陈立庚",
  role: "Agent Researcher / AI Builder",
  summary:
    "我目前关注 Agent、人工智能系统与研究原型实现，喜欢把想法做成可验证、可交互、可展示的作品，让研究表达和工程落地能够在同一个界面里发生。",
  keywords: [
    "Agent Research",
    "AI Systems",
    "Human-AI Collaboration",
    "Interactive Visualization",
    "Rapid Prototyping"
  ],
  research: [
    {
      title: "Agent 研究",
      text: "围绕智能体的推理、规划、工具调用与执行链路展开研究，希望让复杂任务能够被稳定拆解、协作完成并持续优化。",
      tags: ["Agent", "Reasoning", "Workflow"]
    },
    {
      title: "人工智能系统",
      text: "关注模型能力如何落到真实系统中，包括交互设计、信息组织、实验验证和从研究到原型的工程实现。",
      tags: ["AI", "System Design", "Prototype"]
    },
    {
      title: "研究展示与交互表达",
      text: "希望通过动画、可视化和叙事化页面，把研究思路、项目过程和个人表达整合成更有感染力的展示体验。",
      tags: ["Visualization", "Storytelling", "Frontend"]
    }
  ],
  experience: [
    {
      period: "2026.12 - 至今（简历原文，日期待确认）",
      title: "研究人员",
      org: "中国科学院杭州医学研究所",
      detail: "根据 `resume/resume.txt`，当前在中国科学院杭州医学研究所从事 Agent 与人工智能相关研究。这里先保留原始日期信息，方便后续确认。"
    },
    {
      period: "研究方向",
      title: "Agent / 人工智能",
      org: "当前重点",
      detail: "研究兴趣集中在 Agent 与人工智能系统，偏向把研究问题做成能运行、能演示、能继续迭代的系统原型。"
    },
    {
      period: "持续构建中",
      title: "个人主页与作品表达",
      org: "独立项目",
      detail: "通过个人主页、交互展示和摄影作品，把研究身份、审美兴趣和技术表达放到同一个叙事空间里。"
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
    "摄影是我最想放进这个主页的一部分。镜头训练我观察结构、光线和瞬间，这种审美和耐心也会自然带回到研究、界面设计和作品表达里。",
  interests: ["摄影", "阅读", "旅行", "跑步", "音乐", "咖啡"],
  photography: [
    {
      src: "photography/DSCF2392.JPG",
      title: "Temple Roof",
      description: "建筑线条、木质纹理与秋日光线。"
    },
    {
      src: "photography/DSCF2616.JPG",
      title: "Travel Note",
      description: "把旅行中的空间感和节奏保存下来。"
    },
    {
      src: "photography/DSCF2636.JPG",
      title: "Street Moment",
      description: "偏爱带有生活温度和叙事感的街头画面。"
    },
    {
      src: "photography/DSCF2689.JPG",
      title: "Landscape Frame",
      description: "在风景里练习构图、层次和颜色关系。"
    }
  ],
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
const photoGallery = document.getElementById("photo-gallery");

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

function renderPhotography() {
  profile.photography.forEach((item) => {
    const card = document.createElement("article");
    card.className = "photo-card reveal";
    card.innerHTML = `
      <img src="${item.src}" alt="${item.title}">
      <div class="photo-caption">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    photoGallery.appendChild(card);
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
renderPhotography();
renderInterests();
renderContacts();
typeText(roleNode, profile.role);
animateCounter(focusCounter, 96);
setupReveal();
setupProjectMotion();
setupCanvas();
