// defining Problem Entity Routes

const express = require("express");
const { ProblemController } = require("../../controllers");

const problemRouter = express.Router();


problemRouter.get("/ping", ProblemController.pingProblemController);

problemRouter.get("/:id", ProblemController.getProblemByIdController);

problemRouter.get("/", ProblemController.getAllProblemController);

problemRouter.post("/", ProblemController.addProblemController);


problemRouter.delete("/:id", ProblemController.deleteProblemController);

problemRouter.put("/:id", ProblemController.updateProblemController);


module.exports = problemRouter;