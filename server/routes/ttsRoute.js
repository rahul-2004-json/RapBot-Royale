const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.options('/stream-audio', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://rapbot-royale-925k.onrender.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});

router.post('/stream-audio', async (req, res) => {
  const { text, voiceId } = req.body;

  try {
    const response = await axios({
      method: 'post',
      url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`,
      headers: {
        'xi-api-key': process.env.ELEVENLABS_API_KEY,
        'Content-Type': 'application/json',
      },
      responseType: 'stream',
      data: {
        text,
        model_id: 'eleven_turbo_v2_5',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.7,
        },
      },
    });

    res.setHeader('Access-Control-Allow-Origin', 'https://rapbot-royale-925k.onrender.com'); // ✅ Needed here too
    res.setHeader('Content-Type', 'audio/mpeg');
    response.data.pipe(res);
  } catch (error) {
    console.error('TTS Streaming Error:', error.message);
    res.status(500).json({ error: 'Failed to stream audio' });
  }
});

module.exports = router;
