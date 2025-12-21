const { ProblemRepository } = require("../repositories");
const {
  InternalServerError,
  BadRequestError,
  NotFoundError,
} = require("../errors");
const { markdownSanitizer } = require("../utils");
const { StatusCodes } = require("http-status-codes"); 

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = new ProblemRepository();
  }

  async createProblem(problemData) {
    try {
      //1. Sanitization - markdown for description
      problemData.description = markdownSanitizer(problemData.description);
      problemData.editorial = markdownSanitizer(problemData.editorial);
      console.log("Problem data after sanitization:", problemData);

      // 2. Repository call to write
      const problem = await this.problemRepository.createProblem(problemData);
      return problem;
    } catch (error) {
      console.log("Error in Problem Service:", error);

      if (error.name === "ValidationError") {
        throw new BadRequestError("Problem", {
          originalError: error.message,
          validationErrors: error.errors,
        });
      }
      throw new InternalServerError({
        message: "Failed to create problem due to internal error",
        originalError: error.message,
      });
    }
  }

  async getAllProblems() {
    try {
      const problems = await this.problemRepository.getAllProblems();
      return problems;
    } catch (error) {
      console.log("Error in Problem Service (getAllProblems):", error);
      throw new InternalServerError({
        message: "Failed to fetch problems from database",
        originalError: error.message,
      });
    }
  }

  async getProblemById(problemId) {
    try {
      const problem = await this.problemRepository.getProblem(problemId);
      if (!problem) {
        throw new NotFoundError("Problem");
      }
      return problem;
    } catch (error) {
      console.log("Error in Problem Service (getProblemById):", error);
      if (error instanceof NotFoundError) throw error;
      if (error.name === "CastError") {
        throw new BadRequestError("Problem ID", { invalidId: problemId });
      }
      throw new InternalServerError({
        message: "Failed to fetch problems from database",
        originalError: error.message,
      });
    }
  }

  async deleteProblem(problemId) {
    try {
      const deletedProblem = await this.problemRepository.deleteProblem(
        problemId
      );
      if (!deletedProblem) {
        throw new NotFoundError("Problem", { id: problemId });
      }
      return deletedProblem;
    } catch (error) {
      console.log("Error in Problem Service (deleteProblem):", error);
      if (error.statusCode === StatusCodes.NOT_FOUND) throw error;
      if (error.name === "CastError") {
        throw new BadRequestError("Problem ID", { invalidId: problemId });
      }
      throw new InternalServerError({
        message: "Failed to delete problem from database",
        originalError: error.message,
      });
    }
  }


 async updateProblem(problemId, updateData) {
      try {
          if (updateData.description) updateData.description = markdownSanitizer(updateData.description);
          if (updateData.editorial) updateData.editorial = markdownSanitizer(updateData.editorial);
          const updatedProblem = await this.problemRepository.updateProblem(problemId, updateData);

          if (!updatedProblem) {
             throw new NotFoundError("Problem", { id: problemId });
          }

           return updatedProblem;

      }
      catch(error){
        console.log("Error in Problem Service (updateProblem):", error);
        if (error.name === "ValidationError") {
          throw new BadRequestError("Problem", {
            originalError: error.message,
          });
        }
        if (error instanceof NotFoundError) throw error;

        if (error.name === "CastError") {
          throw new BadRequestError("Problem ID/Field", {
            invalidId: problemId,
            originalError: error.message,
          });
        }
          throw new InternalServerError({
            message: "Failed to update problem in database",
            originalError: error.message,
          });

      }




 }











}

module.exports = ProblemService;
