const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { SchemaAlgo } = require("./models/SchemaAlgo");
const { SchemaYearlyGoal } = require("./models/SchemaYearlyGoal");
const { SchemaBook } = require("./models/SchemaBook")
const { SchemaWeeklyGoal } = require("./models/SchemaWeeklyGoal");

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
app.post('/registerAlgo', (req, res) => {

  console.log(req.body);

  const schemaAlgo = new SchemaAlgo(req.body);

  schemaAlgo.save((err, algoInfo) => {
    if ( err ) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.post('/registerWeeklyGoal', (req, res) => {

  console.log(req.body);

  const schemaWeeklyGoal = new SchemaWeeklyGoal(req.body);

  schemaWeeklyGoal.save((err, goalInfo) => {
    if ( err ) return res.json({ success: false, err})
    return res.status(200).json({
        success: true
    })
  })
})

app.post('/registerBook', (req, res) => {

  console.log(req.body);

  const schemaBook = new SchemaBook(req.body);

  schemaBook.save((err, goalInfo) => {
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

app.get('/api/GetThisWeekBookInfo/', (req, res) => {

  var bookId;

  SchemaWeeklyGoal.find(function(err, wkGoal){
    if(err) return res.status(500).send({
      error: "Database Failure Cannot find Week Goal"
    });
    else{
      console.log(wkGoal[0]);

    SchemaBook.find({
        _id: wkGoal[0].bookId
      }).exec((err, book) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({success: true, book})
      })
    }
  })



})

//get algorithm from mongoDB whose isDone is false
app.get('/api/GetNotDoneAlgoList',(req,res) => {
  SchemaAlgo.find({
    isDone: false
  })
  .exec((err,algoList) => {
    if(err) return res.status(400).send(err);
    res.status(200).json({success: true,algoList})
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



//update algo data states
app.put('/api/confirmAlgoProb/', (req, res) => {

  try{
    console.log("PUT: "+req.body.id);

    SchemaAlgo.findById(req.body.id, (err, algo) => {
      //error check
      if(err) return res.status(400).json({ success: false, error: "database failure"});
      if(!algo) return res.status(404).json({ success: false, error: "Algo Not Found"});

      //update
      if(!algo.isDone) algo.isDone = true;

      //save
      algo.save( (err) => {
        if(err) res.status(500).json({ success: false, error: "failed to update"});
        res.json({ success: true});
      })
    })

  }catch(err){
    console.log("Error: Cannot Parse Parmeter: "+err)
    console.log(req.body)
  }

  
})





//listening router
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})