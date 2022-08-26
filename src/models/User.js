const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username:
            { type: String, required: true, unique: true },
        email:
            { type: String, required: true, unique: true },
        password:
            { type: String, required: true },
        isAdmin:
            { type: Boolean, default: false },
        isActive:
            { type: Boolean, default: false },
        isBloked:
            { type: Boolean },  // baneado ? que podemos poner?
        score:
            {
                stars: { type: Number },
                reviews: { type: Number }
            },
        userData:
            { type: Schema.Types.ObjectId, ref: "UserData" },
        sales:
            [{ type: Schema.Types.ObjectId, ref: "Sale" }],
        purchases:
            [{ type: Schema.Types.ObjectId, ref: "Order" }],
        posts:      //  comments or answers
            [{ type: Schema.Types.ObjectId, ref: "Post" }]
    },
    { timestamps: true }
);

module.exports = model('User', UserSchema)
