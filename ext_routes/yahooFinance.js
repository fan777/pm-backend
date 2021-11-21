"use strict"

const express = require("express");
const router = new express.Router();
const yahooFinance = require('yahoo-finance2').default;

router.get('/', async function (req, res, next) {
  try {
    // const data = await yahoo.search('AAPL');
    const data = await yahooFinance.quote('AAPL');
    // const { regularMarketPrice, currency } = data;
    return res.json(data);
  } catch (err) {
    return next(err);
  }
})

module.exports = router;