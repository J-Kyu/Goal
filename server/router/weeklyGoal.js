const express = require('express');
const router = express.Router();

const { SchemaWeeklyGoal } = require("../models/SchemaWeeklyGoal");

router.post('/RegisterWeeklyGoal', (req, res) => {

  const schemaWeeklyGoal = new SchemaWeeklyGoal(req.body);

  schemaWeeklyGoal.save((err, goalInfo) => {
    if ( err ) return res.json({ success: false, err})
    return res.status(200).json({
        success: true
    })
  })
})


router.get('/GetWeeklyAlgoProgressResult' , (req,res) => {
  SchemaWeeklyGoal.find()
  .exec((err, wkGoal) => {
    if(err) return res.status(400).send(err);
    res.status(200).json({success: true, wkGoal})
  })

})





module.exports = router;