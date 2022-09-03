const connectToDatabase = require("../config/connection");
const { AddressLookup } = require("../models");

const clearCollections = async () => {
  await AddressLookup.deleteMany({});
};

const addresses = [
  {
    firstName: "james",
    lastName: "smith",
    email: "jamessmith@email.com",
    password: "134",
    userType: "organizer",
  },
  {
    firstName: "james",
    lastName: "bob",
    email: "jamebob@email.com",
    password: "123",
    userType: "user",
  },
  {
    firstName: "hanna",
    lastName: "smith",
    email: "hannasmith@email.com",
    password: "134",
    userType: "user",
  },
  {
    firstName: "bob",
    lastName: "smith",
    email: "bobsmith@email.com",
    password: "134",
    userType: "user",
  },
  {
    firstName: "peter",
    lastName: "brown",
    email: "peterbrown@email.com",
    password: "134",
    userType: "user",
  },
];

const init = async () => {
  try {
    await connectToDatabase();

    await clearCollections();

    await AddressLookup.insertMany(addresses);
  } catch (error) {
    console.log(`[ERROR]: Failed to seed DB | ${error.message}`);
  }

  process.exit(0);
};

init();
