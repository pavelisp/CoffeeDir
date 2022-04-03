const mongoose = require('mongoose');
const { DB_CONNECTION } = process.env;

exports.connect = () => {
  mongoose
    .connect(DB_CONNECTION, {
      useNewUrlParser: true
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch(err=> {
      console.log("Error connecting to MongoDB: ", err);
    })

}