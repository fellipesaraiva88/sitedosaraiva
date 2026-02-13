import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Wrench, BarChart3, Brain, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useContent } from "@/hooks/useContents";

const categoryConfig = {
  prompt: { icon: Sparkles, label: "Prompt" },
  tool: { icon: Wrench, label: "Ferramenta" },
  analysis: { icon: BarChart3, label: "Análise" },
  thought: { icon: Brain, label: "Pensamento" },
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
            <div className="h-8 w-32 bg-secondary animate-pulse rounded-lg mb-8" />
            <div className="h-16 bg-secondary animate-pulse rounded-lg mb-6" />
            <div className="h-64 bg-secondary animate-pulse rounded-lg" />
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
          <Link to="/" className="text-primary underline mt-4 inline-block">Voltar</Link>
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
      <main className="min-h-screen py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
          </motion.div>

          {/* Category + Date */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4 mb-5"
          >
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-primary mono">
              <Icon className="w-4 h-4" />
              {config.label}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mono">
              <Calendar className="w-3 h-3" />
              {date}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5"
          >
            {content.title}
          </motion.h1>

          {/* Description */}
          {content.description && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl"
            >
              {content.description}
            </motion.p>
          )}

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex gap-2 flex-wrap mb-10 pb-10 border-b border-border"
          >
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="mono text-[10px] font-medium px-3 py-1 rounded-md bg-secondary text-muted-foreground"
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-code:text-primary prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-table:text-sm prose-th:text-foreground prose-td:text-muted-foreground prose-th:border-border prose-td:border-border"
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
