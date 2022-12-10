require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())
const path = require('path')

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

app.get('/', (req, res) => {
  res.send('Welcome to  website.')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Node server listening on port ${PORT}`))
