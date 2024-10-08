import { Router } from "express";
import {
  updateUserProfile,
  getAllUsers,
  getUserById,
  // updateUser,
  deleteUser,
  registerUser,
  loginUser,
  getSupport,
  updateSupport,
  deleteSupport,
} from "../controllers/userController";
import { authenticateToken } from "../middleware/authmiddleware";
import {
  addPassenger,
  deletePassenger,
  updatePassenger,
} from "../controllers/passengerController";
import {
  addCoTraveller,
  AddFrequentFlyer,
  UpdatePassportDetail,
} from "../controllers/CoTravellerController";

const router = Router();
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Routes
router.get("/profile", authenticateToken, updateUserProfile);
router.post("/profile", authenticateToken, updateUserProfile);
router.post("/traveller", authenticateToken, addCoTraveller);
router.post("/passport", authenticateToken, UpdatePassportDetail);
router.post("/flyer", authenticateToken, AddFrequentFlyer);
router.get("/", getAllUsers);
router.get("/:id", authenticateToken, getUserById);

// router.put('/:id', authenticateToken, updateUser);
router.delete("/:id", authenticateToken, deleteUser);
router.post("/addPassenger", authenticateToken, addPassenger);
router.post("/deletePassenger/:id", authenticateToken, deletePassenger);
router.post("/updatePassenger/:id", authenticateToken, updatePassenger);

router.get("/support", getSupport);
router.post("/add-support", getSupport);
router.post("/update-support", updateSupport);
router.post("/delete-support", deleteSupport);

export default router;
