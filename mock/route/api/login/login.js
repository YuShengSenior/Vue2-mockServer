const express = require('express');
const router = express.Router();
const Mock = require('mockjs');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
bodyParser.urlencoded({ extended: false })


router.post('/userlogin', jsonParser, function (req, res) {
  console.log(req.body);
  let infoObj = req.body
  if (infoObj.username !== '' || infoObj.pw !== '') {
    var result = {
      flag:true,
      code:200,
      data: Mock.mock({
        currentUser:infoObj.username,
        "token":"@guid",
        "countrysx":"@county(true)",
        "name":"@cname",
        "phoneNumber":/^1[3-9]\d{9}$/
      })
    };
    res.send(result);
  }else{
    // res.sendStatus(200)
    res.send({
      msg:'账号或密码错误!',
      code:404,
      data:{

      }
    })
  }

});


module.exports = router;

