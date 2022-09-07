const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        nickname:
            { type: String, required: true, unique: true },
        email:
            { type: String, required: true, unique: true },
        name: {
            type: String,
        },
        lastname: {
            type: String,
        },
        birthday: {
            type: String,
            default: '',
        },
        dni: {
            type: String,
            default: '',
        },
        country: {
            type: String,
            default: '',
        },
        picture: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            default: '',
        },
        ciudad: {
            type: String,
            default: '',
        },
        postal: {
            type: String,
            default: '',
        },
        isAdmin:
            { type: Boolean, default: false },
        isActive:
            { type: Boolean, default: true },
        isBloked:
            { type: Boolean, default: false },  
        score:
        {
            stars: { type: Number, default: 0 },
            reviews: { type: Number, default: 0 },
        },
        sales:
            { type: Schema.Types.ObjectId, ref: "Sale" },

        purchases:
            [{ type: Schema.Types.ObjectId, ref: "Order" }],
        orders:
            [{ type: Schema.Types.ObjectId, ref: "Order" }],
        favorites:
            [{ type: Schema.Types.ObjectId, ref: "Order" }],
        posts:     
            [{ type: Schema.Types.ObjectId, ref: "Post" }]
    },
    { timestamps: true }
);

module.exports = model('User', UserSchema)
