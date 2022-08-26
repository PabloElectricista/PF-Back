const Product = require("../../models/Products");

const updateProduct = async (req, res,) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        res.status(204).json(updatedProduct);
    } catch (error) {
<<<<<<< HEAD
        console.log(error);
=======
>>>>>>> 1ff028d8bf64b199dfe354ee91fc9ed9ff186886
        res.status(500).send('error al actualizar el producto')
    }
}

module.exports = updateProduct;
