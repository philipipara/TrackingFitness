const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true});


var HTMLroutes= require("./routes/html");
var APIroutes= require("./routes/api");
app.use(APIroutes);
app.use(HTMLroutes);

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port 3000!`);
});
