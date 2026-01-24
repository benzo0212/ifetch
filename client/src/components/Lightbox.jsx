// client/src/components/Lightbox.jsx
import React, {useState, useEffect} from 'react';

/**
 * Lightbox component
 * props:
 *  - images: array of image URLs
 *  - open: boolean
 *  - startIndex: initial index to show
 *  - onClose: callback
 *
 * Keyboard: Esc closes, ArrowLeft/ArrowRight navigate
 */
export default function Lightbox({images = [], open, startIndex = 0, onClose}) {
  const [index, setIndex] = useState(startIndex || 0);

  useEffect(()=>{
    setIndex(startIndex || 0);
  },[startIndex, open]);

  useEffect(()=> {
    function onKey(e){
      if (!open) return;
      if (e.key === 'Escape') onClose && onClose();
      if (e.key === 'ArrowLeft') setIndex(i => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setIndex(i => Math.min(images.length - 1, i + 1));
    }
    window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  },[open, images.length, onClose]);

  if (!open) return null;

  const img = images && images.length ? images[index] : '/assets/placeholder.png';

  return (
    <div role="dialog" aria-modal="true" style={{
      position:'fixed',inset:0,background:'rgba(2,6,23,0.8)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:2000
    }}>
      <div style={{maxWidth:'92%',maxHeight:'92%',position:'relative',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <img src={img} alt={`Product view ${index+1}`} style={{maxWidth:'100%',maxHeight:'80vh',objectFit:'contain',borderRadius:12}} />

        <div style={{display:'flex',gap:8,marginTop:12}}>
          <button className="button secondary" onClick={()=>setIndex(i => Math.max(0, i - 1))} aria-label="Previous image">← Prev</button>
          <button className="button" onClick={()=>onClose && onClose()} aria-label="Close lightbox">Close</button>
          <button className="button secondary" onClick={()=>setIndex(i => Math.min(images.length - 1, i + 1))} aria-label="Next image">Next →</button>
        </div>

        <div style={{position:'absolute',right:12,top:12}}>
          <button className="button secondary" onClick={()=>onClose && onClose()} aria-label="Close">✕</button>
        </div>
      </div>
    </div>
  );
}
