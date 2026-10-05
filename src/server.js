import mongoose from "mongoose";
import app from "./app.js";
import envConfig from "./config/index.js";

const main = async () => {
  try {
    await mongoose.connect(envConfig.DB_URL);
    console.log("Database connected");
    app.listen(envConfig.PORT, () => {
      console.log(`Example app listening on port ${envConfig.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
