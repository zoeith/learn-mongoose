//install local mongodb
//following the tutorial here:
//http://docs.mongodb.org/manual/tutorial/getting-started/

var mongoose = require('mongoose');

var testschema = mongoose.Schema({
  name:String
},
{collection:'testData'});

var testmodel = mongoose.model('atest',testschema)

function upload(err){
  console.log(err);
  var jk = new testmodel({name:'mongo2'});
  jk.save(function(err,jk){
    if (err) console.log(err);
    console.log(jk.name);
    process.exit();
  });
}

mongoose.set('debug', true);
mongoose.connect(
    "mongodb://zoey:pass@127.0.0.1:27017/mydb", upload);
