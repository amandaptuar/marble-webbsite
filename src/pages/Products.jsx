import { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { productsData } from '../data/productsData';

const WA_NUMBER = '919680333942';
const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('All');
    }
  }, [categoryParam]);

  const productsPerPage = 12; // Adjusted for a better grid

  const categoriesData = useMemo(() => {
    const cats = new Set();
    const result = [{ name: 'All', image: productsData.length > 0 ? productsData[0].image : '' }];
    productsData.forEach(p => {
      if (!cats.has(p.category)) {
        cats.add(p.category);
        result.push({ name: p.category, image: p.image });
      }
    });
    return result;
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return productsData;
    return productsData.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to product grid top
    const gridEl = document.getElementById('product-grid-section');
    if (gridEl) {
      const y = gridEl.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
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

      {/* Category Listing Section */}
      <section className="category-filter-section" style={{ padding: '60px 0 40px', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', color: '#0e1b2c', marginBottom: '10px' }}>Shop by Category</h2>
            <p style={{ color: '#6b7280' }}>Explore our premium collections tailored to your needs</p>
          </div>
          <div className="category-circles" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
            {categoriesData.map(cat => (
              <div 
                key={cat.name}
                onClick={() => handleCategorySelect(cat.name)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  width: '120px'
                }}
              >
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: selectedCategory === cat.name ? '4px solid #d9a84e' : '4px solid transparent',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  marginBottom: '12px'
                }}
                onMouseEnter={(e) => {
                    if(selectedCategory !== cat.name) e.currentTarget.style.border = '4px solid #e0c289';
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    if(selectedCategory !== cat.name) e.currentTarget.style.border = '4px solid transparent';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
                >
                  <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: selectedCategory === cat.name ? '700' : '500',
                  color: selectedCategory === cat.name ? '#d9a84e' : '#333',
                  textAlign: 'center',
                  transition: 'color 0.3s ease'
                }}>
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product-grid-section" className="products-section" style={{ paddingTop: '40px' }}>
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <h3>No products found in this category.</h3>
              <button className="btn" style={{ marginTop: '20px' }} onClick={() => handleCategorySelect('All')}>View All Products</button>
            </div>
          ) : (
            <div className="product-grid">
              {currentProducts.map((product) => (
                <article 
                  key={product.id} 
                  className="product-card" 
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                  onClick={() => handleProductClick(product.id)}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ position: 'relative', width: '100%', paddingTop: '100%', overflow: 'hidden' }}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      loading="lazy"
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="product-body" style={{ display: 'flex', flexDirection: 'column', padding: '16px', flexGrow: 1 }}>
                    <span style={{ fontSize: '0.8rem', color: '#d9a84e', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{product.category}</span>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', flexGrow: 1, color: '#0e1b2c' }}>{product.name}</h3>
                    
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: 'auto' }}>
                      <a
                        href={`tel:+${WA_NUMBER}`}
                        className="btn btn-sm call-enquiry-btn"
                        style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Call
                      </a>
                      <a
                        href={waLink(`Hi, I am interested in this product: https://rbmarblemakrana.shop/product/${product.id}. Please share more details and pricing.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm wa-enquiry-btn"
                        style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.1-1.3-.1-.1-.2-.2-.4-.3Z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/></svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

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
                        color: currentPage === pageNum ? '#fff' : '#d9a84e',
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

          <div className="no-products-note" style={{ marginTop: '60px' }}>
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
