const {createTransport} = require('nodemailer')
const transportator = require('./configurations')

async function sendEmailAuth(email,username){
    const transporter=createTransport(transportator)
    await transporter.sendMail({
        from:'Deep down in Louisiana close to New Orleans <bgoodecommerce.com>',
        to: email,
        subject:"Website contact form",
        text:`Welcome to the B. Goode comunity ${username}, thank you for choosing us to help you carry out your business with musical instruments`
    },
    (error,info)=>{
        

        if(error){
            console.log(error)
        }else{
            console.log(info)
        }
    })
}

module.exports={sendEmailAuth}


