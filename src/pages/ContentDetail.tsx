import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Wrench, BarChart3, Brain, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContent } from "@/hooks/useContents";

const categoryConfig = {
  prompt: { icon: Sparkles, label: "Prompt", color: "text-accent" },
  tool: { icon: Wrench, label: "Ferramenta", color: "text-accent" },
  analysis: { icon: BarChart3, label: "Análise", color: "text-accent" },
  thought: { icon: Brain, label: "Pensamento", color: "text-accent" },
};

const ContentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: content, isLoading } = useContent(id || "");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="min-h-screen pt-32 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="h-12 w-48 bg-secondary animate-pulse rounded mb-8" />
            <div className="h-24 bg-secondary animate-pulse rounded mb-8" />
            <div className="h-64 bg-secondary animate-pulse rounded" />
          </div>
        </main>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="min-h-screen pt-32 px-6 md:px-12 text-center">
          <p className="text-muted-foreground">Conteúdo não encontrado.</p>
          <Link to="/" className="text-accent underline mt-4 inline-block">Voltar</Link>
        </main>
      </div>
    );
  }

  const config = categoryConfig[content.category];
  const Icon = config.icon;
  const date = new Date(content.created_at).toLocaleDateString("pt-BR", {
    day: "numeric", month: "long", year: "numeric"
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="min-h-screen py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium uppercase tracking-wide"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
          </motion.div>

          {/* Category + Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wider ${config.color}`}>
              <Icon className="w-4 h-4" />
              {config.label}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {date}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground uppercase leading-none mb-6"
          >
            {content.title}
          </motion.h1>

          {/* Description */}
          {content.description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
            >
              {content.description}
            </motion.p>
          )}

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex gap-2 flex-wrap mb-12 pb-12 border-b border-border"
          >
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Body */}
          {content.body && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-accent prose-code:text-accent prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-table:text-sm prose-th:text-foreground prose-td:text-muted-foreground"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content.body}</ReactMarkdown>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContentDetail;
