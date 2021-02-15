const express = require('express');
const router = express.Router();

const { SchemaBook } = require("../models/SchemaBook");
const { SchemaWeeklyGoal } = require("../models/SchemaWeeklyGoal");

router.post('/RegisterBook', (req, res) => {


  const schemaBook = new SchemaBook(req.body);

  schemaBook.save((err, goalInfo) => {
    if ( err ) return res.json({ success: false, err})
    return res.status(200).json({
        success: true
    })
  })
})


router.get('/GetThisWeekBookInfo/', (req, res) => {

  SchemaWeeklyGoal.find(function(err, wkGoal){
    if(err) return res.status(500).send({
      error: "Database Failure Cannot find Week Goal"
    });
    else{
      SchemaBook.find({
          _id: wkGoal[0].bookId
        }).exec((err, book) => {
          if(err) return res.status(400).send(err);
          res.status(200).json({success: true, book})
        })
    }
  })
})

//update algo data states
router.put('/ReadBook/', (req, res) => {

  try{
    console.log("PUT: "+req.body.bookId);

    SchemaBook.findById(req.body.bookId, (err, book) => {
      //error check
      if(err) return res.status(400).json({ success: false, error: "database failure"});
      if(!book) return res.status(404).json({ success: false, error: "Algo Not Found"});

      //update
      book.readPageNum = req.body.readPage;

      //save
      book.save( (err) => {
        if(err) res.status(500).json({ success: false, error: "failed to update"});
        res.json({ success: true});
      })
    })

  }catch(err){
    console.log("Error: Cannot Parse Parmeter: "+err)
    console.log(req.body)
  }
})



router.get('/GetBookById/', (req,res) => {


  SchemaBook.findById(req.body.id, (err, book) =>{
    
    if(err) return res.status(400).json({success: false, error: "database failure"})
    if(!book) return res.status(404).json({ success: false, error: "Algo Not Found"})

    console.log(book);
    return res.status(200).json({success: true, book})
  })

})



module.exports = router;