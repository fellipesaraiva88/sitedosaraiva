import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Wrench, BarChart3, Brain, ArrowRight, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import CategoryFilter from "@/components/CategoryFilter";
import { useContents, type ContentCategory } from "@/hooks/useContents";

const categoryCards = [
  { to: "/prompts", icon: Sparkles, label: "Prompts", desc: "Prontos para copiar e usar", count: "3+" },
  { to: "/ferramentas", icon: Wrench, label: "Ferramentas", desc: "Curadoria das melhores", count: "3+" },
  { to: "/analises", icon: BarChart3, label: "Análises", desc: "Tendências e comparativos", count: "2+" },
  { to: "/pensamentos", icon: Brain, label: "Pensamentos", desc: "Reflexões sobre IA", count: "2+" },
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<ContentCategory | "all">("all");
  const { data: contents, isLoading } = useContents(
    activeCategory === "all" ? undefined : activeCategory
  );

  const featured = contents?.filter(c => c.featured) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mono">
                  Biblioteca curada de inteligência artificial
                </span>
              </div>
              <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-2">
                Sua livraria
              </h1>
              <h2 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text glow-text mb-8">
                de IA
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Prompts, ferramentas, análises e pensamentos. 
                Tudo que você precisa sobre inteligência artificial, curado em um só lugar.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
            {categoryCards.map((cat, i) => (
              <motion.div
                key={cat.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                <Link
                  to={cat.to}
                  className="group block p-5 rounded-xl border border-border card-hover"
                >
                  <cat.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">{cat.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="mono text-[10px] text-muted-foreground">{cat.count} itens</span>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Content */}
        <section className="px-6 md:px-12 py-16 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
              <h2 className="hero-title text-3xl md:text-4xl text-foreground">
                Explorar
              </h2>
              <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
            </div>

            {isLoading ? (
              <div className="grid gap-4 md:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-48 rounded-xl bg-secondary animate-pulse" />
                ))}
              </div>
            ) : contents && contents.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {contents.map((content, index) => (
                  <ContentCard key={content.id} content={content} index={index} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-16">
                Nenhum conteúdo encontrado.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
