"use strict"

const express = require("express");
// const { ensureLoggedIn } = require("../middleware/auth");
const router = new express.Router();
const yahooFinance = require('yahoo-finance2').default;

/** Get quotes */

// post version of basic quote (can pass array)
router.post('/quote', async function (req, res, next) {
  try {
    const symbols = Array.isArray(req.body.symbols) ? req.body.symbols : [req.body.symbols];
    const quotes = await yahooFinance.quote(symbols, {}, { validateResult: false });
    return res.json({ quotes })
  } catch (err) {
    return next(err);
  }
})

// get version of basic quote
// router.get('/quote', async function (req, res, next) {
//   try {
//     // https://www.w3schools.com/tags/ref_urlencode.ASP <-- reference when testing queries
//     const symbols = decodeURI(req.query.symbol).split(",");
//     const quotes = await yahooFinance.quote(symbols);
//     return res.json({ quotes })
//   } catch (err) {
//     return next(err);
//   }
// })

/** Get detailed quotes */

// post version of detailed quote (can pass array)
router.post('/quote-summary', async function (req, res, next) {
  try {
    const symbol = Array.isArray(req.body.symbol) ? req.body.symbol : [req.body.symbol];
    const quote = await yahooFinance.quoteSummary(symbol, { modules: ["price", "summaryDetail", "summaryProfile", "defaultKeyStatistics"] }, { validateResult: false });
    return res.json({ quote })
  } catch (err) {
    return next(err);
  }
})

// get version of detailed quote
// router.get('/quote-summary', async function (req, res, next) {
//   try {
//     const quote = await yahooFinance.quoteSummary(req.query.symbol);
//     return res.json({ quote })
//   } catch (err) {
//     return next(err);
//   }
// })

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

/** Recommendations by symbol */

router.get('/recommend', async function (req, res, next) {
  try {
    const results = await yahooFinance.recommendationsBySymbol(req.query.term);
    return res.json(results)
  } catch (err) {
    return next(err);
  }
})

/** Historical data */

router.get('/historical', async function (req, res, next) {
  try {
    const { term: query, start: period1, end: period2, interval } = req.query;
    const results = await yahooFinance.historical(query, { period1, period2, interval });
    return res.json(results);
  } catch (err) {
    return next(err);
  }
})

module.exports = router;