require('dotenv').config();
const mongooose = require('mongoose');
try {
  const db = mongooose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Database is connected to", db.connection.name);
} catch (error) {
  console.log(error);
}