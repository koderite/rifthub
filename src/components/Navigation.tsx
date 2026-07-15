import { useEffect, useRef, useState } from 'react';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const linkStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    letterSpacing: '0.03em',
    color: 'var(--text-secondary)',
    background: 'none' as const,
    border: 'none' as const,
    cursor: 'pointer' as const,
    transition: 'color 0.2s ease',
  };

  const links = (
    <>
      <button onClick={() => scrollTo('portfolio')} style={linkStyle} className="link-underline">
        Portfolio
      </button>
      <button onClick={() => scrollTo('about')} style={linkStyle} className="link-underline">
        About
      </button>
      <button onClick={() => scrollTo('faq')} style={linkStyle} className="link-underline">
        FAQ
      </button>
    </>
  );

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full z-[1000] transition-all duration-300"
      style={{
        height: '84px',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        backgroundColor: scrolled ? 'rgba(247, 242, 234, 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <div className="flex items-center justify-between h-full px-4 md:px-10">
        <span
          className="font-display text-sm tracking-[0.02em] cursor-pointer flex items-center gap-2"
          style={{ color: 'var(--text-primary)', fontWeight: 700 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          aria-label="Scroll to top"
        >
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--accent-red)', display: 'inline-block' }} />
          Rift Hub
        </span>

        <div className="hidden md:flex items-center gap-10">
          {links}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:inline-flex items-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              letterSpacing: '0.02em',
              color: 'var(--paper)',
              backgroundColor: 'var(--ink)',
              border: 'none',
              borderRadius: '999px',
              padding: '10px 22px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, background-color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-cyan)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--ink)'; }}
          >
            Contact Me
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              flexDirection: 'column',
              gap: '5px',
              padding: '8px',
            }}
          >
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: 'var(--text-primary)', transition: 'all 0.3s ease', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: 'var(--text-primary)', transition: 'all 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: 'var(--text-primary)', transition: 'all 0.3s ease', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          top: '84px',
          left: 0,
          width: '100%',
          height: menuOpen ? 'calc(100vh - 84px)' : '0',
          backgroundColor: 'rgba(247, 242, 234, 0.98)',
          backdropFilter: 'blur(12px)',
          overflow: 'hidden',
          transition: 'height 0.35s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          zIndex: 999,
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          ✕
        </button>
        {[
          { label: 'Portfolio', id: 'portfolio' },
          { label: 'About', id: 'about' },
          { label: 'FAQ', id: 'faq' },
          { label: 'Contact', id: 'contact' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="font-display"
            style={{
              fontSize: '28px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
