const Product = require("../../models/Products");

const deleteProduct = async (req, res) => {
    try {
        await Product.findOneAndDelete({ _id: req.params.id });
        res.send('eliminando el producto con id: ' + req.params.id)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('error al eliminar el producto')
    }
}

module.exports = deleteProduct;