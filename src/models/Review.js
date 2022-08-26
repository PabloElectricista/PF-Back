const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
    {
        title: 
        { type: String, required: true, unique: true },
        text:
        { type: String, required: true },
        rating: {
            points: { type: String },
            range: {
                min: { type: Number, min: 1 },
                max: { type: Number, min: 5 }
            }
        },
        userName: 
        { type: String, required: true },

    },
    { timestamps: true }
);

module.exports = mongoose.model('Review', ReviewSchema)