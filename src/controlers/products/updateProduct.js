const updateProduct = (req, res, next) => {
    res.send('actualizando el producto con id: ' + req.params.id)
}

module.exports = updateProduct;