// app/api/blog/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // make sure this is set in your .env file
});

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Write a blog on: ${topic}` }],
    });

    const content = completion.choices[0].message.content;

    return NextResponse.json({ result: content });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ result: "Something went wrong!" }, { status: 500 });
  }
}
