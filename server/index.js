const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { SchemaAlgo } = require("./models/SchemaAlgo");
const { SchemaYearlyGoal } = require("./models/SchemaYearlyGoal");

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
  const schemaAlgo = new SchemaAlgo(req.body)

  schemaAlgo.save((err, algoInfo) => {
    if ( err ) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

//post router example
app.post('/YearlyGoalRegister', (req, res) => {

  console.log(req.body)
  const schemaYearlyGoal = new SchemaYearlyGoal(req.body)

  schemaYearlyGoal.save((err, algoInfo) => {
    if ( err ) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

//get Alogrithm Data
app.get('/api/GetAlgorithm/', (req,res) => {
  SchemaAlgo.find(function(err, algo){
    if(err)return res.status(500).send({
      error: "database failure"
    });
    else{
      res.json(algo);
    }
  })
})

//get from mongoDB example
app.get('/api/YearlyGoal/:year', (req, res) =>{
  SchemaYearlyGoal.find({
    year: req.params.year
  })
  .then(goal => res.status(200).json(goal))
})

//get router example ............ axios
app.get('/api/hello', (req,res) => {
  res.send("Hi Hello")
})

//listening router
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})