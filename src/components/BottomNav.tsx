import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Heart, MessageCircle, User, Sparkles } from "lucide-react";

interface BottomNavProps {
  isLoggedIn: boolean;
}

export function BottomNav({ isLoggedIn }: BottomNavProps) {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Discover", path: "/browse" },
    { icon: Heart, label: "Likes", path: "/matches" },
    { icon: MessageCircle, label: "Chat", path: "/chat" },
    { icon: User, label: "Profile", path: "/account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border z-40 safe-area-pb">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={isLoggedIn ? item.path : "#"}
              onClick={(e) => {
                if (!isLoggedIn) e.preventDefault();
              }}
              className={`relative flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-colors ${
                isActive
                  ? "text-primary"
                  : isLoggedIn
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-muted-foreground/50 cursor-not-allowed"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-xl"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                />
              )}
              <Icon className="w-5 h-5 relative z-10" />
              <span className="text-xs font-medium relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
