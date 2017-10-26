var express= require('express');

//var upload = require('express-fileupload');
var server=express();




server.set('view engine','ejs');
server.set('view engine','ejs');
server.use('/',express.static(__dirname + '/assets'));
//server.use('/',express.static(__dirname + '/assets'));
server.get('/',function(req,res){
   res.render('home');
});
server.listen(process.env.PORT || 3000);
console.log('made it');
