import React, { useState, useEffect, useRef } from "react";

const EXT_COLORS = {
  md: "var(--accent-blue)",
  js: "var(--accent-yellow)",
  json: "var(--accent-orange)",
  sh: "var(--accent-green)",
};

function FileBadge({ ext }) {
  return (
    <span className="file-badge" style={{ color: EXT_COLORS[ext] }}>
      {ext}
    </span>
  );
}

const TABS = [
  { id: "about", label: "about.md", ext: "md", lang: "Markdown" },
  { id: "projects", label: "projects.js", ext: "js", lang: "JavaScript" },
  { id: "skills", label: "skills.json", ext: "json", lang: "JSON" },
  { id: "contact", label: "contact.sh", ext: "sh", lang: "Shell" },
];

function Line({ n, children, delay = 0, animate }) {
  return (
    <div
      className="code-line"
      style={animate ? { animationDelay: `${delay}ms` } : undefined}
    >
      <span className="gutter">{n}</span>
      <span className="line-content">{children}</span>
    </div>
  );
}

function AboutContent({ animate }) {
  const lines = [
    <span className="syn-comment"># whoami</span>,
    null,
    <span className="syn-string">
      "First-year BCA student learning to build things by building things."
    </span>,
    null,
    <span>
      Studying at St. Berchmans College — just getting started with web
      development.
    </span>,
    null,
    <span className="syn-comment"># stack</span>,
    <span>HTML · CSS · JavaScript · React</span>,
    null,
    <span className="syn-comment"># currently</span>,
    <span>
      Learning React by building small projects like this portfolio, one
      component at a time.
    </span>,
    null,
    <span className="syn-comment"># status</span>,
    <span>
      <span className="syn-key">learning</span>
      <span className="syn-punc">: </span>
      <span className="syn-bool">true</span>
      <span className="syn-comment"> // always open to feedback</span>
    </span>,
  ];
  return (
    <div className="code-block">
      {lines.map((l, i) => (
        <Line key={i} n={i + 1} delay={i * 45} animate={animate}>
          {l}
        </Line>
      ))}
    </div>
  );
}

const PROJECTS = [
  {
    name: "To-Do App",
    description: "A simple to-do list app to add, complete, and remove tasks.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "shipped",
  },
];

function ProjectsContent({ animate }) {
  let n = 0;
  const rows = [];
  const pushLine = (content) => {
    n += 1;
    rows.push(
      <Line key={n} n={n} delay={n * 40} animate={animate}>
        {content}
      </Line>
    );
  };

  pushLine(
    <span>
      <span className="syn-key">const</span> projects{" "}
      <span className="syn-punc">=</span> [
    </span>
  );
  PROJECTS.forEach((p, i) => {
    pushLine(<span className="syn-punc">{"  {"}</span>);
    pushLine(
      <span>
        <span className="syn-attr">name</span>
        <span className="syn-punc">: </span>
        <span className="syn-string">'{p.name}'</span>
        <span className="syn-punc">,</span>
      </span>
    );
    pushLine(
      <span>
        <span className="syn-attr">description</span>
        <span className="syn-punc">: </span>
        <span className="syn-string">'{p.description}'</span>
        <span className="syn-punc">,</span>
      </span>
    );
    pushLine(
      <span>
        <span className="syn-attr">stack</span>
        <span className="syn-punc">: [</span>
        {p.stack.map((s, si) => (
          <span key={si}>
            <span className="syn-string">'{s}'</span>
            {si < p.stack.length - 1 ? (
              <span className="syn-punc">, </span>
            ) : null}
          </span>
        ))}
        <span className="syn-punc">],</span>
      </span>
    );
    pushLine(
      <span>
        <span className="syn-attr">status</span>
        <span className="syn-punc">: </span>
        <span className="syn-string">'{p.status}'</span>
        <span className="syn-comment">
          {" "}
          {p.status === "shipped" ? "// live" : "// building"}
        </span>
      </span>
    );
    pushLine(
      <span className="syn-punc">
        {"  }" + (i < PROJECTS.length - 1 ? "," : "")}
      </span>
    );
  });
  pushLine(<span className="syn-punc">];</span>);

  return <div className="code-block">{rows}</div>;
}

const SKILLS = {
  languages: ["HTML", "CSS", "JavaScript"],
  frontend: ["React"],
  tools: ["Git", "GitHub", "VS Code"],
  learning: ["TypeScript", "Node.js"],
};

function SkillsContent({ animate }) {
  const keys = Object.keys(SKILLS);
  let n = 0;
  const rows = [];
  const pushLine = (content) => {
    n += 1;
    rows.push(
      <Line key={n} n={n} delay={n * 40} animate={animate}>
        {content}
      </Line>
    );
  };

  pushLine(<span className="syn-punc">{"{"}</span>);
  keys.forEach((key, ki) => {
    pushLine(
      <span>
        {"  "}
        <span className="syn-attr">"{key}"</span>
        <span className="syn-punc">: [</span>
      </span>
    );
    SKILLS[key].forEach((val, vi) => {
      pushLine(
        <span>
          {"    "}
          <span className="syn-string">"{val}"</span>
          {vi < SKILLS[key].length - 1 ? (
            <span className="syn-punc">,</span>
          ) : null}
        </span>
      );
    });
    pushLine(
      <span className="syn-punc">
        {"  ]" + (ki < keys.length - 1 ? "," : "")}
      </span>
    );
  });
  pushLine(<span className="syn-punc">{"}"}</span>);

  return <div className="code-block">{rows}</div>;
}

function ContactContent({ animate }) {
  const lines = [
    <span className="syn-comment">#!/bin/bash</span>,
    null,
    <span className="syn-comment"># let's talk</span>,
    <span>
      <span className="syn-key">EMAIL</span>
      <span className="syn-punc">=</span>
      <span className="syn-string">"asin.priv@gmail.com"</span>
    </span>,
    <span>
      <span className="syn-key">GITHUB</span>
      <span className="syn-punc">=</span>
      <span className="syn-string">"github.com/asineee"</span>
    </span>,
    null,
    <span>
      <span className="syn-attr">echo</span>{" "}
      <span className="syn-string">
        "Currently open to freelance work and full-time opportunities."
      </span>
    </span>,
  ];
  return (
    <div className="code-block">
      {lines.map((l, i) => (
        <Line key={i} n={i + 1} delay={i * 45} animate={animate}>
          {l}
        </Line>
      ))}
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const mounted = useRef(false);

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [activeTab]);

  useEffect(() => {
    mounted.current = true;
  }, []);

  const activeMeta = TABS.find((t) => t.id === activeTab);

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutContent animate key={animKey} />;
      case "projects":
        return <ProjectsContent animate key={animKey} />;
      case "skills":
        return <SkillsContent animate key={animKey} />;
      case "contact":
        return <ContactContent animate key={animKey} />;
      default:
        return null;
    }
  };

  return (
    <div className="ide-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

        .ide-root {
          --bg: #0d1117;
          --bg-elevated: #161b22;
          --bg-inset: #010409;
          --border: #30363d;
          --border-subtle: #21262d;
          --text: #e6edf3;
          --text-muted: #8b949e;
          --text-faint: #484f58;
          --accent-purple: #c792ea;
          --accent-blue: #82aaff;
          --accent-green: #c3e88d;
          --accent-orange: #f78c6c;
          --accent-red: #ff6b6b;
          --accent-yellow: #ffcb6b;
          font-family: 'Inter', sans-serif;
          background: radial-gradient(ellipse at top, #131a24 0%, #0a0e14 60%, #060809 100%);
          color: var(--text);
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 16px;
          box-sizing: border-box;
        }
        .ide-root * { box-sizing: border-box; }

        .editor-frame {
          width: 100%;
          max-width: 980px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 24px 60px -20px rgba(0,0,0,0.6);
        }

        .title-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: var(--bg-elevated);
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
        }
        .traffic-lights { display: flex; gap: 8px; }
        .dot { width: 11px; height: 11px; border-radius: 50%; }
        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }
        .title-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          color: var(--text-muted);
          letter-spacing: 0.02em;
        }
        .menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          line-height: 1;
        }
        .menu-btn:hover { color: var(--text); }

        .editor-body {
          display: flex;
          min-height: 460px;
        }

        .sidebar {
          width: 200px;
          flex-shrink: 0;
          background: var(--bg-inset);
          border-right: 1px solid var(--border-subtle);
          padding: 14px 0;
        }
        .sidebar-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--text-faint);
          padding: 0 16px 10px;
        }
        .folder-row {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          color: var(--text-muted);
        }
        .file-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.02em;
          width: 30px;
          flex-shrink: 0;
        }
        .file-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px 6px 30px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          color: var(--text-muted);
          cursor: pointer;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
        }
        .file-row:hover { background: var(--bg-elevated); color: var(--text); }
        .file-row.active {
          background: var(--bg-elevated);
          color: var(--text);
          border-left: 2px solid var(--accent-blue);
          padding-left: 28px;
        }
        .file-row:focus-visible, .tab-btn:focus-visible, .cta:focus-visible, .icon-link:focus-visible, .menu-btn:focus-visible {
          outline: 2px solid var(--accent-blue);
          outline-offset: -2px;
        }

        .main-pane { flex: 1; display: flex; flex-direction: column; min-width: 0; }

        .tab-bar {
          display: flex;
          background: var(--bg-inset);
          border-bottom: 1px solid var(--border-subtle);
          overflow-x: auto;
        }
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          color: var(--text-muted);
          background: transparent;
          border: none;
          border-right: 1px solid var(--border-subtle);
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.15s ease, background 0.15s ease;
        }
        .tab-btn:hover { color: var(--text); }
        .tab-btn.active {
          color: var(--text);
          background: var(--bg);
          border-bottom: 2px solid var(--accent-blue);
        }

        .content-area {
          flex: 1;
          padding: 20px 24px;
          overflow-x: auto;
        }

        .code-block {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          line-height: 1.85;
        }
        .code-line {
          display: flex;
          opacity: 0;
          animation: lineIn 0.4s ease forwards;
        }
        .gutter {
          width: 28px;
          flex-shrink: 0;
          color: var(--text-faint);
          user-select: none;
          text-align: right;
          margin-right: 18px;
        }
        .line-content { color: var(--text); word-break: break-word; }
        .syn-comment { color: var(--text-faint); font-style: italic; }
        .syn-string { color: var(--accent-green); }
        .syn-key { color: var(--accent-purple); }
        .syn-attr { color: var(--accent-blue); }
        .syn-punc { color: var(--text-muted); }
        .syn-bool { color: var(--accent-orange); }

        @keyframes lineIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .contact-cta {
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }
        .cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          padding: 9px 16px;
          border-radius: 6px;
          background: var(--accent-blue);
          color: #0a0e14;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .cta:hover { transform: translateY(-1px); opacity: 0.9; }
        .icon-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 42px;
          height: 34px;
          padding: 0 10px;
          border-radius: 6px;
          border: 1px solid var(--border);
          color: var(--text-muted);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .icon-link:hover { color: var(--text); border-color: var(--text-muted); }
        .placeholder-note {
          margin-top: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--text-faint);
        }

        .status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 14px;
          background: var(--bg-inset);
          border-top: 1px solid var(--border-subtle);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--text-muted);
        }
        .status-left, .status-right { display: flex; align-items: center; gap: 14px; }
        .status-item { display: flex; align-items: center; gap: 5px; }
        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #27c93f;
          display: inline-block;
        }
        .cursor-blink {
          display: inline-block;
          width: 6px;
          height: 12px;
          background: var(--accent-green);
          animation: blink 1.1s step-end infinite;
          vertical-align: -2px;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .mobile-drawer {
          display: none;
        }

        @media (max-width: 720px) {
          .sidebar { display: none; }
          .menu-btn { display: inline-flex; align-items: center; }
          .content-area { padding: 16px; }
          .status-right .status-item:not(:last-child) { display: none; }
          .mobile-drawer.open {
            display: block;
            position: absolute;
            top: 44px;
            left: 0;
            right: 0;
            background: var(--bg-inset);
            border-bottom: 1px solid var(--border-subtle);
            z-index: 10;
            padding: 10px 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .code-line { animation: none; opacity: 1; }
          .cursor-blink { animation: none; }
          .cta:hover { transform: none; }
        }
      `}</style>

      <div className="editor-frame">
        <div className="title-bar">
          <div className="traffic-lights">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="title-text">asin — portfolio</span>
          <button
            className="menu-btn"
            aria-label={sidebarOpen ? "Close file menu" : "Open file menu"}
            onClick={() => setSidebarOpen((o) => !o)}
          >
            {sidebarOpen ? "\u2715" : "\u2630"}
          </button>

          <div className={`mobile-drawer ${sidebarOpen ? "open" : ""}`}>
            {TABS.map((t) => (
              <button
                key={t.id}
                className={`file-row ${activeTab === t.id ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(t.id);
                  setSidebarOpen(false);
                }}
              >
                <FileBadge ext={t.ext} />
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="editor-body">
          <aside className="sidebar">
            <div className="sidebar-label">EXPLORER</div>
            <div className="folder-row">
              <span>▾</span>
              asin/
            </div>
            {TABS.map((t) => (
              <button
                key={t.id}
                className={`file-row ${activeTab === t.id ? "active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                <FileBadge ext={t.ext} />
                {t.label}
              </button>
            ))}
          </aside>

          <div className="main-pane">
            <div className="tab-bar">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  <FileBadge ext={t.ext} />
                  {t.label}
                </button>
              ))}
            </div>

            <div className="content-area">
              {renderContent()}

              {activeTab === "contact" && (
                <div className="contact-cta">
                  <a className="cta" href="mailto:asin.priv@gmail.com">
                    Send a message
                  </a>
                  <a
                    className="icon-link"
                    href="https://github.com/asineee"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    GH
                  </a>
                </div>
              )}
            </div>

            <div className="status-bar">
              <div className="status-left">
                <span className="status-item">main*</span>
                <span className="status-item">
                  <span className="status-dot" />
                  Ready
                </span>
              </div>
              <div className="status-right">
                <span className="status-item">UTF-8</span>
                <span className="status-item">LF</span>
                <span className="status-item">{activeMeta.lang}</span>
                <span className="status-item">
                  Ln {TABS.findIndex((t) => t.id === activeTab) + 4}, Col 1
                  <span className="cursor-blink" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
