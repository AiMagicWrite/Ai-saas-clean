"use client";

export const runtime = "edge";
export const preferredRegion = "home";

import { useState } from "react";

export default function BlogWriter() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });
    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-2">✍️ AI Blog Writer</h2>
      <input
        className="border w-full p-2 mb-4 rounded"
        placeholder="Enter a topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading || !topic}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Generating..." : "Generate Blog"}
      </button>
      <textarea
        className="mt-4 w-full h-60 border p-2 rounded"
        value={result}
        readOnly
        placeholder="Blog output will appear here..."
      />
    </div>
  );
}