const winston = require("winston");
require("winston-mongodb");
const { LOG_DB_URL } = require("./server.config");


const defaultFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Tarka: [Must be first or early]
  winston.format.errors({ stack: true }),
  winston.format.metadata()
);


const allowedTransports = [];

allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      defaultFormat,
      winston.format.colorize(),
      winston.format.splat(),
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.printf((info) => {
        const stack = info.stack ? `\nStack: ${info.stack}` : "";
        return `${info.timestamp} [${info.level}]: ${info.message}${stack}`;
      })
    ),
  })
);

allowedTransports.push(
  new winston.transports.File({
    filename: "app.log",
    format: winston.format.combine(
      defaultFormat,
      winston.format.json() 
    ),
  })
);

allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "logs",
    format: defaultFormat
    }),
  );



const logger = winston.createLogger({
  level: "info",
  transports: allowedTransports,
});

module.exports = logger;
