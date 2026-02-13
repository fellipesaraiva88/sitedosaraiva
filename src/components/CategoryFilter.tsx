import { motion } from "framer-motion";
import type { ContentCategory } from "@/hooks/useContents";

const categories: { value: ContentCategory | "all"; label: string }[] = [
  { value: "all", label: "Tudo" },
  { value: "prompt", label: "Prompts" },
  { value: "tool", label: "Ferramentas" },
  { value: "analysis", label: "Análises" },
  { value: "thought", label: "Pensamentos" },
];

interface CategoryFilterProps {
  active: ContentCategory | "all";
  onChange: (category: ContentCategory | "all") => void;
}

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={`relative text-sm font-medium uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 ${
            active === cat.value
              ? "text-accent-foreground bg-accent"
              : "text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
