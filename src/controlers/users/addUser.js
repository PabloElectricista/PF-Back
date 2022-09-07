const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const { createAccount } = require('../stripe/stripe')

const addUser = (async (req, res) => {
    const { nickname, name, email, picture, address } = req.body
    try {
      const isExistUser = await User.findOne({ email: email }).populate([
        'sales',
        'purchases',
        'orders',
        'favorites',
        'posts'
      ])
      if (isExistUser) return res.status(201).json(isExistUser)
      const newUser = new User({
        nickname,
        name,
        email,
        picture,
        address
      })
      await newUser.save()
      // const user = await User.find({ email: email }).populate([
      //   'sales',
      //   'purchases',
      //   'orders',
      //   'favorites',
      //   'posts'
      // ])
      res.json(newUser)
    } catch (error) {
      res.send(error.message)
    }
  })
  

//     try {
//         const newUserdata = new UserData(req.body.userdata)
//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: CryptoJS.AES.encrypt(
//                 req.body.password,
//                 process.env.PASS_SEC
//             ).toString()
//         });

//         const id = await createAccount()
//         newUserdata.accountid = id
//         const userData = await newUserdata.save()
//         newUser.userData = userData._id;
//         const saveUser = await newUser.save();
//         res.status(201).json(saveUser);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err.message);
//     }
// });

module.exports = addUser;
