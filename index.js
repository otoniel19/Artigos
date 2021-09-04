const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser')
const path = require("path")

//database
const model = require("./models/db.js")
const db = model.db
const lite = model.lite

//Handlebars
 app.engine("handlebars",handlebars({defaultLayout: 'main'}))
 app.set("view engine",handlebars)
//BodyParser
 app.use(bodyParser.urlencoded({extended: false}))
 app.use(bodyParser.json())
//BootStrap
app.use(express.static(path.join(__dirname,"public")))

//formataçoes
//tempo
const tempoA = require("./format/data.js")


//rotas

app.get("/",(req,res) => {
db.findAll({order: [['id','DESC']]}).then(data => {
		res.render("home.handlebars",{dados: data})
})
})
 
app.get("/artigo",(req,res) => {
  res.render("artigo.handlebars")
})

app.post("/salva",(req,res) => {
  db.create({
		author: req.body.user,
		nome: req.body.nome,
		conteudo: req.body.conteudoA,
		tempo: tempoA(new Date())
	})
	res.redirect("/")
})

app.get("/artigo=:id",(req,res) => {
 lite.each("SELECT * FROM Artigos",(err,edata) => {
  	 res.render("ver.handlebars",{titulo: edata.nome,texto: edata.conteudo,tmp: edata.tempo,Usuario: edata.author})
 }) 
})
//outros
const port = process.env.PORT
app.listen(port)