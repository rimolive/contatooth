var mongoose = require('mongoose');

module.exports = function(uri) {
	mongoose.connect(uri);

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Mongoose! Desconectado pelo término da aplicação');
			process.exit(0);
		});
	});
}
