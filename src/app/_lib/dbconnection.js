const { default: mongoose } = require("mongoose");

export function dbConnection() {
  mongoose
    .connect(
      `mongodb+srv://meangiti60:${process.env.MONGO_PASS}@cluster0.tu9t8.mongodb.net/todo`
    )
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
}
