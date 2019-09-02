const express = require('express')
const app = express()
const port=process.env.PORT;
console.log(port);

app.use(express.json())
app.get('/', function (req, res) {
 res.send('Server listen on port'+ port)
})
app.listen(port);