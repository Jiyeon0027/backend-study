"use stricts";

import { UserStorage } from "./UserStorage";
import { UserResponse, UserSchema } from "../types/users";

class User {
  constructor(readonly body: { id: string; password: string }) {}

  async login(): Promise<UserResponse> {
    const id = this.body.id;
    const password = this.body.password;
    const users: UserSchema = await UserStorage.getUserInfo(id);

    const response: UserResponse = {
      success: false,
      message: "",
    };

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        response.success = true;
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
