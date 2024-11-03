"use strict";

import { Router } from "express";
const router = Router();

import { view, process } from "../../../controllers/home.ctrl";

router.post("/login", process.login);
router.post("/register", process.register);

export default router;
