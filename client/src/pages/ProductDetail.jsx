import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Lightbox from '../components/Lightbox';
import { seedProducts } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbsRef = useRef(null);

  const normalizeUrl = (u) => {
    if (!u) return u;
    if (u.startsWith('http') || u.startsWith('/')) return u;
    return '/' + u;
  };

  useEffect(() => {
    // FRONTEND-ONLY product lookup
    const p = seedProducts.find(x => x.id === id);

    if (p) {
      setProduct(p);
      setImages((p.imageUrls || []).map(normalizeUrl));
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container section">
        <Link to="/" className="text-muted">← Back to products</Link>
        <p style={{ marginTop: '1rem' }}>Product not found.</p>
      </div>
    );
  }

  const waText = encodeURIComponent(
    product.whatsappMessage ||
    `Hi Thabo, I would like to enquire about ${product.displayName}`
  );

  return (
    <div className="container section">
      <Link to="/" className="text-muted">← Back to products</Link>

      <div className="detail">
        {/* LEFT: IMAGES */}
        <div>
          <div className="main-image-wrapper">
            <img
              src={images[activeIndex]}
              alt={product.displayName}
              className="main-image"
              onClick={() => setLightboxOpen(true)}
            />
          </div>

          <div className="thumbnail-row" ref={thumbsRef}>
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.displayName} view ${i + 1}`}
                className={`thumbnail ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: INFO */}
        <aside className="specs">
          <h2>{product.displayName}</h2>
          <p className="text-muted">{product.shortDescription}</p>
          <h3 className="price">{product.price}</h3>

          <ul className="key-info">
            <li><strong>Storage:</strong> {product.storageVariant}</li>
            <li><strong>Condition:</strong> {product.conditionNote || 'Pre-loved'}</li>
          </ul>

          {Array.isArray(product.fullSpecifications) && (
            <>
              <h4 className="spec-title">Specifications</h4>
              <ul className="spec-list">
                {product.fullSpecifications.map((spec, index) => {
                  const key = Object.keys(spec)[0];
                  return (
                    <li key={index}>
                      <span className="spec-key">{key}</span>
                      <span className="spec-value">{spec[key]}</span>
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          <h4 className="spec-title">Payment Options</h4>
          <ul className="payment-options">
            <li>💵 Cash on collection</li>
            <li>📆 2-Month Layby</li>
            <li>📆 3-Month Layby</li>
          </ul>

          <h4 className="spec-title">Delivery Options</h4>
          <div className="delivery-options">
            <img src="/assets/paxi-logo.png" alt="Paxi" />
            <img src="/assets/postnet-logo.png" alt="PostNet" />
            <img src="/assets/courier-guy-logo.png" alt="Courier Guy" />
          </div>

          <button
            className="button"
            onClick={() =>
              window.open(`https://wa.me/27684263240?text=${waText}`, '_blank')
            }
          >
            Enquire on WhatsApp
          </button>
        </aside>
      </div>

      <Lightbox
        images={images}
        open={lightboxOpen}
        startIndex={activeIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
