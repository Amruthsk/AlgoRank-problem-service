
// Server side - 501 indicating feature not built

const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotImplementedError extends BaseError {
  constructor(methodName, details = {}) {
    super(
      "NotImplementedError",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} is not yet implemented`,
      details
    );
  }
}
module.exports = NotImplementedError;
