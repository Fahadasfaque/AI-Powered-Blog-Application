import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(promte) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: promte,
  });
  return response.text;
}

export default main;
