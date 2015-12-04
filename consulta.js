var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('5652017292afb1f05f0d0b3a');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooth',
	function(erro, db) {
		if(erro) throw erro;
		db.collection('contatos').findOne({_id: _idProcurado},
			function(erro, contato) {
				if(erro) throw erro;
				console.log(contato);
			}
		);
	}
);
