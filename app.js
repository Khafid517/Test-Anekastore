require("dotenv").config()

const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const path = require('path')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const routes = require('./routes/router')

const app = express()

const swaggerDefinition = {
    info: {
        title: 'Anekastore',
        version: '1.0.1',
        description: 'dokumentasi API Anekastore'
    },
    host: 'localhost:5000',
    basePath: '/'
}

const swaggerOption = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./routes/*.js']
}

const swaggerDoc = swaggerJsDoc(swaggerOption)

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))

app.use(cors())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

app.use('/', routes)

app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(process.env.APP_PORT, () => {
    console.log('App listening on port 5000!');
})