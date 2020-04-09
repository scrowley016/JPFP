const router = require("express").Router();
const Students= require('../db/student')

router.get('/', async (req, res,next)=>{
    try{
      const stu = await Students.findAll()
      res.json(stu)
    }
    catch(err){
      next(err)
    }
  })
  
  router.get('/:id', async(req,res,next)=>{
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
  
  
  router.post('/', async(req,res,next)=>{
    try{
      const newStudent = await Students.create(req.body)
      res.json(newStudent)
    }
    catch(err){
      res.status(500).send("cannot create")
    }
  })
  
  router.delete('/:id', async(req,res,next)=>{
    try{
      const deleted= await Students.destroy({
        where:{id:req.params.id}
      })
      res.sendStatus(204)
     }
     catch(err){
       next(err)
     }
   })
  
   router.put('/:id', async(req,res,next)=>{
    try{
      const student= await Students.findByPk(req.params.id)
      const update= await student.update(req.body)
      res.json(update)
    }
    catch(err){
      next(err)
    }
  })
  

  module.exports=router