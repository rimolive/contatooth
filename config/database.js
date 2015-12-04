var mongoose = require('mongoose');

module.exports = function(uri, options) {
	mongoose.connect(uri, options);

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Mongoose! Desconectado pelo término da aplicação');
			process.exit(0);
		});
	});
}
