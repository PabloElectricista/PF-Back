require('dotenv').config();
const mongoose = require('mongoose');

const URL = process.env.MONGODB_URI2;
try {
    (async () => {
        const db = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database is connected to", db.connection.name);
    })();
} catch (error) {
    console.log(error.message);
}
