const mongoose = require('mongoose');

// Define the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';

// Setup mongoDB connection
mongoose.connect(mongoURL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})

// Get the default connection
const db = mongoose.connection;

// Define event listener for database
db.on('connected', ()=>{
  console.log('Connected to MongoDB server')
})

db.on('error', (err)=>{
  console.log('MongoDB connection error: ', err)
})

db.on('disconnected', ()=>{
  console.log('MongoDB server disconnected')
})

// Export the database connection
module.exports = db;