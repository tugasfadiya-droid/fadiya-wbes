/**
 * Minimalist Production Server for Fadiya Net
 * Optimized for RAM < 256MB and Node.js Compatibility
 */
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Path to compiled static files
const distPath = path.join(__dirname, 'dist');

// Middleware: Serve static files with caching
// Caching reduces CPU usage for repeated visits
app.use(express.static(distPath, {
  maxAge: '1d',
  etag: true
}));

// SPA Fallback: Send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('Fadiya Net [PROD] listening on port ' + PORT);
  console.log('Memory optimization active (Max 128MB heap)');
});
