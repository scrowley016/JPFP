const router = require("express").Router();
const Campus = require('../db/campus')


router.get('/', async (req,res,next)=>{
    try{
      const camp = await Campus.findAll()
      res.json(camp)
    }
    catch(err){
      next(err)
    }
  })
  
  router.get('/:id', async(req,res,next)=>{
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
  
  router.post('/', async(req,res,next)=>{
    try{
      const newCampus = await Campus.create(req.body)
      res.json(newCampus)
    }
    catch(err){
      res.status(500).send("cannot create")
    }
  })
  
  router.delete('/:id', async(req,res,next)=>{
   try{
     const deleted= await Campus.destroy({
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
      const camp= await Campus.findByPk(req.params.id)
      const update= await camp.update(req.body)
      res.json(update)
    }
    catch(err){
      next(err)
    }
  })

  module.exports=router