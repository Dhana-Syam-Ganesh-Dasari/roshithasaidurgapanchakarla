import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Linkedin,
  Instagram,
  Github,
  Sun,
  Moon,
  ArrowUpRight,
  Code2,
  Smartphone,
  Sparkles,
  Briefcase,
  GraduationCap,
  Download,
  MapPin,
} from "lucide-react";
import roshiImg from "@/assets/roshitha.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { LiquidLink } from "@/components/liquid-button";
import { useTheme } from "@/hooks/use-theme";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
});


/* ---------- CONTACT / DATA ---------- */
const NAME = "Roshitha Sai Durga";
const FULL_NAME = "Panchakarla Roshitha Sai Durga";
const ROLE = "Full Stack Developer";
const PHONE = "+918978659675";
const PHONE_DISPLAY = "+91 89786 59675";
const EMAIL = "panchakarlaroshithasaidurga@gmail.com";
const WHATSAPP = "918978659675";
const LINKEDIN = "https://www.linkedin.com/in/dhana-syam-ganesh-dasari-002277251/";
const INSTAGRAM = "https://www.instagram.com/_pr.04._?igsh=cGsxMGt1bDV1eXNs";
const GITHUB = "https://github.com/Dhana-Syam-Ganesh-Dasari";

const SKILLS = [
  { name: "React.js", level: 92 },
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "HTML & CSS", level: 95 },
  { name: "Java", level: 85 },
  { name: "Python", level: 82 },
  { name: "SQL", level: 88 },
  { name: "Firebase", level: 80 },
  { name: "AI Tools", level: 88 },
];

const PROJECTS = [
  {
    title: "Weather Forecasting System",
    tag: "React · API",
    desc: "Real-time weather dashboard with 7-day forecasts, geolocation, and dynamic visualizations powered by public weather APIs.",
    tech: ["React", "REST API", "Chart.js"],
    link: "https://github.com/Dhana-Syam-Ganesh-Dasari",
    demo: "https://dhana-syam-ganesh-dasari.github.io/WEATHR-FORECASTING-SYSTEM-/",
  },
  {
    title: "Surya Dairy Products",
    tag: "Full Stack",
    desc: "E-commerce style storefront for a local dairy brand with product catalog, order flow, and admin dashboard.",
    tech: ["React", "Firebase", "Tailwind"],
    link: "https://github.com/Dhana-Syam-Ganesh-Dasari",
    demo: "https://surya-dairy-products.vercel.app/",
  },
  {
    title: "TO-DO List Application",
    tag: "React · CRUD",
    desc: "Elegant productivity app with local persistence, categories, priorities, and smooth micro-interactions.",
    tech: ["React", "TypeScript", "LocalStorage"],
    link: "https://github.com/Dhana-Syam-Ganesh-Dasari",
    demo: "https://personal-task-tracker-iota-five.vercel.app/",
  },
];


const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern, responsive, and blazing-fast websites built with React, TypeScript, and clean design systems.",
    points: ["Landing pages", "Business websites", "Full-stack apps"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Cross-platform mobile & web apps with polished UX, Firebase backends, and production-grade quality.",
    points: ["Progressive Web Apps", "Firebase integration", "UI/UX design"],
  },
];

const EXPERIENCE = [
  {
    role: "Analyst Trainee",
    company: "Cognizant",
    period: "Present",
    icon: Briefcase,
    desc: "Recently joined Cognizant full-time as an Analyst Trainee — contributing to enterprise-scale software delivery.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Yubhiyan Technologies",
    period: "Internship",
    icon: Code2,
    desc: "Built end-to-end features across frontend and backend, collaborated on production releases, and shipped real user-facing modules.",
  },
  {
    role: "MCA — Master of Computer Applications",
    company: "Recent Graduate",
    period: "2024",
    icon: GraduationCap,
    desc: "Specialized in full stack development and applied AI. Graduated with hands-on projects across the web stack.",
  },
];

/* ---------- REUSABLE ---------- */
function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id={id} className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-8">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const { theme, toggle } = useTheme();
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl"
    >
      <div className="flex items-center justify-between rounded-full border border-border bg-background/70 backdrop-blur-xl px-4 py-2.5 shadow-soft">
        <a href="#top" className="flex items-center gap-2 pl-2 font-display font-bold">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-primary text-primary-foreground text-xs">
            R
          </span>
          <span className="hidden sm:inline">Roshitha</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          aria-label="Toggle theme"
          onClick={toggle}
          className="btn-liquid-icon !h-9 !w-9"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </motion.nav>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const portraitRotate = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const meshY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 px-4 sm:px-8 overflow-hidden [perspective:1200px]"
    >
      <div className="absolute inset-0 bg-hero-glow" />
      <motion.div style={{ y: meshY }} className="absolute inset-0 bg-mesh opacity-40 animate-gradient-shift" />


      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative mx-auto max-w-6xl w-full grid lg:grid-cols-[1.1fr_1fr] gap-10 sm:gap-12 lg:gap-16 items-center"
      >
        {/* LEFT — copy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 backdrop-blur px-3 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to opportunities · Available for freelance
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] break-words">
            Hi, I'm <span className="text-gradient">{NAME}</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
            <span className="font-semibold text-foreground">{ROLE}</span> · MCA Graduate ·
            currently <span className="font-semibold text-foreground">Analyst Trainee at Cognizant</span>.
            I craft modern, animated, production-ready web & app experiences.
          </p>

          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>India</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>Full Stack · React · Java · Python</span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <LiquidLink href="#contact">
              <Sparkles className="h-4 w-4" />
              Hire Me
            </LiquidLink>
            <LiquidLink
              href={resumeAsset.url}
              download={resumeAsset.original_filename ?? "Roshitha_Resume.pdf"}
              aria-label="Download CV"
            >
              <Download className="h-4 w-4" />
              Download CV
            </LiquidLink>
            <LiquidLink href="#projects" variant="ghost">
              View Work
              <ArrowUpRight className="h-4 w-4" />
            </LiquidLink>
          </div>


          {/* Contact icons */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Recruiters — reach me directly
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} aria-label="Call" className="btn-liquid-icon">
                <Phone className="h-4 w-4" />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" className="btn-liquid-icon">
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="btn-liquid-icon"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="btn-liquid-icon"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="btn-liquid-icon"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="btn-liquid-icon"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ rotateY: portraitRotate, transformPerspective: 1200 }}
          className="relative mx-auto w-full max-w-[18rem] sm:max-w-sm md:max-w-md lg:max-w-none [transform-style:preserve-3d]"
        >
          <div className="relative aspect-square">
            {/* orbiting glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-3xl opacity-40 animate-float" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dashed border-primary/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 rounded-full border border-primary/20"
            />

            {/* photo */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-elegant bg-gradient-primary">
              <img
                src={roshiAsset.url}
                alt={FULL_NAME}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            {/* floating chips */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 sm:-left-4 top-12 sm:top-16 card-glass px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold"
            >
              💻 React.js
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-1 sm:-right-2 top-1/3 card-glass px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold"
            >
              ⚡ TypeScript
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-1 sm:-left-2 bottom-12 sm:bottom-16 card-glass px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold"
            >
              🚀 Cognizant
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <Section id="about" eyebrow="About Me" title={<>Passionate about building things that <span className="text-gradient">work beautifully</span>.</>}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card-glass p-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm <span className="text-foreground font-semibold">{FULL_NAME}</span>, a recent
            <span className="text-foreground font-semibold"> MCA graduate</span> and Full Stack
            Developer with strong hands-on skills across the modern web stack — React, JavaScript,
            TypeScript, Java, Python, SQL and Firebase. I love leveraging AI tools to move faster
            and ship with higher integrity.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Recently, I joined <span className="text-foreground font-semibold">Cognizant as an
            Analyst Trainee</span>. Alongside my day job, I take on freelance web & app
            development projects — turning ideas into elegant, animated, production-ready products.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          {[
            { k: "3+", v: "Projects Shipped" },
            { k: "1", v: "Internship" },
            { k: "8+", v: "Technologies" },
            { k: "∞", v: "Curiosity" },
          ].map((s) => (
            <div key={s.v} className="card-glass p-5 text-center">
              <div className="text-3xl font-bold text-gradient">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- SKILLS ---------- */
function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title={<>Skills & <span className="text-gradient">Stack</span></>}>
      <div className="grid sm:grid-cols-2 gap-4">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card-glass p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold">{s.name}</span>
              <span className="text-sm text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-primary rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title={<>Featured <span className="text-gradient">Projects</span></>}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 60, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
            }}
            style={{ transformPerspective: 1000 }}
            className="card-glass p-6 group flex flex-col [transform-style:preserve-3d]"
          >
            <div className="flex items-start justify-between">
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                {p.tag}
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow transition-colors"
              >
                <Github className="h-4 w-4" />
                View Details
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Live Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.article>
        ))}

      </div>
    </Section>
  );
}

/* ---------- EXPERIENCE ---------- */
function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title={<>Experience & <span className="text-gradient">Education</span></>}>
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
        <div className="space-y-6">
          {EXPERIENCE.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-14 sm:pl-20"
              >
                <div className="absolute left-0 sm:left-2 top-1 grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="card-glass p-6">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-bold">{e.role}</h3>
                    <span className="text-sm text-primary font-semibold">{e.company}</span>
                    <span className="ml-auto text-xs uppercase tracking-widest text-muted-foreground">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>Need something built? <span className="text-gradient">Let's talk.</span></>}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-glass p-8 group"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:scale-110 group-hover:rotate-6">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <LiquidLink href="#contact" variant="ghost" className="!py-2 !px-4 !text-sm">
                  Request service <ArrowUpRight className="h-4 w-4" />
                </LiquidLink>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: `tel:${PHONE}` },
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, href: `https://wa.me/${WHATSAPP}` },
    { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: LINKEDIN },
    { icon: Instagram, label: "Instagram", value: "Follow on Instagram", href: INSTAGRAM },
    { icon: Github, label: "GitHub", value: "See my code", href: GITHUB },
  ];
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's build something <span className="text-gradient">amazing</span> together.</>}
    >
      <div className="card-glass p-8 sm:p-12 text-center">
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Whether you're a recruiter, a founder, or someone with a project idea — I'd love to hear
          from you. Pick your favourite channel below.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card-glass p-5 flex items-center gap-4 text-left group"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="truncate font-semibold">{c.value}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </motion.a>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <LiquidLink href={`mailto:${EMAIL}`}>
            <Mail className="h-4 w-4" />
            Email Me
          </LiquidLink>
          <LiquidLink href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" variant="ghost">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </LiquidLink>
        </div>
      </div>
    </Section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {FULL_NAME}. Crafted with React & TypeScript.</p>
        <div className="flex gap-4">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-foreground transition"><Github className="h-4 w-4" /></a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-foreground transition"><Linkedin className="h-4 w-4" /></a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-foreground transition"><Instagram className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- PROGRESS BAR ---------- */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-primary origin-left z-[60]"
    />
  );
}

/* ---------- PRELOADER ---------- */
function Preloader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    // cinematic preloader: base ~2.5s + 1s per user request = 3.5s
    const t = setTimeout(onDone, 3500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(16px)" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-mesh opacity-60 animate-gradient-shift" />

      <div className="relative flex flex-col items-center gap-8">
        {/* Rotating rings */}
        <div className="relative h-40 w-40">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-primary/60"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-primary/40"
          />
          <motion.div
            animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-8 rounded-full bg-gradient-primary shadow-glow grid place-items-center text-3xl font-bold text-primary-foreground font-display"
          >
            R
          </motion.div>
        </div>

        {/* Name reveal */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl font-display font-semibold tracking-tight text-gradient"
          >
            {FULL_NAME}
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xs uppercase tracking-[0.4em] text-muted-foreground"
          >
            Full Stack Developer
          </motion.p>
        </div>

        {/* Loading bar */}
        <div className="h-0.5 w-56 overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 3.5, ease: [0.65, 0, 0.35, 1] }}
            className="h-full w-full bg-gradient-primary"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- CARD GLOW TRACKER ---------- */
function useCardGlowTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const card = target.closest<HTMLElement>(".card-glass");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
}

/* ---------- PAGE ---------- */
function PortfolioPage() {
  const [loading, setLoading] = useState(true);
  useCardGlowTracker();

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
