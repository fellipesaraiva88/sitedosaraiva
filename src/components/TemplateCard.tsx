import { motion } from "framer-motion";
import { Copy, Check, Download } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import type { Template } from "@/data/templates";
import { typeConfig, categoryLabels, formatDownloads } from "@/data/templates";

interface TemplateCardProps {
  template: Template;
  index: number;
}

const TemplateCard = ({ template, index }: TemplateCardProps) => {
  const [copied, setCopied] = useState(false);
  const config = typeConfig[template.type];

  const copyCommand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(template.installCommand);
    setCopied(true);
    toast.success("Comando copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <Link
        to={`/templates/${template.slug}`}
        className="group block p-5 rounded-xl border border-border card-hover relative overflow-hidden"
      >
        {template.featured && (
          <div className="absolute top-0 right-0 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-bl-lg">
            Featured
          </div>
        )}

        <div className="flex items-start gap-4">
          {/* Type emoji */}
          <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0 text-xl">
            {config.emoji}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {template.name}
              </h3>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${config.color}`}>
                {config.label}
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
              {template.description}
            </p>

            {/* Install command */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 border border-border/50 mb-3">
              <code className="text-[11px] mono text-muted-foreground flex-1 truncate">
                {template.installCommand}
              </code>
              <button
                onClick={copyCommand}
                className="p-1 rounded hover:bg-muted transition-colors shrink-0"
                title="Copiar comando"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-primary" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
              <span className="mono px-2 py-0.5 rounded-md bg-secondary">
                {categoryLabels[template.category]}
              </span>
              <span className="inline-flex items-center gap-1 mono">
                <Download className="w-3 h-3" />
                {formatDownloads(template.downloads)}
              </span>
              {/* Compatibility dots */}
              <div className="flex items-center gap-1 ml-auto">
                {template.compatibility.claude && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-secondary mono" title="Claude">C</span>
                )}
                {template.compatibility.gemini && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-secondary mono" title="Gemini">G</span>
                )}
                {template.compatibility.cursor && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-secondary mono" title="Cursor">Cu</span>
                )}
                {template.compatibility.windsurf && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-secondary mono" title="Windsurf">W</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default TemplateCard;
