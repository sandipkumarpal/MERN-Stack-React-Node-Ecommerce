const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const csrf = require('csurf')

// Import Config
const { ROOT_API_PATH } = require('./config/router')

// import ['dotenv'] package
const dotenv = require('dotenv')
dotenv.config()

// CSRF Protection
const csrfProtection = csrf({ cookie: true })

//  Create express app
const app = express()

// database connection with MonogoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log('DB Connected'))
  .catch(err => console.log('DB Connection Error: ', err))

// apply middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))

// All routers call in one function
// Add router path ['/api']
readdirSync('./routes').map(route =>
  app.use(ROOT_API_PATH, require(`./routes/${route}`))
)

// Craete Router ['/']
app.get('/', (req, res) => res.send('Hello Node APP'))

// We need this because "cookie" is true in csrfProtection
app.use(csrfProtection)

app.get('/api/csrf-token', (req, res) => {
  // pass the csrfToken to the view
  res.json({ csrfToken: req.csrfToken() })
})

// Craete App Listen PORT
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server is runing on ${port}!`))
