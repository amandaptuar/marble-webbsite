import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { productsData } from '../data/productsData';

const WA_NUMBER = '919680333942';
const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(productsData.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

            {currentProducts.map((product) => (
              <article key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
                <div className="product-body" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  <a
                    href={`tel:+${WA_NUMBER}`}
                    className="btn btn-sm call-enquiry-btn"
                    style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Call
                  </a>
                  <a
                    href={waLink(`Hi, I am interested in this product: https://rbmarblemakrana.shop${product.image}. Please share more details and pricing.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm wa-enquiry-btn"
                    style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.1-1.3-.1-.1-.2-.2-.4-.3Z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </article>
            ))}

          </div>

          {totalPages > 1 && (
            <div className="pagination" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                onClick={() => paginate(currentPage - 1)} 
                disabled={currentPage === 1}
                className="btn btn-outline"
                style={{ padding: '8px 16px', border: '1px solid #d9a84e', background: currentPage === 1 ? '#f0f0f0' : 'transparent', color: currentPage === 1 ? '#a0a0a0' : '#d9a84e', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                if (
                  pageNum === 1 || 
                  pageNum === totalPages || 
                  (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => paginate(pageNum)}
                      className="btn"
                      style={{
                        padding: '8px 16px',
                        background: currentPage === pageNum ? '#d9a84e' : 'transparent',
                        color: currentPage === pageNum ? '#0e1b2c' : '#d9a84e',
                        border: '1px solid #d9a84e',
                        minWidth: '40px',
                        justifyContent: 'center'
                      }}
                    >
                      {pageNum}
                    </button>
                  );
                } else if (
                  (pageNum === 2 && currentPage > 3) ||
                  (pageNum === totalPages - 1 && currentPage < totalPages - 2)
                ) {
                  return <span key={pageNum} style={{ padding: '8px', color: '#6b7280' }}>...</span>;
                }
                return null;
              })}

              <button 
                onClick={() => paginate(currentPage + 1)} 
                disabled={currentPage === totalPages}
                className="btn btn-outline"
                style={{ padding: '8px 16px', border: '1px solid #d9a84e', background: currentPage === totalPages ? '#f0f0f0' : 'transparent', color: currentPage === totalPages ? '#a0a0a0' : '#d9a84e', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
              >
                Next
              </button>
            </div>
          )}

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
