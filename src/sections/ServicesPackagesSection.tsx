import { useState, type FormEvent } from 'react';

const serviceCategories = [
  {
    label: 'Video',
    color: 'var(--accent-cyan)',
    colorSoft: 'var(--accent-cyan-soft)',
    services: [
      'Short-Form Video (TikTok / Reels / Shorts)',
      'Brand Story Film',
      'AI-Generated Cinematic Video',
      'Documentary-Style Content',
    ],
  },
  {
    label: 'Creative',
    color: 'var(--accent-red)',
    colorSoft: 'var(--accent-red-soft)',
    services: [
      'UGC-Style Creative Content',
      'Prompt Engineering & AI Art Direction',
      'Script & Concept Development',
      'Animated Storytelling',
    ],
  },
  {
    label: 'Commercials',
    color: 'var(--ink)',
    colorSoft: 'rgba(28,23,18,0.08)',
    services: [
      'Product Commercial',
      'Brand Commercial (30–60s)',
      'Social Media Ad Campaign',
      'Event / Launch Promo',
    ],
  },
];

export default function ContactFormSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || selectedServices.length === 0) return;
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "44583642-4009-4cb2-a2ec-591a517a59d1");
    formData.append("services", selectedServices.join(", "));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        console.error("Web3Form error:", data);
        setSubmitting(false);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: 'var(--ink)',
    backgroundColor: 'var(--paper)',
    border: '1px solid var(--border-strong)',
    borderRadius: '12px',
    padding: '14px 18px',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxSizing: 'border-box' as const,
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--paper-alt)',
        paddingTop: '140px',
        paddingBottom: '140px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Header */}
        <div
          className="contact-form-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '80px',
            alignItems: 'flex-start',
          }}
        >
          {/* Left - label + intro */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div className="data-readout" style={{ marginBottom: '16px', color: 'var(--accent-cyan)' }}>
              Get In Touch
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 4vw, 52px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: 'var(--ink)',
                marginBottom: '24px',
              }}
            >
              Let's build your next story
            </h2>
            <p
              className="font-body"
              style={{
                fontSize: '15px',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                maxWidth: '380px',
                marginBottom: '40px',
              }}
            >
              Pick the services you need, drop your details, and I'll come back to you within 24 hours
              with ideas and a tailored quote.
            </p>

            {/* Quick service legend */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {serviceCategories.map((cat) => (
                <div key={cat.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: cat.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="font-body"
                    style={{ fontSize: '13px', color: 'var(--text-secondary)' }}
                  >
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - form */}
          <div>
            {submitted ? (
              <div
                style={{
                  borderRadius: '24px',
                  backgroundColor: 'var(--paper)',
                  border: '1px solid var(--border-subtle)',
                  padding: '64px 48px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-cyan-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display" style={{ fontSize: '26px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>
                  Message received!
                </h3>
                <p className="font-body" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Thanks, {name}. I'll review your request and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                {/* Service picker */}
                <div>
                  <div
                    className="font-body"
                    style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px' }}
                  >
                    What do you need? (select all that apply)
                  </div>
                  {serviceCategories.map((cat) => (
                    <div key={cat.label} style={{ marginBottom: '20px' }}>
                      <div
                        className="font-display"
                        style={{ fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', color: cat.color, marginBottom: '10px', fontWeight: 600 }}
                      >
                        {cat.label}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {cat.services.map((service) => {
                          const active = selectedServices.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '13px',
                                padding: '8px 16px',
                                borderRadius: '999px',
                                border: `1px solid ${active ? cat.color : 'var(--border-subtle)'}`,
                                backgroundColor: active ? cat.colorSoft : 'var(--paper)',
                                color: active ? cat.color : 'var(--text-secondary)',
                                cursor: 'pointer',
                                transition: 'all 0.18s ease',
                                fontWeight: active ? 600 : 400,
                              }}
                            >
                              {active && <span style={{ marginRight: '6px' }}>✓</span>}
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Name + Email row */}
                <div
                  className="contact-fields-row"
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
                >
                  <div>
                    <label className="font-body" style={{ display: 'block', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-cyan-soft)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <div>
                    <label className="font-body" style={{ display: 'block', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-cyan-soft)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.boxShadow = 'none'; }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-body" style={{ display: 'block', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    Tell me about your project
                  </label>
                  <textarea
                    id="contact-message"
                      placeholder="What's your idea? Who's your audience? Any deadlines?"
                      name="message"
                      value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-cyan-soft)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>

                {/* Submit */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                  <p className="font-body" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    * Required fields. I'll respond within 24 hours.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting || selectedServices.length === 0 || !name || !email}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--paper)',
                      backgroundColor: submitting ? 'var(--ink-soft)' : 'var(--ink)',
                      border: 'none',
                      borderRadius: '999px',
                      padding: '14px 32px',
                      cursor: submitting ? 'wait' : 'pointer',
                      opacity: (selectedServices.length === 0 || !name || !email) ? 0.5 : 1,
                      transition: 'background-color 0.2s ease, opacity 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = 'var(--accent-cyan)'; }}
                    onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = 'var(--ink)'; }}
                  >
                    {submitting ? (
                      <>
                        <span style={{ display: 'inline-block', width: '14px', height: '14px', border: '2px solid rgba(247,242,234,0.4)', borderTopColor: 'var(--paper)', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                        Sending…
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .contact-form-layout {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .contact-form-layout > div:first-child {
            position: static !important;
          }
          .contact-fields-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
