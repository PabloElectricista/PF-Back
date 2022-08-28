//const {createTransport}=require('nodemailer')
const transportator = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a050de2e9b0a90", //.env
        pass: "9ccf1ebd7386ef" ////.env
    }
}

module.exports = transportator