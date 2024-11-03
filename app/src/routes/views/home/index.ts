"use strict";

import { Router } from "express";
const router = Router();

import { view, process } from "../../../controllers/home.ctrl";

router.get("/", view.home);
router.get("/login", view.login);
router.get("/register", view.register);

export default router;
