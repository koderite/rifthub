import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '98%', label: 'Brief Accuracy on First Cut' },
  { value: '4.2M+', label: 'Views Generated for Clients' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '3x', label: 'Average Engagement Lift' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 30 },
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
    <section
      ref={sectionRef}
      style={{ backgroundColor: 'var(--paper)', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <div
          className="hero-grid"
          style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '64px', alignItems: 'center' }}
        >
          {/* Left - Heading + copy */}
          <div>
            <div className="data-readout" style={{ marginBottom: '16px', color: 'var(--accent-cyan)' }}>
              By the Numbers
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, color: 'var(--ink)', marginBottom: '20px' }}>
              Crafting stories that actually convert
            </h2>
            <p className="font-body" style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '440px' }}>
              Every commercial, UGC ad, and short film is built around a clear
              creative brief and a measurable outcome — not just a pretty frame.
            </p>

            <div className="stats-grid-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '48px' }}>
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="font-display" style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em' }}>
                    {stat.value}
                  </div>
                  <div className="font-body" style={{ fontSize: '12px', letterSpacing: '0.03em', color: 'var(--text-muted)', marginTop: '6px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div
            style={{
              position: 'relative',
              borderRadius: '28px',
              overflow: 'hidden',
              aspectRatio: '4 / 3.4',
              boxShadow: 'var(--card-shadow, 0 30px 60px -25px rgba(28,23,18,0.25))',
            }}
          >
            <img
              src="https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/glass-bg.jpg"
              alt="Behind the scenes of an AI content production"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
