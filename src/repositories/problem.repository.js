const { Problem } = require("../models");
const logger = require("../config/logger.config");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      //creating problem using model
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problem;
    } catch (error) {
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      throw error;
    }
  }

  async getProblem(id) {
    try{
      const problem = await Problem.findById(id); 
       return problem;

    }
    catch(error){
      throw error;
    }
  }


  async deleteProblem(id) {
    try {
      const response = await Problem.findByIdAndDelete(id); 
      return response;

    } catch (error) {
      throw error;
    }

  }
  async updateProblem(id, data) {
    try {
       const problem = await Problem.findByIdAndUpdate(id, data, {
         new: true,
         runValidators: true }
        );
         return problem;
    } catch (error) {
      throw error;
    }

  }
}

module.exports = ProblemRepository;
