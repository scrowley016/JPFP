"use strict";

const router = require("express").Router();
const Campus = require('../db/campus')
const Students= require('../db/student')

router.get('/campuses', async (req,res,next)=>{
  try{
    const camp = await Campus.findAll()
    res.json(camp)
  }
  catch(err){
    next(err)
  }
})

router.get('/campuses/:id', async(req,res,next)=>{
  try{
    const oneCamp=await Campus.findByPk(
      req.params.id
    )
    if(oneCamp){
      res.json(oneCamp)
    }else{
      res.status(404).send("Hmmmm....Cant find it")
    }
  }
  catch(err){
    next(err)
  }
})

router.post('/campuses', async(req,res,next)=>{
  try{
    const newCampus = await Campus.create(req.body)
    res.json(newCampus)
  }
  catch(err){
    res.status(500).send("cannot create")
  }
})





router.get('/students', async (req, res,next)=>{
  try{
    const stu = await Students.findAll()
    res.json(stu)
  }
  catch(err){
    next(err)
  }
})

router.get('/students/:id', async(req,res,next)=>{
  try{
    const oneStu=await Students.findByPk(
      req.params.id
    )
    if(oneStu){
      res.json(oneStu)
    }else{
      res.status(404).send("Hmmmm....Cant find them")
    }
  }
  catch(err){
    next(err)
  }
})


router.post('/students', async(req,res,next)=>{
  try{
    const newStudent = await Students.create(req.body)
    res.json(newStudent)
  }
  catch(err){
    res.status(500).send("cannot create")
  }
})







router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
