//connect to databse ,add one item,save ,find

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser:true,useUnifiedTopology:true});

var db=mongoose.connection;
db.on('error',function(error) {
    console.error('Error occurred:', error);
  });
db.once('open',function(){
    console.log('done');
});

var kittyscheme= new mongoose.Schema({
    name:String
});

kittyscheme.methods.speak=function(){
    var g='my name is '+this.name
    console.log(g);
}
var kitten=mongoose.model('kitten',kittyscheme);

var harrykitty=new kitten({name:'hi12354'});
// harrykitty.speak();

// Save the document using promises or async/await
harrykitty.save()
  .then((savedKitty) => {
    savedKitty.speak(); // Call the 'speak()' method on the saved document
  })
  .catch((error) => {
    console.error('An error occurred during the save operation:', error);
  });


run()
async function run(){
    const kitty = await kitten.find();
    console.log(kitty);
  }