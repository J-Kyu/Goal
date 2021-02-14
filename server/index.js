const express = require('express')
const app = express()
const port = 5000


const { SchemaYearlyGoal } = require("./models/SchemaYearlyGoal");
const { SchemaBook } = require('./models/SchemaBook');

const bodyParser = require('body-parser');

//verify whether current node is running as local or prooduction mode
const config = require("./config/key");


//body parser option
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/algo', require('./router/algo'));
app.use('/api/books/',require('./router/books'));
app.use('/api/weeklyGoal/',require('./router/weeklyGoal'));
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
app.post('/YearlyGoalRegister', (req, res) => {

  const schemaYearlyGoal = new SchemaYearlyGoal(req.body)

  schemaYearlyGoal.save((err, algoInfo) => {
    if ( err ) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})



//test get
app.post('/api/TestReadPage', (req,res) => {
  SchemaBook.updateOne(
    {_id:"60219f2a03fdf00d5cf4051d"},
    {$push: {
        dailyPage:{
          readPage: 200,
          date: Date()
        }
    }
  })
  .exec((err,book) => {
    if(err) {
      console.log(err)
      return res.status(400).send(err);
    }

    return res.status(200).json({success: true})
  })

})


//get from mongoDB example
app.get('/api/YearlyGoal/:year', (req, res) =>{
  SchemaYearlyGoal.find({
    year: req.params.year
  })
  .then(goal => res.status(200).json(goal))
})




//listening router
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})