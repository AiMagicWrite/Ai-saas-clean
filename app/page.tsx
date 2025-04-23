import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="px-4 py-10 md:px-20 bg-[#fefaf6] text-[#0a0a0a]">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Create AI-Powered Content in 1 Click
          </h1>
          <p className="text-lg mb-6">
            Generate blog posts, videos, images, and more with powerful AI tools. Start for free.
          </p>
          <Link href="#tools">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded">
              Start Free
            </button>
          </Link>
        </div>
        <Image
          src="/robot-illustration.svg"
          alt="AI Robot"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </section>

      {/* Dashboard Tools */}
      <section id="tools" className="mb-16">
        <h2 className="text-2xl font-bold mb-6">AI Content Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "AI Blog Writer", desc: "Write a blog post", link: "/tools/blog-writer" },
            { title: "AI Reels-Maker", desc: "Automate videos", link: "#" },
            { title: "AI Image Generator", desc: "Generate images", link: "#" },
            { title: "AI Caption Generator", desc: "Auto captions", link: "#" }
          ].map(({ title, desc, link }) => (
            <Link href={link} key={title}>
              <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <ul className="mb-4 text-gray-700 space-y-1">
              <li>• 10 credits per month</li>
              <li>• Basic AI tools</li>
            </ul>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">
              Get Started
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-2xl font-bold mb-2">₹499<span className="text-base font-normal">/month</span></p>
            <ul className="mb-4 text-gray-700 space-y-1">
              <li>• Unlimited credits</li>
              <li>• Advanced AI tools</li>
            </ul>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">
              Upgrade
            </button>
          </div>
        </div>
      </section>

      {/* Preview Form Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">AI Blog Writer</h2>
        <form className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter blog topic"
            />
            <button className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded">
              Generate
            </button>
          </div>
          <div>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter video script"
            />
            <button className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded">
              Generate
            </button>
          </div>
          <div>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter image description"
            />
            <button className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded">
              Generate
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
