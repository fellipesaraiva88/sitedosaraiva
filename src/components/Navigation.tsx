import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-foreground hover:opacity-70 transition-opacity duration-200"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="13" r="2" fill="currentColor"/>
              <circle cx="20" cy="13" r="2" fill="currentColor"/>
            </svg>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link 
              to="/"
              className="text-foreground hover:opacity-70 transition-opacity duration-200 underline underline-offset-4"
            >
              Projects
            </Link>
            <Link 
              to="/"
              className="text-foreground hover:opacity-70 transition-opacity duration-200"
            >
              About
            </Link>
            <Link 
              to="/"
              className="text-foreground hover:opacity-70 transition-opacity duration-200"
            >
              Playground
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
