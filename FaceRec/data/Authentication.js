var express = require("express");
const router = express.Router();
const constants = require("./Constant");
const bcrypt = require("bcryptjs");

router.post("/login", async function(req, res) {

  const { username, password } = req.body;
  
  

  var sql = require("mssql");

  // config for your database
  var config = {
    user: "cmu59",
    password: "Abc123456",
    server: "facereccmu.database.windows.net",
    database: "facedatabase",
    encrypt: true
  };

  // connect to your database
  sql.connect(config, function(err) {
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();
    

    // query to the database and get the records
    request.query(`select * from member where username = '${username}' and passwd = '${password}'`, function(err, recordset) {
      if (recordset == null) {
          res.json({
          result: constants.kResultNok,
          message: "Incorrect username"
        });
      } else  {
        
        res.json({
            result: constants.kResultOk,
            message: JSON.stringify(recordset)
          });
      }
    });
  });
});

module.exports = router;
