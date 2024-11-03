"use strict";

import { Request, Response } from "express";
import User from "../models/User";

interface UserResponse {
  success: boolean;
  message: string;
  data?: any;
}

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

export const process = {
  login: (req: Request, res: Response) => {
    const user = new User(req.body);
    const response = user.login();

    const returnValue: UserResponse = {
      success: true,
      message: "",
      data: res.json(response),
    };

    returnValue;
  },

  register: (req: Request, res: Response) => {
    const user = new User(req.body);
    const response = user.register();

    const returnValue: UserResponse = {
      success: true,
      message: "",
      data: res.json(response),
    };

    returnValue;
  },
};
