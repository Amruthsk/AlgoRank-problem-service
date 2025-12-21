//defining endpoint handlers
const { StatusCodes } = require("http-status-codes"); 
const { NotImplementedError } = require("../errors");
const { ProblemService } = require("../services"); 
const { ProblemRepository } = require("../repositories");

const problemRepository = new ProblemRepository();

const problemService = new ProblemService(problemRepository); 


function pingProblemController(req, res) {
  return res.status(StatusCodes.OK).json({ message: "Ping controller is up" });
}

async function addProblemController(req, res, next) {
  try {
    console.log("Incoming req body", req.body);
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error); //to errorhandling middleware
  }
}


async function getAllProblemController(req, res, next) {
  try {
    const problems = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all problems",
      error: {},
      data: problems, // [Problem Array] ↔ [Returned Resource]
    });
  } catch (error) {
    next(error);
  }
}


async function getProblemByIdController(req, res, next) {
  try {
    const problemId = req.params.id;
    const problem = await problemService.getProblemById(problemId);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched the problems",
      error: {},
      data: problem, //[Problem document] ↔ [Returned Resource]
    });
  } catch (error) {
    next(error);
  }
}


async function deleteProblemController(req, res, next) {
  try {
    const problemId = req.params.id;
    const deletedProblem = await problemService.deleteProblem(problemId);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted the problem",
      error: {},
      data: deletedProblem, //   [Deleted Document] ↔ [Confirmation]
    });

  } catch (error) {

    next(error);
  }
}

function updateProblemController(req, res, next) {
  try {
    throw new NotImplementedError("updateProblem");
  } catch (error) {
    console.error(error);
    next;
    next(error);
  }
}

module.exports = {
  pingProblemController,
  addProblemController,
  getAllProblemController,
  getProblemByIdController,
  deleteProblemController,
  updateProblemController,
};
