import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.manifesto-fade',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--ink)',
        overflow: 'hidden',
        padding: '120px 24px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/reveal.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.22,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <div className="manifesto-fade data-readout" style={{ color: 'var(--accent-cyan)', marginBottom: '24px' }}>
          The Belief
        </div>
        <h2
          className="manifesto-fade font-display"
          style={{
            fontSize: 'clamp(32px, 7vw, 88px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            color: 'var(--paper)',
          }}
        >
          Human emotion,<br />
          told through <span style={{ color: 'var(--accent-red)' }}>AI craft</span>.
        </h2>
        <p
          className="manifesto-fade font-body"
          style={{
            marginTop: '28px',
            fontSize: '16px',
            lineHeight: 1.8,
            color: 'rgba(247, 242, 234, 0.7)',
            maxWidth: '560px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Technology is only the toolset. The stories still need a point of view -
          that's where every project starts.
        </p>
      </div>
    </section>
  );
}
