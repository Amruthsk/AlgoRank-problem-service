const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");
const logger = require("./logger.config");

async function connectToDb() {
    try {
        if (NODE_ENV === 'development') {
            await mongoose.connect(ATLAS_DB_URL);
         logger.info("Successfully connected to the Mongo DB server");
        }
        else if (NODE_ENV === 'production'){
          logger.warn("Attempting to connect to production DB. Logic TBD.");
          // await mongoose.connect(process.env.PROD_DB_URL);

        }
        else {
            logger.warn("Attempting to connect to testing DB. Logic TBD.");
        }

    }
    catch(error){
        logger.error("Unable to connect to the db server");
        process.exit(1);
    }
}


module.exports = connectToDb;