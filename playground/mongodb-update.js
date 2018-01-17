const { MongoClient, ObjectID } = require("mongodb");
const url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, (err, db) => {
  var dbo = db.db("TodosApp");
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  dbo.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a5b481574ca0c2fa0e0e42c')
  },{
    $set:{
      name: 'shiv singh',
    },
    $inc:{
      age: 1
    } 
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);  
  })
  //curd 

});