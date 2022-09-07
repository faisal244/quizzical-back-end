const { Schema, model } = require("mongoose");

const questionSchema = {
  question: {
    type: String,
    require: true,
  },
  correctAnswer: {
    type: String,
    require: true,
  },
  incorrectAnswers: [
    {
      type: String,
    },
  ],
};

const options = {
  toJSON: {
    virtuals: true,
    getters: true,
  },
};

const Question = new Schema(questionSchema, options);

module.exports = Question;
