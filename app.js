require('dotenv').config()
//async errors

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())

//routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

//products routes

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start = async () => {
  //connectDB
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port :- ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
