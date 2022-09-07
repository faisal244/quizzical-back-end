const { Schema, model } = require("mongoose");
// const { Questions } = require("./Question");

const quizSchema = {
	
  category: {
    type: String,
  },
  // type
  type: {
    type: String,
    enum: ["boolean", "multiple"],
  },
  // difficulty
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
  },
  question: {
    type: String,
  },

  // add fields for quiz here
  // MUST be in line with response from AP
};

const schema = new Schema(quizSchema);

const Quiz = model("Quiz", schema);

module.exports = Quiz;
