"use strict";

/** Routes for users. */

const jsonschema = require("jsonschema");
const express = require("express");
const router = express.Router();
const { ensureCorrectUser } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const User = require("../models/user");
const userUpdateSchema = require("../schemas/userUpdate.json");

/** GET /[username] => { user }
 *
 * Returns { username, email }
 *
 * Authorization required: same user-as-:username
 **/

router.get("/:username", ensureCorrectUser, async function (req, res, next) {
  try {
    const user = await User.get(req.params.username);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /[username] { user } => { user }
 *
 * Data can include:
 *   { password, email }
 *
 * Returns { username, email }
 *
 * Authorization required: same-user-as-:username
 **/

router.patch("/:username", ensureCorrectUser, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, userUpdateSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const user = await User.update(req.params.username, req.body);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[username]  =>  { deleted: username }
 *
 * Authorization required: same-user-as-:username
 **/

router.delete("/:username", ensureCorrectUser, async function (req, res, next) {
  try {
    await User.remove(req.params.username);
    return res.json({ deleted: req.params.username });
  } catch (err) {
    return next(err);
  }
});

/** POST /[username]/watchlist/[symbol] { state } => { watchlist } 
 * 
 * Returns {"watched": symbol}
 * 
 * Authorization required: same-user-as:username
*/

router.post("/:username/watchlist/:symbol", ensureCorrectUser, async function (req, res, next) {
  try {
    await User.addToWatchlist(req.params.username, req.params.symbol);
    return res.json({ watched: req.params.symbol });
  } catch (err) {
    return next(err);
  }
})

module.exports = router;
