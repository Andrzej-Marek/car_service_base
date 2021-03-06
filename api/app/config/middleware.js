const DEV_ORIGIN = [
  "http://localhost:8080",
  "http://localhost",
  "http://localhost:1337",
  "http://localhost:1337",
  "http://193.178.43.128",
  "http://193.178.43.128:1337",
  "https://193.178.43.128",
  "https://193.178.43.128:1337",
  "http://raportserwisowy.pl",
  "http://raportserwisowy.pl:1337",
  "https://raportserwisowy.pl",
  "https://raportserwisowy.pl:1337",
  "https://api.raportserwisowy.pl",
  "https://api.raportserwisowy.pl:1337",
  "https://serwis.raportserwisowy.pl",
];

const PROD_ORIGIN = [
  "https://api.raportserwisowy.pl",
  "https://api.raportserwisowy.pl:1337",
  "https://serwis.raportserwisowy.pl",
  "https://raportserwisowy.pl",
];

module.exports = {
  settings: {
    cors: {
      origin: process.env.NODE_ENV === "production" ? PROD_ORIGIN : DEV_ORIGIN,
    },
  },
};
