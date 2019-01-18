const express = require('express'),
	router = express.Router()

module.exports = app => {
	router
		.get('/', (req, res) =>{
			res.send('hola')
		})

	app.use(router)

}