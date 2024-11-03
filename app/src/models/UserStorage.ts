"use strict";

import { UserSchema } from "../types/users";
import db from "./../config/db";

export class UserStorage {
  static async getUserInfo(id: string): Promise<UserSchema> {
    let userInfo: UserSchema;
    const query = `SELECT * FROM users WHERE id = ?`;
    db.query(query, [id], (_err, data) => {
      console.log(data);
      userInfo = data;
    });

    return userInfo;
  }
}
