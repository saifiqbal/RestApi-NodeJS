var sql =require('mssql');
var request=require('request');

var config={
    driver: 'msnodesqlv8',
    server:'SAIFTP',
    // user:'sa',
    // password:'tenpearls',
    database:'oneplace_phx_dev',
    options: {
        trustedConnection : true // Use this if you're on Windows Azure 
    }
}
var intakeService={

    getIntake:function(result){
    //     var conn=new sql.Connection(config);
    //     var result;
    //     conn.connect().then(function () {
    //         var req = new sql.Request(conn);
    //         req.query("select top(10) * from rz_user").then(function (recordset) {
    //             result(recordset);
    //             conn.close();
    //         })
    //         .catch(function (err) {
    //         console.log(err);
    //             conn.close();
    //         });        
    //     })
    //     .catch(function (err) {
    //     console.log(err);
    //     return result;
    // });


    request({
    uri: 'https://emergemd.jira.com/rest/api/2/issue/PHX-4240',
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        result(body);
      } else {
        result(error);
      }
    }
  });
}

}
module.exports=intakeService;