"use stricts";

import { UserStorage } from "./UserStorage";
import { UserResponse, UserSchema } from "../types/users";

class User {
  constructor(readonly body: { id: string; password: string }) {}

  async login(): Promise<UserResponse> {
    const id = this.body.id;
    const password = this.body.password;

    const users: UserSchema[] = await UserStorage.getUserInfo();

    const response: UserResponse = {
      success: false,
      message: "",
    };

    for (const user of users) {
      if (user.id === id && user.psword === password) {
        response.success = true;
        response.message = "로그인 성공";
        response.data = user.name;
        return response;
      }
    }
    response.success = false;
    response.message = "로그인에 실패하셨습니다";
    return response;
  }

  register() {
    console.log(this.body);
    return 1;
  }
}

export default User;
