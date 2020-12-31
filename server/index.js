const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { DailyAlgoSchema } = require("./models/DailyAlgoSchema");

//verify whether current node is running as local or prooduction mode
const config = require("./config/key");


//body parser option
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//mongoDB
const mongoose = require('mongoose');


mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected........"))
.catch(err => console.log(err))




//get router example
app.get('/', (req, res) => {
  res.send('Hello World!...')
})

//post router example
app.post('/register', (req, res) => {

  console.log(req.body)
  const dailyAlgoSchema = new DailyAlgoSchema(req.body)

  dailyAlgoSchema.save((err, algoInfo) => {
    if ( err ) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})


//listening router
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})