const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config')
const app = express();
//Mounting api router
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.text());

app.use("/api", apiRouter);


app.get ('/ping', (req, res) => {
    return res.json({message: 'Problem Service is alive'});
});


app.use(errorHandler);  

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});