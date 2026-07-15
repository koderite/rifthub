import { useRef, useState } from 'react';

const footerLinkStyle = {
  fontSize: '11px',
  letterSpacing: '0.05em',
  textTransform: 'uppercase' as const,
  color: 'var(--text-muted)',
  textDecoration: 'none' as const,
  transition: 'color 0.2s ease',
};

const onEnterCyan = (e: React.MouseEvent<HTMLElement>) => {
  (e.target as HTMLElement).style.color = 'var(--accent-cyan)';
};
const onLeaveMuted = (e: React.MouseEvent<HTMLElement>) => {
  (e.target as HTMLElement).style.color = 'var(--text-muted)';
};

export default function Footer() {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [lineScale, setLineScale] = useState(0);

  return (
    <footer
      style={{
        position: 'relative',
        minHeight: '640px',
        backgroundColor: 'var(--paper-alt)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '1px solid var(--border-subtle)',
        padding: '80px 24px 140px',
      }}
    >
      <div className="data-readout" style={{ marginBottom: '20px', color: 'var(--accent-red)' }}>
        Let's Work Together
      </div>

      {/* Main CTA */}
      <a
        ref={linkRef}
        href="mailto:riftstories@outlook.com"
        className="font-display"
        onMouseEnter={() => setLineScale(1)}
        onMouseLeave={() => setLineScale(0)}
        style={{
          fontSize: 'clamp(32px, 7vw, 96px)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          textDecoration: 'none',
          position: 'relative',
          display: 'inline-block',
          textAlign: 'center',
        }}
      >
        Send us a Message
        <span
          style={{
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: 'var(--accent-cyan)',
            transform: `scaleX(${lineScale})`,
            transformOrigin: 'left center',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </a>

      <p
        className="font-body"
        style={{
          marginTop: '32px',
          fontSize: '14px',
          color: 'var(--text-muted)',
          letterSpacing: '0.02em',
        }}
      >
        Let's create something extraordinary together
      </p>

      {/* Bottom Navigation */}
      <div
        className="footer-bottom"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '24px',
          right: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        {/* Left links */}
        <div className="footer-links" style={{ display: 'flex', gap: '40px' }}>
          <a href="#portfolio" className="font-body" style={footerLinkStyle} onMouseEnter={onEnterCyan} onMouseLeave={onLeaveMuted}>
            Works
          </a>
          <a href="#about" className="font-body" style={footerLinkStyle} onMouseEnter={onEnterCyan} onMouseLeave={onLeaveMuted}>
            About
          </a>
          <a href="#contact" className="font-body" style={footerLinkStyle} onMouseEnter={onEnterCyan} onMouseLeave={onLeaveMuted}>
            Contact
          </a>
        </div>

        {/* Center - socials */}
        <div className="footer-socials" style={{ display: 'flex', gap: '40px' }}>
          <a
            href="https://www.instagram.com/rift.stories?igsh=MTFkN3Y3N2Fsa2pnOA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            style={footerLinkStyle}
            onMouseEnter={onEnterCyan}
            onMouseLeave={onLeaveMuted}
          >
            Instagram
          </a>
          <a
            href="https://youtube.com/@riftstories_1?si=sX5fCVOQE0A3ZinP"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            style={footerLinkStyle}
            onMouseEnter={onEnterCyan}
            onMouseLeave={onLeaveMuted}
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/share/1LJKHAa557/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            style={footerLinkStyle}
            onMouseEnter={onEnterCyan}
            onMouseLeave={onLeaveMuted}
          >
            Facebook
          </a>
          <a
            href="https://www.tiktok.com/@riftstories1?_r=1&_t=ZN-9737y3PFu46"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            style={footerLinkStyle}
            onMouseEnter={onEnterCyan}
            onMouseLeave={onLeaveMuted}
          >
            TikTok
          </a>
          <a
            href="mailto:riftstories@outlook.com"
            className="font-body"
            style={footerLinkStyle}
            onMouseEnter={onEnterCyan}
            onMouseLeave={onLeaveMuted}
          >
            Email
          </a>
        </div>

        {/* Right - year */}
        <span className="data-readout" style={{ color: 'var(--text-dim)' }}>
          &copy; 2024&ndash;2026
        </span>
      </div>
    </footer>
  );
}
