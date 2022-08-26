const { Schema, model } = require('mongoose');

const PostSchema = new Schema(
    {
        user:       // publisher user
            { type: Schema.Types.ObjectId, ref: "User" },
        comment:
            { type: String, maxlength: 200 },
        product:
            { type: Schema.Types.ObjectId, ref: "Product" }
    },
    { timestamps: true }
);

module.exports = model('Post', PostSchema)
