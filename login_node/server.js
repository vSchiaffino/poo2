if (process.env.NODE_EN !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const initializePassport = require('./passport-config')
const methodOverride = require('method-override')

initializePassport(
    passport, 
    email => { users.find(user => user.email === email) },
    id => { users.find(user => user.id === id) }
)

const users = [] //Solo para desarrollo, si se quiere hacer bien se usa base de datos

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended : false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: res.user.name})
})

app.get('/login', checkNotAuthenticated,(req, res) =>{
    res.render('login.ejs')
})

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/register', (req, res) =>{
    res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => { //Uso async para poder usar try y catch dentro
    try{
        const hashedPass = await bcrypt.hash(req.body.password, 10)
        users.push({
            id : Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
    res.redirect('/login')
    }catch{
        res.redirect('/register')
    }

})

app.delete('/logout', (req,res) => {
    req.logOut()
    res.redirect('/login')
})

function checkAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        return next()
    }

    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        return res.redirect('/')
    }
    next()
}

app.listen(3000)