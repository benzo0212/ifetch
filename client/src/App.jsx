import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReferralProgram from './pages/ReferralProgram';
import ProductDetail from './pages/ProductDetail';
import FAQ from './pages/FAQ';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App(){
  return (
    <div>
      <header className="container header">
        <Header />
      </header>

      <main className="container" role="main" aria-label="Main content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/referrals" element={<ReferralProgram />} />
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
      </main>

      {/* ✅ Footer renders its OWN <footer> */}
      <Footer />
    </div>
  );
}
