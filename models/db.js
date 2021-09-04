const Sequelize = require("sequelize")
const sqlite = require("sqlite3").verbose()

const db = new Sequelize({
	dialect: 'sqlite',
	storage: './models/db.sqlite'
})

const lite = new sqlite.Database("./models/db.sqlite")

const artigosSchema = db.define("Artigos",{
	author: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	nome: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	conteudo: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	tempo: {
		type: Sequelize.TEXT
	}
})

module.exports = {
  db: artigosSchema,
	lite: lite
}