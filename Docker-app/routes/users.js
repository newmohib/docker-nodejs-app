var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', (req, res)=> {

  axios.get('http://product-service-api:4000/users')
  .then(response => {
    console.log(response.data);
    res.send(response.data)
  }).catch(err=>{
    console.log("err",err);
    res.send(" Err")
  })


});

module.exports = router;
