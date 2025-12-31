import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/logo.png";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

export function Header({ isLoggedIn, onLogin }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Flitch" className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/browse" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Browse
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </Link>
            <Link 
              to="/safety" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Safety
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Link to="/account">
                <Button variant="outline" size="sm">
                  My Account
                </Button>
              </Link>
            ) : (
              <Button variant="hero" size="sm" onClick={onLogin}>
                Get Started
              </Button>
            )}
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <nav className="flex flex-col p-4 gap-2">
            <Link 
              to="/browse" 
              className="px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Profiles
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <Link 
              to="/safety" 
              className="px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Safety Center
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
