const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth_middleware")
const { upload } = require("../middlewares/imageStorage");
const company = require("../controllers/companyController");
const validation = require("../validation/company/company_validation");

router.post(
  "/create",
  upload.single("company_logo"),
  validation.addCompanyValidation,
  company.createCompany
);
router.get("/list",auth.checkUSerAuth,company.companyList);
router.get("/search",auth.checkUSerAuth,company.companySearch);
router.get("/detail/:id",auth.checkUSerAuth,company.companyDetail)

module.exports = router;
