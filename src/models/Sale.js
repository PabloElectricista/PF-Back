const { Schema, model } = require('mongoose');

const saleSchema = new Schema({
    _id:
        { type: Schema.Types.ObjectId },
    onsales:
        [{ type: Schema.Types.ObjectId, ref: "products" }],
    waiting:
        [{ type: Schema.Types.ObjectId, ref: "products" }],
    sold:
        [{ type: Schema.Types.ObjectId, ref: "products" }]
},
    { timestamps: true }
)

module.exports = model('Sale', saleSchema)
