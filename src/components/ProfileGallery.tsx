import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Profile } from "@/data/profiles";

interface ProfileGalleryProps {
  profile: Profile;
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileGallery({ profile, isOpen, onClose }: ProfileGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? profile.photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === profile.photos.length - 1 ? 0 : prev + 1));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex flex-col"
        onClick={handleBackdropClick}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 text-white">
          <div className="flex items-center gap-3">
            <span className="font-semibold">{profile.name}, {profile.age}</span>
            <span className="text-white/60 text-sm">{currentIndex + 1} / {profile.photos.length}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Gallery */}
        <div className="flex-1 flex items-center justify-center relative px-4">
          {/* Left Arrow */}
          {profile.photos.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Image */}
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            src={profile.photos[currentIndex]}
            alt={`${profile.name} photo ${currentIndex + 1}`}
            className="max-h-[70vh] max-w-full object-contain rounded-lg"
          />

          {/* Right Arrow */}
          {profile.photos.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}
        </div>

        {/* Thumbnails */}
        <div className="p-4 flex justify-center gap-2 overflow-x-auto">
          {profile.photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex ? "border-white" : "border-transparent opacity-50"
              }`}
            >
              <img
                src={photo}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
