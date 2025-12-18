//(Client Side - 400) Indicating invalid client input

const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class BadRequestError extends BaseError {
  constructor(resourceName, details = {}) {
    super(
      "BadRequestError",
      StatusCodes.BAD_REQUEST,
      `Invalid data structure or parameters for ${resourceName} provided`,
      details
    );
  }
}
module.exports = BadRequestError;
