import { useState } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Heart, X, Lock, MapPin, Verified } from "lucide-react";
import { Profile } from "@/data/profiles";

interface SwipeableProfileCardProps {
  profile: Profile;
  onSwipe: (direction: "left" | "right") => void;
  onUnlock: () => void;
  isLoggedIn: boolean;
  isTop: boolean;
}

export function SwipeableProfileCard({ 
  profile, 
  onSwipe, 
  onUnlock, 
  isLoggedIn, 
  isTop 
}: SwipeableProfileCardProps) {
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);
  
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  const hasMultiplePhotos = profile.photos.length > 1;

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x > 100) {
      setExitX(300);
      onSwipe("right");
    } else if (info.offset.x < -100) {
      setExitX(-300);
      onSwipe("left");
    }
  };

  const handlePhotoClick = () => {
    if (!isLoggedIn && hasMultiplePhotos) {
      onUnlock();
    }
  };

  return (
    <motion.div
      className="absolute w-full"
      style={{ 
        x, 
        rotate, 
        opacity,
        zIndex: isTop ? 10 : 0 
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={{ x: exitX }}
      transition={{ type: "spring", damping: 20, stiffness: 200 }}
    >
      <div 
        className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-card cursor-grab active:cursor-grabbing"
        onClick={handlePhotoClick}
      >
        {/* Photo */}
        <img
          src={profile.photos[0]}
          alt={profile.name}
          className="w-full h-full object-cover pointer-events-none"
        />

        {/* Like/Nope indicators */}
        <motion.div
          className="absolute top-8 right-8 px-4 py-2 border-4 border-green-500 rounded-xl rotate-12"
          style={{ opacity: likeOpacity }}
        >
          <span className="text-2xl font-black text-green-500">LIKE</span>
        </motion.div>
        
        <motion.div
          className="absolute top-8 left-8 px-4 py-2 border-4 border-red-500 rounded-xl -rotate-12"
          style={{ opacity: nopeOpacity }}
        >
          <span className="text-2xl font-black text-red-500">NOPE</span>
        </motion.div>

        {/* Locked photos indicator */}
        {!isLoggedIn && hasMultiplePhotos && (
          <div className="absolute top-4 right-4 flex flex-col items-center gap-2">
            <div className="relative w-14 h-18 rounded-xl overflow-hidden">
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
              +{profile.photos.length - 1} photos
            </span>
          </div>
        )}

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent pointer-events-none" />

        {/* Profile Info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-background pointer-events-none">
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
        </div>

        {/* Swipe hint */}
        {isTop && (
          <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-8 pointer-events-none">
            <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <X className="w-4 h-4 text-red-400" />
              <span className="text-xs text-background font-medium">Swipe left</span>
            </div>
            <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-xs text-background font-medium">Swipe right</span>
              <Heart className="w-4 h-4 text-green-400" />
            </div>
          </div>
        )}
      </div>

      {/* Unlock button */}
      {!isLoggedIn && hasMultiplePhotos && isTop && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onUnlock();
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 z-20"
        >
          <Lock className="w-4 h-4" />
          Unlock all photos
        </button>
      )}
    </motion.div>
  );
}
