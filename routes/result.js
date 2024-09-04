var express = require('express');
var router = express.Router();
let RESULT = require("../Models/result")

router.post('/create', async function (req, res, next) {
  try {

    let resultCreate = await RESULT.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Result Create Successfully!",
      data: resultCreate

    })

  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
})


router.get('/all', async function (req, res, next) {

  try {
    // let resultData = await RESULT.find().populate("studentID")

    let resultData = await RESULT.aggregate([
      {
        $lookup: {
          from: "students",  //from mongoDB database compass
          localField: "studentID", //populate id
          foreignField: "_id",
          as: "Student"    //feild name
        }
      },
      {
        $unwind: "$Student"           //Array -----> object convert
      },
      {
        $addFields: {    //feilds add krava
          total: { $sum: ['$maths', '$english', '$gujarati'] },  // total 
          per: {   //per
            $divide: [
              { $sum: ['$maths', '$english', '$gujarati'] },
              3
            ]
          }

        }
      },
      {
        $addFields: {
          divide: {
            $round: [
              { $divide: ['$total', 3] },
              2
            ]
          }
        }
      }
    ])
    
    res.status(200).json({
      status: "Success",
      message: "Result Found Successfully!",
      data: resultData

    })

  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }

})

module.exports = router;
