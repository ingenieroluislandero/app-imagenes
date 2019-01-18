const mongoose = require('mongoose'),
	{database} = require('./keys.js')

mongoose.connect(database.URI, {
	useNewUrlParser: true
})
	.then(db =>console.log('DB conectada'))
	.catch(err => console.log(err))

