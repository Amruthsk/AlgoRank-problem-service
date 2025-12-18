//(Client Side - 404) Indicating missing resource

const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotFoundError extends BaseError {
  constructor(resourceName, details = {}) {
    super(
      "NotFoundError",
      StatusCodes.NOT_FOUND,
      `${resourceName} not found`,
      details
    );
  }
}
module.exports = NotFoundError;
