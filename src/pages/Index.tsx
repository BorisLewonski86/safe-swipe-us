import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { LandingPage } from "@/pages/LandingPage";
import { WhatsAppModal } from "@/components/WhatsAppModal";

interface IndexProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

const Index = ({ isLoggedIn, onLogin }: IndexProps) => {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setShowWhatsAppModal(true);
  };

  const handleWhatsAppContinue = () => {
    setShowWhatsAppModal(false);
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header isLoggedIn={isLoggedIn} onLogin={handleGetStarted} />
      <LandingPage onGetStarted={handleGetStarted} />
      
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
};

export default Index;
