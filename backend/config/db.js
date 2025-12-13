import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:12345567@cluster0.oici9ec.mongodb.net/food-del').then(()=>console.log("DB Conneted"));
}