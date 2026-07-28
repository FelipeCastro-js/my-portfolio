import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12">
      <div className="container mx-auto max-w-5xl flex flex-wrap justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Felipedev.co. All rights reserved.
        </p>
        <a
          href="#home"
          className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
          title="Scroll to top"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}
