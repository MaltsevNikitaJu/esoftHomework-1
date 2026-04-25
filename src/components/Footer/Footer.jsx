import "./Footer.css";

export default function Footer() {
  const aboutLinks = ["About us", "Careers", "Press"];
  const supportLinks = ["FAQ", "Shipping", "Returns", "Contact"];
  const legalLinks = ["Privacy Policy", "Terms of Service"];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>About</h3>
            {aboutLinks.map((item) => (
              <a key={item} href="#" onClick={(e) => e.preventDefault()}>
                {item}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            {supportLinks.map((item) => (
              <a key={item} href="#" onClick={(e) => e.preventDefault()}>
                {item}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            {legalLinks.map((item) => (
              <a key={item} href="#" onClick={(e) => e.preventDefault()}>
                {item}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3>Newsletter</h3>
            <div className="newsletter-row">
              <input type="email" placeholder="Email address" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          © 2026 TechStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
