import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://thisura:thisura11@cluster0.mrfih2p.mongodb.net/Restaurant Web Application"
    )
    .then(() => console.log("DB Connected"));
};
