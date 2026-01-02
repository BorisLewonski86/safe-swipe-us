import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { GenderSelector } from "@/components/GenderSelector";
import { SwipeableProfileCard } from "@/components/SwipeableProfileCard";
import { WhatsAppModal } from "@/components/WhatsAppModal";
import { mockProfiles } from "@/data/profiles";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { RefreshCw, ArrowLeft } from "lucide-react";
import { useLikes } from "@/context/LikesContext";

interface BrowsePageProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

export function BrowsePage({ isLoggedIn, onLogin }: BrowsePageProps) {
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeCount, setSwipeCount] = useState(0);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const navigate = useNavigate();
  const { addLike } = useLikes();

  // Filter and shuffle profiles by selected gender
  const filteredProfiles = useMemo(() => {
    if (!selectedGender) return [];
    const filtered = mockProfiles.filter(p => p.gender === selectedGender);
    // Fisher-Yates shuffle for random order
    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [selectedGender]);

  const currentProfile = filteredProfiles[currentIndex];
  const isFinished = currentIndex >= filteredProfiles.length;

  const handleSwipe = (direction: "left" | "right") => {
    const newSwipeCount = swipeCount + 1;
    setSwipeCount(newSwipeCount);

    // Check if this is the last profile
    if (currentIndex >= filteredProfiles.length - 1) {
      toast.error("You have reached the limit for a new account. Come back tomorrow!");
      return;
    }

    // Add to likes if swiped right
    if (direction === "right" && isLoggedIn && currentProfile) {
      addLike(currentProfile);
      toast.success(`You liked ${currentProfile.name}!`);
    }

    // Move to next profile
    setCurrentIndex(prev => prev + 1);

    // Show verification modal after 6 swipes for non-logged users
    if (!isLoggedIn && newSwipeCount >= 6) {
      setShowWhatsAppModal(true);
    }
  };

  const handleUnlock = () => {
    setShowWhatsAppModal(true);
  };

  const handleWhatsAppContinue = () => {
    setShowWhatsAppModal(false);
    navigate("/auth");
  };

  const handleReset = () => {
    setCurrentIndex(0);
  };

  const handleBack = () => {
    setSelectedGender(null);
    setCurrentIndex(0);
  };

  return (
    <div className="min-h-screen bg-muted">
      <Header isLoggedIn={isLoggedIn} onLogin={onLogin} />
      
      <main className="pt-20 pb-24 px-4">
        <div className="max-w-lg mx-auto">
          <AnimatePresence mode="wait">
            {!selectedGender ? (
              <motion.div
                key="selector"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pt-8"
              >
                <GenderSelector onSelect={setSelectedGender} />
              </motion.div>
            ) : isFinished ? (
              <motion.div
                key="finished"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center pt-20"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <RefreshCw className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  You've seen all profiles!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Come back later for new matches or start over.
                </p>
                <div className="flex flex-col gap-3">
                  <Button variant="hero" size="lg" onClick={handleReset}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Start Over
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleBack}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Change Preference
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="profiles"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Header with back button - hidden on mobile */}
                <div className="hidden md:flex items-center justify-between mb-4">
                  <button 
                    onClick={handleBack}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm">Change</span>
                  </button>
                  <div className="text-center">
                    <h1 className="text-xl font-bold text-foreground">
                      {selectedGender === "female" ? "Women" : "Men"}
                    </h1>
                    <p className="text-xs text-muted-foreground">
                      {isLoggedIn ? "Find your match" : "Verify to unlock"}
                    </p>
                  </div>
                  <div className="w-16" /> {/* Spacer for centering */}
                </div>

                {/* Mobile back button only */}
                <div className="flex md:hidden items-center mb-2">
                  <button 
                    onClick={handleBack}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm">Change</span>
                  </button>
                </div>

                {/* Cards stack */}
                <div className="relative h-[520px]">
                  {filteredProfiles.slice(currentIndex, currentIndex + 3).map((profile, idx) => (
                    <SwipeableProfileCard
                      key={profile.id}
                      profile={profile}
                      onSwipe={handleSwipe}
                      onUnlock={handleUnlock}
                      isLoggedIn={isLoggedIn}
                      isTop={idx === 0}
                    />
                  ))}
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <BottomNav isLoggedIn={isLoggedIn} />

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {showWhatsAppModal && (
          <WhatsAppModal
            isOpen={showWhatsAppModal}
            onClose={() => setShowWhatsAppModal(false)}
            onContinue={handleWhatsAppContinue}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default BrowsePage;
