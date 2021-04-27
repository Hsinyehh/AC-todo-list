const express = require('express')
const mongoose = require('mongoose') // 載入 mongoose
const exphbs = require('express-handlebars')
const Todo = require('./models/todo') // 載入 Todo model
const app = express()
const port = 3000

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//mongoDatabase
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('Mongodb error!')
})

db.once('open', () => {
  console.log('Mongodb connected!')
})

// 設定路由
// Todo 首頁
app.get('/', (req, res) => {
  Todo.find()//取出Todo Model所有資料
    .lean()// 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .then(todos => res.render('index', { todos })) // 將資料傳給 index 樣板
    .catch(console.log('Error'))// 錯誤處理

})

app.listen(port, () => {
  console.log('The server is running on http://localhost:3000')
})

