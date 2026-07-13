/**
 * RIFT STORIES Design System
 *
 * Single source of truth for design tokens, component patterns,
 * and conventions used across the project. Light-only editorial
 * palette: warm cream paper, ink type, cyan + red as considered
 * accents rather than neon highlights.
 */

/* ─── Colors ─────────────────────────────────── */
export const colors = {
  paper: '#f7f2ea',
  paperAlt: '#efe7d8',
  ink: '#1c1712',
  cyan: '#0e8f9c',
  cyanSoft: 'rgba(14, 143, 156, 0.12)',
  red: '#b8232f',
  redSoft: 'rgba(184, 35, 47, 0.1)',
  borderSubtle: 'rgba(28, 23, 18, 0.1)',
  borderStrong: 'rgba(28, 23, 18, 0.18)',
  textPrimary: '#1c1712',
  textSecondary: 'rgba(28, 23, 18, 0.75)',
  textMuted: 'rgba(28, 23, 18, 0.55)',
  textDim: 'rgba(28, 23, 18, 0.4)',
  bgElevated: 'rgba(28, 23, 18, 0.03)',
} as const;

/* ─── Font Family ────────────────────────────── */
export const fonts = {
  display: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
} as const;

/* ─── Typography Scale ───────────────────────── */
export const typeScale = {
  dataReadout: {
    fontFamily: fonts.body,
    fontSize: '11px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: colors.textDim,
  },
  overline: {
    fontFamily: fonts.body,
    fontSize: '12px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: colors.textMuted,
  },
  eyebrow: {
    fontFamily: fonts.body,
    fontSize: '13px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  body: {
    fontFamily: fonts.body,
    fontSize: '16px',
    lineHeight: 1.8,
    color: colors.textSecondary,
  },
  h2: {
    fontFamily: fonts.display,
    fontSize: 'clamp(30px, 4.5vw, 60px)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    color: colors.ink,
  },
  h3: {
    fontFamily: fonts.display,
    fontSize: 'clamp(26px, 4vw, 48px)',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.15,
    color: colors.ink,
  },
} as const;

/* ─── Spacing ────────────────────────────────── */
export const spacing = {
  sectionVertical: '140px',
  sectionPaddingX: '40px',
  sectionPaddingXMobile: '24px',
  gridGapLg: '80px',
  gridGapMd: '40px',
  gridGapSm: '24px',
} as const;

/* ─── Layout ─────────────────────────────────── */
export const layout = {
  maxWidth: '1280px',
  maxWidthNarrow: '1080px',
  container: { maxWidth: '1280px', margin: '0 auto', paddingLeft: spacing.sectionPaddingX, paddingRight: spacing.sectionPaddingX },
} as const;

/* ─── Borders & Dividers ─────────────────────── */
export const borders = {
  sectionDivider: { height: '1px', width: '100%', backgroundColor: colors.borderSubtle },
  subtleBottom: { borderBottom: `1px solid ${colors.borderSubtle}` },
} as const;

/* ─── Effects ────────────────────────────────── */
export const effects = {
  transitionColor: { transition: 'color 0.2s ease' },
  cardShadow: '0 2px 24px rgba(28, 23, 18, 0.06)',
} as const;

/* ─── Animations (GSAP defaults) ─────────────── */
export const animation = {
  duration: { fast: 0.6, normal: 0.8, slow: 1 },
  ease: { out: 'power3.out' },
  scrollTrigger: { start: 'top 80%', toggleActions: 'play none none none' },
  stagger: { fast: 0.1, normal: 0.15 },
  from: { up: { opacity: 0, y: 60 }, fade: { opacity: 0, y: 40 }, subtle: { opacity: 0, y: 30 } },
  to: { visible: { opacity: 1, y: 0 } },
} as const;

/* ─── Responsive Breakpoints ─────────────────── */
export const breakpoints = {
  mobile: '320px',
  tablet: '640px',
  desktop: '1024px',
  large: '1280px',
} as const;

export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.tablet})`,
  tablet: `(min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  large: `(min-width: ${breakpoints.large})`,
  reducedMotion: '(prefers-reduced-motion: reduce)',
} as const;

/* ─── Usage Guide ──────────────────────────────
 *
 *   import { colors, fonts, spacing } from '@/design-system'
 *
 *   <section style={{ backgroundColor: colors.paper, ...spacing }}>
 *     <h2 className="font-display" style={typeScale.h2}>Title</h2>
 *   </section>
 *
 * ──────────────────────────────────────────────── */
