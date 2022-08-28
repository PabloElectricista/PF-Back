const { Schema, model } = require('mongoose');

const UserDataSchema = new Schema(
    {
        firstame:
            { type: String/* , required: true */ },
        lastname:
            { type: String/* , required: true */ },
        /* phone:
            { type: Number, required: true }, */
        cuil:
            { type: Number },
        address:
            { type: Object },
        postal:
            { type: Number },
        country:
            { type: Object }       // city, state/province, country
    },
    { timestamps: true }
);

module.exports = model('UserData', UserDataSchema)
