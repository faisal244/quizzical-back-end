const { Schema, model } = require("mongoose");

const quizSchema = {
  // add fields for quiz here
  // MUST be in line with response from API
  // category
  // type
  // difficulty
  // questions: [{
  // text
  // correct answer
  // options
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
