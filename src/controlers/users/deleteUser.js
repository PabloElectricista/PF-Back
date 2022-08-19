const User = require("../../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const deleteUser = (verifyTokenAndAuthorization, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = deleteUser;