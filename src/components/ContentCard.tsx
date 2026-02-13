import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Wrench, BarChart3, Brain } from "lucide-react";
import type { Content } from "@/hooks/useContents";

const categoryConfig = {
  prompt: { icon: Sparkles, label: "Prompt" },
  tool: { icon: Wrench, label: "Ferramenta" },
  analysis: { icon: BarChart3, label: "Análise" },
  thought: { icon: Brain, label: "Pensamento" },
};

interface ContentCardProps {
  content: Content;
  index: number;
}

const ContentCard = ({ content, index }: ContentCardProps) => {
  const config = categoryConfig[content.category];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/content/${content.id}`}
        className="group block p-6 border border-border rounded-lg hover:border-accent/40 transition-all duration-300 hover:bg-secondary/50"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <Icon className="w-3.5 h-3.5" />
            {config.label}
          </div>
          {content.featured && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
              Destaque
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl md:text-3xl text-foreground uppercase leading-tight mb-2 group-hover:text-accent transition-colors duration-200">
          {content.title}
        </h3>

        {content.description && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {content.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {content.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ContentCard;
