const express = require("express");
const cors = require("cors");
const { encode, decode } = require("./utils/lzw");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/LZWWebApp";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// Define a schema for the data to be saved
const dataSchema = new mongoose.Schema({
  text: mongoose.Schema.Types.Mixed,
  mode: String,
  algorithm: String,
  result: mongoose.Schema.Types.Mixed,
});

// Create a model for the data
const DataModel = mongoose.model("Data", dataSchema);

app.post("/lzw", async (req, res) => {
  try {
    const { text, mode, algorithm } = req.body;
    console.log(`Received ${mode} request with text:`, text);
    const result = (mode === "encode" ? encode(text) : decode(text)).toString();

    // Save the data to MongoDB
    const inputData = {
      text,
      mode,
      algorithm,
      result,
    };

    try {
      const savedData = await DataModel.create(inputData);
      console.log("Data saved to MongoDB:", savedData);
      res.json({ result });
    } catch (error) {
      console.error("Error saving data to MongoDB:", error);
      res.status(500).json({ error: "Error saving data to MongoDB" });
    }
  } catch (error) {
    console.error(`Error processing request:`, error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/saveData", (req, res) => {
  const { text, mode, algorithm, result } = req.body;
  const inputData = {
    text,
    mode,
    algorithm,
    result,
  };

  DataModel.create(inputData, (err, savedData) => {
    if (err) {
      console.error("Error saving data to MongoDB:", err);
      res.status(500).json({ error: "Error saving data to MongoDB" });
    } else {
      console.log("Data saved to MongoDB:", savedData);
      res.json({ message: "Data saved to MongoDB successfully" });
    }
  });
});

// Endpoint to fetch the history data 
app.get("/history", async (req, res) => {
  try {
    const history = await DataModel.find();
    res.json(history);
  } catch (error) {
    console.error("Error fetching history data from MongoDB:", error);
    res.status(500).json({ error: "Error fetching history data from MongoDB" });
  }
});

app.delete("/history/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting history item with id: ${id}`);
    await DataModel.findByIdAndDelete(id);
    res.json({ message: "History item deleted successfully" });
  } catch (error) {
    console.error("Error deleting history item from MongoDB:", error);
    res.status(500).json({ error: "Error deleting history item from MongoDB" });
  }
});

const port = process.env.PORT || 3001;

connectDB().then(() => {
  app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
  })
})