import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets';

export default function Header(){
  return (
    <>
      <Link to="/" style={{display:'flex',alignItems:'center',textDecoration:'none',color:'inherit'}}>
        <img src={assets.logo} alt="iFetch logo" className="logo"/>
        <div style={{marginLeft:8}}>
          <h1 style={{margin:0}}>iFetch</h1>
          <div style={{color:'var(--muted)',fontSize:'0.85rem'}}>Pre-loved Devices</div>
        </div>
      </Link>

      <div style={{marginLeft:'auto', display:'flex', gap:12}}>
        <a href="tel:+27684263240" className="button" style={{textDecoration:'none'}}>Call +27 68 426 3240</a>
      </div>
    </>
  );
}
