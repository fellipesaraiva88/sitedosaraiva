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
        className="group block p-6 rounded-xl border border-border card-hover"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mono">
            <Icon className="w-3.5 h-3.5" />
            {config.label}
          </div>
          {content.featured && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary glow-text">
              ★ Destaque
            </span>
          )}
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors duration-200">
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
                className="mono text-[10px] font-medium px-2 py-0.5 rounded-md bg-secondary text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ContentCard;
