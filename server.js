const express = require("express");
const mongoose = require("mongoose");
const app = express();
const middleware =require('./middleware')
const url = 'mongodb://localhost:27017/mydatabase';
const RegisterUser = require('./schema');
const jwt = require('jsonwebtoken')
const cors = require('cors');

app.listen(5000, () => {

	console.log('server is runnning successfully')

})
app.use(express.json())
app.use(cors({origin:'*'}))
app.post('/register', async (req, res) => {
	try {
		const { username, email, password, confirmPassword } = req.body;
		let exist = await RegisterUser.findOne({ email })
		if (exist) return res.status(409).send('user already registered')
		if (password !== confirmPassword) return res.status(409).send('passwords not matching')
		let newUser = new RegisterUser({

			username,
			email,
			password,
			confirmPassword
		})
		await newUser.save();
		res.status(200).send('user successfully registered')
	} catch (error) {
		console.error(error)
	}
})
app.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body
		let exist = await RegisterUser.findOne({ email })
		if (!exist) return res.status(404).send('User Not Exist')
		if (exist.password !== password) return res.status(404).send('invalid password')
		let payload = {
			user: {
				id: exist.id
			}

		}
		jwt.sign(payload, 'jwtSecret', { expiresIn: 70000 },
			(err, token) => {
				if (err) throw err
				return res.json({ token })
			})

	} catch (error) {
		console.error(error)
	}

})
app.get('/myprofile' , middleware ,  async (req , res)=>{
	try {
		let exist = await RegisterUser.findById(req.user.id);
		if(!exist){
			return res.status(401).send('you are not logged in')
		}
		res.json(exist)
		
	} catch (error) {
		console.log(error)
		
	}
})

app.get('/', (req, res) => {
	res.send('hello w0orld')
})

mongoose.connect(url).then((result) => {
	console.log('connected to mongodb compass')
}).catch((err) => {
	console.error(err);
});