const express = require("express");
const router = express.Router();

const user = require("../controllers/userController");
const auth = require("../middlewares/auth_middleware");
const { upload } = require("../middlewares/imageStorage");
const validation = require("../validation/user/user_validation");

// router.get('/register',user.userSignup)
router.post(
  "/register",
  // upload.single("profilePic"),
  validation.registerUserValidation,
  user.userSignup
);
router.post("/signin",validation.loginUserValidation, user.userLogin);
router.post("/resetpassword", auth.checkUSerAuth, user.userPasswordReset);
router.post(
  "/updatepassword/:token/:id",
  auth.checkUSerAuth,
  user.updatePassword
);

module.exports = router;
