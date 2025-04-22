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
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      <ToolCard title="AI Writer" link="/ai-writer" />
      <ToolCard title="Image Generator" link="/image-gen" />
      <ToolCard title="Coming Soon" link="#" disabled />
    </main>
  );
}
