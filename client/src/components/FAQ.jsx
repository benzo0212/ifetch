import React, { useState } from 'react';

const FAQ_DATA = [
  {
    id: 'deliveries',
    q: 'Which delivery providers do you use?',
    a: (
      <>
        We use <strong>Paxi</strong> and <strong>PostNet</strong> for secure,
        nationwide delivery. You may choose branch collection or door-to-door
        delivery. All parcels are trackable for peace of mind.
      </>
    )
  },
  {
    id: 'delivery-time',
    q: 'How long does delivery take?',
    a: (
      <>
        Delivery typically takes <strong>1–3 business days</strong> within
        South Africa. Tracking details are shared as soon as your device is
        dispatched.
      </>
    )
  },
  {
    id: 'returns',
    q: 'What is your return policy?',
    a: (
      <>
        We offer a <strong>30-day return window</strong>. Devices must be
        returned in the same condition as sold, including accessories.
        This ensures fairness for all customers.
      </>
    )
  },
  {
    id: 'payments',
    q: 'What payment methods do you accept?',
    a: (
      <>
        We accept <strong>Cash on collection</strong> and flexible
        <strong> layby options (2 or 3 months)</strong>.
        This allows you to secure your phone without financial pressure.
        <br />
        <br />
        Need another arrangement? Contact us directly.
      </>
    )
  },
  {
    id: 'trust',
    q: 'Why buy from iFetch?',
    a: (
      <>
        Every phone is <strong>tested, verified, and transparently sold</strong>.
        No blacklisted devices, no surprises.
        <br />
        <br />
        📲 Need help deciding?{' '}
        <a
          href="https://wa.me/27684263240"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat with us on WhatsApp
        </a>
      </>
    )
  },
  {
    id: 'contact',
    q: 'How do I contact the dealer?',
    a: (
      <>
        📞 Call: <strong>+27 68 426 3240</strong>
        <br />
        💬 WhatsApp:{' '}
        <a
          href="https://wa.me/27684263240"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start chat
        </a>
      </>
    )
  }
];

export default function FAQ({ allowMultiple = false }) {
  const [openIds, setOpenIds] = useState([]);

  const toggle = (id) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <div className="container section">
      <h1>Frequently Asked Questions</h1>
      <p className="text-muted">
        Everything you need to know before buying from iFetch.
      </p>

      <div
        className="faq"
        role="list"
        aria-label="Frequently Asked Questions"
      >
        <div className="faq-columns">
          {FAQ_DATA.map((item) => {
            const isOpen = openIds.includes(item.id);
            const panelId = `panel-${item.id}`;
            const btnId = `btn-${item.id}`;

            return (
              <div className="faq-item" key={item.id}>
                <button
                  id={btnId}
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                >
                  <span>{item.q}</span>
                  <span aria-hidden>{isOpen ? '−' : '+'}</span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className="faq-panel"
                  aria-hidden={!isOpen}
                >
                  <div
                    style={{
                      marginTop: '0.5rem',
                      color: 'var(--muted)'
                    }}
                  >
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
