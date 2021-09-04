const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser')
const path = require("path")

//Handlebars
 app.engine("handlebars",handlebars({defaultLayout: 'main'}))
 app.set("view engine",handlebars)
//BodyParser
 app.use(bodyParser.urlencoded({extended: false}))
 app.use(bodyParser.json())
//BootStrap
app.use(express.static(path.join(__dirname,"public")))

//rotas

app.get("/",(req,res) => {
	res.render("home.handlebars")
})
 
//

//outros
const port = process.env.PORT
app.listen(port)