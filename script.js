const profile = {
  name: "陈立庚",
  role: "agent research，deep learning",
  summary:
    "我目前聚焦 agent research 与 deep learning，也持续把研究问题做成可以运行、可以演示、可以交流的系统原型。这一页结合了我的研究方向、教育经历、代表性成果和个人表达。",
  keywords: [
    "Agent Research",
    "Deep Learning"
  ],
  research: [
    {
      title: "Agent 研究",
      text: "围绕智能体的推理、规划、工具调用与执行链路展开研究，希望让复杂任务能够被稳定拆解、协作完成并持续优化。",
      tags: ["Agent", "Reasoning", "Workflow"]
    },
    {
      title: "深度学习",
      text: "关注深度学习方法在视觉理解、模型构建与实际任务中的应用，希望把理论能力转化为稳定、有效且可复现的研究结果。",
      tags: ["Deep Learning", "Vision", "Modeling"]
    }
  ],
  experience: [
    {
      period: "2025.12 - 至今",
      title: "博士后研究人员",
      org: "中国科学院杭州医学研究所",
      detail: "根据 PDF 简历，目前在中国科学院杭州医学研究所开展博士后工作，继续围绕智能系统、深度学习和可落地的研究原型展开探索。"
    },
    {
      period: "2022.10 - 2025.09",
      title: "博士",
      org: "日本国立山梨大学 / 系统集成工程",
      detail: "博士阶段进一步聚焦视觉智能、模型设计与系统实现，形成了从研究设想到代码验证再到论文写作的完整训练。"
    },
    {
      period: "2020.10 - 2022.09",
      title: "硕士",
      org: "日本国立山梨大学 / 计算机科学与技术",
      detail: "硕士阶段围绕计算机科学与技术继续深入，为后续在深度学习、图像理解与科研表达上的工作打下基础。"
    }
  ],
  education: [
    {
      period: "2022.10 - 2025.09",
      school: "日本国立山梨大学",
      degree: "博士",
      major: "系统集成工程"
    },
    {
      period: "2020.10 - 2022.09",
      school: "日本国立山梨大学",
      degree: "硕士",
      major: "计算机科学与技术"
    },
    {
      period: "2016.10 - 2020.06",
      school: "杭州电子科技大学",
      degree: "学士",
      major: "计算机科学与技术"
    }
  ],
  publications: [
    {
      year: "2025",
      title: "Personalized Image Preference Assessment for Individuals with Color Vision Deficiency",
      venue: "NICOGRAPH International 2025, Kanazawa, Japan",
      note: "唯一第一作者。研究由本人主导，负责核心设想、实验方案、代码实现、数据处理、结果分析与论文初稿撰写。"
    },
    {
      year: "2024",
      title: "Image recoloring for color vision deficiency compensation using Swin transformer",
      venue: "Neural Computing and Applications, 36(11): 6051-6066",
      note: "唯一第一作者。工作聚焦基于 Swin Transformer 的色觉缺陷补偿图像重着色方法。"
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
    "欢迎通过邮箱联系我，交流研究、合作项目或学术问题。",
  contacts: [
    { label: "Email", href: "mailto:ligengchen422@gmail.com" }
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
setText("contact-email", "ligengchen422@gmail.com");

const roleNode = document.getElementById("hero-role");
const keywordStack = document.getElementById("keyword-stack");
const researchGrid = document.getElementById("research-grid");
const timeline = document.getElementById("timeline");
const interestOrbits = document.getElementById("interest-orbits");
const contactLinks = document.getElementById("contact-links");
const photoGallery = document.getElementById("photo-gallery");
const educationList = document.getElementById("education-list");
const publicationList = document.getElementById("publication-list");

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

function renderEducation() {
  profile.education.forEach((item) => {
    const card = document.createElement("article");
    card.className = "education-item";
    card.innerHTML = `
      <div class="education-meta">${item.period}</div>
      <h3>${item.school}</h3>
      <p>${item.degree} / ${item.major}</p>
    `;
    educationList.appendChild(card);
  });
}

function renderPublications() {
  profile.publications.forEach((item) => {
    const card = document.createElement("article");
    card.className = "publication-item";
    card.innerHTML = `
      <div class="publication-meta">${item.year}</div>
      <h3>${item.title}</h3>
      <p>${item.venue}</p>
      <p>${item.note}</p>
    `;
    publicationList.appendChild(card);
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
    link.textContent = "Send Email";
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

function setupAnchorNavigation() {
  const header = document.querySelector(".topbar");
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") {
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();

      const headerHeight = header ? header.offsetHeight : 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const top = Math.max(targetTop - headerHeight - 18, 0);
      window.scrollTo({
        top,
        behavior: "smooth"
      });

      window.setTimeout(() => {
        if (window.location.hash !== href) {
          window.location.hash = href;
        }
      }, 220);
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
renderEducation();
renderPublications();
renderPhotography();
renderInterests();
renderContacts();
typeText(roleNode, profile.role);
setupReveal();
setupAnchorNavigation();
setupCanvas();
