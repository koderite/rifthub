import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const pills = ['AI Storytelling', 'Brand Films & UGC', 'Prompt Engineering'];

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-fade',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.1 }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'var(--paper)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '110px',
        paddingBottom: '60px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', paddingLeft: '24px', paddingRight: '24px' }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left - Text */}
          <div>
            <div className="hero-fade data-readout" style={{ marginBottom: '20px', color: 'var(--accent-cyan)' }}>
              Hey, I'm the creator behind
            </div>
            <h1
              className="hero-fade font-display"
              style={{
                fontSize: 'clamp(38px, 6vw, 76px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: 'var(--ink)',
                marginBottom: '28px',
              }}
            >
              Rift Stories —<br />
              AI Content Creator{' '}
              <span style={{ color: 'var(--accent-red)', fontStyle: 'italic' }}>&amp; Visual Storyteller</span>
            </h1>
            <p
              className="hero-fade font-body"
              style={{
                fontSize: '17px',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                maxWidth: '480px',
                marginBottom: '36px',
              }}
            >
              Transforming ideas into cinematic AI-generated films, commercials, and
              UGC-style content that captivates, engages, and delivers results for
              brands across TikTok, Reels, and YouTube.
            </p>

            <div className="hero-fade" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: 'var(--paper)',
                  backgroundColor: 'var(--ink)',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '14px 28px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-cyan)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--ink)'; }}
              >
                Contact Me →
              </button>
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: 'var(--ink)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border-strong)',
                  borderRadius: '999px',
                  padding: '14px 28px',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
              >
                View Work
              </button>
            </div>

            <div className="hero-fade" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="font-body"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.03em',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '999px',
                    padding: '8px 16px',
                    backgroundColor: 'var(--paper-alt)',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Portrait */}
          <div className="hero-fade" style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '24px 24px 50% 50%',
                overflow: 'hidden',
                aspectRatio: '4 / 5',
                backgroundColor: 'var(--paper-alt)',
                boxShadow: '0 30px 60px -20px rgba(28, 23, 18, 0.25)',
              }}
            >
              <img
                src="https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/bio.jpeg"
                alt="Rift Stories — AI content creator portrait"
                loading="eager"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '-24px',
                left: '-24px',
                backgroundColor: 'var(--ink)',
                color: 'var(--paper)',
                borderRadius: '18px',
                padding: '18px 22px',
                boxShadow: '0 20px 40px -10px rgba(28, 23, 18, 0.35)',
                maxWidth: '220px',
              }}
            >
              <div className="font-display" style={{ fontSize: '26px', fontWeight: 700 }}>4.2M+</div>
              <div className="font-body" style={{ fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.7, marginTop: '4px' }}>
                Views generated for clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
