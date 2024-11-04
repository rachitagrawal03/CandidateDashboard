const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("Database Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1); // Exit with failure  
    }
}

module.exports = connectDB;