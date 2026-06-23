import { portfolioData } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-mono text-xs text-muted">
          © {year} {portfolioData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
