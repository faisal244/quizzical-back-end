const login = require("./login");
const signup = require("./signup");
const createQuiz = require("./createQuiz");
const getMyQuiz = require("./getMyQuiz");
const getQuiz = require("./getQuiz");
const getQuizes = require("./getQuizes");
const deleteQuiz = require("./deleteQuiz");
// const findQuizById = require("./findQuizById");

const resolvers = {
  Query: {
    getQuizes,
    getQuiz,
    getMyQuiz,
  },
  Mutation: {
    login,
    signup,
    createQuiz,
    deleteQuiz,
  },
};

module.exports = resolvers;
