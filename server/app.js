const express = require('express')
const mongoose = require('mongoose')

// import ['dotenv'] package
const dotenv = require('dotenv')
dotenv.config()

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

// Craete Router ['/']
app.get('/', (req, res) => res.send('Hello node'))

// Craete App Listen PORT
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server is runing on ${port}!`))
