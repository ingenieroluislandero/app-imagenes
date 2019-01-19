const path = require('path')
const fs = require('fs-extra')
const ctrl = {}
const {randomNumber} = require('../helpers/libs')


ctrl.index = (req, res)=>{
		res.send('hola2')
		}
ctrl.create = async (req, res) => {
		const imgUrl = randomNumber()
		const imageTempPath = req.file.path;
        const ext = path.extname(req.file.originalname).toLowerCase();
        const targetPath = path.resolve(`src/public/upload/temp/${imgUrl}${ext}`);

			if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
				await fs.rename(imageTempPath, targetPath)
				res.send('funciona')
			}

		}
ctrl.like = (req, res)=>{
		res.send('hola')
		}
ctrl.comentario = (req, res)=>{
		res.send('hola')
		}
ctrl.delete = (req, res)=>{
		res.send('hola')
	}
module.exports = ctrl