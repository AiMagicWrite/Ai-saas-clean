// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf4] text-gray-800 px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">🤖 Create AI-Powered Content in 1 Click</h1>
        <p className="text-lg text-gray-600 mb-4">Generate blog posts, videos, images, and more with powerful AI tools. Start for free</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700">Start Free</button>
      </section>

      {/* AI Content Dashboard */}
      <section>
        <h2 className="text-2xl font-bold mb-6">AI Content Dashboard</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "AI Blog Writer", desc: "Write a blog post", href: "/tools/blog-writer" },
            { title: "AI Reels-Maker", desc: "Automate videos", href: "#" },
            { title: "AI Image Generator", desc: "Image creation", href: "#" },
            { title: "AI Caption Generator", desc: "Generate captions", href: "#" },
          ].map((tool) => (
            <a
              key={tool.title}
              href={tool.href}
              className="p-4 bg-white rounded shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{tool.title}</h3>
              <p className="text-sm text-gray-500">{tool.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p>• 10 credits per month</p>
            <p>• Basic AI tools</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">₹499 /month</h3>
            <p>• Unlimited credits</p>
            <p>• Advanced AI tools</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Upgrade</button>
          </div>
        </div>
      </section>

      {/* AI Tool Inputs */}
      <section>
        <h2 className="text-2xl font-bold mb-6">AI Blog Writer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">Enter blog topic</h4>
            <input className="border p-2 w-full rounded mb-2" placeholder="healthy eating tips" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Generate</button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">AI Reels Maker</h4>
            <input className="border p-2 w-full rounded mb-2" placeholder="A brief intro to mobile app" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Generate</button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-2">AI Image Generator</h4>
            <input className="border p-2 w-full rounded mb-2" placeholder="a serene landscape with mountains" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Generate</button>
          </div>
        </div>
      </section>
    </main>
  );
}
