import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import SearchSortBar from '../components/SearchSortBar';
import { Link } from 'react-router-dom';
import DealsReferralBanner from '../components/DealsReferralBanner';

export default function Home(){
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('');
  const [wishlistItems, setWishlistItems] = useState([]);

  const W_KEY = 'ifetch_wishlist_v1';

  useEffect(()=> {
    async function load(){
      try {
        const res = await axios.get('/api/products', {params:{q, sort}});
        setProducts(res.data);
      } catch(e){
        // fallback to client seed data
        const { seedProducts } = await import('../data/products.js');
        setProducts(seedProducts);
      }
    }
    load();
  },[q, sort]);

  // load wishlist ids and map to product records (client-side)
  useEffect(()=> {
    const ids = JSON.parse(localStorage.getItem(W_KEY) || '[]');
    setWishlistItems(ids);
  },[]);

  // helper to map wishlist ids to product objects if available
  const wishlistProducts = wishlistItems
    .map(id => products.find(p => p.id === id))
    .filter(Boolean); // remove missing ones

  // remove item from wishlist (also updates UI)
  function removeFromWishlist(id){
    const existing = JSON.parse(localStorage.getItem(W_KEY) || '[]');
    const next = existing.filter(x => x !== id);
    localStorage.setItem(W_KEY, JSON.stringify(next));
    setWishlistItems(next);
  }

  return (
  <div className="container section" role="main" aria-label="Home">
    <DealsReferralBanner />
    <SearchSortBar q={q} setQ={setQ} sort={sort} setSort={setSort} />

    {/* Wishlist or hero area */}
    <section aria-labelledby="wishlist-title" style={{marginTop:'1rem', marginBottom:'1.25rem'}}>
      {/* ...wishlist panel markup... */}
    </section>

    <section aria-label="Product grid" style={{marginTop:'1rem'}}>
      <div className="grid" role="list">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  </div>
  );
}
