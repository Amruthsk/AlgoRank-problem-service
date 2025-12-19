const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create(problemData);

      return problem;
    } catch (error) {
      throw error;
    }
  }

  async getProblem(id) {}
  async deleteProblem(id) {}
  async updateProblem(id, data) {}
}

module.exports = ProblemRepository;