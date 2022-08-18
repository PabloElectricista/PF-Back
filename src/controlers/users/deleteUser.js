const deleteUser = (req, res, next) => {
    res.send('eliminando el usuario con id: ' + req.params.id)
}

module.exports = deleteUser;