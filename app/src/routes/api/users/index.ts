"use strict";

import { Router } from "express";
const router = Router();

import { process } from "../../../controllers/api/userController";

router.post("/login", process.login);
router.post("/register", process.register);

export default router;
