"use strict";
import { Request, Response } from "express";

export const view = {
  home: (req: Request, res: Response) => {
    res.render("home/index");
  },

  login: (req: Request, res: Response) => {
    res.render("home/login");
  },

  register: (req: Request, res: Response) => {
    res.render("home/register");
  },
};
