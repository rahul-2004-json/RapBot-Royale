const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();
app.use(cors({ origin: 'https://rapbot-royale.onrender.com' }));
app.use(express.json());


const { generateLyrics } = require("./routes/generateLyricsRoute");
const ttsRoute = require("./routes/ttsRoute");

const PORT = process.env.PORT || 5000;


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

app.use('/api',ttsRoute)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});