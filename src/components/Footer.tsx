import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
            </div>
            <div>
              <span className="text-sm font-bold text-foreground">
                Saraiva<span className="text-primary">.ai</span>
              </span>
              <p className="text-[10px] text-muted-foreground tracking-wide uppercase">Sua livraria de IA</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <Link to="/prompts" className="text-muted-foreground hover:text-foreground transition-colors">Prompts</Link>
            <Link to="/ferramentas" className="text-muted-foreground hover:text-foreground transition-colors">Ferramentas</Link>
            <Link to="/analises" className="text-muted-foreground hover:text-foreground transition-colors">Análises</Link>
            <Link to="/pensamentos" className="text-muted-foreground hover:text-foreground transition-colors">Pensamentos</Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground mono">
            © 2025 Saraiva.ai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
