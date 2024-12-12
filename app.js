const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./server/routes/itemRoutes')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Routes
app.use('/', routes)

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
