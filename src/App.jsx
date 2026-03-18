import { motion } from "framer-motion";
import { ChevronDown, Linkedin, Mail, Sparkles, Briefcase, Layers3, ArrowUpRight } from "lucide-react";

export default function VivekProfessionalWebsite() {
  const highlights = [
    "Practice Lead - HR Digital Solutions",
    "10+ years in Workday and HR technology",
    "Workday HCM, Integrations, Reporting, Prism & Extend",
    "Global HR digital transformation leadership"
  ];

  const experience = [
    {
      role: "Practice Lead - HR Digital Solutions",
      company: "Randstad Digital Germany",
      period: "Oct 2025 - Present",
      summary:
        "Leading HR digital solutions and building scalable Workday capabilities across consulting and delivery functions."
    },
    {
      role: "Head of HR Digital Transformation",
      company: "ZEISS Group",
      period: "May 2024 - May 2025",
      summary:
        "Led HRIT transformation, global HR systems initiatives, governance, analytics, and Workday delivery across key HR domains."
    },
    {
      role: "Teamhead Global People Technology / Senior Manager / Integration & Reporting Lead",
      company: "PUMA Group",
      period: "2019 - 2024",
      summary:
        "Drove People Technology strategy, Workday integrations, reporting, Prism analytics, Extend projects, vendor management, and team leadership."
    },
    {
      role: "Workday Consultant",
      company: "PwC, KPMG, Appirio",
      period: "2013 - 2019",
      summary:
        "Built strong hands-on expertise in Workday integrations, reporting, technical design, implementation, and customer delivery."
    }
  ];

  const skills = [
    "Workday HCM",
    "Workday Integrations",
    "Workday Reporting",
    "Workday Extend",
    "Workday Prism Analytics",
    "HR Digital Transformation",
    "People Technology Strategy",
    "Stakeholder Management",
    "Global Delivery Leadership",
    "Process Optimization"
  ];

  const insights = [
    {
      title: "Building scalable Workday practices",
      text: "How capability building, delivery rigor, and certification strategy create a stronger consulting engine."
    },
    {
      title: "Turning HR technology into business value",
      text: "A practical view on connecting Workday programs with transformation outcomes and operating model change."
    },
    {
      title: "Integration, analytics, and extensibility",
      text: "Why the real power of enterprise HR platforms comes from connected architecture and smart product thinking."
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen scroll-smooth bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.16),transparent_26%),linear-gradient(135deg,#020617,#0f172a,#020617)] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute -top-28 -left-24 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -35, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-[22%] right-[-80px] h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute bottom-[-100px] left-[28%] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
      </div>

      <div className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/30 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-lg shadow-blue-500/10 backdrop-blur-xl">
              <Sparkles className="h-5 w-5 text-blue-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">Vivek Shukla</p>
              <p className="text-xs text-white/55">Workday & HR Tech Leader</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {[
              ["About", "#about"],
              ["Experience", "#experience"],
              ["Insights", "#insights"],
              ["Contact", "#contact"]
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
              <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-xl">
                Germany-based Workday & HR Technology Leader
              </p>

              <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
                Vivek Shukla
              </h1>

              <p className="mt-4 text-xl text-blue-300 md:text-2xl">
                Practice Lead - HR Digital Solutions
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
                I help organizations transform HR through scalable Workday solutions, modern people technology strategy,
                and strong delivery leadership. My work spans global implementations, integrations, reporting,
                analytics, and product innovation across enterprise HR ecosystems.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:vivek.shukla12@gmail.com"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white/90 px-6 py-3 text-sm font-medium text-slate-900 shadow-xl shadow-white/10 transition hover:scale-105"
                >
                  <Mail className="h-4 w-4" /> Contact Me
                </a>
                <a
                  href="https://www.linkedin.com/in/vivek-s-12867028"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur-xl transition hover:bg-white/15"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>

              <a href="#about" className="mt-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
                Scroll to explore <ChevronDown className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Core Highlights</h2>
                  <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/65">
                    Premium Profile
                  </div>
                </div>

                <div className="space-y-3">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 transition hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/50">Focus</p>
                    <p className="mt-1 text-sm font-medium text-white/90">Workday + HRIT</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/50">Base</p>
                    <p className="mt-1 text-sm font-medium text-white/90">Germany</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["10+ Years Experience", Briefcase],
            ["Workday • HRIT • Strategy", Layers3],
            ["Leadership + Delivery", Sparkles]
          ].map(([item, Icon], index) => (
            <motion.div
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/12"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                <Icon className="h-5 w-5 text-blue-300" />
              </div>
              <p className="mt-5 text-sm text-white/55">Professional Focus</p>
              <p className="mt-2 text-2xl font-semibold">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.22em] text-blue-300">About</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Driving digital HR transformation with Workday
            </h2>
            <p className="mt-6 leading-relaxed text-white/80">
              I am an HR technology and Workday leader with a strong background in enterprise delivery,
              solution design, and practice building. Across consulting and in-house leadership roles,
              I have led initiatives covering Workday HCM, integrations, reporting, analytics, governance,
              and extensibility.
            </p>
            <p className="mt-4 leading-relaxed text-white/80">
              My focus is connecting business needs with practical technology outcomes, building capable
              teams, simplifying complexity, and helping organizations maximize value from their HR
              technology ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl"
          >
            <p className="text-sm uppercase tracking-[0.22em] text-blue-300">Expertise</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 transition hover:bg-white/15"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.22em] text-blue-300">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Career Snapshot</h2>
        </div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.div
              key={item.role}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/12"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="mt-1 text-white/70">{item.company}</p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/80">
                  {item.period}
                </span>
              </div>

              <p className="mt-4 leading-relaxed text-white/80">{item.summary}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="insights" className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-blue-300">Insights</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Ideas I care about</h2>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/55 md:block">
            Thought leadership section
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/12"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                <ArrowUpRight className="h-5 w-5 text-blue-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-white/75">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 pt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="rounded-[2.2rem] border border-white/10 bg-white/10 p-10 text-center backdrop-blur-2xl"
        >
          <p className="text-sm uppercase tracking-[0.22em] text-blue-300">Connect</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Open to collaboration and professional networking
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/80">
            Whether the conversation is about Workday transformation, HR technology strategy,
            global delivery, or practice building, I am always interested in meaningful
            professional connections.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:vivek.shukla12@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-6 py-3 font-medium text-slate-900 shadow-xl shadow-white/10 transition hover:scale-105"
            >
              <Mail className="h-4 w-4" /> vivek.shukla12@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-s-12867028"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl transition hover:bg-white/15"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
