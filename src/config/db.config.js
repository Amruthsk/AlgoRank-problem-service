const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");

async function connectToDb() {
    try {
        if (NODE_ENV === 'development') {
            await mongoose.connect(ATLAS_DB_URL);
         console.log("Successfully connected to the Mongo DB server");
        }
        else if (NODE_ENV === 'production'){
          console.log("Attempting to connect to production DB. Logic TBD.");
          // await mongoose.connect(process.env.PROD_DB_URL);

        }
        else {
            console.log("Attempting to connect to testing DB. Logic TBD.");
        }

    }
    catch(error){
        console.log("Unable to connect to the db server");
        console.log(error);
        process.exit(1);
    }
}


module.exports = connectToDb;