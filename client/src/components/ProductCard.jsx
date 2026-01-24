import React from 'react';
import { Link } from 'react-router-dom';
import WishlistButton from './WishlistButton';

function formatPrice(p) {
  return p;
}

export default function ProductCard({ product }) {
  const img =
    (product.imageUrls && product.imageUrls[0]) ||
    '/assets/placeholder.png';

  return (
    <article
      className="card"
      aria-labelledby={`title-${product.id}`}
      role="article"
    >
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
        aria-label={`View details for ${product.displayName}`}
      >
        <img
          src={img}
          alt={`${product.displayName} product image`}
        />

        <div className="meta">
          <div>
            <div
              id={`title-${product.id}`}
              className="title"
            >
              {product.displayName}
            </div>
            <div
              style={{
                color: 'var(--muted)',
                fontSize: '0.9rem'
              }}
            >
              {product.storageVariant || ''}
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="badge">
              {product.shortDescription || 'Pre-loved'}
            </div>
            <div
              style={{
                marginTop: 8,
                fontWeight: 700
              }}
            >
              {formatPrice(product.price)}
            </div>
          </div>
        </div>

        {/* TRUST SIGNALS */}
        <ul className="card-trust">
          <li>✔ Tested & Verified</li>
          <li>🚚 Nationwide Delivery</li>
          <li>💳 Cash & Layby Available</li>
        </ul>
      </Link>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 8
        }}
      >
        <Link
          to={`/product/${product.id}`}
          className="button"
          aria-label={`View details ${product.displayName}`}
        >
          View
        </Link>

        <WishlistButton productId={product.id} />
      </div>
    </article>
  );
}
