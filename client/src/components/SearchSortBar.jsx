import React from 'react';

export default function SearchSortBar({q, setQ, sort, setSort}){
  return (
    <div className="controls" role="search" aria-label="Search and sort products">
      <input className="search" placeholder="Search model or storage (e.g., '13' or '256GB')" value={q} onChange={e=>setQ(e.target.value)} />
      <select aria-label="Sort by price" value={sort} onChange={e=>setSort(e.target.value)} style={{padding:8,borderRadius:8,border:'1px solid #e6eefc',background:'#fff'}}>
        <option value="">Sort (default)</option>
        <option value="price_asc">Price: low → high</option>
        <option value="price_desc">Price: high → low</option>
      </select>
    </div>
  );
}
