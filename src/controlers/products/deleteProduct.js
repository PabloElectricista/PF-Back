const deleteProduct = (req, res, next) => {
    res.send('eliminando el producto con id: ' + req.params.id)
}

module.exports = deleteProduct;