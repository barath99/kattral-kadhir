import {
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Cpu,
  GraduationCap,
  HandHeart,
  Languages,
  Mail,
  MapPin,
  Megaphone,
  Palette,
  PenTool,
  Sparkles,
  Users,
} from 'lucide-react';

const volunteerFormUrl = 'https://forms.gle/placeholder-kattral-kadhir-volunteer';

const navItems = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Impact', '#impact'],
  ['Volunteer', '#volunteer'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
];

const pillars = [
  {
    title: 'AI Literacy',
    description: 'Age-appropriate sessions that help students understand AI tools, safety, creativity, and responsible use.',
    icon: Cpu,
  },
  {
    title: 'Digital Literacy',
    description: 'Practical computer and internet confidence, from search habits to documents, presentations, and online safety.',
    icon: BookOpen,
  },
  {
    title: 'Career Exposure',
    description: 'Real conversations with professionals that make future pathways feel visible, local, and possible.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Mentorship',
    description: 'Supportive guidance for curious students through follow-up activities, role models, and learning circles.',
    icon: GraduationCap,
  },
];

const roles = [
  ['Trainers', 'Lead student-facing sessions and hands-on activities.', Users],
  ['Curriculum', 'Shape lesson plans, worksheets, and facilitator notes.', PenTool],
  ['Tamil Translation', 'Make content clear, local, and student-friendly in Tamil.', Languages],
  ['Outreach', 'Build relationships with schools, colleges, and partners.', Megaphone],
  ['Design/Content', 'Create simple visuals, social updates, and learning materials.', Palette],
  ['Operations', 'Coordinate logistics, volunteer onboarding, and session support.', CheckCircle2],
];

const team = [
  {
    name: 'Founding Member',
    role: 'Program Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Founding Member',
    role: 'Curriculum Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Founding Member',
    role: 'Partnerships Lead',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=80',
  },
];

const faqs = [
  {
    question: 'Who can volunteer with Kattral Kadhir?',
    answer: 'Students, professionals, educators, designers, translators, and anyone who can contribute time with care and consistency are welcome.',
  },
  {
    question: 'Do volunteers need teaching experience?',
    answer: 'No. Teaching experience helps, but we also need curriculum, translation, outreach, content, and operations support.',
  },
  {
    question: 'Which schools do you work with?',
    answer: 'We partner with schools and community learning spaces that want practical digital and career exposure for students.',
  },
  {
    question: 'Can organizations partner or sponsor sessions?',
    answer: 'Yes. We welcome school partners, donors, and professional networks that can help students access meaningful learning opportunities.',
  },
];

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{children}</p> : null}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#1CABE2]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#1CABE2] shadow-sm">
            <Sparkles size={20} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-base font-bold leading-tight text-white">Kattral Kadhir</span>
            <span className="block text-xs font-medium text-white/80">Ray of Learning</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-white/90 transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <a
          href={volunteerFormUrl}
          className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-[#0d528a] shadow-sm transition hover:bg-primary-50"
        >
          Volunteer
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary-50">
      <div className="absolute inset-x-0 top-0 h-28 bg-white" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
            Ray of Learning for every curious student
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Helping students meet the future with confidence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Kattral Kadhir is a volunteer-led education initiative bringing AI literacy, digital skills, career exposure, and mentorship to school communities.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={volunteerFormUrl}
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-primary-700"
            >
              Volunteer With Us
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md border border-primary-200 bg-white px-6 py-3 text-base font-semibold text-primary-700 transition hover:border-primary-500"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
            alt="Students learning together in a bright classroom"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
          />
          <div className="absolute -bottom-6 left-5 right-5 rounded-lg bg-white p-5 shadow-soft sm:left-auto sm:w-72">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-600">First steps</p>
            <p className="mt-2 text-2xl font-bold text-ink">Learning that feels reachable</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Simple tools, caring mentors, and practical exposure for school students.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-600">About Kattral Kadhir</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">A small ray can open a wider path.</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
          <p>
            Kattral Kadhir means Ray of Learning. We work with volunteers and school partners to create welcoming learning experiences for students who deserve early access to the skills shaping tomorrow.
          </p>
          <p>
            Our sessions are practical, bilingual where needed, and built around dignity. We keep the tone simple, the examples familiar, and the ambition high.
          </p>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="bg-slate-50 px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-primary-100 bg-white p-8 shadow-sm">
          <HandHeart className="text-primary-600" size={34} aria-hidden="true" />
          <h3 className="mt-5 text-2xl font-bold text-ink">Vision</h3>
          <p className="mt-4 leading-7 text-slate-600">
            A future where every student can understand technology, imagine meaningful careers, and learn with confidence.
          </p>
        </div>
        <div className="rounded-lg border border-primary-100 bg-white p-8 shadow-sm">
          <Sparkles className="text-primary-600" size={34} aria-hidden="true" />
          <h3 className="mt-5 text-2xl font-bold text-ink">Mission</h3>
          <p className="mt-4 leading-7 text-slate-600">
            To connect schools with volunteers who deliver accessible AI literacy, digital skills, mentorship, and career exposure.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section id="work" className="bg-white px-5 py-20 lg:px-8">
      <SectionHeading eyebrow="What We Do" title="Learning support built for real classrooms">
        We focus on practical sessions that students can understand, remember, and use.
      </SectionHeading>
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ title, description, icon: Icon }) => (
          <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
            <Icon className="text-primary-600" size={30} aria-hidden="true" />
            <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="bg-primary-900 px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-100">First Session</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Early impact, built one session at a time.</h2>
            <p className="mt-5 leading-7 text-primary-100">
              Our first sessions are designed to listen, learn, and refine. These placeholders can be updated with real photos and numbers as the initiative grows.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              ['50+', 'Students reached'],
              ['12', 'Volunteers engaged'],
              ['4', 'Learning themes'],
            ].map(([number, label]) => (
              <div key={label} className="rounded-lg bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-3xl font-bold">{number}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-primary-100">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
          ].map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Kattral Kadhir session placeholder ${index + 1}`}
              className="aspect-[4/3] w-full rounded-lg object-cover ring-1 ring-white/15"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VolunteerRoles() {
  return (
    <section id="volunteer" className="bg-slate-50 px-5 py-20 lg:px-8">
      <SectionHeading eyebrow="Volunteer Roles" title="There is more than one way to help">
        Whether you enjoy teaching, planning, translating, designing, or coordinating, there is meaningful work to share.
      </SectionHeading>
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map(([title, description, Icon]) => (
          <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <Icon className="text-primary-600" size={28} aria-hidden="true" />
            <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href={volunteerFormUrl}
          className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-primary-700"
        >
          Volunteer With Us
        </a>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <SectionHeading eyebrow="Founding Team" title="Led by people who believe access matters">
        Replace these placeholders with the founding members, roles, and portraits when ready.
      </SectionHeading>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
        {team.map((member) => (
          <article key={member.role} className="text-center">
            <img src={member.image} alt={member.name} className="mx-auto aspect-square w-44 rounded-full object-cover shadow-soft" />
            <h3 className="mt-5 text-lg font-bold text-ink">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-primary-700">{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 px-5 py-20 lg:px-8">
      <SectionHeading eyebrow="FAQ" title="Common questions" />
      <div className="mx-auto mt-10 max-w-3xl space-y-4">
        {faqs.map((item) => (
          <details key={item.question} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-ink">
              {item.question}
              <ChevronDown className="shrink-0 text-primary-600 transition group-open:rotate-180" size={20} aria-hidden="true" />
            </summary>
            <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-lg border border-primary-100 bg-primary-50 p-8 shadow-soft md:grid-cols-[1fr_0.8fr] md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-600">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Partner, volunteer, or help us grow.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            We would be glad to hear from schools, volunteers, donors, and professionals who want to make learning more reachable.
          </p>
        </div>
        <div className="space-y-4">
          <a href="mailto:hello@kattralkadhir.org" className="flex items-center gap-3 rounded-lg bg-white p-4 font-medium text-ink shadow-sm">
            <Mail className="text-primary-600" size={22} aria-hidden="true" />
            hello@kattralkadhir.org
          </a>
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 font-medium text-ink shadow-sm">
            <MapPin className="text-primary-600" size={22} aria-hidden="true" />
            Tamil Nadu, India
          </div>
          <a
            href={volunteerFormUrl}
            className="flex items-center justify-center rounded-md bg-primary-600 px-5 py-3 font-semibold text-white transition hover:bg-primary-700"
          >
            Open Volunteer Form
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-5 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold">Kattral Kadhir</p>
          <p className="mt-1 text-sm text-slate-300">Ray of Learning</p>
        </div>
        <p className="text-sm text-slate-300">(c) 2026 Kattral Kadhir. Built for learning, service, and possibility.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <WhatWeDo />
        <Impact />
        <VolunteerRoles />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
