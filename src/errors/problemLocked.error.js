
//related to project -  403/Forbidden Indicating problem is read only

const ForbiddenError = require("./forbidden.error");

class ProblemLockedError extends ForbiddenError {
  constructor(problemId, details = {}) {
    super(`Editing problem ID: ${problemId}`, details);
    this.name = "ProblemLockedError";
    this.description = "The problem is locked and cannot be modified";
    this.details = details;
  }
}
module.exports = ProblemLockedError;