import {
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Cpu,
  ExternalLink,
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

const volunteerFormUrl = 'mailto:hello@kattralkadhir.org?subject=Volunteer%20with%20Kattral%20Kadhir';

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
    name: 'Barath Kumar',
    role: 'Founder',
    detail: 'NIT Trichy graduate building Kattral Kadhir to expand technology and career exposure for students in Tamil Nadu.',
    image: '/barath2.jpeg',
  },
  {
    name: 'Arvinth Saravanan',
    role: 'Director, Strategy and Partnerships',
    detail: 'NIT Trichy ECE classmate and Goldman Sachs oil analyst. CFA Level III completed, supporting strategy, partnerships, and long-term growth.',
    image: '/arvinth.jpeg',
  },
  {
    name: 'SP Sharan',
    role: 'AI Advisor',
    detail: 'NIT Trichy ECE classmate and direct PhD student at UT Austin, advising on AI curriculum, syllabus direction, and technical consultations.',
    image: '/spsharan.jpeg',
    profileUrl: 'https://scholar.google.com/citations?user=1NtGcNIAAAAJ&hl=en',
  },
];

const statusItems = [
  'Building the founding volunteer team',
  'Partnering with schools in Tamil Nadu',
  'Preparing pilot workshops',
  'Launching first student sessions in 2026',
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
            Bringing AI, technology, and opportunity to every classroom.
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

function WhyStarted() {
  return (
    <section className="bg-slate-50 px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-600">Why We Started</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Exposure should not depend on where a student begins.</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
          <p>
            Growing up in Tamil Nadu, we saw how access to opportunities often depended on exposure. Many talented students never get the chance to interact with professionals, explore emerging technologies, or learn about pathways beyond their immediate environment.
          </p>
          <p>
            Kattral Kadhir was started by NIT Trichy graduates to bridge that gap through mentorship, digital literacy, and practical AI education.
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

function CurrentStatus() {
  return (
    <section className="bg-slate-50 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Current Status" title="Where we are today">
          Kattral Kadhir is in its founding phase, with early volunteers and school conversations shaping our first pilot sessions.
        </SectionHeading>
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
          {statusItems.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="mt-0.5 shrink-0 text-primary-600" size={22} aria-hidden="true" />
              <p className="font-medium leading-7 text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="bg-primary-900 px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-100">Pilot Sessions</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Early impact, built one honest session at a time.</h2>
            <p className="mt-5 leading-7 text-primary-100">
              We are preparing our first pilot workshops for 2026. Impact metrics and real session photos will be shared only after our initial workshops are completed.
            </p>
          </div>
          <div className="rounded-lg bg-white/10 p-7 ring-1 ring-white/15">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-100">Transparent by design</p>
            <p className="mt-4 text-2xl font-bold">Launching our first pilot sessions in 2026.</p>
            <p className="mt-4 leading-7 text-primary-100">
              We will update this section with verified student reach, volunteer participation, school partners, and workshop outcomes once sessions are complete.
            </p>
          </div>
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
      <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-slate-600">
        Our volunteer community includes students, educators, and professionals from leading organizations across technology, engineering, and finance.
      </p>
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
        Kattral Kadhir is being built with support from NIT Trichy classmates who want students in Tamil Nadu to see wider possibilities earlier.
      </SectionHeading>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {team.map((member) => (
          <article key={member.name} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <img className="aspect-[4/3] w-full object-cover" src={member.image} alt={member.name} />
            <div className="p-6">
              <h3 className="text-lg font-bold text-ink">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary-700">{member.role}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{member.detail}</p>
              {member.profileUrl ? (
                <a
                  href={member.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition hover:text-primary-800"
                >
                  Research profile
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProfessionalNetwork() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-lg border border-primary-100 bg-primary-50 p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-600">Volunteer Network</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">A bridge between classrooms and working professionals.</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
          <p>
            Kattral Kadhir is shaped by volunteers who can bring real-world context into student learning, from technology and engineering to finance, design, and operations.
          </p>
          <p>
            Instead of treating career exposure as a one-time talk, we want students to meet people who can make unfamiliar paths feel practical and reachable.
          </p>
        </div>
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
        <WhyStarted />
        <VisionMission />
        <WhatWeDo />
        <CurrentStatus />
        <Impact />
        <VolunteerRoles />
        <ProfessionalNetwork />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
