const { Schema, model } = require('mongoose');

const OrderSchema = new Schema(
    {
        user:       //  buyer
            { type: Schema.Types.ObjectId, ref: "User", required: true },
        products: [     
            {
                products:
                    { type: Schema.Types.ObjectId, ref: "Product" },
                quantity:
                    { type: Number, default: 1 },
            },
        ],
        status:
            { type: string, default: "pending"},
        payment:
            { type: string }
    },
    { timestamps: true }
);

module.exports = model('Order', OrderSchema)
