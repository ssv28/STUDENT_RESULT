var express = require('express');
var router = express.Router();
let STUDENT = require("../Models/student")

router.post('/create', async function (req, res, next) {
  try {

    let studentCreate = await STUDENT.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "Student Create Successfully!",
      data: studentCreate

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

      let studentData = await STUDENT.find()

      res.status(200).json({
          status: "Success",
          message: "Student Found Successfully!",
          data: studentData

      })

  } catch (error) {
      res.status(404).json({
          status: "Fail",
          message: error.message
      })
  }

})

module.exports = router;
