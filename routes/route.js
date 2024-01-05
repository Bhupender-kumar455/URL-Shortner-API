const express = require("express");
const {
  handleGetURL,
  handleRedirectURL,
  handleGetAnalytic,
} = require("../controller/url");

const router = express.Router();

router.post("/", handleGetURL);
router.get("/:miniID", handleRedirectURL);
router.get("/analytic/:miniID", handleGetAnalytic);
module.exports = router;
