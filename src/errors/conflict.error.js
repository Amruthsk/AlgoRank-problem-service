//(Client Side - 409) Indicating Resource Collision

const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class ConflictError extends BaseError {
  constructor(resourceName, details = {}) {
    super(
      "ConflictError",
      StatusCodes.CONFLICT,
      `${resourceName} already exists or a conflict occurred`,
      details
    );
  }
}
module.exports = ConflictError;
