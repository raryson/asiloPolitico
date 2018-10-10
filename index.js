const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  if (req.headers['x-forwarded-proto'] != 'https') {        
    res.redirect("https://" + req.headers.host + req.url)
  } else {
    next()
  }
  res.send('index.html')
})

app.listen(process.env.PORT || 3000)