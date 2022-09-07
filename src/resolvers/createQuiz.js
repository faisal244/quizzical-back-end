const { ApolloError } = require("apollo-server");

const Quiz = require("../models/Quiz.js");

const creatingQuiz = async (_, { createQuizInput }) => {
  try {
    // console.log(createQuizInput);

    // destructurer the create quiz args object

    const { question, category, difficulty, type } = createQuizInput;
    // save quiz in DB using Quiz model

    const newQuiz = await Quiz.create({
      question,
      category,
      difficulty,
      type,
    });

    console.log(newQuiz);

    return createQuizInput;
  } catch (error) {
    console.log(error.message);
    return new ApolloError("Failed to create quiz");
  }
};

module.exports = creatingQuiz;
