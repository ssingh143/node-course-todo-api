//const MongoClient = require("mongodb").MongoClient;

//Object es6 desturturing
const {MongoClient, ObjectID} = require("mongodb");
const url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  var dbo = db.db("TodosApp");

//   dbo.collection('Todos').find({_id: new ObjectID('5a5b499f59e9756b654a8fd4')}).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err)=>{
//     console.log('Unable to fech todos', err);
//   });


// dbo.collection('Todos').find({_id: new ObjectID('5a5b499f59e9756b654a8fd4')}).count().then((count)=>{
//     console.log(`Todos count: ${count}`);
//   }, (err)=>{
//     console.log('Unable to fech todos', err);
//   });


  dbo.collection('user').find({name: 'vivek singh'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fech todos', err);
  });


  //db.close();
});
