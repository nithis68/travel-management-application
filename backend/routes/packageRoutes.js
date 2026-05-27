const express = require("express");

const Package = require("../models/Package");

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  async (req, res) => {
    try {
      const packages = await Package.find();

      res.json(packages);
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

module.exports = router;
