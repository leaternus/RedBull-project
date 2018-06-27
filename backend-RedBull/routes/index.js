var mongoose= require('mongoose');
var express = require('express');
var router = express.Router();
var options = { server: { socketOptions: {connectTimeoutMS: 5000 } }};
mongoose.connect('mongodb://.....:$$$$$$@ds161520.mlab.com:61520/*****',
    options,
    function(err) {
     console.log(err);
    }
);

var userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    password: String,
    email: String,
    company: String,
    ville: String,
    adresse: String
});

var deliveryuserSchema = mongoose.Schema({
   firstName: String,
   lastName: String,
   adresse: String,
   ville: String,
   codepostal: Number
})

var UserModel = mongoose.model('users', userSchema);
var DeliveryuserModel = mongoose.model('deliveryusers', deliveryuserSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  var newUser = new UserModel ({
     lastName: req.query.lastname,
     firstName: req.query.firstname,
     password: req.query.password,
     email: req.query.email,
     company: req.query.company,
     city: req.query.city,
     adress: req.query.adress
  });
  newUser.save(
    function (error, user) {
        res.json(user);
      }
  );

});

router.get('/signin', function(req, res, next) {
  UserModel.findOne(
      { email: req.query.email, password: req.query.password} ,

      function (err, user) {
         res.json(user);
      }
  )

});

router.get('/deliveryuser', function(req, res, next ) {
 var newDeliveryuser = new DeliveryuserModel ({
   firstName: req.query.firstname,
   lastName: req.query.lastname,
   adresse: req.query.adresse ,
   ville: req.query.ville ,
   codepostal: req.query.codepostal
 })
 newDeliveryuser.save(
   function (error, deliveryuser) {
     res.json(deliveryuser);
   }
 )
});

module.exports = router;
