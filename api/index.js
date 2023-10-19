const express = require('express')
const app = express()
const nodeMailer = require('nodemailer')
const {google} = require('googleapis')
const cors = require('cors')
const { oauth2 } = require('googleapis/build/src/apis/oauth2')
const { Await } = require('react-router-dom')
const Oauth2 = google.auth.OAuth2

app.use(express.json())
app.use(cors())

app.post('/email',(req,res) => {
    const {name, email, subject, message} = req.body
    

    const mailOptions = {
        from : email,
        to : 'vasanthg1240@gmail.com',
        subject : subject,
        text : message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.error('Error occured:', error)
            res.status(500).json({message : 'Error sending mail!'})
        } else {
            console.log('Email sent successfully:', info.response)
            res.status(200).json({message : 'Email sent successfully'})
        }
    })
})

app.get('/test',(req,res) => {
    res.send('Hello world!')
})
app.listen(4202)