const Order = require("../../models/Order");
const User = require("../../models/User");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const deleteUser = (verifyTokenAndAuthorization, async (req, res) => {
  const { email } = req.params
    try {
      await User.findOneAndDelete(email);
      res.status(200).json("User has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = deleteUser;






  // try {
  //   const user = await User.findOne(email)
  //   if (!user) throw new Error('Usuario no encontrado')
  //   if (user.buyBooks.length > 0) {
  //     user.buyBooks.forEach(async (idOrder) => {
  //       await Order.findOneAndDelete(idOrder)
  //     })
  //   }
  //   await User.findOneAndDelete(email)
  //   res.send('Usuario eliminado correctamente')
  // } catch (error) {
  //   res.status(404).send(error.message)
  // }
