const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

const Address = require("./Address");

const userSchema = {
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 50,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 20,
    trim: true,
  },
  userType: {
    type: String,
    required: true,
    enum: ["organizer", "user"],
  },
};

const options = {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
};

const schema = new Schema(userSchema, options);

schema.method("checkPassword", async function (password) {
  const isValid = await bcrypt.compare(password, this.password);
  return isValid;
});

schema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const password = await bcrypt.hash(this.password, 10);
    this.password = password;
  }

  next();
});

schema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

schema.virtual("petCount").get(function () {
  return this.pets.length;
});

const User = model("User", schema);

module.exports = User;
