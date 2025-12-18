//(Client Side - 422) Indicating semantic validation failure

const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class ValidationError extends BaseError {
  constructor(details = {}) {
    super(
      "ValidationError",
      StatusCodes.UNPROCESSABLE_ENTITY,
      "Data validation failed (e.g., failed a schema check)",
      details
    );
  }
}
module.exports = ValidationError;
