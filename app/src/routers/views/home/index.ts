"use strict";

import { Router } from "express";
const router = Router();

import { view } from "../../../controllers/views/viewController";

router.get("/", view.home);
router.get("/login", view.login);
router.get("/register", view.register);

export default router;
