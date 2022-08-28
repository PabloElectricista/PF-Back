//function sendNotification(req,res){}
const {sendEmailAuth}=require('./generateNotifications')
const Users = require('../../models/User')
/*async function sendMail(email,message){
    console.log("from controller")
   
    const transporter = createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
            auth: {
              user: "a050de2e9b0a90", //.env
              pass: "9ccf1ebd7386ef" ////.env
            }
    })
    await transporter.sendMail({
        from:'Deep down in Louisiana close to New Orleans <bgoodecommerce.com>',
        to: email,
        subject:"Website contact form",
        text:message
    },
    (error)=>{
        if(error){
            console.log(error)
        }else console.log(messageId.info)
    })  
}*/
async function authMail(req,res){
    try{
        const {_id}=req.body
        const foundUser=await Users.findById(_id);
        //const {username,email}=foundUser
        console.log(`foundUser: ${foundUser}`)
        const info=await sendEmailAuth(foundUser.email,foundUser.username)
        res.status(200).send(info)
    }catch(e){
        res.status(500).send(e)
    }
}

module.exports={authMail}