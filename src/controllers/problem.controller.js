//defining endpoint handlers
const { StatusCodes } = require("http-status-codes"); 
const { NotImplementedError } = require("../errors");


function pingProblemController(req, res) {
  return res.status(StatusCodes.OK).json({ message: "Ping controller is up" });
}

function addProblem(req, res,next) {
   try {
        throw new NotImplementedError("addProblem");
    } catch (error) {
        console.error(error); next
        next(error); 
    }
}


function getProblem(req, res, next) {
  try {
    throw new NotImplementedError("getProblem");
  } catch (error) {
    console.error(error);
    next;
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
