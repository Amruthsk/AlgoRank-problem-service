const BaseError = require("../errors/base.error");
const { StatusCodes } = require("http-status-codes");
const logger = require("../config/logger.config");

function errorHandler(err, req, res, next) {
  logger.error(`Error in request: ${err.message}`, {
    path: req.path,
    method: req.method,
    stack: err.stack,
    name: err.name,
    details: err.details || (err.errors ? err.errors : {}),
  }); 
  
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false, 
      message: err.message,
      error: err.details, 
      data: {}, 
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false, 
    message: "Something went wrong",
    error: err.message || "Internal Server Error",
    data: {}, 
  });
}

module.exports = errorHandler;
