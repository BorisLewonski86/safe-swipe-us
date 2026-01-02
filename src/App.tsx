import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { LikesProvider } from "@/context/LikesContext";
import Index from "./pages/Index";
import BrowsePage from "./pages/BrowsePage";
import AuthPage from "./pages/AuthPage";
import MatchesPage from "./pages/MatchesPage";
import ChatPage from "./pages/ChatPage";
import AccountPage from "./pages/AccountPage";
import AboutPage from "./pages/AboutPage";
import SafetyPage from "./pages/SafetyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // User starts as not logged in - must verify via WhatsApp
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Navigate to auth is handled in components
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LikesProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
              <Route path="/browse" element={<BrowsePage isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
              <Route path="/auth" element={<AuthPage onLoginSuccess={handleLoginSuccess} />} />
              <Route path="/matches" element={<MatchesPage isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
              <Route path="/chat" element={<ChatPage isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
              <Route path="/account" element={<AccountPage isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />} />
              <Route path="/about" element={<AboutPage isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
              <Route path="/safety" element={<SafetyPage isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LikesProvider>
    </QueryClientProvider>
  );
};

export default App;
