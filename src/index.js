/**
 * Sniff0x - The #1 Scam Sniffer for Clanker Tokens
 * Entry point
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { scanToken } = require('./scanner');
const { getLeaderboard } = require('./leaderboard');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: '1.0.0', chain: 'base' });
});

app.get('/api/scan/:address', async (req, res) => {
  try {
    const { address } = req.params;
    const result = await scanToken(address);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/leaderboard', async (req, res) => {
  try {
    const board = await getLeaderboard();
    res.json(board);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🐶 Sniff0x running on port ${PORT}`);
});

module.exports = app;
