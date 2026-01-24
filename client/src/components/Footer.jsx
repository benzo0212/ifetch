// client/src/components/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        {/* BRANDING + TRUST OF CUSTOMERS*/}
        <div>
          <div className="brand">
            <img src="/assets/logo-ifetch.png" alt="iFetch logo" />
            <div>
              <h4>iFetch</h4>
              <p>Premium pre-loved iPhones</p>
            </div>
          </div>

          <ul className="footer-trust">
            <li>✔ Devices tested & verified</li>
            <li>✔ 30-day return policy</li>
            <li>✔ Nationwide delivery</li>
            <li>✔ WhatsApp support</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4>Quick Links</h4>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/faq">FAQ</Link></p>
        </div>

        {/* HELP & POLICIES THROUGH FAQ */}
        <div>
          <h4>Help</h4>
          <p><Link to="/faq">Delivery Info</Link></p>
          <p><Link to="/faq">Returns & Refunds</Link></p>
          <p><Link to="/faq">Payment Options</Link></p>
        </div>

        {/* CONTACT & SOCIAL */}
        <div>
          <h4>Contact</h4>
          <p>📞 <a href="tel:+27684263240">+27 68 426 3240</a></p>
          <p>🕘 Mon–Sat: 7am – 7pm</p>
          <p>📧 <a href="mailto:thabodoctor69@gmail.com">thabodoctor69@gmail.com</a></p>

          <div className="socials">
            <a
              href="https://wa.me/27684263240"
              target="_blank"
              aria-label="Chat on WhatsApp"
            >
              <img src="/assets/whatsapp-icon.png" alt="WhatsApp" />
            </a>

            <a
              href="https://www.facebook.com/katleho.rakometsi.79"
              target="_blank"
              aria-label="Facebook"
            >
              <img src="/assets/facebook-icon.png" alt="Facebook" />
            </a>

            <a
              href="https://instagram.com/benzo.69"
              target="_blank"
              aria-label="Instagram"
            >
              <img src="/assets/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="foot-bottom">
          © {new Date().getFullYear()} iFetch. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
