import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="font-display text-xl uppercase text-foreground hover:text-accent transition-colors duration-200"
          >
            IA Library
          </Link>
          
          <div className="flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link 
              to="/"
              className="text-foreground hover:opacity-70 transition-opacity duration-200"
            >
              Biblioteca
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
