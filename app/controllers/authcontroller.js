var exports = module.exports = {}


exports.register = function(req,res){
	
	res.render('register'); 

}

exports.login = function(req,res){

	res.render('login'); 

}

exports.profile = function(req,res){

	res.render('profile'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}