// groq.js
const fetch = require('node-fetch');

async function askGroq(message) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "mixtral-8x7b-32768",
      messages: [
        {
          role: "user",
          content: `Only reply with 'SUCCESS' or 'FAIL'. Is this payment valid? ${message}`,
        },
      ],
    }),
  });

  const data = await res.json();
  return data.choices[0].message.content.trim();
}

module.exports = askGroq;
