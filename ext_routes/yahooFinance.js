"use strict"

const express = require("express");
const { ensureLoggedIn } = require("../middleware/auth");
const router = new express.Router();
const yahooFinance = require('yahoo-finance2').default;

/** Get quotes */

router.post('/quotes', ensureLoggedIn, async function (req, res, next) {
  try {
    const symbols = Array.isArray(req.body.symbols) ? req.body.symbols : [req.body.symbols];
    const quotes = await yahooFinance.quote(symbols);
    return res.json({ quotes })
  } catch (err) {
    return next(err);
  }
})

/** Search quotes */

router.get('/search/:symbol', ensureLoggedIn, async function (req, res, next) {
  try {
    const results = await yahooFinance.search(req.params.symbol);
    return res.json({ results })
  } catch (err) {
    return next(err);
  }
})

// get price for a symbol
// get details for a symbol
// get historical for a symbols
// get homepage stocks

module.exports = router;