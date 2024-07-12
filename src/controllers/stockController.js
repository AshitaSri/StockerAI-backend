// src/controllers/stockController.js
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.getSymbol = async (req, res) => {
  try {
    const userInput = req.body.input;

    const systemPrompt = `
You are a stock market specialist. Your task is to process a person's query in natural language and identify the stock symbol they are referring to.
The query will mention a company they are investing in.
You should only return the stock symbol in uppercase letters.

User's query is: ${userInput}

Example Query:
"I am investing money on Apple today."

Example Answer:
"AAPL"

Important Instructions:

Only return the stock symbol.
Ensure the symbol is in uppercase.
Do not add a newline at the end of the response.

`

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const ans = response.text();
    res.send(ans);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
