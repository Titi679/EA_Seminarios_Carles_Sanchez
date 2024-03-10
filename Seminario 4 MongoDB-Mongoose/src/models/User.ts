import { ObjectId, Schema, model } from "mongoose";

export interface IUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    username: string;
    age: number;
}

const UserSchema = new Schema <IUser>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true},
  username: { type: String, required: true},
  age: { type: Number, required: true }
});

export const UserModel =  model("User", UserSchema); 
