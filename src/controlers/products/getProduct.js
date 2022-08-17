const getProduct = (req, res, next) => {
    res.send('mostrando el producto con id: ' + req.params.id)
}

module.exports = getProduct;