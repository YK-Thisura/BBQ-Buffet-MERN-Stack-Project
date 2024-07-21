import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://thisura:thisura11@cluster0.lmuuohq.mongodb.net/Restaurant_Web_Application"
    )
    .then(() => console.log("DB Connected"));
};
