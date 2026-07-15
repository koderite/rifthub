import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { category: 'COMMERCIALS', items: ['AI COMMERCIAL ADVERTISEMENTS', 'PRODUCT MARKETING CONTENT', 'HOTEL & HOSPITALITY PROMOTIONS'] },
  { category: 'VIDEO', items: ['AI UGC VIDEO CREATION', 'AI STORYTELLING & SHORT FILMS', 'AI IMAGE-TO-VIDEO PRODUCTION'] },
  { category: 'CREATIVE', items: ['CHARACTER & SCENE DEVELOPMENT', 'PROMPT ENGINEERING', 'SOCIAL MEDIA CONTENT CREATION'] },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const bio = bioRef.current;
    const servicesEl = servicesRef.current;

    if (!section || !heading || !bio || !servicesEl) return;

    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      // Heading entrance
      gsap.fromTo(
        heading,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Bio entrance
      gsap.fromTo(
        bio,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bio,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Services stagger
      const serviceItems = servicesEl.querySelectorAll('.service-category');
      gsap.fromTo(
        serviceItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesEl,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '140px',
        backgroundColor: 'var(--paper)',
      }}
    >
      <div style={{ paddingLeft: '24px', paddingRight: '24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          {/* Left Column - Heading + Profile Image */}
          <div>
            <div className="data-readout" style={{ marginBottom: '16px', color: 'var(--accent-cyan)' }}>
              Who's Behind the Camera
            </div>
            <h2
              ref={headingRef}
              className="font-display"
              style={{
                fontSize: 'clamp(26px, 3.5vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: 'var(--ink)',
              }}
            >
              Crafting meaningful stories &amp; <span style={{ color: 'var(--accent-red)' }}>intuitive content</span>
            </h2>

            <div
              style={{
                marginTop: '48px',
                position: 'relative',
                width: 'fit-content',
                margin: '48px 60px 0 auto',
              }}
            >
              <img
                src="https://bvhrxctzw3eenxbl.public.blob.vercel-storage.com/glass-bg.jpg"
                alt="Rift Hub — behind the scenes of an AI content shoot"
                loading="lazy"
                style={{
                  width: 'clamp(240px, 20vw, 340px)',
                  height: 'clamp(300px, 25vw, 420px)',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px -15px rgba(28, 23, 18, 0.3)',
                }}
              />
            </div>
          </div>

          {/* Right Column - Bio */}
          <div>
            <p
              ref={bioRef}
              className="font-body"
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                maxWidth: '540px',
              }}
            >
              I'm an AI Content Creator and Visual Storyteller specializing in creating cinematic 
              AI-generated videos, commercials, UGC-style content, product advertisements, and 
              engaging storytelling experiences for brands and businesses.
              <br /><br />
              I combine creative direction, prompt engineering, AI image generation, AI video 
              production, and editing to transform ideas into high-quality content optimized for 
              TikTok, Instagram Reels, Facebook, and YouTube.
              <br /><br />
              My work focuses on helping brands capture attention, increase engagement, and 
              communicate their message through visually compelling content that feels professional, 
              modern, and memorable.
            </p>

            <p
              className="font-body"
              style={{
                fontSize: '12px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                marginTop: '24px',
              }}
            >
              Creator at Rift Hub
            </p>

            {/* CTA */}
            <button
              className="font-body link-underline"
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                marginTop: '40px',
                fontSize: '13px',
                letterSpacing: '0.02em',
                color: 'var(--accent-cyan)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Let's Talk
              <span style={{ fontSize: '16px' }}>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div
          ref={servicesRef}
          className="services-grid"
          style={{
            marginTop: '100px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
          }}
        >
          {services.map((service, catIndex) => (
            <div key={catIndex} className="service-category">
              <div
                className="font-display"
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border-subtle)',
                  marginBottom: '16px',
                }}
              >
                {service.category}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="font-body"
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      transition: 'color 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = 'var(--accent-cyan)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = 'var(--text-muted)';
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
