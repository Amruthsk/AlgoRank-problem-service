//(Client Side - 401) Indicating Missing/Invalid Auth

const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class UnauthorizedError extends BaseError {
  constructor(details = {}) {
    super(
      "UnauthorizedError",
      StatusCodes.UNAUTHORIZED,
      "Authentication failed or token is missing/invalid",
      details
    );
  }
}
module.exports = UnauthorizedError;
