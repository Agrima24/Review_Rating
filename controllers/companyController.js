const companySchema = require("../models/compModelSchema");
const reviewSchema = require("../models/reviewModelSchema");

const createCompany = async (req, res) => {
  try {
    const isCompanyExist = await companySchema.findOne({
      compName: req.body.compName,
    });
    if (isCompanyExist) {
      res.status(400).json({
        success: "failure",
        message: "Company with this name is already exist",
      });
    } else {
      const comp_Data = await new companySchema(req.body);
   try {
        const filePath = `/uploads/${req.file.filename}`;
        comp_Data.company_logo = filePath;
        const info = comp_Data.save();
        res.status(201).json({
          success: "success",
          message: "company created successfully",
          companyData: comp_Data,
        });
      } catch (err) {
        res.status(400).json({
          success: "failure",
          error: err.message,
        });
      }
    }
  } catch (err) {
    res.status(400).json({
      success: "failure",
      error: err.message,
    });
  }
};

const companyList = async (req, res) => {
  try {
    const list = await companySchema.find();
    res.status(200).json({
      success: "success",
      message: "All companies list",
      compList: list,
    });
  } catch (err) {
    res.status(400).json({
      success: "failure",
      error: err.message,
    });
  }
};

const companySearch = async (req, res) => {
  try {
    const search = await companySchema.find({ city: req.body.city });
    res.status(200).json({
      success: "success",
      message: "All companies related to city",
      compSearch: search,
    });
  } catch (err) {
    res.status(400).json({
      success: "failure",
      error: err.message,
    });
  }
};

const companyDetail = async (req, res) => {
  try {
    const detail = await reviewSchema
      .find({ company_id: req.params.id })
      .populate({
        path: "user_id",
        select: "userName , profilePic",
      })
      .populate({
        path: "company_id",
      });

    if (detail) {
      res.status(200).json({
        success: "success",
        message: "Here is the review list",
        compDetail: detail,
      });
    } else {
      res.status(400).json({
        success: "failure",
        error: err.message,
      });
    }
  } catch (err) {
    res.status(400).json({
      success: "failure",
      error: err.message,
    });
  }
};

module.exports = {
  createCompany,
  companyList,
  companySearch,
  companyDetail,
};
