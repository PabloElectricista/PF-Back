const Product = require("../../models/Products");

const filters = async (req, res, next) => {
    try {
        const products = await Product.find()
        


        
        res.send("Filtrando ...." )
    } catch (error) {
        console.log(error);
        res.send({ error: error.message });
    }
}

module.exports = filters;