const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(80, () => {
  console.log('Express listening on port 80')
})
