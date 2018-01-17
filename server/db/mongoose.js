const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/TodoApp";
mongoose.Promise = require("bluebird");
mongoose.promise = global.Promise;
mongoose.connect(url, {
  useMongoClient: true
});

module.exports = {
  mongoose
};
