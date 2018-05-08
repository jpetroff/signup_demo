express = require 'express'
request = require 'request'

app = express()


app.use(express.static __dirname + '/public')

app.listen 80, '0.0.0.0', () ->
  console.log 'run!'
