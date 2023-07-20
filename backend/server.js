const express = require("express");
const cors = require("cors");
const { encode, decode } = require("./utils/lzw");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/lzw", (req, res) => {
  try {
    const { text, mode } = req.body;
    console.log(`Received ${mode} request with text:`, text);
    const result = mode === "encode" ? encode(text) : decode(text);
    res.json({ result });
  } catch (error) {
    console.error(`Error processing request:`, error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
