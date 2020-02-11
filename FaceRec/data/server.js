var express = require('express');
var app = express();
var cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
   
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
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from People', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(3030, function () {
    console.log('Server is running..');
});