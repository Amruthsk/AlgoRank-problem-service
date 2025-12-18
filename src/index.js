const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config')
const app = express();
//Mounting api router
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDb = require("./config/db.config");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.text());

app.use("/api", apiRouter);


app.get ('/ping', (req, res) => {
    return res.json({message: 'Problem Service is alive'});
});


app.use(errorHandler);  

app.listen(PORT, async() => {
  console.log(`Server started at port: ${PORT}`);
  await connectToDb();
  console.log("Successfully connected to db");

  //dummy code for testing
  const kittySchema = new mongoose.Schema({
    name: String,
  });
  const Kitten = mongoose.model("Kitten", kittySchema);

  const silence = new Kitten({ name: "Silence" });
  await silence.save();
  console.log(silence.name); // 'Silence'
});