const { createTransport } = require('nodemailer')

async function sendMail(req, res) {
    console.log("from controller")
    const { email, message } = req.body;
    try {
        const transporter = createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "a050de2e9b0a90",
                pass: "9ccf1ebd7386ef"
            }
        })
        await transporter.sendMail({
            from: 'Deep down in Louisiana close to New Orleans <bgoodecommerce.com>',
            to: "roger.rm03@gmail.com",
            subject: "Website contact form",
            text: "message"
        }, (error, info) => {
            if (error) {
                res.status(500).send({ error })
            } else res.status(200).send(info.messageId)
        })


    } catch (e) {
        res.send({
            message: e
        })
    }
}

module.exports = { sendMail }