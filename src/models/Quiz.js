const { Schema, model } = require("mongoose");

const quizSchema = {
  // add fields for quiz here
  // MUST be in line with response from API
  category: {
    type: Number,
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
  //  questions: [{
  //  text: String
  // correct answer
  //options
  // }]
};

const options = {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
};

const schema = new Schema(quizSchema, options);

const Quiz = model("Quiz", schema);

module.exports = Quiz;
