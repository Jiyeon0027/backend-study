"use strict";

import { Router } from "express";
const router = Router();

import { process } from "../../../controllers/api/userController";

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Retrieve a list of users
 *     description: Retrieve all users from the database
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
router.post("/login", process.login);

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Retrieve a list of users
 *     description: Retrieve all users from the database
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
router.post("/register", process.register);

export default router;
