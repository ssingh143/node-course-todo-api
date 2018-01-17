const { MongoClient, ObjectID } = require("mongodb");
const url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, (err, db) => {
    var dbo = db.db("TodosApp");
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

// //deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
//     console.log(result);
// });

// //deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
//     console.log(result);
// });

// //findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
//     console.log(result);
// });

// //deleteMany by name
// db.collection('Users').deleteMany({name: 'Shiv'}).then((result)=>{
//     console.log(result);
// });

//findOneAndDelete by _id
dbo.collection('user').findOneAndDelete({_id: new ObjectID('5a5b481574ca0c2fa0e0e42d')}).then((result)=>{
    console.log(JSON.stringify(result, undefined, 2));
});

});
