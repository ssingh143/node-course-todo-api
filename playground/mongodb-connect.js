//const MongoClient = require("mongodb").MongoClient;

//Object es6 desturturing
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  var dbo = db.db("TodosApp");

  dbo.collection("Todos").insertOne(
    {
      text: "Something to do",
      completed: false
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert todo", err);
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );

  dbo.collection("user").insertOne(
    {
      name: "shiv singh",
      age: 25,
      locaiton: "Gurgaon"
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert user", err);
      }

      console.log(result.ops);
    }
  );

  db.close();
});
