import * as mongoose from 'mongoose';

export interface IReview {
    _id?: mongoose.Types.ObjectId;
    title: string;
    content: string;
    starsnum: number;
    author: mongoose.Types.ObjectId;
}