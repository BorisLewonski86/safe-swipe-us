import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Heart, MessageCircle, Verified } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockProfiles } from "@/data/profiles";
import { useNavigate } from "react-router-dom";

interface MatchesPageProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

export function MatchesPage({ isLoggedIn, onLogin }: MatchesPageProps) {
  const navigate = useNavigate();
  const matches = mockProfiles.slice(0, 3); // Mock matches

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-muted">
        <Header isLoggedIn={isLoggedIn} onLogin={onLogin} />
        <main className="pt-24 pb-24 px-4 flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-sm"
          >
            <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-background" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">See who likes you</h2>
            <p className="text-muted-foreground mb-6">
              Verify with WhatsApp to see your likes and matches.
            </p>
            <Button variant="hero" size="lg" onClick={onLogin}>
              <MessageCircle className="w-5 h-5" />
              Verify with WhatsApp
            </Button>
          </motion.div>
        </main>
        <BottomNav isLoggedIn={isLoggedIn} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      <Header isLoggedIn={isLoggedIn} onLogin={onLogin} />
      
      <main className="pt-20 pb-24 px-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-2">Matches</h1>
          <p className="text-sm text-muted-foreground mb-6">People who liked you back</p>

          {/* Likes Section */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              New Likes
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {mockProfiles.slice(3, 6).map((profile, index) => (
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-24"
                >
                  <div className="relative w-24 h-32 rounded-2xl overflow-hidden shadow-soft">
                    <img
                      src={profile.photos[0]}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 text-background">
                      <p className="text-sm font-semibold">{profile.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Matches List */}
          <h2 className="text-sm font-semibold text-foreground mb-3">Your Matches</h2>
          <div className="space-y-3">
            {matches.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-4 shadow-soft border border-border flex items-center gap-4 cursor-pointer hover:shadow-card transition-shadow"
                onClick={() => navigate("/chat")}
              >
                <div className="relative">
                  <img
                    src={match.photos[0]}
                    alt={match.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <h3 className="font-semibold text-foreground">{match.name}, {match.age}</h3>
                    {match.verified && <Verified className="w-4 h-4 text-secondary fill-secondary" />}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{match.bio}</p>
                </div>
                <Button variant="coral" size="sm">
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <BottomNav isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default MatchesPage;
