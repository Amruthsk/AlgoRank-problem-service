// Server side - 500 indicating generic server fault

const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class InternalServerError extends BaseError {
  constructor(details = {}) {
    super(
      "InternalServerError",
      StatusCodes.INTERNAL_SERVER_ERROR,
      "An unexpected server error occurred",
      details
    );
  }
}
module.exports = InternalServerError;
