import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Home() {
  const homeSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "RB Marble Makrana",
      "url": "https://rbmarblemakrana.shop",
      "logo": "https://rbmarblemakrana.shop/logo.png",
      "description": "Premium Makrana Marble Manufacturer and Supplier in Rajasthan.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9680333942",
        "contactType": "Customer Service",
        "areaServed": ["IN", "Global"],
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.instagram.com/rb_marble_makrana/",
        "https://www.facebook.com/rbmarblemakrana"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "RB Marble Makrana",
      "image": "https://rbmarblemakrana.shop/cta-bg.png",
      "url": "https://rbmarblemakrana.shop",
      "telephone": "+919680333942",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Makrana Road",
        "addressLocality": "Makrana",
        "addressRegion": "Rajasthan",
        "postalCode": "341505",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 27.0319,
        "longitude": 74.7214
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://rbmarblemakrana.shop/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://rbmarblemakrana.shop/products?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Makrana Marble?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Makrana marble is a type of white marble, known for its premium quality, high water resistance, and durability, famously used in the Taj Mahal."
          }
        },
        {
          "@type": "Question",
          "name": "Are you a manufacturer of Makrana Marble?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, RB Marble Makrana is a direct manufacturer and supplier of premium Makrana marble slabs, tiles, and custom temple designs based in Rajasthan."
          }
        }
      ]
    }
  ];

  return (
    <main>
      <SEO 
        title="Premium Makrana Marble Manufacturer | RB Marble Rajasthan"
        description="RB Marble is a leading Makrana marble manufacturer and supplier in Rajasthan. We offer premium white marble slabs, tiles, and custom temple construction."
        url="https://rbmarblemakrana.shop/"
        keywords="Makrana Marble, Makrana Marble Manufacturer, Makrana Marble Supplier, Makrana Marble Rajasthan, Premium Makrana Marble, Marble Slabs, Temple Marble"
        schemas={homeSchemas}
      />

      {/* ── HERO ── */}
      <section className="hero hero-bg">
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-tag">Welcome to Rb Marble</h2>
            <h1>Premium Marble<br />Crafted to Perfection</h1>
            <p className="hero-sub">From sacred temples to elegant home décor — we deliver the finest Makrana marble with unmatched craftsmanship.</p>
            <div className="hero-actions">
              <Link to="/products" className="btn">Explore Products →</Link>
              <a href="https://wa.me/919680333942" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── USP STRIP ── */}
      <section className="usp-strip">
        <div className="container">
          <div className="usp-grid">
            <div className="usp-item">
              <span className="feat-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
              </span>
              <div>
                <strong>Premium Quality</strong>
                <p>100% natural Makrana marble</p>
              </div>
            </div>
            <div className="usp-item">
              <span className="feat-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>
              </span>
              <div>
                <strong>Custom Designs</strong>
                <p>Made to your exact requirement</p>
              </div>
            </div>
            <div className="usp-item">
              <span className="feat-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 7h11v9H3z"/><path d="M14 11h4l3 3v2h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>
              </span>
              <div>
                <strong>Worldwide Delivery</strong>
                <p>Safe & timely shipping</p>
              </div>
            </div>
            <div className="usp-item">
              <span className="feat-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m12 2 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 8.3l6.1-.7L12 2Z"/></svg>
              </span>
              <div>
                <strong>Customer First</strong>
                <p>Trusted by thousands of buyers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="categories">
        <div className="container">
          <div className="section-header">
            <div className="section-title"><h2>Our Top Categories</h2></div>
            <p className="section-sub">Explore our wide range of premium marble products crafted by skilled artisans</p>
          </div>
          <div className="cat-grid">
            <div className="cat-card">
              <div className="cat-img-wrap">
                <img src="/temple-category.png" alt="Marble Temples" className="cat-img" loading="lazy" />
                <div className="cat-overlay"><Link to="/products" className="cat-btn">View Products</Link></div>
              </div>
              <h4>Marble Temples</h4>
            </div>
            <div className="cat-card">
              <div className="cat-img-wrap">
                <img src="/qibla-category.png" alt="Qibla Work" className="cat-img" loading="lazy" />
                <div className="cat-overlay"><Link to="/products" className="cat-btn">View Products</Link></div>
              </div>
              <h4>Qibla Work</h4>
            </div>
            <div className="cat-card">
              <div className="cat-img-wrap">
                <img src="/third-category.png" alt="Fountains" className="cat-img" loading="lazy" />
                <div className="cat-overlay"><Link to="/products" className="cat-btn">View Products</Link></div>
              </div>
              <h4>Fountains</h4>
            </div>
            <div className="cat-card">
              <div className="cat-img-wrap">
                <img src="/tulsi-category.png" alt="Tulsi Pots" className="cat-img" loading="lazy" />
                <div className="cat-overlay"><Link to="/products" className="cat-btn">View Products</Link></div>
              </div>
              <h4>Tulsi Pots</h4>
            </div>
          </div>
          <div className="cat-more"><Link to="/products" className="btn">View All Products</Link></div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-band" style={{ backgroundImage: 'linear-gradient(rgba(14,27,44,.82), rgba(14,27,44,.82)), url("/cta-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="cta-text">
              <span className="cta-tag">Get In Touch</span>
              <h3>Crafting Beauty In Marble</h3>
              <p>From temples to home decor, we bring your ideas to life with the finest marble and skilled craftsmanship.</p>
            </div>
            <div className="cta-actions">
              <a href="tel:+919680333942" className="btn">Call Now →</a>
              <a href="https://wa.me/919680333942" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="trust-strip">
        <div className="container">
          <ul>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 7h11v9H3z"/><path d="M14 11h4l3 3v2h-7z"/></svg>
              100% Natural Marble
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></svg>
              Best Quality Products
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 20v-8M12 12 4 7.5 12 3l8 4.5L12 12Z"/></svg>
              Custom Order Facility
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m12 2 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 8.3l6.1-.7L12 2Z"/></svg>
              Trusted by Thousands
            </li>
          </ul>
        </div>
      </section>

    </main>
  );
}

export default Home;
