// problem related 400/BadRequest → Indicating Vote value is illegal

const BadRequestError = require("./badrequest.error");

class InvalidVoteError extends BadRequestError {
  constructor(details = {}) {
    super("Vote", details);
    this.name = "InvalidVoteError";
    this.description = "Vote value must be -1 (downvote) or 1 (upvote)";
    this.details = details;
  }
}
module.exports = InvalidVoteError;
