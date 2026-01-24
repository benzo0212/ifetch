import React from 'react';

export default function ReferralProgram() {
  return (
    <div className="container section referral-page">
      <img
        src="/assets/logo-ifetch.png"
        alt="iFetch logo"
        className="referral-logo"
      />

      <h1>Earn R170 a Day – Just Refer a Friend 📱</h1>

      <p className="lead">
        Know someone looking for a quality second-hand iPhone?
        Turn that connection into cash 💸
      </p>

      <h2>How Does It Work?</h2>

      <ul className="referral-steps">
        <li>👥 Refer a friend who wants an iPhone</li>
        <li>💰 Get <strong>R170 instantly</strong> when they pay cash</li>
        <li>⏳ If they use lay-by, you get paid once payments finish</li>
        <li>🚫 No limit — the more referrals, the more you earn</li>
      </ul>

      <div className="referral-cta">
        <h3>Interested?</h3>
        <p>
          WhatsApp us now and start stacking cash.
        </p>

        <a
          href="https://wa.me/27684263240?text=Hi%20iFetch%2C%20I%20want%20to%20join%20the%20referral%20program"
          target="_blank"
          rel="noopener noreferrer"
          className="button primary"
        >
          Join via WhatsApp
        </a>
      </div>
    </div>
  );
}
