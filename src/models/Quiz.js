const { Schema, model } = require("mongoose");
const Question = require("./Question");

const quizSchema = {
  category: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  difficulty: {
    type: String,
    require: true,
  },
  questions: [
    {
      type: Question,
    },
  ],
};

const options = {
  toJSON: {
    virtuals: true,
    getters: true,
  },
};

const schema = new Schema(quizSchema, options);

const Quiz = model("Quiz", schema);

module.exports = Quiz;
