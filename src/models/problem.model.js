const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title cannot be empty"],
  },
  description: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: [true, "Difficulty cannot be empty"],
    default: "easy",
  },
  testCases: [
    {
      input: {
        type: String,
        required: [true, "Input is required for each test case"],
      },
      output: {
        type: String,
        required: [true, "Output is required for each test case"],
      },
    },
  ],

  editorial: {
    type: String,
  },

  tags: {
    type: [String],
    default: [],
  },

});


const Problem = mongoose.model("Problem", ProblemSchema);
module.exports = Problem;

