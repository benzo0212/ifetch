import React, {useState, useEffect} from 'react';

export default function WishlistButton({productId}){
  const key = 'ifetch_wishlist_v1';
  const [saved, setSaved] = useState(false);

  useEffect(()=> {
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    setSaved(list.includes(productId));
  },[productId]);

  function toggle(){
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    let next;
    if (list.includes(productId)) next = list.filter(x=>x!==productId);
    else next = [...list, productId];
    localStorage.setItem(key, JSON.stringify(next));
    setSaved(next.includes(productId));
  }

  return (
    <button className="wishlist" aria-pressed={saved} onClick={toggle} title={saved ? 'Remove from wishlist' : 'Save to wishlist'}>
      {saved ? '💚 Saved' : '♡ Save'}
    </button>
  );
}
