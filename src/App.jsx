const profileLinks = {
  email: "mailto:vivek.shukla12@gmail.com",
  linkedin: "https://www.linkedin.com/in/vivek-s-12867028",
  github: "https://github.com/vivekshukla12"
};

const highlights = [
  "Practice Lead — HR Digital Solutions",
  "10+ years in Workday and HR technology",
  "Workday HCM, Integrations, Reporting, Prism & Extend",
  "Global HR digital transformation leadership"
];

const focusAreas = [
  "Workday HCM",
  "Integrations",
  "Reporting & Analytics",
  "Workday Extend",
  "HR Digital Strategy",
  "Practice Building",
  "Delivery Leadership",
  "Solution Architecture"
];

const experience = [
  {
    role: "Practice Lead — HR Digital Solutions",
    company: "Randstad Digital Germany",
    period: "Oct 2025 — Present",
    summary:
      "Building scalable Workday capability across consulting, solution design, delivery governance and HR technology advisory."
  },
  {
    role: "Head of HR Digital Transformation",
    company: "ZEISS Group",
    period: "May 2024 — May 2025",
    summary:
      "Led HRIT transformation, global HR systems initiatives, governance, analytics and Workday delivery across key HR domains."
  },
  {
    role: "Teamhead Global People Technology / Senior Manager",
    company: "PUMA Group",
    period: "2019 — 2024",
    summary:
      "Drove People Technology strategy, Workday integrations, reporting, Prism analytics, Extend initiatives and team leadership."
  },
  {
    role: "Workday Consultant",
    company: "PwC, KPMG, Appirio",
    period: "2013 — 2019",
    summary:
      "Built hands-on implementation experience across Workday integrations, reporting, technical design and customer delivery."
  }
];

const insights = [
  {
    title: "Scalable Workday practices",
    text: "Capability building, delivery discipline and certification strategy are the foundation of a stronger consulting engine."
  },
  {
    title: "HR technology as business value",
    text: "The best programs connect platform decisions to operating model change, measurable outcomes and adoption."
  },
  {
    title: "Connected enterprise architecture",
    text: "Integrations, analytics and extensibility turn HR platforms from systems of record into systems of action."
  }
];

function ExternalLink({ href, children, variant = "secondary" }) {
  return (
    <a className={`button ${variant}`} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"}>
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vivek Shukla home">
          <span className="brand-mark">VS</span>
          <span>
            <strong>Vivek Shukla</strong>
            <small>Workday & HR Technology</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Germany-based Workday & HR Technology Leader</p>
          <h1>Building practical, scalable HR technology outcomes.</h1>
          <p className="hero-subtitle">
            I help organizations transform HR through Workday solution design, modern people technology strategy,
            enterprise integrations, analytics and delivery leadership.
          </p>

          <div className="actions" aria-label="Profile links">
            <ExternalLink href={profileLinks.email} variant="primary">Contact me</ExternalLink>
            <ExternalLink href={profileLinks.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={profileLinks.github}>GitHub</ExternalLink>
          </div>
        </div>

        <aside className="profile-card" aria-label="Professional highlights">
          <p className="card-kicker">Core profile</p>
          <h2>Vivek Shukla</h2>
          <p>Practice Lead — HR Digital Solutions</p>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="stats section-shell" aria-label="Professional focus summary">
        <article>
          <strong>Workday</strong>
          <span>HCM, Reporting, Prism, Integrations, Extend</span>
        </article>
        <article>
          <strong>Leadership</strong>
          <span>Practice building, delivery governance, stakeholder management</span>
        </article>
        <article>
          <strong>Approach</strong>
          <span>Simple architecture, measurable outcomes, sustainable delivery</span>
        </article>
      </section>

      <section id="about" className="section-shell two-column">
        <div>
          <p className="eyebrow">About</p>
          <h2>Driving digital HR transformation with Workday.</h2>
          <p>
            I am an HR technology and Workday leader with a strong background in enterprise delivery,
            solution design and practice building. Across consulting and in-house leadership roles, I have led
            initiatives covering Workday HCM, integrations, reporting, analytics, governance and extensibility.
          </p>
          <p>
            My focus is connecting business needs with practical technology outcomes, simplifying complexity
            and helping organizations maximize value from their HR technology ecosystem.
          </p>
        </div>

        <div className="panel">
          <p className="eyebrow">Focus areas</p>
          <div className="tags">
            {focusAreas.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Career snapshot</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <time>{item.period}</time>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="insights" className="section-shell">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Insights</p>
            <h2>Ideas I care about</h2>
          </div>
          <span className="section-note">Thought leadership themes</span>
        </div>

        <div className="insight-grid">
          {insights.map((item) => (
            <article className="insight-card" key={item.title}>
              <span aria-hidden="true">↗</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell contact-panel">
        <p className="eyebrow">Connect</p>
        <h2>Open to collaboration and professional networking.</h2>
        <p>
          Whether the conversation is about Workday transformation, HR technology strategy, global delivery or
          practice building, I am interested in meaningful professional connections.
        </p>
        <div className="actions center">
          <ExternalLink href={profileLinks.email} variant="primary">Email</ExternalLink>
          <ExternalLink href={profileLinks.linkedin}>LinkedIn profile</ExternalLink>
          <ExternalLink href={profileLinks.github}>GitHub profile</ExternalLink>
        </div>
      </section>
    </main>
  );
}
