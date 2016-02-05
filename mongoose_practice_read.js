//install local mongodb
//following the tutorial here:
//http://docs.mongodb.org/manual/tutorial/getting-started/

var mongoose = require('mongoose');

var testschema = mongoose.Schema({
	name:String
},
{collection:'testData'});

var testmodel = mongoose.model('atest',testschema)

function download(err){
	console.log(err);
	testmodel.find()
	.exec( function (err,data){
		if(err) return handleError(err);
		console.log(data);
		process.exit();
	});
}

mongoose.set('debug', true);
mongoose.connect(
	  "mongodb://zoey:pass@127.0.0.1:27017/mydb", download);
