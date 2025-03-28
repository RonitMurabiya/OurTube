import { Router } from "express";
import { verifyJWT } from "../middelwares/auth.middelware.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentuser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
  getUserchannelProfile,
  getWatchHistory,
} from "../controllers/user.controllers.js";

import { upload } from "../middelwares/multer.middelware.js";
const router = Router();
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 5,
    },
    {
      name: "coverimage",
      maxCount: 5,
    },
  ]),
  registerUser
); // http://localhost:8000/api/v1/users/register

router.route("/login").post(loginUser); // http://localhost:8000/api/v1/users/login

//secured routes
router.route("/logout").post(verifyJWT, logoutUser); // http://localhost:8000/api/v1/users/logout

router.route("/refresh-token").post(refreshAccessToken); // http://localhost:8000/api/v1/users/refresh-token

router.route("/change-password").post(verifyJWT, changeCurrentPassword); // http://localhost:8000/api/v1/users/change-password

router.route("/current-user").get(verifyJWT, getCurrentuser); // http://localhost:8000/api/v1/users/current-user

router.route("/update-account").patch(verifyJWT, updateAccountDetails); // http://localhost:8000/api/v1/users/update-account

router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar); // http://localhost:8000/api/v1/users/avatar

router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage); // http://localhost:8000/api/v1/users/cover-image

router.route("/c/:username").get(verifyJWT, getUserchannelProfile); // http://localhost:8000/api/v1/users/c/:username

router.route("/watchHistory").get(verifyJWT, getWatchHistory); // http://localhost:8000/api/v1/users/watchHistory

export default router;
