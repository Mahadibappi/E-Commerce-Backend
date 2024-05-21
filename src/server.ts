import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    // database connection
    await mongoose.connect(config.database_url as string);

    // server running
    app.listen(config.port, () => {
      console.log(`server is running on ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
