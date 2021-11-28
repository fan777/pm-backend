"use strict"

const express = require("express");
// const { ensureLoggedIn } = require("../middleware/auth");
const router = new express.Router();
const yahooFinance = require('yahoo-finance2').default;

/** Get quotes */

router.post('/quotes', async function (req, res, next) {
  try {
    const symbols = Array.isArray(req.body.symbols) ? req.body.symbols : [req.body.symbols];
    const quotes = await yahooFinance.quote(symbols);
    return res.json({ quotes })
  } catch (err) {
    return next(err);
  }
})

/** Get detailed quotes */

router.post('/quote-detailed', async function (req, res, next) {
  try {
    const symbol = Array.isArray(req.body.symbol) ? req.body.symbol : [req.body.symbol];
    const quote = await yahooFinance.quoteSummary(symbol);
    return res.json({ quote })
  } catch (err) {
    return next(err);
  }
})

/** Search quotes */

router.get('/search', async function (req, res, next) {
  try {
    const results = await yahooFinance.search(req.query.term);
    return res.json({ results })
  } catch (err) {
    return next(err);
  }
})

/** Trending quotes */

router.get('/trending', async function (req, res, next) {
  try {
    const queryOptions = { count: 5, lang: 'en-US' };
    const results = await yahooFinance.trendingSymbols('US', queryOptions);
    return res.json(results)
  } catch (err) {
    return next(err);
  }
})

// get historical for a symbols

module.exports = router;