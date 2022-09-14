const { ApolloError } = require("apollo-server");

const Quiz = require("../models/Quiz");

const deleteQuiz = async (_, { id }) => {
  try {
    const deletedItem = await Quiz.findByIdAndDelete(id);

    return deletedItem;
  } catch (error) {
    console.log(error.message);
    return new ApolloError("Failed to delete quiz");
  }
};

module.exports = deleteQuiz;
