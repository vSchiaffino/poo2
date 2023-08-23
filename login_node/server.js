if (process.en)

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const initializePassport = require('./passport-config')

initializePassport(
    passport, 
    email => { users.findIndex(user => user.email === email) }
)

const users = [] //Solo para desarrollo, si se quiere hacer bien se usa base de datos

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended : false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET
}))

app.get('/', (req, res) => {
    res.render('index.ejs', { name: "Kyle"})
})

app.get('/login' , (req, res) =>{
    res.render('login.ejs')
})

app.get('/register' , (req, res) =>{
    res.render('register.ejs')
})

app.post('/register', async (req, res) => { //Uso async para poder usar try y catch dentro
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

app.listen(3000)