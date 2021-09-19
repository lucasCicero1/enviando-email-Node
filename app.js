const express = require('express')
const nodemailer = require('nodemailer')

const app = express()

const port = 3000

const user = "Email"
const pass = "Password"

app.get('/send', (req, res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.live.com",
        port: 587,
        auth: {user, pass}
    })


    transporter.sendMail({
        from: user,
        to: ["lucas.cicero_cs@hotmail.com"],
        replyTo: "lucas.cicerofs@outlook.com",
        subject: "Lorem Ipsum",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }).then( info => { res.send(info) }).catch( error => { res.send(error) })

})


app.listen(port, () => {console.log(`Server running at port ${port}`)})