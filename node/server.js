const express = require('express')
const app = express()
app.use(express.json())
app.get('/', function (req, res) {
 res.send('Server listen on port', 3000)
})
app.listen(3000);