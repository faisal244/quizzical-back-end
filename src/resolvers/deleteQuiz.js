const { ApolloError } = require("apollo-server");

const Quiz = require("../models/Quiz");

const deleteQuiz = async (_, { id }) => {
  try {
    console.log(id);
    const deletedItem = await Quiz.findByIdAndDelete(id);
    console.log(deletedItem);
  } catch (error) {
    console.log(error.message);
    return new ApolloError("Failed to delete quiz");
  }
};

module.exports = deleteQuiz;
