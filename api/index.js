const express = require('express')
const app = express()
const nodeMailer = require('nodemailer')
const {google} = require('googleapis')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()


app.use(express.json())
app.use(cors())

const CLIENT_ID = process.env.clientId
const CLIENT_SECRET = process.env.clientSecret
const REDIRECT_URL = process.env.redirectUrl
const REFRESH_TOKEN = process.env.refreshTokens

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL) 
oAuth2Client.setCredentials({refresh_token : REFRESH_TOKEN})

app.post('/email',(req,res) => {
    const {name, email, subject, message} = req.body
    
    const accessToken = fetch(oAuth2Client.getAccessToken())

    const transport = nodeMailer.createTransport({
        service : 'gmail',
        auth : {
            type : 'OAUTH2',
            user : email,
            clientId : CLIENT_ID,
            clientSecret : CLIENT_SECRET,
            refreshToken : REFRESH_TOKEN,
            accessToken : accessToken
        }
    })

    const mailOptions = {
        from : email,
        to : 'vasanthg1240@gmail.com',
        subject : subject,
        text : message
    }

    transport.sendMail(mailOptions, (error, info) => {
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