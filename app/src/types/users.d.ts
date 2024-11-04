export interface UserResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface UserSchema {
  id: string;
  psword: string;
  name: string;
}
