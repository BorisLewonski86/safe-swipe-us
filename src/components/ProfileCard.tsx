import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Lock, Heart, MapPin, Verified } from "lucide-react";
import { Profile } from "@/data/profiles";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  profile: Profile;
  onLike: () => void;
  onPass: () => void;
  onUnlock: () => void;
  isLoggedIn: boolean;
}

export function ProfileCard({ profile, onLike, onPass, onUnlock, isLoggedIn }: ProfileCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const hasMultiplePhotos = profile.photos.length > 1;

  const handlePhotoTap = (e: React.MouseEvent) => {
    if (!isLoggedIn && currentPhotoIndex === 0 && hasMultiplePhotos) {
      onUnlock();
      return;
    }
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const isRightSide = x > rect.width / 2;
    
    if (isRightSide && currentPhotoIndex < profile.photos.length - 1) {
      setCurrentPhotoIndex(prev => prev + 1);
    } else if (!isRightSide && currentPhotoIndex > 0) {
      setCurrentPhotoIndex(prev => prev - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-card"
    >
      {/* Photo Container */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={handlePhotoTap}
      >
        {/* Main Photo */}
        <img
          src={profile.photos[currentPhotoIndex]}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        
        {/* Blurred overlay for locked photos */}
        {!isLoggedIn && currentPhotoIndex === 0 && hasMultiplePhotos && (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Show blurred preview of next photo */}
            <div className="absolute top-4 right-4 flex flex-col items-center gap-2">
              <div className="relative w-16 h-20 rounded-xl overflow-hidden">
                <img
                  src={profile.photos[1]}
                  alt="Locked"
                  className="w-full h-full object-cover blur-lg scale-110"
                />
                <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-background" />
                </div>
              </div>
              <span className="text-xs text-background font-medium bg-foreground/50 px-2 py-0.5 rounded-full backdrop-blur-sm">
                +{profile.photos.length - 1} more
              </span>
            </div>
          </div>
        )}

        {/* Photo indicators */}
        {(isLoggedIn || hasMultiplePhotos) && (
          <div className="absolute top-4 left-4 right-20 flex gap-1">
            {profile.photos.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-all ${
                  index === currentPhotoIndex
                    ? "bg-background"
                    : index < (isLoggedIn ? profile.photos.length : 1)
                    ? "bg-background/50"
                    : "bg-background/20"
                }`}
              />
            ))}
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
      </div>

      {/* Profile Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-background">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-2xl font-bold">{profile.name}, {profile.age}</h3>
          {profile.verified && (
            <Verified className="w-5 h-5 text-secondary fill-secondary" />
          )}
        </div>
        
        <div className="flex items-center gap-1 text-background/80 text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{profile.city}</span>
          {profile.distance && (
            <>
              <span className="mx-1">•</span>
              <span>{profile.distance}</span>
            </>
          )}
        </div>
        
        <p className="text-sm text-background/90 line-clamp-2">{profile.bio}</p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <Button
            variant="glass"
            size="icon"
            className="w-14 h-14 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              onPass();
            }}
          >
            <X className="w-6 h-6" />
          </Button>
          
          <Button
            variant="coral"
            size="icon"
            className="w-16 h-16 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              if (!isLoggedIn) {
                onUnlock();
              } else {
                onLike();
              }
            }}
          >
            <Heart className="w-7 h-7" />
          </Button>
          
          <Button
            variant="glass"
            size="icon"
            className="w-14 h-14 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              if (!isLoggedIn) {
                onUnlock();
              }
            }}
          >
            <Check className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Unlock CTA for non-logged in users */}
      {!isLoggedIn && hasMultiplePhotos && (
        <button
          onClick={onUnlock}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
        >
          <Lock className="w-4 h-4" />
          Unlock all photos
        </button>
      )}
    </motion.div>
  );
}
