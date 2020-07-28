require("dotenv").config()

const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const path = require('path')

const app = express()

const router = require('./routes/router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))

app.use(cors())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

app.use('/', router)

app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(process.env.APP_PORT, () => {
    console.log('App listening on port 5000!');
})