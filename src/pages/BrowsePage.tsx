import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { ProfileCard } from "@/components/ProfileCard";
import { WhatsAppModal } from "@/components/WhatsAppModal";
import { mockProfiles } from "@/data/profiles";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface BrowsePageProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

export function BrowsePage({ isLoggedIn, onLogin }: BrowsePageProps) {
  const [profiles] = useState(mockProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const navigate = useNavigate();

  const currentProfile = profiles[currentIndex];

  const handleLike = () => {
    if (!isLoggedIn) {
      setShowWhatsAppModal(true);
      return;
    }
    toast.success(`You liked ${currentProfile.name}!`);
    nextProfile();
  };

  const handlePass = () => {
    nextProfile();
  };

  const handleUnlock = () => {
    setShowWhatsAppModal(true);
  };

  const nextProfile = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
      toast("You've seen all profiles! Starting over.");
    }
  };

  const handleWhatsAppContinue = () => {
    setShowWhatsAppModal(false);
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-muted">
      <Header isLoggedIn={isLoggedIn} onLogin={onLogin} />
      
      <main className="pt-20 pb-24 px-4">
        <div className="max-w-lg mx-auto">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-foreground">Discover</h1>
            <p className="text-sm text-muted-foreground">
              {isLoggedIn ? "Find your perfect match" : "Preview profiles • Verify to unlock"}
            </p>
          </div>

          {/* Profile Cards */}
          <AnimatePresence mode="wait">
            {currentProfile && (
              <ProfileCard
                key={currentProfile.id}
                profile={currentProfile}
                onLike={handleLike}
                onPass={handlePass}
                onUnlock={handleUnlock}
                isLoggedIn={isLoggedIn}
              />
            )}
          </AnimatePresence>

          {/* Profile counter */}
          <div className="text-center mt-4 text-sm text-muted-foreground">
            {currentIndex + 1} of {profiles.length}
          </div>
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
