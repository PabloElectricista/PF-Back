const { Schema, model } = require('mongoose');

const UserDataSchema = new Schema(
    {
        firstame:
            { type: String, required: true, unique: true },
        lastname:
            { type: String, required: true, unique: true },
        phone:
            { type: Number, required: true },
        cuil:
            { type: Number },
        address:
            { type: Object },
        postal:
            { type: Number },
        country:
            { type: Object },       // city, state/province, country
        isAdmin:
            { type: Boolean, default: false }
    },
    { timestamps: true }
);

module.exports = model('UserData', UserDataSchema)
