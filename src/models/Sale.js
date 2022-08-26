const { Schema, model } = require('mongoose');

const saleSchema = new Schema({
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
