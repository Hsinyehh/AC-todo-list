
const express = require('express')
const router = express.Router()
const Todo = require('../../models/todo') // 載入 Todo model

// 設定路由
// Todo 首頁
router.get('/', (req, res) => {
  Todo.find()//取出Todo Model所有資料
    .lean()// 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ _id: 'asc' })
    .then(todos => res.render('index', { todos })) // 將資料傳給 index 樣板
    .catch(error => console.log('Error'))// 錯誤處理

})

module.exports = router