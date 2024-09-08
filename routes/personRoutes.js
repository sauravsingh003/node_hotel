const express = require('express');
const router = express.Router();
const Person = require('../models/person')


// Post the person data
router.post('/', async(req, res) => {
  try{
      const data = req.body;

      // Create a new person using mongoose model
      const newPerson = new Person(data);

      // Save new person into database
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
})


// Get the person data
router.get('/', async(req, res) => {
  try{
    const data = await Person.find();
    console.log('data fetched');
      res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})


// Get the work of person 
router.get('/:workType', async(req, res)=>{
  try{
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
      const response = await Person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error: 'Internal work type'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})


// Update the person data
router.put('/:id', async(req, res)=>{
  try{
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true,
      runValidators:true,
    })

    if(!response){
      return res.status(404).json({error: 'Person not found'});
    }

    console.log('data updated');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})


// Delete the person data
router.delete('/:id', async(req, res)=>{
  try{
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);

    if(!response){
      return res.status(404).json({error: 'Person not found'});
    }
    console.log('data deletd');
    res.status(200).json({message: 'Person Deleted Successfully'});

  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }

})


module.exports = router;