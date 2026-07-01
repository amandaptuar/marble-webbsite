import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const WA_NUMBER = '919680333942';
const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

function Products() {
  const productSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://rbmarblemakrana.shop/products"
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
          "name": "Products",
          "item": "https://rbmarblemakrana.shop/products"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Marble Washbasin",
      "image": "https://rbmarblemakrana.shop/washbasin.png",
      "description": "Premium quality Makrana Marble Washbasin.",
      "brand": {
        "@type": "Brand",
        "name": "RB Marble Makrana"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "Contact for Price",
        "availability": "https://schema.org/InStock"
      }
    }
  ];

  return (
    <main>
      <SEO 
        title="Our Products | Makrana Marble Slabs, Tiles, Temples"
        description="Explore our wide range of Makrana marble products including slabs, tiles, marble temples, washbasins, and custom artifacts."
        url="https://rbmarblemakrana.shop/products"
        keywords="Makrana Marble Products, Marble Slabs, Marble Temples, White Marble Tiles, Custom Marble Orders"
        schemas={productSchemas}
      />
      <section className="page-hero">
        <h1>Our Products</h1>
        <p className="crumb"><Link to="/">Home</Link><span className="sep">›</span>Products</p>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="product-grid">

            <article className="product-card">
              <img src="/washbasin.png" alt="Marble Washbasin" className="product-img" loading="lazy" />
              <div className="product-body">
                <h4>Marble Washbasin</h4>
                <div className="price">Contact for Price</div>
                <a
                  href={waLink('Hi, I am interested in your Marble Washbasin. Please share more details and pricing.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm wa-enquiry-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.1-1.3-.1-.1-.2-.2-.4-.3Z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/></svg>
                  WhatsApp Enquiry
                </a>
              </div>
            </article>

          </div>

          <div className="no-products-note">
            <p>More products coming soon! For custom orders or any marble requirements, feel free to reach out directly.</p>
            <a
              href={waLink('Hi, I am looking for marble products. Please help me with details.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.1-1.3-.1-.1-.2-.2-.4-.3Z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/></svg>
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="custom-cta">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div className="custom-cta-left">
            <span className="ic">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 7h11v9H3z"/><path d="M14 11h4l3 3v2h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>
            </span>
            <div>
              <h4>Looking for Custom Marble Items?</h4>
              <p>We make all types of marble items on customer requirement. Contact us today for special orders.</p>
            </div>
          </div>
          <a
            href={waLink('Hi, I need a custom marble item. Can you help me?')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Contact Us →
          </a>
        </div>
      </section>
    </main>
  );
}

export default Products;
