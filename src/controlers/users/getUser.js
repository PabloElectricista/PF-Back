const User = require("../../models/User");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");


const getUser = (verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .populate({ path: "userData sales purchases orders favorites" }); //   
        // const userposts = await User.findById(req.params.id).populate({ path: "posts" });
        // console.log(userposts);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
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
