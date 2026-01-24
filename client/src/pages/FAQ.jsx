import React from 'react';
import { Link } from 'react-router-dom';

export default function FAQ(){
  return (
    <div style={{maxWidth:900, margin:'0 auto', padding:8}}>
      <h1>Frequently Asked Questions (FAQ)</h1>
      <p style={{color:'var(--muted)'}}>Answers to common questions about deliveries, returns, payment methods and more.</p>

      <section style={{marginTop:20}}>
        <h2>Deliveries</h2>
        <div style={{background:'var(--card)',padding:12,borderRadius:10,boxShadow:'0 6px 18px rgba(15,23,42,0.04)'}}>
          <h3>Which delivery providers do you use?</h3>
          <p>We offer Paxi, Courier Guy and PostNet for deliveries. You can choose either during checkout or when arranging the sale. Both providers allow you to collect from a nearby branch or have the item delivered to an address.</p>
          <div style={{display:'flex', gap:12, alignItems:'center', marginTop:8}}>
            <img src="/assets/paxi-logo.png" alt="Paxi logo" style={{height:40}}/>
            <img src="/assets/postnet-logo.png" alt="PostNet logo" style={{height:40}}/>
            <img src="/assets/courier-guy-logo.png" alt="Courier Guy logo" style={{height:40}}/>
          </div>

          <h3 style={{marginTop:12}}>How long does delivery take?</h3>
          <p>Typical delivery time is 3-5 business days within South Africa depending on the provider and destination. You will receive tracking details once the parcel is dispatched.</p>

          <h3 style={{marginTop:12}}>Do you ship internationally?</h3>
          <p>Currently we only ship within South Africa via Paxi or PostNet. For special international requests please contact the dealer directly.</p>
        </div>
      </section>

      <section style={{marginTop:20}}>
        <h2>Returns & Warranty</h2>
        <div style={{background:'var(--card)',padding:12,borderRadius:10,boxShadow:'0 6px 18px rgba(15,23,42,0.04)'}}>
          <h3>What is your return policy?</h3>
          <p>We accept returns within 30 days of purchase. The phone must be returned in the same condition it was sold in, with included accessories. A restocking fee may apply if the product is returned with significant damage.</p>

          <h3 style={{marginTop:12}}>How do I request a return?</h3>
          <p>Contact us via WhatsApp or phone (see footer). Provide your order reference and the reason for return. We will guide you through the return process and provide instructions for shipping or drop-off.</p>
        </div>
      </section>

      <section style={{marginTop:20}}>
        <h2>Payments</h2>
        <div style={{background:'var(--card)',padding:12,borderRadius:10,boxShadow:'0 6px 18px rgba(15,23,42,0.04)'}}>
          <h3>What payment methods do you accept?</h3>
          <p>We accept Cash on collection and layby options (2-month or 3-month layby). For layby purchases, a deposit may be required and the phone will be released once full payment is received.</p>

          <h3 style={{marginTop:12}}>Can I pay via EFT or card?</h3>
          <p>At the moment we primarily accept cash and layby. For card or EFT options please contact the dealer to make arrangements.</p>
        </div>
      </section>

      <section style={{marginTop:20}}>
        <h2>Contact & Support</h2>
        <div style={{background:'var(--card)',padding:12,borderRadius:10,boxShadow:'0 6px 18px rgba(15,23,42,0.04)'}}>
          <h3>How do I contact the dealer?</h3>
          <p>Call: <a href="tel:+27684263240">+27 68 426 3240</a></p>
          <p>WhatsApp: <a href="https://wa.me/27684263240" target="_blank" rel="noreferrer">Message on WhatsApp</a></p>
          <p>Social: Use the social links in the footer to reach out on Facebook or Instagram.</p>
        </div>
      </section>

      <div style={{marginTop:24}}>
        <Link to="/" className="button secondary" style={{textDecoration:'none'}}>Back to shop</Link>
      </div>
    </div>
  );
}
