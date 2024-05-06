const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/review_rating", {
  useNewUrlParser: "true",
});

mongoose.connection.on("error", (err) => {
  console.log("mongooose Connenction Error", err);
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});
