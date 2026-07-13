import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Luxury Bag UGC',
    category: 'Exotic Brand — User-Generated Content',
    description:
      'A cinematic UGC ad for a leading exotic luxury bag brand. Every frame highlights the meticulous craftsmanship, rich texture, and the quiet confidence of understated elegance.',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=900&h=1100&fit=crop&q=80',
  },
  {
    title: 'Amura Collection',
    category: 'Luxury Clothing Brand — Showcase',
    description:
      'A visual showcase for Amura, where contemporary design meets timeless tailoring. Each piece tells a story of refined craftsmanship and bold sophistication.',
    video: 'https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/fashion-showcase.mp4',
  },
  {
    title: 'Fashion Concert Runway',
    category: 'Live Runway — Music & Fashion',
    description:
      'An electrifying fashion concert runway where music and design collide. Models move to the rhythm, creating an immersive live experience that blurs the line between performance and art.',
    video: 'https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/fashion-concert.mp4',
  },
  {
    title: 'Folk Tale',
    category: 'African Drama — Coming of Age Story',
    description:
      "A spoilt Nigerian teenager falls for his secondary school teacher. She turns him down gently and tells him to channel that energy into his books. He listens. He graduates with a first class.",
    video: 'https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/folk-tale.mp4',
  },
  {
    title: 'Hotel UGC Ad',
    category: 'Palm Classic Hotel, Benin City',
    description:
      'A UGC ad for Palm Classic Hotel in Benin City. We captured the ambience, the poolside, the restaurant, and the kind of customer service that makes you want to book a stay.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=1100&fit=crop&q=80',
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
];

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
    <section id="portfolio" ref={sectionRef} style={{ backgroundColor: 'var(--paper)', paddingTop: '140px', paddingBottom: '140px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '56px' }}>
          <div>
            <div className="data-readout" style={{ marginBottom: '16px', color: 'var(--accent-red)' }}>
              Selected Work
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--ink)' }}>
              Some of my creations<br />and stories
            </h2>
          </div>
          <p className="font-body" style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '320px' }}>
            A mix of commercials, UGC, and short-form storytelling produced end-to-end with AI tools.
          </p>
        </div>

        <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {projects.map((project) => (
            <div key={project.title} className="portfolio-card" style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  aspectRatio: '4 / 5',
                  backgroundColor: 'var(--paper-alt)',
                }}
              >
                {project.video ? (
                  <video
                    src={project.video}
                    aria-label={project.title}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLVideoElement;
                      el.style.transform = 'scale(1.05)';
                      el.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLVideoElement;
                      el.style.transform = 'scale(1)';
                      el.pause();
                    }}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                  />
                )}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(247, 242, 234, 0.92)',
                    color: 'var(--ink)',
                    fontSize: '11px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    padding: '6px 12px',
                    borderRadius: '999px',
                  }}
                >
                  {project.category}
                </div>
              </div>
              <h3 className="font-display" style={{ fontSize: '19px', fontWeight: 700, color: 'var(--ink)', marginTop: '18px', letterSpacing: '-0.01em' }}>
                {project.title}
              </h3>
              <p className="font-body" style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', marginTop: '6px' }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
