import { motion } from "framer-motion";
import { X, Lock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export function WhatsAppModal({ isOpen, onClose, onContinue }: WhatsAppModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-background rounded-3xl p-6 max-w-sm w-full shadow-card"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full gradient-hero mx-auto flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-background" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Verify to Unlock
          </h2>

          {/* Description */}
          <p className="text-muted-foreground mb-6">
            Verify your account with WhatsApp to prove you're real and unlock all photos, likes and matches. 
            <span className="block mt-1 font-medium text-foreground">It only takes 30 seconds.</span>
          </p>

          {/* Benefits */}
          <div className="flex flex-col gap-2 mb-6 text-left">
            {[
              "See all profile photos",
              "Send likes and matches",
              "Start conversations",
              "Join verified community",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary text-xs">✓</span>
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            variant="whatsapp"
            size="lg"
            className="w-full"
            onClick={onContinue}
          >
            <MessageCircle className="w-5 h-5" />
            Continue with WhatsApp
          </Button>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground mt-4">
            Flitch is not affiliated with WhatsApp or Meta.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
