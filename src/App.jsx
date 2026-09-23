const linkedIn = "https://www.linkedin.com/in/vivek-s-12867028";

const projects = [
  {
    id: "wql-tools",
    area: "Vibe Coding Projects",
    title: "WQL Tools for Notepad++",
    summary: "A local editor tool that makes Workday Query Language easier to read, format and work with. Built using AI-assisted development.",
    tags: ["WQL", "Local tooling", "AI-assisted development"],
    details: [
      ["The problem", "In a Workday-to-middleware integration workflow, I repeatedly needed to create, update, format and fix WQL queries. Asking an AI assistant to format each query added time and token usage to a repetitive task."],
      ["What I built", "A native Notepad++ plugin with formatting, minifying, syntax highlighting, keyboard shortcuts and conservative local syntax checks. It runs offline, without an AI connection."],
      ["Practical value", "I use formatting and minifying in my own workflow to edit queries faster and make long queries easier to read. The local checks are partial: they do not replace validation against Workday or validate tenant-specific behavior."],
      ["What this demonstrates", "Workday and WQL knowledge, practical AI-assisted development, and the ability to turn recurring workflow friction into a focused developer tool."]
    ]
  },
  {
    id: "workday-ai-skills",
    area: "Reusable knowledge",
    title: "Workday AI Skills",
    summary: "Focused instructions and references that give AI assistants reusable guidance for Workday workflows, reporting, analytics and development.",
    tags: ["Workday", "AI skills", "Knowledge design"],
    details: [
      ["The problem", "Specialized Workday tasks need domain context. Repeating that context in one-off prompts makes useful guidance harder to reuse consistently."],
      ["The approach", "A collection of focused AI skills: WQL Formatter for query formatting and plausible syntax issues; Workforce Crisis Planner for workforce and financial scenarios; and Workday Prism Assistant for analytics architecture, ingestion, transformations, security and troubleshooting."],
      ["Practical value", "Reusable instructions and supporting references help an assistant approach specialized tasks with more consistent context, from query editing to analytics planning."],
      ["What this demonstrates", "Workday domain depth, structured knowledge design for AI agents, and an understanding of how reporting, analytics and HR technology workflows connect."]
    ]
  },
  {
    id: "ai-workday",
    area: "Enterprise AI architecture",
    title: "Connecting AI Assistants to Workday",
    summary: "A read-only bridge designed for AI-assisted reporting, metadata discovery and WQL/API planning, with user-scoped access at its core.",
    tags: ["Read-only access", "APIs", "Solution architecture"],
    details: [
      ["The problem", "Connecting an AI assistant to enterprise HR systems calls for clear access boundaries and careful planning of data requests."],
      ["The approach", "A solution design for read-only Workday access through each user's authorization. It emphasizes sandbox-first planning and validation for reporting support, metadata discovery, WQL/API planning and controlled data extraction."],
      ["Practical value", "The design aims to help assistants work within user access boundaries and reduce unnecessary production calls by planning and validating requests in a sandbox first."],
      ["What this demonstrates", "HR technology architecture, Workday integration and API thinking, and attention to security and access control when connecting AI to enterprise systems."]
    ]
  }
];

const capabilities = [
  ["Global delivery & localization", "Country rollouts across Workday HCM, Recruiting, Absence and Time Management, connecting global direction with local requirements."],
  ["Integrations that connect HR", "Payroll, benefits and third-party IT integrations, with hands-on understanding of the solutions behind HR operations."],
  ["Reporting & decision support", "Executive reports and dashboards, annual social reporting, and compensation benchmarking and reporting for European contexts."],
  ["HRIT operating models", "Shaping support-team frameworks and operating models alongside HR technology strategy, delivery and solution design."]
];

const experience = [
  ["Practice Lead — HR Digital Solutions", "Randstad Digital Germany", "Oct 2025 — Present"],
  ["Head of HR Digital Transformation", "ZEISS Group", "May 2024 — May 2025"],
  ["Teamhead Global People Technology / Senior Manager", "PUMA Group", "2019 — 2024"],
  ["Workday Consultant", "PwC, KPMG, Appirio", "2013 — 2019"]
];

function LinkedInLink() {
  return (
    <a className="button primary" href={linkedIn} target="_blank" rel="noopener noreferrer">
      Connect on LinkedIn <span aria-hidden="true">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card" id={project.id}>
      <div className="project-topline">
        <p className="eyebrow">{project.area}</p>
        <span className="project-number" aria-hidden="true">0{index + 1}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <ul className="tags" aria-label="Project themes">
        {project.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
      <details className="project-details">
        <summary>Explore the project<span className="sr-only">: {project.title}</span></summary>
        <dl>
          {project.details.map(([heading, text]) => (
            <div key={heading}>
              <dt>{heading}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </details>
    </article>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Vivek Shukla home">
          <span className="brand-mark" aria-hidden="true">VS</span>
          <span><strong>Vivek Shukla</strong><small>Workday & HR Technology</small></span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#insights">Ideas</a>
          <a href="#contact">Connect <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero section-shell" aria-labelledby="hero-title">
          <p className="eyebrow">Strategy. Architecture. Hands-on building.</p>
          <h1 id="hero-title">I lead HR technology strategy <span>and build the solutions behind it.</span></h1>
          <div className="hero-bottom">
            <div>
              <p className="hero-subtitle">I connect HR technology leadership with practical Workday solutions — from integrations and analytics to AI-assisted tools and global delivery.</p>
              <div className="actions">
                <LinkedInLink />
                <a className="button secondary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <p className="hero-note">A practical perspective.<br />From the strategy<br />to the solution.</p>
          </div>
        </section>

        <section id="projects" className="section-shell section-block" aria-labelledby="projects-title">
          <div className="section-heading split">
            <div><p className="eyebrow">01 / Selected work</p><h2 id="projects-title">Ideas put into practice.</h2></div>
            <p className="section-intro">Tools, reusable knowledge and solution design, grounded in real HR technology work.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </div>
        </section>

        <section id="experience" className="section-shell section-block" aria-labelledby="experience-title">
          <div className="section-heading split">
            <div><p className="eyebrow">02 / Experience behind the work</p><h2 id="experience-title">The bigger picture.<br />The technical detail.</h2></div>
            <p className="section-intro">My experience spans HR technology leadership and hands-on solution building. Each informs the other.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(([title, text]) => (
              <article className="capability" key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <details className="career-details">
            <summary>Career background <span className="summary-note">Roles & organizations</span></summary>
            <div className="timeline">
              {experience.map(([role, company, period]) => (
                <article className="timeline-item" key={company}>
                  <div><h3>{role}</h3><p>{company}</p></div><p className="period">{period}</p>
                </article>
              ))}
            </div>
          </details>
        </section>

        <section id="insights" className="section-shell section-block" aria-labelledby="insights-title">
          <div className="section-heading"><p className="eyebrow">03 / Ideas & field notes</p><h2 id="insights-title">Small friction. Useful lessons.</h2></div>
          <article className="insight-card">
            <div>
              <p className="eyebrow">Behind WQL Tools for Notepad++</p>
              <h3>Use AI to build the tool.<br />Let the tool do the repetition.</h3>
              <a className="text-link" href="#wql-tools">Explore WQL Tools <span aria-hidden="true">↑</span></a>
            </div>
            <div className="insight-copy">
              <p>In a Workday-to-middleware integration workflow, I was repeatedly creating, updating, formatting and fixing Workday Query Language (WQL) queries. Readable queries made that work easier.</p>
              <p>Using an AI assistant for every simple formatting request was slower and consumed tokens for a repetitive, deterministic task. So I used AI-assisted development to build a local Notepad++ tool for formatting, minifying, syntax highlighting and conservative local syntax checks.</p>
              <p>I use the formatting and minifying features to edit faster and make long queries easier to read. The local checks are partial and do not replace Workday validation; I have not comprehensively tested them in daily use.</p>
              <p className="insight-takeaway">The lesson: use AI where it helps you build, and a focused local tool where the task simply repeats.</p>
            </div>
          </article>
        </section>

        <section id="contact" className="section-shell contact-panel" aria-labelledby="contact-title">
          <p className="eyebrow">04 / Let's connect</p>
          <h2 id="contact-title">Good conversations<br />lead to useful work.</h2>
          <p>Have an HR technology challenge, a Workday idea, or a shared interest in practical AI? Let's compare notes.</p>
          <div className="actions"><LinkedInLink /></div>
        </section>
      </main>
      <footer className="site-footer section-shell"><p>Vivek Shukla <span>HR technology strategy & hands-on solutions</span></p><a href="#top">Back to top ↑</a></footer>
    </>
  );
}
