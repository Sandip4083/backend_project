
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path: "./.env"
});



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    }); 
    console.log("MongoDB connected");
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
});