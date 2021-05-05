const passport = require("passport")
const JwtStrategy = require('passport-jwt').Strategy //Para extraer el token
const ExtractJwt = require('passport-jwt').ExtractJwt //Para convertir el token a la estructura que le digamos
const config = require('../config')
const User = require('../models/user')


passport.use('auth', new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret,
}, async (payload, done) => {
    try {
        const user = await User.findById(payload.sub)
        if (!user) {
            return done(null, false)
        }
        done(null, user)
    } catch (error) {
        done(error, false)
    }
   }))

const auth = passport.authenticate('auth', {
    session: false, 
 })
 
 
 module.exports = { auth }
   

