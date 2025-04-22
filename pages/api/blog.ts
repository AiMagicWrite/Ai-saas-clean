import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { topic } = req.body;

  if (!topic) return res.status(400).json({ error: "No topic provided" });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Write a blog about ${topic}` }],
    });
    res.status(200).json({ result: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate blog" });
  }
}