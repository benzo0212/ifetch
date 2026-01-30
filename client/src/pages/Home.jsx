import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import ProductCard from '../components/ProductCard';
import SearchSortBar from '../components/SearchSortBar';
import DealsReferralBanner from '../components/DealsReferralBanner';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await api.get('/products', {
          params: { q, sort }
        });
        setProducts(res.data);
        setError('');
      } catch (err) {
        console.error('❌ Failed to load products:', err);
        setError(
          'Unable to load products right now. Please try again later.'
        );
      }
    }

    loadProducts();
  }, [q, sort]);

  return (
    <div className="container section" role="main">
      <DealsReferralBanner />
      <SearchSortBar q={q} setQ={setQ} sort={sort} setSort={setSort} />

      {error && (
        <div className="alert error" style={{ marginTop: '1rem' }}>
          {error}
        </div>
      )}

      <section aria-label="Product grid" style={{ marginTop: '1rem' }}>
        <div className="grid" role="list">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
