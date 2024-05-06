const company = require("../company/company_schema");

module.exports = {
  addCompanyValidation: async (req, res, next) => {
    const value = await company.addCompany.validate(req.body, {
      abortEarly: false,
    });
    if (value.error) {
      res.json({
        success: "failure",
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
