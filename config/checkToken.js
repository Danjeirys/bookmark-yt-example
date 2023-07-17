const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    let token = req.get('Authorization')

    if(token){
        token = token.replace('Bearer ', '')

        jwt.verify(token, process.env.SECRET, function(err, decoded){
            req.user = err ? null : decoded.user // storing decoded user after getting it
            req.exp = err ? null : new Date(decoded.exp * 1000) // checking for experation 
            res.locals.data.email = decoded.user.email // storing decoded user email
        })
        return next()
    } else {
        req.user = null
        return next()
    }
}