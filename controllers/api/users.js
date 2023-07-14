require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const bcrypt = require('bcrypt')



const signUp = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.locals.data.user = user 
        res.locals.data.token = token 
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message})
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if(!user) throw new Error('user not found, email was invalid')
        const password = crypto.createHmac('sha256', process.env.SECRET).update(req.body.password).split('').reverse().join('')
        const match = await bcrypt.compare(password, user.password)

    } catch (error) {

    }
}







function createJWT(user){
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '48h' })
}