import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Heart, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLikes } from "@/context/LikesContext";
import { toast } from "sonner";
import { Profile } from "@/data/profiles";
import { ProfileGallery } from "@/components/ProfileGallery";

interface MatchesPageProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

export function MatchesPage({ isLoggedIn, onLogin }: MatchesPageProps) {
  const { likedProfiles, addToChat } = useLikes();
  const [viewingProfile, setViewingProfile] = useState<Profile | null>(null);

  const handleSendToChat = (profile: Profile) => {
    addToChat(profile);
    toast.success(`${profile.name} added to chat!`);
  };

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
          <h1 className="text-2xl font-bold text-foreground mb-2">Likes</h1>
          <p className="text-sm text-muted-foreground mb-6">Profiles you liked</p>

          {likedProfiles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-muted-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No likes yet</h3>
              <p className="text-sm text-muted-foreground">
                Start swiping to like profiles
              </p>
            </motion.div>
          ) : (
            <div className="space-y-3">
              {likedProfiles.map((profile, index) => (
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-4 shadow-soft border border-border flex items-center gap-4"
                >
                  <img
                    src={profile.photos[0]}
                    alt={profile.name}
                    className="w-16 h-16 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{profile.name}, {profile.age}</h3>
                    <p className="text-xs text-muted-foreground">{profile.lastSeen || "Last seen recently"}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setViewingProfile(profile)}
                    >
                      Profile
                    </Button>
                    <Button 
                      variant="coral" 
                      size="sm"
                      onClick={() => handleSendToChat(profile)}
                      className="gap-1"
                    >
                      <Send className="w-3 h-3" />
                      Chat
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      <BottomNav isLoggedIn={isLoggedIn} />

      {/* Profile Gallery Modal */}
      {viewingProfile && (
        <ProfileGallery 
          profile={viewingProfile} 
          isOpen={!!viewingProfile} 
          onClose={() => setViewingProfile(null)} 
        />
      )}
    </div>
  );
}

export default MatchesPage;
