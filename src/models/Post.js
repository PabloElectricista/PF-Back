const { Schema, model } = require('mongoose');

const PostSchema = new Schema(
    {
        _id:
            { type: Schema.Types.ObjectId },
        user:       // publisher user
            { type: Schema.Types.ObjectId, ref: "User" },
        comment:
            { type: String, maxlength: 200 },
        product:
            { type: Schema.Types.ObjectId, ref: "Product" },
        responses:
            [{ type: Schema.Types.ObjectId, ref: "Post" }]

    },
    { timestamps: true }
);

module.exports = model('Post', PostSchema)
