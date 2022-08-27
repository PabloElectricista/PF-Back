const User = require("../../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");


const getUser = (verifyTokenAndAdmin, async (req, res) => {
  const { id } = req.params
  try {
    const userId = await User.findById(id).populate([
      'sales',
      'purchases',
      'posts',
    ])
    if (userId) throw new Error('User not found')
    res.json(userId)
  } catch (error) {
    res.send(error.message)
  }
});

module.exports = getUser;