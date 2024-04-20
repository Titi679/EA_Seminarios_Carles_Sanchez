import * as mongoose from 'mongoose';

export interface IUser {
    _id?: mongoose.Types.ObjectId;
    name:string;
    email: string;
    phone_number: string;
    gender: string;
    posts?: mongoose.Types.ObjectId[]; // Array to store post IDs
    reviews?: mongoose.Types.ObjectId[]; // Array to store post IDs
    password: string;
}