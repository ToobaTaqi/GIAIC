import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://user1:Sz1KHpALpaeeOSsS@cluster0.gevcxf5.mongodb.net/blogs"
  );
  console.log("DB Connected");
};
