const getUser = (req, res, next) => {
    res.send('mostrando el usuario con id: ' + req.params.id)
}

module.exports = getUser;