const packages = [
  {
    name: 'Single Story',
    tagline: 'One polished piece of content',
    features: [
      'One AI-generated commercial or UGC ad',
      'Script, prompt engineering & editing',
      'Delivered in vertical + square formats',
      '1 round of revisions',
    ],
    highlighted: false,
  },
  {
    name: 'Campaign Bundle',
    tagline: 'A connected set for a launch or push',
    features: [
      '3–5 pieces of content, one creative direction',
      'Character & scene continuity across pieces',
      'Optimized cuts for TikTok, Reels & YouTube',
      '2 rounds of revisions + priority turnaround',
    ],
    highlighted: true,
  },
  {
    name: 'Brand Partnership',
    tagline: 'Ongoing storytelling as you grow',
    features: [
      'Monthly content pipeline & content calendar',
      'Recurring commercials, UGC & short-form pieces',
      'Dedicated creative direction & reporting',
      'Unlimited revisions within scope',
    ],
    highlighted: false,
  },
];

export default function ServicesPackagesSection() {
  return (
    <section id="packages" style={{ backgroundColor: 'var(--paper-alt)', paddingTop: '140px', paddingBottom: '140px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '620px', marginBottom: '64px' }}>
          <div className="data-readout" style={{ marginBottom: '16px', color: 'var(--accent-cyan)' }}>
            What I Offer
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, color: 'var(--ink)' }}>
            Choose the shape of your next story
          </h2>
          <p className="font-body" style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', marginTop: '16px' }}>
            Every engagement is scoped around your brief — these are the three ways
            most brands work with me. Get in touch and we'll tailor the details.
          </p>
        </div>

        <div className="packages-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              style={{
                borderRadius: '20px',
                padding: '36px 32px',
                backgroundColor: pkg.highlighted ? 'var(--ink)' : 'var(--paper)',
                border: pkg.highlighted ? 'none' : '1px solid var(--border-subtle)',
                boxShadow: pkg.highlighted ? '0 30px 60px -25px rgba(28,23,18,0.4)' : 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h3
                className="font-display"
                style={{ fontSize: '22px', fontWeight: 700, color: pkg.highlighted ? 'var(--paper)' : 'var(--ink)', letterSpacing: '-0.01em' }}
              >
                {pkg.name}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: '13px', color: pkg.highlighted ? 'rgba(247,242,234,0.65)' : 'var(--text-muted)', marginTop: '8px', marginBottom: '28px' }}
              >
                {pkg.tagline}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-body"
                    style={{
                      fontSize: '13px',
                      lineHeight: 1.6,
                      color: pkg.highlighted ? 'rgba(247,242,234,0.85)' : 'var(--text-secondary)',
                      paddingTop: '10px',
                      paddingBottom: '10px',
                      borderTop: pkg.highlighted ? '1px solid rgba(247,242,234,0.12)' : '1px solid var(--border-subtle)',
                      display: 'flex',
                      gap: '10px',
                    }}
                  >
                    <span style={{ color: 'var(--accent-cyan)' }}>—</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  marginTop: '28px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  padding: '12px 20px',
                  borderRadius: '999px',
                  border: pkg.highlighted ? 'none' : '1px solid var(--border-strong)',
                  backgroundColor: pkg.highlighted ? 'var(--paper)' : 'transparent',
                  color: pkg.highlighted ? 'var(--ink)' : 'var(--ink)',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.75'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                Contact Me
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
