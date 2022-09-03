const { createTransport } = require('nodemailer')

const transportator = {
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
        user: 'bgoodecommerce58@gmail.com',
        pass: process.env.APP_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
}
module.exports = createTransport(transportator)