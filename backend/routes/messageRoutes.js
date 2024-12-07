import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import { protect, protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protect, protectRoute, sendMessage);

export default router;
