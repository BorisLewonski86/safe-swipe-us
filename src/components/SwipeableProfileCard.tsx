import { useState, forwardRef } from "react";
import { motion, useMotionValue, useTransform, PanInfo, AnimatePresence } from "framer-motion";
import { Heart, X, Lock, MapPin, Verified, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Profile } from "@/data/profiles";
import { Skeleton } from "@/components/ui/skeleton";
interface SwipeableProfileCardProps {
  profile: Profile;
  onSwipe: (direction: "left" | "right") => void;
  onUnlock: () => void;
  isLoggedIn: boolean;
  isTop: boolean;
}

export const SwipeableProfileCard = forwardRef<HTMLDivElement, SwipeableProfileCardProps>(
  function SwipeableProfileCard({ 
    profile, 
    onSwipe, 
    onUnlock, 
    isLoggedIn, 
    isTop 
  }, ref) {
  const [exitX, setExitX] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [galleryImageLoaded, setGalleryImageLoaded] = useState(false);
  
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

  const handlePhotoIndicatorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasMultiplePhotos) {
      setShowGallery(true);
    }
  };

  const handlePhotoClick = () => {
    if (hasMultiplePhotos) {
      setShowGallery(true);
    }
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
    setCurrentPhotoIndex(0);
    setGalleryImageLoaded(false);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPhotoIndex < profile.photos.length - 1) {
      setGalleryImageLoaded(false);
      setCurrentPhotoIndex(prev => prev + 1);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPhotoIndex > 0) {
      setGalleryImageLoaded(false);
      setCurrentPhotoIndex(prev => prev - 1);
    }
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="absolute w-full will-change-transform"
        style={{ 
          x, 
          rotate, 
          opacity,
          zIndex: isTop ? 10 : 0,
          transform: 'translateZ(0)',
        }}
        drag={isTop ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.7}
        onDragEnd={handleDragEnd}
        animate={{ x: exitX }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 300,
          mass: 0.5 
        }}
      >
        <div className="relative w-full aspect-[3/4] max-h-[420px] rounded-2xl overflow-hidden shadow-card cursor-grab active:cursor-grabbing">
          {/* Photo - clickable to open gallery */}
          <div 
            onClick={handlePhotoClick}
            className={`w-full h-full ${hasMultiplePhotos ? 'cursor-pointer' : ''}`}
          >
            {!imageLoaded && (
              <Skeleton className="absolute inset-0 w-full h-full bg-muted animate-pulse" />
            )}
            <img
              src={profile.photos[0]}
              alt={profile.name}
              loading="eager"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover pointer-events-none transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          {/* Like/Nope indicators */}
          <motion.div
            className="absolute top-6 right-6 px-3 py-1.5 border-3 border-green-500 rounded-lg rotate-12"
            style={{ opacity: likeOpacity }}
          >
            <span className="text-xl font-black text-green-500">LIKE</span>
          </motion.div>
          
          <motion.div
            className="absolute top-6 left-6 px-3 py-1.5 border-3 border-red-500 rounded-lg -rotate-12"
            style={{ opacity: nopeOpacity }}
          >
            <span className="text-xl font-black text-red-500">NOPE</span>
          </motion.div>

          {/* Photo count indicator - clickable */}
          {hasMultiplePhotos && (
            <button
              onClick={handlePhotoIndicatorClick}
              className="absolute top-3 right-3 flex items-center gap-1.5 bg-foreground/60 backdrop-blur-sm px-2.5 py-1 rounded-full hover:bg-foreground/70 transition-colors"
            >
              <Camera className="w-3.5 h-3.5 text-background" />
              <span className="text-xs text-background font-medium">
                +{profile.photos.length - 1} pics
              </span>
            </button>
          )}

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent pointer-events-none" />

          {/* Profile Info */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-background pointer-events-none">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
              <h3 className="text-lg sm:text-xl font-bold leading-tight">{profile.name}, {profile.age}</h3>
              {profile.verified && (
                <Verified className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-secondary fill-secondary flex-shrink-0" />
              )}
            </div>
            
            <div className="flex items-center gap-1 text-background/90 text-xs sm:text-sm mb-1">
              <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 flex-shrink-0" />
              <span className="truncate max-w-[120px] sm:max-w-none">{profile.city}</span>
              {profile.distance && (
                <>
                  <span className="mx-0.5 sm:mx-1">•</span>
                  <span className="flex-shrink-0">{profile.distance}</span>
                </>
              )}
            </div>
            
            <p className="text-[11px] sm:text-xs text-background/80 line-clamp-2 leading-snug">{profile.bio}</p>
          </div>

          {/* Swipe hint */}
          {isTop && (
            <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 flex justify-center gap-3 sm:gap-6 pointer-events-none">
              <div className="flex items-center gap-1 sm:gap-1.5 bg-background/20 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                <X className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-red-400" />
                <span className="text-[9px] sm:text-[10px] text-background font-medium">Swipe left</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 bg-background/20 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                <span className="text-[9px] sm:text-[10px] text-background font-medium">Swipe right</span>
                <Heart className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-green-400" />
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleCloseGallery}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo with blur for non-first photos when not logged in */}
              {!galleryImageLoaded && (
                <Skeleton className="absolute inset-0 w-full h-full bg-muted animate-pulse" />
              )}
              <img
                src={profile.photos[currentPhotoIndex]}
                alt={`${profile.name} photo ${currentPhotoIndex + 1}`}
                loading="lazy"
                decoding="async"
                onLoad={() => setGalleryImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  !isLoggedIn && currentPhotoIndex > 0 ? "blur-sm scale-105" : ""
                } ${galleryImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* Verification overlay for blurred photos */}
              {!isLoggedIn && currentPhotoIndex > 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-foreground/30">
                  <Lock className="w-12 h-12 text-background mb-4" />
                  <p className="text-background font-semibold text-lg mb-2">Photo locked</p>
                  <p className="text-background/80 text-sm text-center px-8 mb-4">
                    Verify with WhatsApp to unlock all photos
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCloseGallery();
                      onUnlock();
                    }}
                    className="bg-[#25D366] text-background px-6 py-3 rounded-xl font-semibold hover:bg-[#20BD5A] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Verify Now
                  </button>
                </div>
              )}

              {/* Photo indicators */}
              <div className="absolute top-3 left-0 right-0 flex justify-center gap-1.5 px-4">
                {profile.photos.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      idx === currentPhotoIndex 
                        ? "bg-background" 
                        : "bg-background/40"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              {currentPhotoIndex > 0 && (
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-background" />
                </button>
              )}
              {currentPhotoIndex < profile.photos.length - 1 && (
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-background" />
                </button>
              )}

              {/* Close button */}
              <button
                onClick={handleCloseGallery}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-foreground/50 backdrop-blur-sm flex items-center justify-center hover:bg-foreground/60 transition-colors"
              >
                <X className="w-4 h-4 text-background" />
              </button>

              {/* Profile info at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <h3 className="text-lg font-bold text-background">{profile.name}, {profile.age}</h3>
                <p className="text-sm text-background/80">{profile.city}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

SwipeableProfileCard.displayName = "SwipeableProfileCard";
