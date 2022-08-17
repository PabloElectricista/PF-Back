const updateUser = (req, res, next) => {
    res.send('actualizando el usuario con id: ' + req.params.id)
}

module.exports = updateUser;