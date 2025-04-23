import Link from "next/link";

type ToolCardProps = {
  title: string;
  link: string;
  disabled?: boolean;
};

function ToolCard({ title, link, disabled }: ToolCardProps) {
  return (
    <Link href={link}>
      <div
        className={`rounded-xl p-6 shadow-md bg-white hover:bg-gray-50 transition-all cursor-${disabled ? "not-allowed" : "pointer"} ${disabled ? "opacity-50" : ""}`}
      >
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">🚀 AI SaaS Toolkit</h1>
        <p className="text-gray-600 mt-2">Use AI-powered tools to write blogs, generate images, and more.</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ToolCard title="AI Writer" link="/tools/blog-writer" />
        <ToolCard title="Image Generator" link="/image-gen" />
        <ToolCard title="Coming Soon" link="#" disabled />
      </main>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} AI Magic Tools. All rights reserved.
      </footer>
    </div>
  );
}
