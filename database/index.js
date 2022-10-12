const mangoose = require("mongoose");

// connect DB
const connectDB = () => {
  return mangoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB Connected successfully!!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
