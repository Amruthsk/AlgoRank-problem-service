//500/InternalServer Indicating External Call Failure
const InternalServerError = require("./internalServer.error");

class DependencyFailedError extends InternalServerError {
  constructor(dependencyName, details = {}) {
    super(details);
    this.name = "DependencyFailedError";
    this.description = `External dependency call to ${dependencyName} failed unexpectedly`;
    this.details = details;
  }
}
module.exports = DependencyFailedError;



