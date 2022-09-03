const { Schema, model } = require("mongoose");
const { StringDecoder } = require("string_decoder");

const petSchema = {
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
  ageInMonths: {
    type: Number,
    required: true,
    min: 0,
    max: 11,
  },
  ageInYears: {
    type: Number,
    required: true,
    min: 0,
    max: 50,
  },
  breed: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  colour: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  imageUrl: {
    type: String,
    required: true,
    minLength: 2,
    trim: true,
  },
  personality: {
    type: String,
    required: true,
    enum: ["friendly", "calm", "nervous", "boisterous"],
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  nickname: {
    type: String,
    minLength: 2,
    maxLength: 20,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 500,
    trim: true,
  },
};

const options = {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
};

const schema = new Schema(petSchema, options);

schema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

schema.virtual("age").get(function () {
  if (this.ageInYears > 0 && this.ageInMonths > 0) {
    return `${this.ageInYears} years ${this.ageInMonths} months`;
  }

  if (this.ageInYears === 0 && this.ageInMonths > 0) {
    return `${this.ageInMonths} months`;
  }

  if (this.ageInYears > 0 && this.ageInMonths === 0) {
    return `${this.ageInYears} months`;
  }
});

const Pet = model("Pet", schema);

module.exports = Pet;
