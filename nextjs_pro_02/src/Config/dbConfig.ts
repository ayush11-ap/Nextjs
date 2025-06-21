import mongoose from "mongoose";

export async function connectToDB() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to the database successfully");
    });
    connection.on("error", (err) => {
      console.log("Error connecting to the database: ", err);
      process.exit(1);
    });
  } catch (error) {
    console.log("Error connecting to the database: ", error);
  }
}
