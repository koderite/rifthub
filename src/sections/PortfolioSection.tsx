import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--ink)" style={{ marginLeft: '2px' }}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--ink)">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}

const projects = [
  {
    title: 'Amura Collection',
    category: 'Luxury Clothing Brand - Showcase',
    description:
      'A visual showcase for Amura, where contemporary design meets timeless tailoring. Each piece tells a story of refined craftsmanship and bold sophistication.',
    video: 'https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/fashion-showcase.mp4',
  },
  {
    title: 'Fashion Concert Runway',
    category: 'Live Runway - Music & Fashion',
    description:
      'An electrifying fashion concert runway where music and design collide. Models move to the rhythm, creating an immersive live experience that blurs the line between performance and art.',
    video: 'https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/fashion-concert.mp4',
  },
  {
    title: 'Folk Tale',
    category: 'African Drama - Coming of Age Story',
    description:
      "A spoilt Nigerian teenager falls for his secondary school teacher. She turns him down gently and tells him to channel that energy into his books. He listens. He graduates with a first class.",
    video: 'https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/folk-tale.mp4',
  },
  {
    title: 'Hotel UGC Ad',
    category: 'Palm Classic Hotel, Benin City',
    description:
      'A UGC ad for Palm Classic Hotel in Benin City. We captured the ambience, the poolside, the restaurant, and the kind of customer service that makes you want to book a stay.',
    video: 'https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/ugc-hotel.mp4',
  },
  {
    title: 'Wonder Realm',
    category: 'Animated Storytelling',
    description:
      'AI-powered animation that brings imagination to life. Vibrant worlds and playful characters crafted for audiences of all ages.',
    video: 'https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/kids-animation.mp4',
  },
  {
    title: 'Gas & Go',
    category: 'Business Ad for a Cooking Gas Station',
    description:
      'A high-energy commercial for a cooking gas station that delivers straight to your door. We show how they make cooking easy and reliable, all through the lens of AI-driven storytelling.',
    video: 'https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/marketting-ad-cooking-gas.mp4',
  },
  {
    title: 'Vela',
    category: 'Animated Fantasy Adventure',
    description:
      'A teenage island girl recruits a washed-up demigod to return a stolen magical heart and save her dying homeland from a volcanic curse. She battles pirates, outwits a giant crab, and discovers she\'s heir to a lost legacy of legendary seafarers.',
    video: 'https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/VID-20260716-WA0006.mp4',
  },
];

function PortfolioCard({ project }: { project: (typeof projects)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  };

  return (
    <div className="portfolio-card" style={{ position: 'relative' }}>
      <div
        style={{
          position: 'relative',
          borderRadius: '18px',
          overflow: 'hidden',
          aspectRatio: '4 / 5',
          backgroundColor: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <video
          ref={videoRef}
          src={project.video}
          aria-label={project.title}
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', cursor: 'pointer' }}
          onClick={togglePlay}
        />
        <button
          onClick={togglePlay}
          aria-label={playing ? `Pause ${project.title}` : `Play ${project.title}`}
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'rgba(255,255,255,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            opacity: playing ? 0 : 1,
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            pointerEvents: 'auto',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
      <h3 className="font-display" style={{ fontSize: '19px', fontWeight: 700, color: 'var(--paper)', marginTop: '18px', letterSpacing: '-0.01em' }}>
        {project.title}
      </h3>
      <p className="font-body" style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(247,242,234,0.55)', marginTop: '6px' }}>
        {project.description}
      </p>
    </div>
  );
}

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} style={{ backgroundColor: 'var(--ink)', paddingTop: '140px', paddingBottom: '140px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '56px' }}>
          <div>
            <div className="data-readout" style={{ marginBottom: '16px', color: 'var(--accent-cyan)' }}>
              Selected Work
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--paper)' }}>
              Some of my creations<br />and stories
            </h2>
          </div>
          <p className="font-body" style={{ fontSize: '14px', color: 'rgba(247,242,234,0.45)', maxWidth: '320px' }}>
            A mix of commercials, UGC, and short-form storytelling produced end-to-end with AI tools.
          </p>
        </div>

        <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {projects.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
