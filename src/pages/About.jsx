import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function About() {
  const aboutSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://rbmarblemakrana.shop/about"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://rbmarblemakrana.shop/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://rbmarblemakrana.shop/about"
        }
      ]
    }
  ];

  return (
    <main>
      <SEO 
        title="About Us | RB Marble Makrana Rajasthan"
        description="Learn more about RB Marble, a trusted name in the marble industry. We specialize in Makrana Marble, Temples, Qibla Work, and Handicrafts."
        url="https://rbmarblemakrana.shop/about"
        keywords="About RB Marble, Makrana Marble Experts, Marble Craftsmen, Makrana Marble Exporter"
        schemas={aboutSchemas}
      />
      <section className="page-hero">
        <h1>About Us</h1>
        <p className="crumb"><Link to="/">Home</Link><span className="sep">›</span>About Us</p>
      </section>

      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2>Welcome to <br/>Rb Marble</h2>
            <p>We are a trusted name in the marble industry, specializing in a wide range of marble products including Makrana Marble, Temples, Qibla Work, Handicrafts, and more.</p>
            <p>Our mission is to provide premium quality marble items with excellent craftsmanship and customer satisfaction.</p>
            <a href="#contact" className="btn">Contact Us →</a>
          </div>
          <img src="/about-stockyard.png" alt="Marble slab stockyard" style={{ aspectRatio: '4/3', borderRadius: '8px', margin: '8px', objectFit: 'cover', width: 'calc(100% - 16px)' }} loading="lazy" />
        </div>
      </div>

      <section className="why-section">
        <div className="container">
          <div className="section-title"><h2>Why Choose Us</h2></div>
          <div className="why-grid">
            <div className="why-card">
              <span className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
              </span>
              <h4>Premium Quality</h4>
              <p>We use only the finest quality marble.</p>
            </div>
            <div className="why-card">
              <span className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              </span>
              <h4>Skilled Craftsmanship</h4>
              <p>Expert artisans with years of experience.</p>
            </div>
            <div className="why-card">
              <span className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>
              </span>
              <h4>Custom Orders</h4>
              <p>We make products as per your requirements.</p>
            </div>
            <div className="why-card">
              <span className="feat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 7h11v9H3z"/><path d="M14 11h4l3 3v2h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>
              </span>
              <h4>Timely Delivery</h4>
              <p>On-time delivery with safe packaging.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-include">
        <div className="container">
          <div className="section-title"><h2>Our Products Include</h2></div>
          <ul className="include-grid">
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg> Makrana Marble Slabs &amp; Tiles</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg> Marble Inlay Work Design</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg> Marble Temples &amp; Masjid Mimbers</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg> Stairs Marble Ralling Design</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg> Qibla Work</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg> Marble Tambli Stairs Ralling</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg> Handicrafts or Artificial Items</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg> Fountains</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg> Tulsi Pots</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg> Many More Items On Demand</li>
          </ul>
        </div>
      </section>

      <section className="build-band" id="contact">
        <div className="text">
          <h3>Let's Build Something Beautiful</h3>
          <p>Have a requirement in mind? Contact us now for the best marble solutions.</p>
          <a href="tel:+919680333942" className="btn">Contact Us →</a>
        </div>
        <img src="/image.png" alt="Marble archway craftsmanship" className="build-band-img" />
      </section>
    </main>
  );
}

export default About;
