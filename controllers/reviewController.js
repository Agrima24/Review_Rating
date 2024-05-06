const reviewSchema = require("../models/reviewModelSchema");

const addReview = async (req, res) => {
  try {
    const reviewData = await reviewSchema(req.body);
    const reviewinfo = reviewData.save();
    res.status(200).json({
      success: "success",
      message: "review added successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: " failure",
      error: err.message,
    });
  }
};

const editReview = async (req, res) => {
  try {
    const edit = await reviewSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: "success",
      message: "Edit review successfully",
      reviewEdit: edit,
    });
  } catch (err) {
    res.status(400).json({
      success: " failure",
      error: err.message,
    });
  }
};

const deleteReview = async (req, res) => {
  await reviewSchema.findByIdAndDelete(req.params.id);
  try {
    res.status(200).json({
      success: "success",
      message: "Delete review successfully",
      review_data: {},
    });
  } catch (err) {
    res.status(400).json({
      success: " failure",
      error: err.message,
    });
  }
};

const reviewList = async (req, res) => {
  try {
    const review = await reviewSchema.find({ company_id: req.params.id });
    res.status(200).json({
      success: "success",
      message: "All reviews list",
      reviewList: review,
    });
  } catch (err) {
    res.status(400).json({
      success: " failure",
      error: err.message,
    });
  }
};

const detailReview = async (req, res) => {
  try {
    const detail = await reviewSchema.findById(req.params.id).populate({
      path: "company_id",
      select: "compName",
    });
    res.status(200).json({
      success: "success",
      message: "here is the review",
      reviewDetail: detail,
    });
  } catch (err) {
    res.status(400).json({
      success: " failure",
      error: err.message,
    });
  }
};

module.exports = {
  addReview,
  editReview,
  deleteReview,
  reviewList,
  detailReview,
};
