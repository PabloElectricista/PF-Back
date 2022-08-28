const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const ReviewSchema = new Schema(
    {
        user:
            { type: Schema.Types.ObjectId, ref: "User", required: true },
        userName:
            { type: String, required: true },
        product:
            { type: Schema.Types.ObjectId, ref: "Product", required: true },
        rating: {
            type: Number,
            required: true,
            unique: true,
            min: 1,
            max: 5
        },
        comment:
            { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Review', ReviewSchema)
