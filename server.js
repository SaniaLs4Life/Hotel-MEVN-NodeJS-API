var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Room = require('./api/models/roomListModels'),
    bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/MevnHotel', {useNewUrlParser: true})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./api/routes/roomListRoutes')
routes(app)

app.listen(port, () => {
    console.log(`Hotel RESTful API server started on : ${ port }`)
})
