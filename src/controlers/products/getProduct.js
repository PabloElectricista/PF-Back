const Product = require("../../models/Products");

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        // res.send('eliminando el producto con id: ' + req.params.id)
        res.json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('error al buscar el producto')
    }
}

module.exports = getProduct;