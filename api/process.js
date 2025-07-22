// api/process.js
const askGroq = require("../groq");

let latestMessage = ""; // SMS content
let latestResponse = ""; // Groq result

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { sms } = req.body;

    if (!sms) {
      return res.status(400).json({ error: "Missing SMS content" });
    }

    latestMessage = sms;

    try {
      latestResponse = await askGroq(sms);
      return res.status(200).json({ message: "Processed", response: latestResponse });
    } catch (err) {
      return res.status(500).json({ error: "Groq error" });
    }
  }

  // GET request returns latest status
  return res.status(200).json({ message: latestMessage, response: latestResponse });
};
