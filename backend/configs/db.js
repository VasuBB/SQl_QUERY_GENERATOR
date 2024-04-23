const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vasu_boda_:m1TpHpiz9w19b5Gi@cluster0.yplhl9e.mongodb.net/sql_project")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
module.exports=mongoose;