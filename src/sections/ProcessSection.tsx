import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Concept & Script',
    desc: 'We define the brief, audience, and hook — then write a script built for the first three seconds.',
  },
  {
    num: '02',
    title: 'AI Production & Editing',
    desc: 'Prompt engineering, AI image and video generation, and hands-on editing bring the concept to life.',
  },
  {
    num: '03',
    title: 'Refine & Deliver',
    desc: 'Color, sound, and pacing are polished, then exported in every format your platforms need.',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-step',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} style={{ backgroundColor: 'var(--paper-alt)', paddingTop: '140px', paddingBottom: '140px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '620px', marginBottom: '72px' }}>
          <div className="data-readout" style={{ marginBottom: '16px', color: 'var(--accent-red)' }}>
            How It Works
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, color: 'var(--ink)' }}>
            A streamlined process for cinematic content
          </h2>
        </div>

        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
          {steps.map((step) => (
            <div key={step.num} className="process-step" style={{ borderTop: '1px solid var(--border-strong)', paddingTop: '28px' }}>
              <div
                className="font-display"
                style={{ fontSize: '13px', color: 'var(--accent-cyan)', letterSpacing: '0.05em', marginBottom: '20px' }}
              >
                {step.num}
              </div>
              <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.01em' }}>
                {step.title}
              </h3>
              <p className="font-body" style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
