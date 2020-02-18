var express = require("express");
const router = express.Router();

router.get("/employees/:id", function(req, res) {
    var id = req.params.id;
  
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
      request.query(`select * from People where id = ${id}`, function(
        err,
        recordset
      ) {
        if (err) console.log(err);
  
        // send records as a response
        res.send(recordset);
      });
    });
  });

  router.get("/", function(req, res) {
    var sql = require("mssql");
   
  
    var d = new Date();
    var yyyy = d.getFullYear();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
  
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    d = yyyy + "-" + mm + "-" + dd;
  
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
          Worktime ON People.ID = Worktime.ID where CONVERT(date, time_in)='${d}'  order by time_in asc
          
           `,
        function(err, recordset) {
          if (err) console.log(err);
  
          // send records as a response
          res.send(recordset);
        }
      );
    });
  });
  
  


  module.exports = router
