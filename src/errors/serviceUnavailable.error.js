// Server side - 503 indicating external dependency failure
const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class ServiceUnavailableError extends BaseError {
  constructor(serviceName, details = {}) {
    super(
      "ServiceUnavailableError",
      StatusCodes.SERVICE_UNAVAILABLE,
      `${serviceName} is temporarily unavailable or down`,
      details
    );
  }
}
module.exports = ServiceUnavailableError;
