var express=require('express');
var router=express.Router();
var request=require('request');
var intakeService=require('../service/intakeservice');
var _utfEncoding=require('utf8');
// var nodesql=require('msnodesql');

router.post('/CreateSubTask',function(req,res){
    
    var _credentials=req.body.credentials.username +':'+req.body.credentials.password;
    var _encodedCredentials=_utfEncoding.encode(_credentials);
    var _base64Credential=new Buffer(_encodedCredentials).toString('base64');
    var authorizationHeader="Basic "+_base64Credential;
    var jsonData={
                    "fields": {
                        "project": {
                            "key": "PHX"
                        },
                        "parent": {
                            "key": req.body.Jira.fields.parent.key
                        },
                        "summary": req.body.Jira.fields.summary,
                        "assignee": {
                            "name": req.body.Jira.fields.assignee.name
                        },
                        "description": "",
                        "issuetype": {
                            "name": req.body.Jira.fields.issuetype.name
                        }
                    }
                };
    
    var options={
       headers:{
          'Content-Type':'application/json',
          'Authorization':authorizationHeader
       },
       method:'POST',
       json:jsonData
    };

    request('https://emergemd.jira.com/rest/api/2/issue',options,function(error,response,body)
    {
       res.end( JSON.stringify(response.body));
    });

    // intakeService.getIntake(function(data){
    //     res.json(data);
    // });
});

router.post('/CreateIntake',function(req,res,next){
//insert and delete tasks
});

router.put('/GetIntakeByID/:id',function(req,res,next){
//update tasks
});

module.exports =router;