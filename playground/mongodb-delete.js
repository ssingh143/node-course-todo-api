const { MongoClient, ObjectID } = require("mongodb");
const url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

//deleteMany
db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    console.log(result);
});

//deleteOne
db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    console.log(result);
});

//findOneAndDelete
db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    console.log(result);
});

//deleteMany by name
db.collection('Users').deleteMany({name: 'Shiv'}).then((result)=>{
    console.log(result);
});

//findOneAndDelete by _id
db.collection('Users').findOneAndDelete({_id: e343434343434}).then((result)=>{
    console.log(JSON.stringify(result, undefined, 2));
});

});
