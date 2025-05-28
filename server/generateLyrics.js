const OpenAI = require("openai");

const token = process.env.GITHUB_TOKEN;
const endpoint = "https://models.github.ai/inference";
const modelName = "openai/gpt-4.1";

const client = new OpenAI({
  baseURL: endpoint,
  apiKey: token,
});

async function generateLyrics(rapperName, theme) {
  const prompt = `
Generate a 6-line rap battle verse by ${rapperName} on the theme of "${theme}".
Each line should be simple, clever, funny and suited for performance.
Return ONLY the rap lines.
`;

  const response = await client.chat.completions.create({
    model: modelName,
    messages: [
      { role: "system", content: "You are a rap lyric generator." },
      { role: "user", content: prompt },
    ],
  });

  const content = response.choices[0].message.content;

  return content
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => {
      const words = line.trim().split(/\s+/).length;
      const wordsPerSecond = 2.5; 
      const duration = Math.ceil((words / wordsPerSecond) * 1000); 
      return {
        text: line.trim(),
        duration,
      };
    });
}

module.exports = { generateLyrics };
