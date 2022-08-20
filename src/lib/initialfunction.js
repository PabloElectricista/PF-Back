const Product = require("../models/Products");
const data = require('./data.json')

exports.fillDatabase = async () => {
    try {
        var count = await Product.estimatedDocumentCount()
        
        if (count > 0) return
        
        await Product.insertMany(data)
        
    } catch (error) {
        console.log(error.message);
    }
}
