const { User } = require("../models");

const signup = async (_, { signupInput }) => {
  const user = await User.findOne({ email: signupInput.email });

  if (user) {
    console.log(
      `[ERROR]: Failed to signup | ${signupInput.email} already exists`
    );

    throw new ApolloError("Failed to signup");
  }

  await User.create(signupInput);

  return { success: true };
};

module.exports = signup;
