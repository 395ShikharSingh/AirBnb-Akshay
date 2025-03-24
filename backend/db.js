const mongoose = require("mongoose");

// ✅ Connect to MongoDB with correct database name
mongoose.connect("")
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });


// ✅ Define Schema
const hotelSchema = new mongoose.Schema({
    hotelname: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// ✅ Create Model
const Hotel = mongoose.model("Hotel", hotelSchema);

// ✅ Export the Model
module.exports = {
    Hotel
};
