const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth_middleware");
const review = require("../controllers/reviewController");
const validation = require("../validation/review/review_validation");

router.post(
  "/review_add",
  auth.checkUSerAuth,
  validation.addReviewValidation,
  review.addReview
);
router.patch("/review_edit/:id", review.editReview);
router.delete("/review_delete/:id", review.deleteReview);
router.get("/review_list/:id", review.reviewList);
router.get("/review_detail/:id", review.detailReview);

module.exports = router;
