const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Tesseract = require("tesseract.js");
const Groq = require("groq-sdk");
const groq = new Groq({
  apiKey: "<YOUR_GROQ_KEY>",
});

async function recognizeText(image_url) {
  try {
    const result = await Tesseract.recognize(image_url);

    const text = result.data.text;
    return text;
  } catch (error) {
    console.error("Error recognizing text:", error);
  }
}

const imageStorage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: imageStorage });

router.post("/new_prescription", upload.single("image"), async (req, res) => {
  var filename = req.file.filename;
  // Send filename as response

  const text = await recognizeText(`uploads/${filename}`);

  const requestData = {
    language: "english",
    model: "llama3-8b-8192",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: true,
    stop: null,
  };

  const { language, model, temperature, max_tokens, top_p, stream, stop } =
    requestData;

  const prompt = `
As a pharmacist, analyze the following prescription and explain the purpose of each medication listed. Detail when each medicine should be used, the conditions it treats, and why the doctor may have prescribed it. Please consider the specific dosages and instructions included in the prescription. Here is the prescription text: ${text}.  Present the answer in a clear and coherent manner, formatted as an HTML string suitable for display on a website. Use appropriate HTML tags like <p>, <strong>, and <em> to highlight key aspects and ensure readability.Provide the output as plain text without any additional formatting or code blocks.

    `;

  const messages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: prompt },
  ];

  const chatCompletion = await groq.chat.completions.create({
    messages,
    model,
    temperature,
    max_tokens,
    top_p,
    stream,
    stop,
  });

  res.setHeader("Content-Type", "text/plain");
  for await (const chunk of chatCompletion) {
    res.write(chunk.choices[0]?.delta?.content || "");
  }
  res.end();

  // res.json({ filename: filename, text: text });

  // res.json({ filename: filename });
});

module.exports = router;
