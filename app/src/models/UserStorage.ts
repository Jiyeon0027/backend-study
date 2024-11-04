"use strict";

import { UserSchema } from "../types/users";
import db from "./../config/db";
import util from "util";

export class UserStorage {
  static async getUserInfo(): Promise<UserSchema[]> {
    const query = `SELECT * FROM users`;

    // db.query를 Promise로 래핑하여 await 사용 가능하게 만듦
    const data = await new Promise<UserSchema[]>((resolve, reject) => {
      db.query(query, (err, result) => {
        if (err) {
          return reject(err); // 오류 발생 시 reject
        }
        resolve(JSON.parse(JSON.stringify(result))); // JSON으로 변환하여 반환
      });
    });

    return data;
  }
}
