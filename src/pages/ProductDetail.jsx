import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { productsData } from '../data/productsData';

const WA_NUMBER = '919680333942';
const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <main>
        <section className="page-hero">
          <h1>Product Not Found</h1>
          <p className="crumb"><Link to="/">Home</Link><span className="sep">›</span><Link to="/products">Products</Link></p>
        </section>
        <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
          <h2>Sorry, we couldn't find the product you're looking for.</h2>
          <Link to="/products" className="btn" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Products</Link>
        </div>
      </main>
    );
  }

  const productSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "image": `https://rbmarblemakrana.shop${product.image}`,
      "description": product.description,
      "brand": {
        "@type": "Brand",
        "name": "RB Marble Makrana"
      },
      "category": product.category,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": product.price,
        "availability": "https://schema.org/InStock"
      }
    }
  ];

  return (
    <main>
      <SEO 
        title={`${product.name} | RB Marble Makrana`}
        description={product.description}
        url={`https://rbmarblemakrana.shop/product/${product.id}`}
        keywords={`${product.name}, Makrana Marble, ${product.category}`}
        schemas={productSchemas}
      />
      <section className="page-hero" style={{ padding: '60px 0 40px' }}>
        <h1>{product.name}</h1>
        <p className="crumb">
          <Link to="/">Home</Link><span className="sep">›</span>
          <Link to="/products">Products</Link><span className="sep">›</span>
          {product.name}
        </p>
      </section>

      <section className="product-detail-section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="product-detail-grid">
            <div className="product-detail-image-wrap">
              <img src={product.image} alt={product.name} className="product-detail-image" />
            </div>
            <div className="product-detail-info">
              <span className="product-category-tag">{product.category}</span>
              <h2>{product.name}</h2>
              <p className="product-price">{product.price}</p>
              
              <div className="product-description">
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>

              <div className="product-features">
                <ul>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                    Premium Quality Material
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                    Available for Custom Order
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                    Direct Shipping
                  </li>
                </ul>
              </div>

              <div className="product-detail-actions">
                <a
                  href={`tel:+${WA_NUMBER}`}
                  className="btn btn-primary"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Call for Inquiry
                </a>
                <a
                  href={waLink(`Hi, I am interested in ${product.name} (https://rbmarblemakrana.shop/product/${product.id}). Please share more details and pricing.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.1-1.3-.1-.1-.2-.2-.4-.3Z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;
