const express = require('express')
const exphbs  = require('express-handlebars')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, './public')

app.engine('.hbs', exphbs({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.static(publicDirectoryPath))

app.get('/forms', (req, res) => {
    res.render('forms', {title: 'Forms'});
})

app.get('/elements', (req, res) => {
  res.render('elements', {title: 'Elements'})
})

app.get('/text-content', (req, res) => {
  res.render('textContent', { title: 'textContent'})
})

app.get('/events', (req, res) => {
  res.render('events', {title: 'Events'})
})

app.get('/selectors', (req, res) => {
  res.render('selectors', {title: 'Selectors'})
})

app.get('/todo', (req, res) => {
  res.render('todo', {title: 'Todo'})
})

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})