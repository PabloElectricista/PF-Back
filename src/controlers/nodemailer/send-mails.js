const {sendEmailAuth,sendEmailSale}=require('./generateNotifications')
const Users = require('../../models/User')
const Orders = require('../../models/Order')
const Products=require('../../models/Products')
async function authMail(id){
    try{
        const foundUser=await Users.findById({_id:id});
        const info=await sendEmailAuth(foundUser.email,foundUser.username)
        console.log(info)
    }catch(e){
        console.log(e)
    }
}
//usernameSeller,emailSeller,usernameBuyer,nameProduct
async function saleMail(id){
    try{
        const foundOrder=await Orders.findById({_id:id})
        //console.log(foundOrder);
        const foundUserSeller=await Users.findById(foundOrder.userseller).populate({path: "orders"});
        const foundUserBuyer=await Users.findById(foundOrder.user).populate({path:"orders"})
        const foundIdProducts= await foundOrder.products.map(pro=>pro.products);
        const foundProducts= await Promise.all(foundIdProducts.map((id)=>Products.findById(id)))
        const foundProductsName=foundProducts.map(p=>p.name)
        const info=await sendEmailSale(foundUserSeller.username,foundUserSeller.email,foundUserBuyer.username,foundProductsName.join(', '))
        console.log(info)
    }catch(e){
        console.log(e)
    }
}
module.exports={authMail,saleMail}