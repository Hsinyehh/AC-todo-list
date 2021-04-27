const express = require('express')
const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('Mongodb error!')
})

db.once('open', () => {
  console.log('Mongodb connected!')
})


app.get('/', (req, res) => {
  res.send('This is the website.')

})

app.listen(port, () => {
  console.log('The server is running on http://localhost:3000')
})

