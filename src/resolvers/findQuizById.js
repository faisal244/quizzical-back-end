// const findQuizById = async (_, { _id }) => {
//   try {
//     console.log(_id);
//     // save quiz in DB using Quiz model
//     const findQuizById = await Quiz.findById(_id).populate("quiz");

//     console.log(findQuizById);
//     // return createdQuiz;
//   } catch (error) {
//     console.log(error.message);
//     return new ApolloError("Failed to find quiz");
//   }
// };

// module.exports = findQuizById;
