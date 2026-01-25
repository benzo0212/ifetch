// server/index.js
// Express 4 API + static client serving (Render-ready)

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

/* -------------------- MIDDLEWARE -------------------- */

// Enable CORS
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://ifetch.co.za',
    'https://www.ifetch.co.za'
  ],
  methods: ['GET'],
}));

app.use(express.json());

/* -------------------- DATA -------------------- */

const products = require('./data/products.json');

/* -------------------- API ROUTES -------------------- */

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/products', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const sort = req.query.sort || '';

  let results = products.filter(p =>
    p.displayName.toLowerCase().includes(q) ||
    (p.storageVariant || '').toLowerCase().includes(q)
  );

  if (sort === 'price_asc') {
    results.sort((a, b) => a.priceNumber - b.priceNumber);
  }
  if (sort === 'price_desc') {
    results.sort((a, b) => b.priceNumber - a.priceNumber);
  }

  res.json(results);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => String(p.id) === String(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

/* -------------------- SERVE FRONTEND -------------------- */

// Path to Vite build output
const clientDistPath = path.resolve(__dirname, '..', 'client', 'dist');

// Serve static files if build exists
app.use(express.static(clientDistPath));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

/* -------------------- START SERVER -------------------- */

app.listen(PORT, () => {
  console.log(`✅ iFetch server running on port ${PORT}`);
});
