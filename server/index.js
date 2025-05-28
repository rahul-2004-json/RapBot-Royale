const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { generateLyrics } = require("./generateLyrics");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/generate-lyrics", async (req, res) => {
  const { rapperName, theme } = req.body;

  if (!rapperName || !theme) {
    return res.status(400).json({ error: "Missing rapperName or theme" });
  }

  try {
    const lyrics = await generateLyrics(rapperName, theme);
    res.json({ lyrics });
  } catch (error) {
    console.error("Error generating lyrics:", error);
    res.status(500).json({ error: "Failed to generate lyrics" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
