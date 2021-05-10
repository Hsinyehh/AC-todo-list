const mongoose = require('mongoose') // 載入 mongoose
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/todo-list'


//mongoDatabase
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('Mongodb error!')
})

db.once('open', () => {
  console.log('Mongodb connected!')
})

module.exports = db