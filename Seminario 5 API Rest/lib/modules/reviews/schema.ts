import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
title: { type: String, required: true },
content: { type: String, required: true },
starsnum: {type: Number, required: true},
author: { type: Schema.Types.ObjectId, ref: 'users', required: true }
    }
);

export default mongoose.model('reviews', schema);
