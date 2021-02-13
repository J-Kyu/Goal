const express = require('express');
const router = express.Router();

const { SchemaAlgo } = require("../models/SchemaAlgo");


//update algo data states
router.put('/confirmAlgoProb/', (req, res) => {

  try{

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

//get algorithm from mongoDB whose isDone is false
router.get('/GetNotDoneAlgoList',(req,res) => {
  SchemaAlgo.find({
    isDone: false
  })
  .exec((err,algoList) => {
    if(err) return res.status(400).send(err);
    res.status(200).json({success: true,algoList})
  })
})



//get Alogrithm Data
router.get('/GetAlgorithm/', (req,res) => {
  SchemaAlgo.find(function(err, algo){
    if(err)return res.status(500).send({
      error: "database failure"
    });
    else{
      res.json(algo);
    }
  })
})



//post router example
router.post('/RegisterAlgo', (req, res) => {


  const schemaAlgo = new SchemaAlgo(req.body);

  schemaAlgo.save((err, algoInfo) => {
    if ( err ) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})


module.exports = router;