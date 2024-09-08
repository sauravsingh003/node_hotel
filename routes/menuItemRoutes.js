const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItem');

// Post the menu data
router.post('/', async(req, res) => {
  try{
      const data = req.body;

      const newMenuItem = new MenuItem(data);

      const response = await newMenuItem.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
})

// Get the menu data
router.get('/', async(req, res) => {
  try{
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

// Get the menu in respect to taste
router.get('/:tasteType', async(req, res)=>{
  try{
    const tasteType = req.params.tasteType;
    if(tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spicy'){
      const response = await MenuItem.find({taste: tasteType});
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

// Update the menu data
router.put('/:id', async(req, res)=>{
  try{
    const menuItemId = req.params.id;
    const updatedMenuItemData = req.body;

    const response = await MenuItem.findByIdAndUpdate(menuItemId, updatedMenuItemData, {
      new: true,
      runValidators:true,
    })

    if(!response){
      return res.status(404).json({error: 'Menu Item not found'});
    }

    console.log('data updated');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})


// Delete the Menu Item
router.delete('/:id', async(req, res)=>{
  try{
    const menuItemId = req.params.id;

    const response = await MenuItem.findByIdAndDelete(menuItemId);

    if(!response){
      return res.status(404).json({error: 'Menu Item not found'});
    }
    console.log('data deletd');
    res.status(200).json({message: 'Menu Item Deleted Successfully'});

  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }

})


module.exports = router;