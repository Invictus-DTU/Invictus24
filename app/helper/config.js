const mongoose = require('mongoose');

let isConnected = false;

const connectDb = async () => {
    if (isConnected) {
        console.log("Already connected to the database");
        return;
    }

    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        // const { connection } = await mongoose.connect(process.env.MONGO_URI);

        isConnected = connection.readyState === 1; // Check if the connection is successful
        console.log("Connected to the database");
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
};

export default connectDb;
