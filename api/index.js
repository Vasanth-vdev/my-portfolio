const express = require('express')
const app = express()

app.get('/test',(req,res) => {
    res.send('Hello world!')
})
app.listen(4202)