import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Luxury Bag UGC',
    category: 'UGC / Luxury Goods',
    description: 'A cinematic UGC ad highlighting craftsmanship and understated elegance for a luxury bag brand.',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=900&h=1100&fit=crop&q=80',
  },
  {
    title: 'Amura Collection',
    category: 'Brand Showcase',
    description: 'A visual showcase where contemporary design meets timeless tailoring for the Amura label.',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&h=1100&fit=crop&q=80',
  },
  {
    title: 'Fashion Concert Runway',
    category: 'Live Runway',
    description: 'An electrifying runway film where music and design collide in an immersive live experience.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&h=1100&fit=crop&q=80',
  },
  {
    title: 'Folk Tale',
    category: 'African Drama',
    description: 'A coming-of-age short film about discipline, ambition, and channeling energy into what matters.',
    image: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=900&h=1100&fit=crop&q=80',
  },
  {
    title: 'Hotel UGC Ad',
    category: 'Hospitality',
    description: 'A UGC-style ad capturing the ambience and service of Palm Classic Hotel, Benin City.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=1100&fit=crop&q=80',
  },
  {
    title: 'Wonder Realm',
    category: 'Animated Storytelling',
    description: 'AI-powered animation bringing vibrant worlds and playful characters to life for all ages.',
    image: 'https://images.unsplash.com/photo-1617957710614-7d0cb90a00e8?w=900&h=1100&fit=crop&q=80',
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
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                />
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
