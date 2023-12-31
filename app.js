const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const errorController = require('./controllers/error');

const User = require('../models/user')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
   User.findById(1)
    .then(user => {
      req.user = user;
     next();
    })
    .catch(err => console.log(err));

});

app.use('/admin', adminRoutes);
 app.use(shopRoutes);

app.use(errorController.get404);

<<<<<<< HEAD
mongoose.connect('mongodb+srv://sahithialam:@cluster0.fvxqa6t.mongodb.net/?retryWrites=true&w=majority')
=======
mongoose.connect('mongodb+srv://sahithialam@cluster0.fvxqa6t.mongodb.net/?retryWrites=true&w=majority')
>>>>>>> 2e6b21b1eb67c6ce69cc9fbdecdb8d89f2c2fc54
.then(result=>{
User.findOne().then(user=>{
if(!user){
  const user=new User({
    name:'sahi',
    email:'abc@getMaxListeners.com',
    cart:{
      items:[]
    }
  })
  user.save()
  }
  })
  app.listen(3000)
})
.catch(err=>{
  console.log(err)
})
