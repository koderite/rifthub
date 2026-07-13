import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What exactly is AI-generated content?',
    a: 'It\'s content — video, image, or motion — created with AI tools guided by human direction: scripting, prompt engineering, art direction, and editing. The craft is still entirely human; AI is the production tool.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A single piece usually takes 5–10 business days from brief to final delivery. Campaign bundles and ongoing partnerships run on a monthly cadence we agree on upfront.',
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes — every package includes revision rounds so the final piece matches your brief. Scope and round count are outlined before we start.',
  },
  {
    q: 'What platforms do you create for?',
    a: 'TikTok, Instagram Reels, Facebook, and YouTube are the most common, but every deliverable can be exported in whatever aspect ratio and format your channels need.',
  },
  {
    q: 'How do we get started?',
    a: 'Reach out through the contact form, WhatsApp, or Telegram with your goal and timeline. We\'ll scope the right package and get a creative brief moving within a day or two.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" style={{ backgroundColor: 'var(--paper)', paddingTop: '140px', paddingBottom: '140px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '64px' }}>
          <div>
            <div className="data-readout" style={{ marginBottom: '16px', color: 'var(--accent-red)' }}>
              Good to Know
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, color: 'var(--ink)' }}>
              Frequently asked questions
            </h2>
            <p className="font-body" style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', marginTop: '16px', maxWidth: '360px' }}>
              Can't find what you're after? Reach out directly — Contact links are in the footer.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                style={{ borderBottom: '1px solid var(--border-subtle)' }}
              >
                <AccordionTrigger
                  className="font-display"
                  style={{ fontSize: '17px', fontWeight: 600, color: 'var(--ink)', paddingTop: '22px', paddingBottom: '22px' }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="font-body"
                  style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', paddingBottom: '22px' }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
