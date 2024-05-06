const express = require("express");
const router = express.Router();
const userRoute = require("./userRouter");
const reviewRoute = require("./reviewRouter");
const companyRoute = require("./companyRouter");

router.use("/user", userRoute);
router.use("/company", companyRoute);
router.use("/review", reviewRoute);

module.exports = router;
