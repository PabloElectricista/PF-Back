//function sendNotification(req,res){}
const {sendEmailAuth}=require('./generateNotifications')
const Users = require('../../models/User')

async function authMail(id){
    try{
        
        const foundUser=await Users.findById({_id:id});
        console.log(`foundUser: ${foundUser}`)
        const info=await sendEmailAuth(foundUser.email,foundUser.username)
        console.log(info)
    }catch(e){
        console.log(e)
    }
}

module.exports={authMail}