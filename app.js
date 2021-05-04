const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')//載入method override
const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 引用 body-parser
const bodyParser = require('body-parser')
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))



// 設定每筆要求都會透過methodOverride進行前置處理
app.use(methodOverride('_method'))

app.use(routes)


app.listen(port, () => {
  console.log('The server is running on http://localhost:3000')
})

