const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser')

//Handlebars
 app.engine("handlebars",handlebars({defaultLayout: 'main'}))
 app.set("view engine",handlebars)
//BodyParser
 app.use(bodyParser.urlencoded({extended: false}))
 app.use(bodyParser.json())

//rotas
 


//outros
const port = process.env.PORT
app.listen(port)