const express = require('express')
const app = express()
const port = 3000
const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Welcome to our hotel')
})

// Import the router file
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Comment added for testing git














// var _ = require('lodash')

// var arr = ["name", "name", 1, 2, 3, 3, 'hello', 'hello', 2];
// var filter = _.uniq(arr);
// console.log(filter);









// var notes = require('./notes.js')

// notes.addTwoNo(2, 3)








// const fs = require('fs');
// const os = require('os');

// var user = os.userInfo();
// console.log(user)
// console.log(user.username)

// fs.appendFile('greeting.txt', "Hello! I am Saurav Chauhan " + '\n', () => {
//   console.log('File is created')
// })








// fun = () => console.log("Hello I am a callback function!")

// add = (a, b, callback) => {
//   console.log(a+b);
//   callback();
// }

// add(2, 9, fun);

// add(5, 29, () => console.log("Function is completed hehehehehehe"))