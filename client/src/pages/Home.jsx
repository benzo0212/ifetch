import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import SearchSortBar from '../components/SearchSortBar';
import DealsReferralBanner from '../components/DealsReferralBanner';
import { seedProducts } from '../data/products';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    let results = [...seedProducts];

    // Search
    if (q) {
      const query = q.toLowerCase();
      results = results.filter(
        p =>
          p.displayName.toLowerCase().includes(query) ||
          (p.storageVariant || '').toLowerCase().includes(query)
      );
    }

    // Sort
    if (sort === 'price_asc') {
      results.sort((a, b) => a.priceNumber - b.priceNumber);
    }
    if (sort === 'price_desc') {
      results.sort((a, b) => b.priceNumber - a.priceNumber);
    }

    setProducts(results);
  }, [q, sort]);

  return (
    <div className="container section" role="main">
      <DealsReferralBanner />
      <SearchSortBar q={q} setQ={setQ} sort={sort} setSort={setSort} />

      <section aria-label="Product grid" style={{ marginTop: '1rem' }}>
        <div className="grid" role="list">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
