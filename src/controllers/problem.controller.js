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

async function  addProblem (req, res,next) {
   try {
    console.log("Incoming req body", req.body);
    const newProblem = await problemService.createProblem(req.body);
      return res.status(StatusCodes.CREATED).json({
            success: true, 
            message: 'Successfully created a new problem',
            error: {},
            data: newProblem
        });



    } catch (error) {
        next(error); //to errorhandling middleware
    }
}


async function getProblem(req, res, next) {
  try {
 const problems = await problemService.getAllProblems();  
return res.status(StatusCodes.OK).json({
  success: true,
  message: "Successfully fetched all problems",
  error: {},
  data: problems, // Tarka: [data] ⇔ [Problem Array] ↔ [Returned Resource]
});

} catch (error) {

    next(error);
  }
}

function deleteProblem(req, res, next) {
  try {
    throw new NotImplementedError("deleteProblem");
  } catch (error) {
    console.error(error);
    next;
    next(error);
  }
}

function updateProblem(req, res, next) {
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
  addProblem,
  getProblem,
  deleteProblem,
  updateProblem,
};
