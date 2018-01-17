const mongoose = require("mongoose");
const {mongoose} = require("./db/mongoose");
const url = "mongodb://localhost:27017/TodoApp";

var promise = mongoose.createConnection(url, {
  useMongoClient: true
});

// mongoose.promise = global.Promise;
// mongoose.connect(url);

// var Todo = promise.model("Todo", {
//   text: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   },
//   completedAt: {
//     type: Number
//   }
// });

// var newTodo = new Todo({
//   text: "Cook dinner"
// });

// newTodo.save().then(
//   doc => {
//     console.log("Saved todo", doc);
//   },
//   e => {
//     console.log("Unable to save todo");
//   }
// );

// var otherTodo = new Todo({
//   text: 'Feed the cat',
//   completed: true,
//   completedAt: 123
// });


// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc, undefined, 2));
// },(e) =>{
//     console.log('Unable to save', e);
// });