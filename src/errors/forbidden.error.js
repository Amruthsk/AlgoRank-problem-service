
//(Client Side - 403) Indicating Insufficient Permission

const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class ForbiddenError extends BaseError {
  constructor(action, details = {}) {
    super(
      "ForbiddenError",
      StatusCodes.FORBIDDEN,
      `Access denied: Insufficient privileges for action: ${action}`,
      details
    );
  }
}
module.exports = ForbiddenError;
