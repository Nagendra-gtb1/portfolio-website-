import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/nagendra.png.asset.json";
import raLanding from "@/assets/landing_page.png.asset.json";
import raMock from "@/assets/mock_interview.png.asset.json";
import raAbout from "@/assets/OB_about_you.png.asset.json";
import raExp from "@/assets/OB_experiences.png.asset.json";
import raSkills from "@/assets/OB_skills.png.asset.json";
import raReset from "@/assets/reset_pass_reload.png.asset.json";
import raSignup from "@/assets/signup_screen.png.asset.json";
// Add additional Resume Analyzer screenshot assets here when available.
// Example: import raReview from "@/assets/review_screen.png.asset.json";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nagendra — UI/UX & Visual Designer Portfolio" },
      { name: "description", content: "Aspiring UI/UX designer building intuitive products and impactful visual identities. Available for internships, freelance, and junior product design roles." },
      { property: "og:title", content: "Nagendra — UI/UX & Visual Designer" },
      { property: "og:description", content: "Aspiring UI/UX designer building intuitive products and impactful visual identities." },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/50 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Nagendra<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:workhard112233@gmail.com"
          className="hidden sm:inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[oklch(0.72_0.17_145)] opacity-60 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.72_0.17_145)]" />
      </span>
      {children}
    </span>
  );
}

function SectionLabel({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
      {children}
    </div>
  );
}

function ScreenImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(true);

  return (
    <div className="relative h-full w-full bg-border/10 overflow-hidden">
      {loaded ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setLoaded(false)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-950/5 text-sm text-muted-foreground p-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/10 text-2xl">📷</div>
          <div className="text-center">
            <div className="font-semibold">Preview unavailable</div>
            <div className="text-xs">Image asset is not loaded locally.</div>
          </div>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.94_0.024_248)_0%,transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <Badge>Available for Internships, Freelance & Junior UI/UX Roles</Badge>
          <p className="mt-6 text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">Hello, I'm</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-foreground">
            Nagendra
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-foreground/80">
            UI/UX Designer <span className="text-muted-foreground">&</span> Visual Designer
          </p>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Designing intuitive digital experiences, meaningful interfaces, and
            impactful visual identities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:workhard112233@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-soft hover:shadow-lift hover:-translate-y-0.5 transition">
              Hire Me <span aria-hidden>→</span>
            </a>
            <a href="mailto:karrinagendra112233@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition">
              Let's Create
            </a>
            <a href="#resume" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground hover:text-primary transition">
              Download Resume ↓
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 max-w-md gap-6">
            {[
              { k: "3+", v: "Case Studies" },
              { k: "10+", v: "Brand Projects" },
              { k: "∞", v: "Curiosity" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl text-foreground">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl bg-card border border-border shadow-lift overflow-hidden aspect-[4/5] max-w-md mx-auto">
            <ScreenImage src={portrait.url} alt="Portrait of Nagendra" />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/55 to-transparent">
              <div className="rounded-xl bg-white/40 backdrop-blur-xl px-4 py-3 flex items-center justify-between border border-white/30 shadow-sm">
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-widest text-foreground font-semibold">Currently</div>
                  <div className="text-sm font-medium text-foreground">as Video Editor & Social Media Manager</div>
                  <div className="text-xs text-foreground/80 mt-0.5">for a coding channel</div>
                </div>
                <div className="flex items-center gap-2 ml-3">
                  <img src="https://cdn.corenexis.com/files/c/2165549720.png" alt="YouTube" className="w-12 h-10 rounded-xl object-contain" />
                </div>
              </div>
            </div>
          </div>
          {/* floating cards */}
          <div className="hidden sm:block absolute -left-6 top-10 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-soft p-3 animate-float">
            <div className="h-16 w-28 rounded-lg bg-gradient-to-br from-[oklch(0.94_0.024_248)] to-[oklch(0.88_0.04_250)] grid place-items-center text-[10px] font-mono text-primary">ARTICO</div>
          </div>
          <div className="hidden sm:block absolute -right-4 bottom-32 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-soft p-3 animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="h-14 w-24 rounded-lg bg-foreground grid place-items-center text-[10px] font-mono text-white/90">RESUME.AI</div>
          </div>
          <div className="hidden md:block absolute -right-2 -top-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-soft p-3 animate-float" style={{ animationDelay: "0.8s" }}>
            <div className="h-12 w-20 rounded-lg bg-[oklch(0.85_0.12_60)] grid place-items-center text-[10px] font-mono text-foreground">HALWA</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects({ onSelect }: { onSelect: (id: string) => void }) {
  const projects = [
    {
      id: "artico",
      tag: "Flagship · Product Design",
      title: "Artico",
      desc: "A credibility-driven artist ecosystem where artists earn recognition before unlocking monetization.",
      bg: "from-[oklch(0.94_0.024_248)] to-[oklch(0.88_0.04_250)]",
      stripe: "bg-primary",
      img: "https://cdn.corenexis.com/files/c/6929478720.png",
    },
    {
      id: "placement-prime",
      tag: "EdTech · SaaS",
      title: "Placement Prime",
      desc: "Helps students measure resume quality and interview readiness with actionable AI feedback.",
      bg: "from-[oklch(0.96_0.01_250)] to-[oklch(0.92_0.02_255)]",
      stripe: "bg-foreground",
      img: "https://cdn.corenexis.com/files/c/9798986720.png",
    },
    {
      id: "halwa-nation",
      tag: "Food Brand · E-commerce",
      title: "Halwa Nation",
      desc: "Traditional sweets brand website combining heritage storytelling with mobile-first e-commerce design.",
      bg: "from-[oklch(0.94_0.04_60)] to-[oklch(0.88_0.08_45)]",
      stripe: "bg-[oklch(0.65_0.24_50)]",
      img: "https://cdn.corenexis.com/files/c/8743195720.png",
    },
  ];
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <SectionLabel>3 Brand Projects</SectionLabel>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="font-display text-3xl sm:text-5xl tracking-tight max-w-2xl">
            Projects that showcase my design process and product thinking.
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs">
            A focused selection — each one a study in solving real user problems.
          </p>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <a
              href={`#${p.id}`}
              onClick={(e) => {
                e.preventDefault();
                onSelect(p.id);
              }}
              className="group block rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-lift transition-all duration-300"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.bg} relative overflow-hidden flex items-center justify-center`}>
                {p.img ? (
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-6 rounded-xl bg-white/70 backdrop-blur-sm border border-white/80 grid place-items-center">
                    <span className="font-display text-3xl text-primary">{p.title}</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 rounded-full bg-background/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm border border-border transition group-hover:bg-primary group-hover:text-primary-foreground">
                  View complete
                </div>
                <div className={`absolute top-0 left-0 h-1 w-full ${p.stripe}`} />
              </div>
              <div className="p-6">
                <div className="text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground">{p.tag}</div>
                <h3 className="mt-2 font-display text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Read case study <span aria-hidden>→</span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CaseStudyShell({
  id,
  index,
  kicker,
  title,
  subtitle,
  accent,
  children,
  hideHeader,
}: {
  id: string;
  index: string;
  kicker: string;
  title: string;
  subtitle: string;
  accent?: boolean;
  children: React.ReactNode;
  hideHeader?: boolean;
}) {
  return (
    <section id={id} className="border-t border-border surface">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        {!hideHeader && (
          <Reveal>
            <SectionLabel index={index}>{kicker}</SectionLabel>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-end">
              <h2 className="font-display text-4xl sm:text-6xl tracking-tight">
                {title}
                {accent && <span className="text-primary">.</span>}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
            </div>
          </Reveal>
        )}
        <div className={hideHeader ? "" : "mt-12"}>{children}</div>
      </div>
    </section>
  );
}

function InfoBlock({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
      <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-primary">{label}</div>
      <h4 className="mt-2 font-display text-2xl">{title}</h4>
      <div className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function Artico({ onClose }: { onClose: () => void }) {
  const keyScreens = [
    { t: "Splash Screen", d: "Artiko brand introduction and canvas initialization experience.", img: "https://cdn.corenexis.com/files/c/8526362720.png" },
    { t: "Community Join", d: "Onboarding screen showing multiple sign-up options with community verification.", img: "https://cdn.corenexis.com/files/c/5689332720.png" },
    { t: "User Path Selection", d: "Choice between Artist and Audience personas with personalized discovery paths.", img: "https://cdn.corenexis.com/files/c/8679297720.png" },
    { t: "Art Style Preference", d: "Personalized discovery feed setup with art style selection and preferences.", img: "https://cdn.corenexis.com/files/c/9796341720.png" },
    { t: "Artwork Discovery", d: "Community artwork showcase and artist profiles with engagement metrics.", img: "https://cdn.corenexis.com/files/c/4673313720.png" },
    { t: "Creator Feed", d: "Artist content feed with trending and curated community highlights.", img: "https://cdn.corenexis.com/files/c/9885997720.png" },
  ];

  return (
    <CaseStudyShell
      id="artico"
      index="02"
      kicker="Flagship Case Study"
      title="Artico"
      accent
      subtitle=""
      hideHeader
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <SectionLabel index="02">Flagship Case Study</SectionLabel>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary transition"
        >
          Close case study
        </button>
      </div>

      <Reveal>
        <div className="mt-6 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 py-8 sm:py-10 px-6 sm:px-10 shadow-soft overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-blue-600/10 px-4 py-3 text-sm font-semibold text-blue-700">
                <img src="https://cdn.corenexis.com/files/c/9723292720.png" alt="Artico Logo" className="h-8 w-8" />
                Artico
              </div>
              <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-left">
                Create. Inspire. Elevate.
              </h2>
              <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                A credibility-driven artist ecosystem where artists earn recognition before unlocking monetization.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mt-6">
                {[
                  { label: "Role", value: "Product Designer" },
                  { label: "Platform", value: "iOS & Android" },
                  { label: "Tools", value: "Figma, FigJam, Stitch, Claude" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-white/80 p-4 text-sm text-muted-foreground shadow-sm">
                    <div className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">{item.label}</div>
                    <div className="text-sm text-foreground font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden bg-white shadow-xl border border-white/70">
              <img src="https://cdn.corenexis.com/files/c/6929478720.png" alt="Artico cover page CTA" className="w-full h-full object-cover" />
              <div className="bg-background p-4 flex justify-end border-t border-border">
                <a
                  href="https://www.figma.com/design/5eUihkSBRN2otrKOELP3jX/artico?node-id=2009-2&t=yFr2ytiGIWjMYrJF-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-700 bg-white text-blue-700 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-blue-50"
                >
                  View Figma file
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10 rounded-2xl border border-border bg-primary text-primary-foreground p-8 sm:p-10">
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] opacity-70">Key Screens</div>
          <h4 className="mt-4 font-display text-2xl sm:text-3xl mb-6">Designed Experience</h4>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {keyScreens.filter((_, index) => index !== 1).map((s) => (
              <div key={s.t} className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-white/20 bg-white/10">
                <img src={s.img} alt={`${s.t} screen`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <InfoBlock label="Challenge" title="Problem Statement">
            The contemporary creator economy faces a critical credibility crisis. Artists struggle with follower-dependent visibility, buyers face uncertainty assessing legitimacy, and monetization gatekeeping locks emerging talent outside revenue opportunities.
          </InfoBlock>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <Reveal>
          <div className="mt-10">
            <InfoBlock label="Opportunity" title="Market Opportunity">
              303 million creators globally lack credible monetization pathways. Art buyers spend $65B annually yet struggle identifying emerging talent. Artico reduces friction by surfacing pre-vetted artists and enabling monetization based on quality rather than follower thresholds.
            </InfoBlock>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-10">
            <InfoBlock label="Research" title="Research Approach">
              Conducted 15 semi-structured interviews with emerging artists and collectors. Analyzed 12 competitive platforms. Key finding: 78% of emerging artists report frustration with follower-dependent visibility, while 64% of buyers struggle assessing artist legitimacy.
            </InfoBlock>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-10">
          <InfoBlock label="Competition" title="Competitive Analysis">
            <div className="space-y-3 text-sm text-muted-foreground">
              <div><strong>Instagram:</strong> Massive discoverability but no credibility signals beyond follower count.</div>
              <div><strong>Behance:</strong> Portfolio-focused but limited community validation and no sales integration.</div>
              <div><strong>Etsy:</strong> Built-in marketplace but weak artist discovery and price-based competition.</div>
              <div><strong>Pinterest:</strong> High-intent buyers but artist attribution is secondary.</div>
            </div>
          </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <InfoBlock label="Users" title="User Journey Maps">
            <div className="space-y-4 text-sm text-muted-foreground">
              <div><strong>Audience:</strong> Discover → Engage → Purchase. Personalized feed surfaces artists by validation level, building confidence through visible credibility signals.</div>
              <div><strong>Artist:</strong> Create → Validate → Verify → Sell. Portfolio uploads accumulate validation, reaching thresholds that unlock verification badge and store access.</div>
            </div>
          </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <InfoBlock label="Insights" title="Pain Point Analysis">
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li><strong>Discovery Inequality:</strong> New artists compete against established accounts; algorithms reward consistency over quality.</li>
              <li><strong>Verification Barriers:</strong> Existing platforms gatekeep monetization behind arbitrary follower thresholds misaligned with merit.</li>
              <li><strong>Credibility Assessment Friction:</strong> Buyers research extensively, creating friction preventing impulse purchases.</li>
              <li><strong>Monetization Access Gap:</strong> Artists must succeed before accessing revenue tools, creating impossible chicken-egg problem.</li>
            </ul>
          </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <InfoBlock label="Vision" title="Product Vision & Design Principles">
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><strong>Vision:</strong> Create a trusted ecosystem where talented artists grow, gain recognition, and monetize based on credibility rather than visibility alone.</p>
              <div className="space-y-2 mt-3">
                <p>🎨 <strong>Credibility First:</strong> Every feature builds and signals artist legitimacy.</p>
                <p>🌱 <strong>Community Driven:</strong> Peer recognition forms credibility foundation, not algorithms.</p>
                <p>🤝 <strong>Artist Growth Focused:</strong> Tools reward quality, consistency, and community engagement.</p>
                <p>🛍️ <strong>Monetization Through Recognition:</strong> Revenue access flows from credibility, unlocking tools alongside earned validation.</p>
              </div>
            </div>
          </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <InfoBlock label="Features" title="User Flows">
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><strong>Role Selection:</strong> Users choose Artist or Audience path with personalized onboarding.</p>
              <p><strong>Discovery:</strong> Audience selects art styles; Artists categorize work and set aesthetic direction.</p>
              <p><strong>Community Validation:</strong> Peer validation creates network effects democratizing credibility versus curator gatekeeping.</p>
              <p><strong>Progressive Access:</strong> Tools unlock as credibility accumulates, creating clear monetization pathway.</p>
            </div>
          </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <InfoBlock label="Solution" title="Solution Overview">
            <div className="space-y-4 text-sm text-muted-foreground">
              <div><strong>Artist Validation:</strong> Community validation badges show peer recognition and credibility level.</div>
              <div><strong>Level Progression:</strong> Artists earn 5 levels through consistent creation and community engagement, visualizing clear career progression.</div>
              <div><strong>Verification Badge:</strong> Level 3+ artists unlock verification status, signaling buyer trust and marketplace legitimacy.</div>
              <div><strong>Store Unlock:</strong> Level 4+ artists access direct sales tools, enabling monetization based on earned credibility.</div>
              <div><strong>Community Recognition:</strong> Featured artist showcases, featured collections, and trending artist spotlights drive visibility based on validation.</div>
            </div>
          </InfoBlock>
        </div>
      </Reveal>


      <Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border bg-background p-6">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-primary">Impact</div>
            <div className="mt-2 font-display text-lg">For Users</div>
            <p className="mt-2 text-sm text-muted-foreground">Artists unlock sustainable income pathways through credibility-based monetization. Audiences purchase with confidence, knowing verified artists represent quality.</p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-primary">Impact</div>
            <div className="mt-2 font-display text-lg">For Artists</div>
            <p className="mt-2 text-sm text-muted-foreground">Early-stage career acceleration through validated credibility. Income generation beginning at realistic career stages rather than arbitrary thresholds—earning recognition drives opportunity.</p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-primary">Impact</div>
            <div className="mt-2 font-display text-lg">For Buyers</div>
            <p className="mt-2 text-sm text-muted-foreground">Reduced discovery friction and purchase hesitation through trust signals. Access to emerging talent vetted by community, expanding collection opportunities beyond algorithm-driven recommendations.</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 sm:p-10">
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Final Reflection</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
            Artico is more than an art-sharing platform. It is a credibility-driven ecosystem designed to help artists earn recognition, build trust, and unlock sustainable monetization opportunities independent of algorithm luck.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            The platform bridges the creator economy's greatest gap: the distance between artistic talent and sustainable income. Artico closes this distance through design—making credibility visible, validation transparent, and monetization achievable for artists who earn it.
          </p>
        </div>
      </Reveal>
    </CaseStudyShell>
  );
}

function PlacementPrime({ onClose }: { onClose: () => void }) {
  const screens = [
    { t: "Log In", d: "Clean login screen with fast access to account entry.", img: "https://cdn.corenexis.com/files/c/6665885720.png" },
    { t: "Sign Up", d: "Sign-up screen for new users with a clear onboarding path.", img: "https://cdn.corenexis.com/files/c/1786587720.png" },
    { t: "About You", d: "Personal profile capture for student background details.", img: "https://cdn.corenexis.com/files/c/5936435720.png" },
    { t: "Education", d: "Education input flow for resume-building credentials.", img: "https://cdn.corenexis.com/files/c/7718968720.png" },
    { t: "Skills", d: "Skill selection screen with quick tag-based input.", img: "https://cdn.corenexis.com/files/c/7299894720.png" },
    { t: "Experiences", d: "Experience entry screen for internships and project details.", img: "https://cdn.corenexis.com/files/c/2224576720.png" },
    { t: "Links", d: "Professional links screen for portfolios and social profiles.", img: "https://cdn.corenexis.com/files/c/6472242720.png" },
  ];
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <CaseStudyShell
      id="placement-prime"
      index="03"
      kicker="Case Study"
      title="Placement Prime"
      subtitle="Helping students understand resume quality and interview readiness through a guided, data-driven experience."
      hideHeader
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <SectionLabel index="03">Case Study</SectionLabel>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary transition"
        >
          Close case study
        </button>
      </div>

      <Reveal>
        <div className="mt-6 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 py-8 sm:py-10 px-6 sm:px-10 shadow-soft overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-blue-600/10 px-4 py-3 text-sm font-semibold text-blue-700">
                <img src="https://cdn.corenexis.com/files/c/2855955720.png" alt="Placement Prime Logo" className="h-8 w-8" />
                Placement Prime
              </div>
              <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-left">
                Turn placement confusion into confidence.
              </h2>
              <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                A mobile-first platform that helps students improve resume impact, practice interviews, and build recruiter-ready confidence through a structured prep flow.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 mt-6">
                {[
                  { label: "Role", value: "UI / UX Designer" },
                  { label: "Platform", value: "Mobile-first (iOS / Android)" },
                  { label: "Tools", value: "Figma, FigJam" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-white/80 p-4 text-sm text-muted-foreground shadow-sm">
                    <div className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">{item.label}</div>
                    <div className="text-sm text-foreground font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden bg-white shadow-xl border border-white/70">
              <img src="https://cdn.corenexis.com/files/c/9495362720.png" alt="Placement Prime cover" className="w-full h-full object-cover" />
              <div className="bg-background p-4 flex flex-col sm:flex-row sm:justify-end gap-3 border-t border-border">
                <a
                  href="https://www.figma.com/design/U4mqPzTkRBUu0GUejSQ198/placement-prime?node-id=49-127&t=XRXMFBEpGXEmzom1-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-700 bg-white text-blue-700 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-blue-50"
                >
                  View Figma file
                </a>
                <a
                  href="https://miro.com/app/board/uXjVGf-CeVQ=/?share_link_id=581112553619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 text-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-slate-800"
                >
                  View wireframe
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-14 rounded-2xl border border-border bg-primary text-primary-foreground p-8 sm:p-10">
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] opacity-70">Key Screens</div>
          <h4 className="mt-4 font-display text-2xl sm:text-3xl mb-6">Designed Experience</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-start">
            {screens.map((s, i) => (
              <button key={s.t} type="button" onClick={() => setExpanded(s.img)} className="rounded-2xl overflow-hidden border border-white/20 bg-white/10 p-0 text-left">
                <img src={s.img} alt={`${s.t} screen`} className="w-full object-contain block" />
              </button>
            ))}
          </div>

          {expanded && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6" onClick={() => setExpanded(null)}>
              <div className="max-w-[90%] max-h-[90%] bg-white rounded-lg overflow-hidden p-4">
                <img src={expanded} alt="Expanded screen" className="w-full h-full object-contain" />
              </div>
            </div>
          )}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <InfoBlock label="Challenge" title="Placement readiness feels fragmented">
            <p className="mb-4">Students had strong technical foundations but lacked a single place to improve resume strength, practice interviews, and track recruiter readiness. Existing tools were disconnected, forcing last-minute prep and uncertain outcomes.</p>
          </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <InfoBlock label="Research" title="Student and recruiter insights">
            <p className="mb-4">We spoke with students, placement officers, and recent hires to understand where preparation breaks down and what recruiters actually look for.</p>
            <p>Students wanted concrete feedback, structured practice, and a dashboard that made progress visible.</p>
          </InfoBlock>
          <InfoBlock label="Goal" title="A single preparation hub">
            <p className="mb-4">Design a mobile-first platform that guides students through resume refinement, mock interview practice, and placement readiness in one cohesive flow.</p>
            <p>Keep the experience simple, supportive, and centered on measurable improvement.</p>
          </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <InfoBlock label="Experience" title="Resume feedback flow">
            <p className="mb-4">Students upload their resume and receive AI-driven analysis on impact, clarity, and role fit. Feedback is broken into prioritized edits and actionable advice.</p>
          </InfoBlock>
          <InfoBlock label="Experience" title="Mock interview routine">
            <p className="mb-4">Interactive interview prompts and scoring help students practice consistently while tracking confidence and improvement over time.</p>
          </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <InfoBlock label="Outcome" title="Readiness tracking">
            <p className="mb-4">A placement score and milestone dashboard help students know when they are ready to apply, reducing guesswork and anxiety before interviews.</p>
          </InfoBlock>
          <InfoBlock label="Outcome" title="Actionable next steps">
            <p className="mb-4">Every review ends with concrete recommendations so students can make targeted improvements instead of feeling overwhelmed by vague advice.</p>
          </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-14 rounded-3xl border border-border bg-gradient-to-br from-slate-50 to-white p-8 sm:p-10">
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Final Reflection</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">Placement Prime turns scattered placement prep into a cohesive, confidence-building experience. Students can improve resume impact, practice interviews consistently, and see measurable readiness across every step.</p>
        </div>
      </Reveal>

    </CaseStudyShell>
  );
}

function HalwaNationCaseStudy({ onClose }: { onClose: () => void }) {
  return (
    <CaseStudyShell
      id="halwa-nation"
      index="03"
      kicker="Food & Beverage · E-commerce"
      title="Halwa Nation"
      subtitle="A mobile-first experience combining heritage storytelling with modern e-commerce design"
      hideHeader
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <SectionLabel index="03">Case Study</SectionLabel>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary transition"
        >
          Close case study
        </button>
      </div>

      <Reveal>
        <div className="mt-6 rounded-3xl bg-gradient-to-br from-[oklch(0.96_0.03_60)] to-[oklch(0.92_0.05_45)] py-8 sm:py-10 px-8 sm:px-12 shadow-soft">
          <div className="flex items-start justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl tracking-tight mb-3">Halwa Nation<span className="text-[oklch(0.65_0.24_50)]">.</span></h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A mobile-first website that blends traditional heritage with modern e-commerce design, building trust through storytelling while showcasing authentic sweets and supporting future online ordering.
              </p>
            </div>
            <a
              href="https://halwa-nation-m4ln.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.65_0.24_50)] text-white px-6 py-3 text-sm font-medium shadow-soft hover:shadow-lift hover:-translate-y-0.5 transition whitespace-nowrap flex-shrink-0"
            >
              Visit Website <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="space-y-6 mt-12">
          <div>
            <h3 className="font-display text-xl font-semibold mb-3">The Problem</h3>
            <p className="text-muted-foreground leading-relaxed">
              Many traditional food businesses rely heavily on word-of-mouth marketing and social media, making it difficult to communicate product quality, authenticity, and brand story through a dedicated digital experience. Customers struggle to discover product details, understand quality standards, trust online food purchases, and connect with the brand's heritage.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold mb-3">The Goal</h3>
            <p className="text-muted-foreground leading-relaxed">
              Design a mobile-first website that builds trust through storytelling, highlights traditional preparation methods, showcases products appealingly, encourages product exploration, and supports future online ordering functionality.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <InfoBlock label="Research" title="Key Insights">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>High-quality product imagery significantly increases customer trust</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>Customers connect strongly with heritage and traditional narratives</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span>Clear product presentation improves purchase intent</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">→</span>
              <span>Mobile-first design is critical for local and food businesses</span>
            </li>
          </ul>
        </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <InfoBlock label="Strategy" title="Design Pillars">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Heritage</h4>
                <p className="text-sm text-muted-foreground">Showcasing brand roots and traditional preparation methods</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Trust</h4>
                <p className="text-sm text-muted-foreground">Highlighting quality ingredients, handcrafted production, and authentic recipes</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Conversion</h4>
                <p className="text-sm text-muted-foreground">Guiding users toward product discovery and purchase decisions</p>
              </div>
            </div>
          </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <InfoBlock label="Information Architecture" title="Page Structure">
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Homepage</h4>
                <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                  <li>Hero Section with brand introduction</li>
                  <li>Brand Story & Heritage section</li>
                  <li>Product Showcase & Featured items</li>
                  <li>Value Proposition highlights</li>
                  <li>Why Choose Us differentiators</li>
                <li>Product Gallery & CTA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Product Experience</h4>
              <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                <li>Featured Products with pricing</li>
                <li>Product Highlights & details</li>
                <li>Quick Purchase Actions</li>
              </ul>
            </div>
          </div>
        </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <InfoBlock label="Visual Design" title="Style & Elements">
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-2">Modern Traditional Aesthetic</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Warm earthy color palette (golds, browns, creams)</li>
                  <li>Traditional food photography with premium quality</li>
                  <li>Clean card layouts with breathing room</li>
                  <li>Mobile-first responsive spacing</li>
                  <li>Soft shadows and rounded corners for approachability</li>
              </ul>
            </div>
          </div>
        </InfoBlock>
        </div>
      </Reveal>

      <Reveal>
        <InfoBlock label="Key Features" title="Product Experience">
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="text-primary font-semibold">▪</span>
              <div>
                <p className="font-semibold text-foreground">Product Showcase</p>
                <p className="text-muted-foreground">Best-selling sweets with clear pricing and high-quality imagery</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-semibold">▪</span>
              <div>
                <p className="font-semibold text-foreground">Brand Storytelling</p>
                <p className="text-muted-foreground">Heritage, authenticity, and business narrative</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-semibold">▪</span>
              <div>
                <p className="font-semibold text-foreground">Value Proposition</p>
                <p className="text-muted-foreground">Premium ingredients, traditional recipes, artisanal craftsmanship, quality assurance</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-semibold">▪</span>
              <div>
                <p className="font-semibold text-foreground">Mobile-First Design</p>
                <p className="text-muted-foreground">Optimized for smartphone users with easy browsing and discovery</p>
              </div>
            </li>
          </ul>
        </InfoBlock>
      </Reveal>

      <Reveal>
        <InfoBlock label="My Role" title="Design Responsibilities">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary">→</span>
              <span>Product vision and website strategy</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">→</span>
              <span>Information architecture and content hierarchy</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">→</span>
              <span>User experience decisions and flows</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">→</span>
              <span>Visual design direction and branding</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">→</span>
              <span>Mobile-first interface design and optimization</span>
            </li>
          </ul>
        </InfoBlock>
      </Reveal>

      <Reveal>
        <InfoBlock label="Outcome" title="Key Learnings">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary">→</span>
              <span>Storytelling significantly improves user trust and connection with brand</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">→</span>
              <span>Product presentation and photography directly influence buying decisions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">→</span>
              <span>Mobile-first design is essential for local and food businesses</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">→</span>
              <span>Traditional brands can embrace modern UI/UX without losing cultural identity</span>
            </li>
          </ul>
        </InfoBlock>
      </Reveal>
    </CaseStudyShell>
  );
}



function Gallery({ onNavigate }: { onNavigate: (href: string) => void }) {
  type GalleryItem = {
    t: string;
    c: string;
    h: string;
    bg?: string;
    img?: string;
    video?: string;
    link?: string;
    html?: string;
    overlay?: boolean;
  };

  const items: GalleryItem[] = [
    { t: "Mobile App UI", c: "UI/UX", h: "tall", img: "https://cdn.corenexis.com/files/c/9917575720.png", link: "#placement-prime", overlay: true },
    { t: "Character Illustration", c: "Illustration", h: "tall", img: "https://cdn.corenexis.com/files/c/7984549720.jpg" },
    { t: "Dashboard Concept", c: "UI/UX", h: "med", img: "https://cdn.corenexis.com/files/c/6426636720.png", link: "https://halwa-nation-m4ln.vercel.app/", overlay: true },
    { t: "Portrait Illustration", c: "Illustration", h: "tall", img: "https://cdn.corenexis.com/files/c/2811473720.jpg" },
    { t: "Realistic Character", c: "Pencil Drawings", h: "med", img: "https://cdn.corenexis.com/files/c/4347349720.jpg" },
    { t: "Portrait Series", c: "Pencil Drawings", h: "tall", img: "https://cdn.corenexis.com/files/c/9769171720.jpg" },
    { t: "Sketch Study", c: "Pencil Drawings", h: "short", img: "https://cdn.corenexis.com/files/c/2487995720.jpg" },
    { t: "Portrait Collection", c: "Pencil Drawings", h: "med", img: "https://cdn.corenexis.com/files/c/3582461720.jpg" },
    { t: "Drawing Study", c: "Pencil Drawings", h: "tall", img: "https://cdn.corenexis.com/files/c/8458259720.webp" },
    { t: "Pencil Portrait", c: "Pencil Drawings", h: "med", img: "https://cdn.corenexis.com/files/c/2921837720.webp" },
    { t: "Gaming Logo", c: "Branding", h: "med", img: "https://cdn.corenexis.com/files/c/2344464720.webp" },
    { t: "Artico Logo", c: "Branding", h: "med", img: "https://cdn.corenexis.com/files/c/9723292720.png" },
    { t: "Placement Prime Logo", c: "Branding", h: "med", img: "https://cdn.corenexis.com/files/c/2855955720.png" },
    { t: "Jennest Bro", c: "Branding", h: "med", img: "https://cdn.corenexis.com/files/c/1657564720.png" },
    { t: "NTF Logo", c: "Branding", h: "med", img: "https://cdn.corenexis.com/files/c/6178259720.png" },
    { t: "Cringe Diary Branding", c: "Branding", h: "med", img: "https://cdn.corenexis.com/files/c/4114288720.jpg" },
    { t: "Artico Branding", c: "Branding", h: "tall", img: "https://cdn.corenexis.com/files/c/7453142720.webp" },
    { t: "WhatsApp Logo", c: "Branding", h: "short", img: "https://cdn.corenexis.com/files/c/5872615720.png" },
    { t: "Instagram Logo", c: "Branding", h: "med", img: "https://cdn.corenexis.com/files/c/2498329720.png" },
    { t: "YouTube Logo", c: "Branding", h: "short", img: "https://cdn.corenexis.com/files/c/9773725720.png" },
    { t: "Pink FF Branding", c: "Branding", h: "tall", img: "https://cdn.corenexis.com/files/c/1864847720.jpg" },
    { t: "VLSI Workshop Design", c: "Graphic Design", h: "med", img: "https://cdn.corenexis.com/files/c/2861438720.png" },
    { t: "Combo Offer Design", c: "Graphic Design", h: "tall", img: "https://cdn.corenexis.com/files/c/2416631720.png" },
    { t: "Halwa Product Design", c: "Graphic Design", h: "med", img: "https://cdn.corenexis.com/files/c/5355276720.png" },
    { t: "Birthday Greeting", c: "Graphic Design", h: "tall", img: "https://cdn.corenexis.com/files/c/8657962720.jpg" },
    { t: "Birthday Special Offers", c: "Graphic Design", h: "med", img: "https://cdn.corenexis.com/files/c/5641271720.png" },
    { t: "Halwa Delivery Poster", c: "Graphic Design", h: "short", img: "https://cdn.corenexis.com/files/c/8391319720.png" },
    { t: "Halwa Order Poster", c: "Graphic Design", h: "med", img: "https://cdn.corenexis.com/files/c/5516334720.png" },
    { t: "Motion Design 01", c: "Video Editing", h: "med", video: "https://www.image2url.com/r2/default/videos/1780876071385-aec130b7-b779-43b9-9190-f1fd1279aecd.mp4" },
    { t: "Motion Design 02", c: "Video Editing", h: "med", video: "https://www.image2url.com/r2/default/videos/1780876071385-aec130b7-b779-43b9-9190-f1fd1279aecd.mp4" },
    { t: "Pixel Explanation", c: "Video Editing", h: "med", video: "https://www.image2url.com/r2/default/videos/1780809323036-ad177736-7da6-41e9-b3a2-f290a32f8163.mp4" },
    { t: "Registers", c: "Video Editing", h: "med", video: "https://www.image2url.com/r2/default/videos/1780809012287-69971c74-8dce-4277-b97e-b1eb94180141.mp4" },
    { t: "3D Gaming Intro", c: "Video Editing", h: "med", video: "https://www.image2url.com/r2/default/videos/1780807066142-52622ac3-eb8a-41bf-8ebb-45dfe8a62544.mp4" },
    { t: "LV Video Edit", c: "Video Editing", h: "med", video: "https://www.image2url.com/r2/default/videos/1780808029386-ff75674a-698f-472a-852b-f66e56426966.mp4" },
  ];
  const cats = ["All", "UI/UX", "Branding", "Graphic Design", "Illustration", "Pencil Drawings", "Video Editing"];
  const [active, setActive] = useState("All");
  const filtered = items.filter((i) => active === "All" || i.c === active);
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Creative Gallery</SectionLabel>
          <h2 className="font-display text-3xl sm:text-5xl tracking-tight">A look at the visual side.</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm border transition ${
                  active === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
        {active === "Video Editing" && (
          <Reveal>
            <div className="mt-6 mb-6 p-4 rounded-lg bg-muted/30 border border-border">
              <p className="text-sm text-muted-foreground">My best works of motion design and video editing. Professional animations, transitions, and visual effects created to enhance storytelling.</p>
            </div>
          </Reveal>
        )}
        {active === "UI/UX" && (
          <Reveal>
            <div className="mt-6 mb-6 p-4 rounded-lg bg-muted/30 border border-border">
              <p className="text-sm text-muted-foreground">Some of my UI works and best of my UI designs showcasing intuitive interfaces and user-centered experiences.</p>
            </div>
          </Reveal>
        )}
        {active === "Branding" && (
          <Reveal>
            <div className="mt-6 mb-6 p-4 rounded-lg bg-muted/30 border border-border">
              <p className="text-sm text-muted-foreground">Best of my branding works featuring logo designs, visual identity systems, and brand guidelines.</p>
            </div>
          </Reveal>
        )}
        {active === "Graphic Design" && (
          <Reveal>
            <div className="mt-6 mb-6 p-4 rounded-lg bg-muted/30 border border-border">
              <p className="text-sm text-muted-foreground">Some samples of my graphic design work including posters, social media designs, and marketing creatives.</p>
            </div>
          </Reveal>
        )}
        {active === "Illustration" && (
          <Reveal>
            <div className="mt-6 mb-6 p-4 rounded-lg bg-muted/30 border border-border">
              <p className="text-sm text-muted-foreground">Best of my illustrations featuring character design and creative digital artwork.</p>
            </div>
          </Reveal>
        )}
        {active === "Pencil Drawings" && (
          <Reveal>
            <div className="mt-6 mb-6 p-4 rounded-lg bg-muted/30 border border-border">
              <p className="text-sm text-muted-foreground">Best of art work showcasing detailed pencil portraits and sketch studies.</p>
            </div>
          </Reveal>
        )}
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
          {filtered.map((i) => (
            <div key={i.t} className="mb-4 break-inside-avoid overflow-hidden transition-all duration-500">
              {i.video ? (
                <video src={i.video} controls preload="metadata" className="w-full h-full object-contain bg-black" style={{ aspectRatio: i.h === "tall" ? "9/12" : i.h === "med" ? "9/10" : "9/7" }} />
              ) : i.html ? (
                <iframe src={i.html} className="w-full h-full border-0" style={{ aspectRatio: i.h === "tall" ? "9/12" : i.h === "med" ? "9/10" : "9/7" }} title={i.t} />
              ) : i.img ? (
                i.overlay ? (
                  <div
                    className="relative group cursor-pointer overflow-hidden"
                    style={{ aspectRatio: i.h === "tall" ? "9/12" : i.h === "med" ? "9/10" : "9/7" }}
                    onClick={() => i.link && onNavigate(i.link)}
                  >
                    <img src={i.img} alt={i.t} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                      <span className="text-[10px] font-mono uppercase tracking-widest opacity-70 text-white">{i.c}</span>
                      <span className="font-display text-lg text-white">{i.t}</span>
                    </div>
                  </div>
                ) : (
                  <img src={i.img} alt={i.t} className="w-full object-contain" style={{ aspectRatio: i.h === "tall" ? "9/12" : i.h === "med" ? "9/10" : "9/7" }} />
                )
              ) : (
                <div
                  className={`flex flex-col justify-between p-5 transition-all duration-500 ${i.link ? "cursor-pointer hover:shadow-lift hover:-translate-y-1" : ""} bg-gradient-to-br ${i.bg}`}
                  style={{ aspectRatio: i.h === "tall" ? "9/12" : i.h === "med" ? "9/10" : "9/7" }}
                  onClick={() => i.link && onNavigate(i.link)}
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest opacity-70">{i.c}</span>
                  <span className="font-display text-lg">{i.t}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="surface border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
        <Reveal>
          <div className="rounded-3xl overflow-hidden border border-border bg-card aspect-[4/5] max-w-sm">
            <img src="https://cdn.corenexis.com/files/c/5196583720.jpg" alt="Nagendra portrait" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionLabel>About Me</SectionLabel>
          <h2 className="font-display text-3xl sm:text-5xl tracking-tight">Engineer by training. Designer by craft.</h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              I am an Electronics and Communication Engineering graduate transitioning into UI/UX Design. My background in visual design, branding, photo editing, and creative content creation helps me build interfaces that are both functional and visually engaging.
            </p>
            <p>
              I enjoy transforming ideas into intuitive user experiences while continuously learning modern design systems, product thinking, and user-centered design practices.
            </p>
            <p>
              My goal is to contribute to impactful digital products and grow as a UI/UX designer through real-world projects and collaborative teams.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { t: "UI/UX Design", items: ["User Research", "User Flows", "Wireframing", "Prototyping", "Information Architecture", "Responsive Design"] },
    { t: "Visual Design", items: ["Branding", "Typography", "Poster Design", "Social Media Design", "Marketing Creatives"] },
    { t: "Tools", items: ["Figma", "Photoshop", "Illustrator", "CapCut", "Canva", "VS Code", "GitHub"] },
  ];
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Skills & Tools</SectionLabel>
          <h2 className="font-display text-3xl sm:text-5xl tracking-tight max-w-3xl">
            A balanced toolkit across product thinking and visual craft.
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <Reveal key={g.t} delay={gi * 100}>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 h-full">
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-primary">0{gi + 1}</div>
                <h3 className="mt-2 font-display text-xl">{g.t}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li key={i} className="rounded-full bg-background border border-border px-3 py-1.5 text-sm text-foreground/80">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    {
      title: "2020 — Creative Beginnings",
      desc: "Started exploring digital creativity through drawing, occasional freelance art commissions, and visual storytelling.",
    },
    {
      title: "2020–2022 — Creator Foundation",
      desc: "Built YouTube channels and developed skills in branding, content creation, photo editing, and video editing, establishing a strong visual design foundation.",
    },
    {
      title: "2022 — Engineering Journey",
      desc: "Began pursuing Electronics & Communication Engineering while continuing creative projects, freelance artwork, and social media content creation.",
    },
    {
      title: "2022–2024 — Design Exploration",
      desc: "Expanded into branding, marketing creatives, and digital design while experimenting with different creative disciplines and freelance opportunities.",
    },
    {
      title: "2024 — UI/UX Discovery",
      desc: "Developed a strong interest in UI/UX Design and digital products, exploring design thinking, user experience, and product-focused problem solving.",
    },
    {
      title: "2024–2025 — Product & Tech Learning",
      desc: "Started actively learning design tools, modern product design workflows, development fundamentals, and digital product creation.",
    },
    {
      title: "2025–2026 — Building Real Projects",
      desc: "Designed and developed projects including Mana Page, Resume Analyzer, Halwa Nation, Portfolio Systems, and Artico — a credibility-driven artist ecosystem.",
    },
    {
      title: "Today",
      desc: "Transitioning from visual creator to UI/UX and Product Designer, focused on building meaningful digital experiences and gaining real-world industry experience.",
    },
  ];
  return (
    <section id="journey" className="surface border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Design Journey</SectionLabel>
          <h2 className="font-display text-3xl sm:text-5xl tracking-tight">From circuits to systems.</h2>
        </Reveal>
        {/* Desktop horizontal */}
        <div className="hidden lg:block mt-14">
          <div className="relative">
            <div className="absolute left-0 right-0 top-5 h-px bg-border" />
            <ol className="grid grid-cols-4 gap-4">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <li className="group">
                    <div className="relative flex justify-center">
                      <span className="h-3 w-3 rounded-full bg-primary ring-4 ring-background relative z-10" />
                    </div>
                    <div className="mt-6 text-center">
                      <div className="text-[11px] font-mono text-muted-foreground group-hover:text-primary transition">0{i + 1}</div>
                      <div className="mt-1 font-medium text-sm leading-snug">{s.title}</div>
                      <div className="mt-3 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                        {s.desc}
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
        {/* Mobile vertical */}
        <ol className="lg:hidden mt-12 relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-border" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <li className="relative pb-8 last:pb-0">
                <span className="absolute -left-[18px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="text-[11px] font-mono text-muted-foreground">Step 0{i + 1}</div>
                <div className="font-medium">{s.title}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ResumeSection() {
  return (
    <section id="resume" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card shadow-soft p-8 sm:p-10 grid md:grid-cols-[1fr_1.3fr] gap-10 items-center">
            <div className="aspect-[3/4] rounded-2xl bg-background border border-border shadow-soft p-6 flex flex-col">
              <div className="h-2 w-16 rounded-full bg-primary" />
              <div className="mt-3 h-3 w-32 rounded-full bg-foreground" />
              <div className="mt-2 h-2 w-24 rounded-full bg-muted-foreground/40" />
              <div className="mt-6 space-y-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="h-2 rounded-full bg-muted" style={{ width: `${60 + (i % 4) * 10}%` }} />
                ))}
              </div>
              <div className="mt-auto text-[10px] font-mono text-muted-foreground">RESUME · 2026</div>
            </div>
            <div>
              <SectionLabel>Resume</SectionLabel>
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight">Get the full story on paper.</h2>
              <p className="mt-4 text-muted-foreground max-w-lg">
                A concise one-page resume covering experience, projects, education and the tools I work with.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://drive.google.com/file/d/1n4zFqpZz9S8I-LDuMeDor-zV5YREOQBo/view?usp=drive_link" target="_blank" className="rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition">View Resume</a>
                <a href="https://drive.google.com/uc?export=download&id=1n4zFqpZz9S8I-LDuMeDor-zV5YREOQBo" className="rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition">Download Resume ↓</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function YouTubeChannels() {
  const channels = [
    { t: "Cringe Diary", d: "Vlogging channel featuring personal stories and creative content.", link: "https://youtube.com/@cringe-diary?si=CHl89sQ49isTKQTO" },
    { t: "Pencil Broh", d: "Art-focused channel showcasing drawings, illustrations, and creative techniques.", link: "https://youtube.com/@pencil_broh?si=Osji_ZsciGPaaQxs" },
    { t: "Pink Tuber", d: "Gaming channel featuring gameplay, reviews, and gaming commentary.", link: "https://youtube.com/@pink_tuber?si=Z-Ea4rwFZEO7hCDZ" },
  ];
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <SectionLabel>On YouTube</SectionLabel>
          <h2 className="font-display text-3xl sm:text-5xl tracking-tight">Creative channels across multiple genres.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Producing content in vlogging, art, and gaming. Currently working as Video Editor & Social Media Manager for Code for Your Growth.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {channels.map((c) => (
            <Reveal key={c.t}>
              <a
                href={c.link}
                target="_blank"
                className="group block rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="text-[11px] font-mono uppercase tracking-widest text-primary">YouTube Channel</div>
                <h3 className="font-display text-2xl mt-2">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  Subscribe <span aria-hidden>→</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="surface border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display text-4xl sm:text-6xl tracking-tight">Let's work together.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Whether you're hiring, collaborating, or sharing an idea — I'd love to hear from you.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            { t: "Hire Me", d: "For recruiters, internships, and professional opportunities.", e: "workhard112233@gmail.com", primary: true },
            { t: "Let's Create", d: "For collaborations and creative projects.", e: "karrinagendra112233@gmail.com" },
          ].map((c) => (
            <Reveal key={c.t}>
              <a
                href={`mailto:${c.e}`}
                className={`group block rounded-2xl border p-8 transition hover:-translate-y-1 hover:shadow-lift ${
                  c.primary ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
                }`}
              >
                <div className="text-[11px] font-mono uppercase tracking-widest opacity-70">{c.primary ? "Recruiters & Hiring" : "Collaborators"}</div>
                <h3 className="font-display text-3xl mt-2">{c.t}</h3>
                <p className={`mt-3 text-sm ${c.primary ? "opacity-80" : "text-muted-foreground"}`}>{c.d}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  {c.e} <span aria-hidden>→</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">Phone</div>
              <div className="font-display text-2xl mt-1">+91 93918 37571</div>
            </div>
            <a href="tel:+919391837571" className="rounded-full border border-border px-5 py-2.5 text-sm hover:bg-secondary transition">Call now</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
        <div>
          <div className="font-display text-2xl">Nagendra<span className="text-primary">.</span></div>
          <div className="text-sm text-muted-foreground mt-1">UI/UX Designer & Visual Designer</div>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm">
          <a href="https://www.linkedin.com/in/nagendra-karri-594b962b4" target="_blank" className="text-muted-foreground hover:text-foreground transition">LinkedIn</a>
          <a href="https://github.com/Nagendra-gtb1" target="_blank" className="text-muted-foreground hover:text-foreground transition">GitHub</a>
          <a href="mailto:workhard112233@gmail.com" className="text-muted-foreground hover:text-foreground transition">Email</a>
        </div>
        <div className="text-xs text-muted-foreground">© 2026 Nagendra. Crafted with care.</div>
      </div>
    </footer>
  );
}

function Index() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const openCaseStudy = (id: string) => {
    setActiveCaseStudy(id);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const closeCaseStudy = () => setActiveCaseStudy(null);

  const handleNavigate = (href: string) => {
    if (href === "#placement-prime") {
      openCaseStudy("placement-prime");
      return;
    }
    if (href.startsWith("#")) {
      window.location.hash = href;
      return;
    }
    window.open(href, "_blank");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <FeaturedProjects onSelect={openCaseStudy} />
      {activeCaseStudy === "artico" && <Artico onClose={closeCaseStudy} />}
      {activeCaseStudy === "placement-prime" && <PlacementPrime onClose={closeCaseStudy} />}
      {activeCaseStudy === "halwa-nation" && <HalwaNationCaseStudy onClose={closeCaseStudy} />}
      <Gallery onNavigate={handleNavigate} />
      <About />
      <Skills />
      <Journey />
      <ResumeSection />
      <YouTubeChannels />
      <Contact />
      <Footer />
    </main>
  );
}
