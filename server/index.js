// server/index.js
// Minimal Express API to serve product JSON for demo (updated to reliably resolve client/dist)
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
import cors from 'cors';



// Allow CORS for dev/demo
app.use(cors());
app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://ifetch.co.za'
  ]
}));

// Serve API data from data/products.json
const products = require('./data/products.json');

app.get('/api/products', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  let results = products.filter(p =>
    p.displayName.toLowerCase().includes(q) ||
    (p.storageVariant || '').toLowerCase().includes(q)
  );
  const sort = req.query.sort || '';
  if (sort === 'price_asc') results.sort((a,b)=>a.priceNumber - b.priceNumber);
  if (sort === 'price_desc') results.sort((a,b)=>b.priceNumber - a.priceNumber);
  res.json(results);
});

app.get('/api/products/:id', (req, res) => {
  const p = products.find(x => String(x.id) === String(req.params.id));
  if (!p) return res.status(404).json({error: 'Product not found'});
  res.json(p);
});

app.get('/api/health', (_, res) => res.json({status: 'ok'}));

// --------------------------------------------------
// Serve built client (SPA)
// We use path.resolve so the path is correct no matter where node was started from.
const clientDistPath = path.resolve(__dirname, '..', 'client', 'dist');

// If dist exists, serve it. This allows the server to run in dev even if dist is absent,
// but in production you will build the client and dist will be present.
app.use(express.static(clientDistPath));

// SPA fallback - **Express 4** supports '*' so using it is fine.
// If you see errors related to path-to-regexp, ensure express@4 is installed.
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
