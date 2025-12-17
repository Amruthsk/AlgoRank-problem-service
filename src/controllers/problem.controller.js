//defining endpoint handlers

function pingProblemController(req, res) {
  return res.json({ message: "Ping controller is up" });
}

function addProblem(req, res) {}


function getProblem(req, res) {}

function deleteProblem(req, res) {}

function updateProblem(req, res){}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  deleteProblem,
  updateProblem,
};