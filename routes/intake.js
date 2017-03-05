var express=require('express');
var router=express.Router();
var intakeService=require('../service/intakeservice');
// var nodesql=require('msnodesql');

router.get('/GetIntake',function(req,res,next){

    intakeService.getIntake(function(data){
        res.json(data);
    });
});

router.post('/CreateIntake',function(req,res,next){
//insert and delete tasks
});

router.put('/GetIntakeByID/:id',function(req,res,next){
//update tasks
});

module.exports =router;