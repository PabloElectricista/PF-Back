const Product = require("../models/Products");
const data = require('./data.json')

exports.fillDatabase = async () => {
    try {
        var count = await Product.estimatedDocumentCount()
        console.log("db count", count);
        if (count > 0) return
        console.log("data length", data.length);
        await Product.insertMany(data)
    
    
    } catch (error) {
        console.log(error.message);
    }
}
