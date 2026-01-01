import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Heart, MessageCircle, Send, X, MapPin, Verified, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLikes } from "@/context/LikesContext";
import { toast } from "sonner";
import { Profile } from "@/data/profiles";

interface MatchesPageProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

export function MatchesPage({ isLoggedIn, onLogin }: MatchesPageProps) {
  const { likedProfiles, addToChat } = useLikes();
  const [viewingProfile, setViewingProfile] = useState<Profile | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleSendToChat = (profile: Profile) => {
    addToChat(profile);
    toast.success(`${profile.name} added to chat!`);
  };

  const handleNextPhoto = () => {
    if (viewingProfile && currentPhotoIndex < viewingProfile.photos.length - 1) {
      setCurrentPhotoIndex(prev => prev + 1);
    }
  };

  const handlePrevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(prev => prev - 1);
    }
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
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{profile.name}, {profile.age}</h3>
                    <p className="text-xs text-muted-foreground">{profile.lastSeen || "Last seen recently"}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setViewingProfile(profile);
                        setCurrentPhotoIndex(0);
                      }}
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

      {/* Profile View Modal */}
      <AnimatePresence>
        {viewingProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-4"
            onClick={() => setViewingProfile(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card w-full max-w-sm rounded-3xl overflow-hidden relative"
            >
              {/* Close button */}
              <button
                onClick={() => setViewingProfile(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-foreground/50 rounded-full flex items-center justify-center text-background"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo */}
              <div className="relative aspect-[3/4]">
                <img
                  src={viewingProfile.photos[currentPhotoIndex]}
                  alt={viewingProfile.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Photo indicators */}
                <div className="absolute top-4 left-4 right-12 flex gap-1">
                  {viewingProfile.photos.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full transition-all ${
                        index === currentPhotoIndex ? "bg-background" : "bg-background/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation buttons */}
                {currentPhotoIndex > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevPhoto();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-foreground/30 rounded-full flex items-center justify-center text-background z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}
                {currentPhotoIndex < viewingProfile.photos.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextPhoto();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-foreground/30 rounded-full flex items-center justify-center text-background z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />

                {/* Profile info on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-background">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-bold">{viewingProfile.name}, {viewingProfile.age}</h3>
                    {viewingProfile.verified && (
                      <Verified className="w-5 h-5 text-secondary fill-secondary" />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 text-background/80 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{viewingProfile.city}</span>
                    {viewingProfile.distance && (
                      <>
                        <span className="mx-1">•</span>
                        <span>{viewingProfile.distance}</span>
                      </>
                    )}
                  </div>
                  
                  <p className="text-sm text-background/90">{viewingProfile.bio}</p>
                  <p className="text-xs text-background/60 mt-2">{viewingProfile.lastSeen || "Last seen recently"}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MatchesPage;
