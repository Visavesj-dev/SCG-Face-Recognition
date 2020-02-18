var express = require("express");
const router = express.Router();


router.get("/:date",   function(req, res) {
    
   
  var sql = require("mssql");

  var date = req.params.date;

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
    request.query(
      `SELECT People.*, Worktime.* 
        FROM     People INNER JOIN
        Worktime ON People.ID = Worktime.ID WHERE CONVERT(date, time_in)='${date}'
         `,
      function(err, recordset) {
        if (err) console.log(err);

        // send records as a response
       res.send(recordset)
      }
    );
  });
});

module.exports = router