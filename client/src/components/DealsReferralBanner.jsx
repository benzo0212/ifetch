import React from 'react';
import { Link } from 'react-router-dom';

export default function DealsReferralBanner() {
  return (
    <div className="deals-banner">
      <p>
        💸 <strong>Earn R170 per referral!</strong> Refer a friend who buys an
        iPhone.
      </p>

      <Link to="/referrals" className="deals-banner-link">
        How it works →
      </Link>
    </div>
  );
}
