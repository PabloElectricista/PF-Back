const { createTransport } = require('nodemailer')
const transportator = require('./configurations')

async function sendEmailAuth(email,username){
    const transporter=createTransport(transportator)
    await transporter.sendMail({
        from: 'Deep down in Louisiana close to New Orleans <bgoodecommerce.com>',
        to: email,
        subject: "Website contact form",
        text: `Welcome to the B. Goode comunity ${username}, thank you for choosing us to help you carry out your business with musical instruments`
    },
    (error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log(info)
        }
    })
}
async function sendEmailSale(usernameSeller,emailSeller,usernameBuyer,nameProducts){
    const transporter=createTransport(transportator)
    await transporter.sendMail({
        from: 'Deep down in Louisiana close to New Orleans <bgoodecommerce.com>',
        to: emailSeller,
        subject: "Website contact form",
        text: `Hi! ${usernameSeller}, we inform you that ${usernameBuyer} has made a purchase of the following products: ${nameProducts}`
    },
    (error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log(info)
        }
    }) 
}
async function sendClaimMail(msg,service){
    const transporter=createTransport(transportator)
    await transporter.sendMail({
        from: 'Location unknow',
        to: 'bgoodecommerce.com',
        subject: service,
        text: msg
    },
    (error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log(info)
        }
    })
}
async function autoClaimRes(username,email){
    const transporter=createTransport(transportator)
    await transporter.sendMail({
        from: 'Deep down in Louisiana close to New Orleans <bgoodecommerce.com>',
        to: email,
        subject: service,
        text: `Hello ${username}! Your claim will be answered shortly, thank you for informing us of your problem.`
    },
    (error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log(info)
        }
    })
}

module.exports={sendEmailAuth,sendEmailSale,sendClaimMail,autoClaimRes}


