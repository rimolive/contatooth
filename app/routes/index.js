module.exports = function(app) {
	app.get('/', function(req, res) {
		//var login = '';
		//if(req.user) {
		//	login = req.user.login;
			login = "Testing";
		//}
		res.render('index', {"usuarioLogado": login});
	});
};
