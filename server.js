const express = require('express')
const app = express()
const path = require('path')

// SET VIEWS
app.set('views', "./views")
app.set('view engine', "ejs")

// STATIC FILES
app.use(express.static('public'))
app.use('/css', express.static(path.join(__dirname, 'public', 'styles')))
app.use('/js', express.static(path.join(__dirname, 'public', 'js')))
app.use('/images', express.static(path.join(__dirname, 'public', 'images')))


// ROUTES
app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views', 'home.ejs'))
})

app.get('/about', (req, res) => {
    res.render(path.join(__dirname, 'views', 'about.ejs'))
})

app.get('/projects', (req, res) => {
    res.render(path.join(__dirname, 'views', 'projects.ejs'))
})

app.get('/contact', (req, res) => {
    res.render(path.join(__dirname, 'views', 'contactme.ejs'))
})

app.get('*', (req, res) => {
    res.render(path.join(__dirname, 'views', '404.ejs'))
})

app.listen(process.env.PORT || 5000)