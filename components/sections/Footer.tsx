export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/60 px-6 py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <span className="text-sm font-medium text-zinc-400">
          Othman Alobayyat
        </span>
        <span className="text-sm text-zinc-600">
          © {year} · Built with Next.js
        </span>
      </div>
    </footer>
  );
}
