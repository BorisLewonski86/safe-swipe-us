import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { User, Camera, Edit, LogOut, ChevronRight, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface AccountPageProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export function AccountPage({ isLoggedIn, onLogin, onLogout }: AccountPageProps) {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    location: "",
    bio: ""
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = () => {
    toast.error("Ошибка x2345: Не удалось загрузить изображение");
  };

  const handleSaveProfile = () => {
    setShowEditProfile(false);
    toast.success("Профиль сохранен!");
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
              <User className="w-10 h-10 text-background" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Create your profile</h2>
            <p className="text-muted-foreground mb-6">
              Verify with WhatsApp to set up your dating profile.
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
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl p-6 shadow-card border border-border mb-6"
          >
            <div className="flex items-start gap-4">
              <div className="relative">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Your profile"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center">
                    <User className="w-10 h-10 text-muted-foreground" />
                  </div>
                )}
                <button 
                  onClick={handleImageUpload}
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
                >
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground">
                  {profileData.name || "New User"}
                  {profileData.age && `, ${profileData.age}`}
                </h2>
                {profileData.location && (
                  <p className="text-sm text-muted-foreground mt-1">{profileData.location}</p>
                )}
                {profileData.bio && (
                  <p className="text-sm text-muted-foreground mt-2">{profileData.bio}</p>
                )}
              </div>
            </div>

            {/* Stats - all 0 for new user */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">0</p>
                <p className="text-xs text-muted-foreground">Matches</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">0</p>
                <p className="text-xs text-muted-foreground">Likes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">0</p>
                <p className="text-xs text-muted-foreground">Views</p>
              </div>
            </div>
          </motion.div>

          {/* Menu Items - only Edit Profile and Notifications */}
          <div className="space-y-2">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setShowEditProfile(true)}
              className="w-full bg-card rounded-2xl p-4 shadow-soft border border-border flex items-center gap-4 hover:shadow-card transition-shadow text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Edit className="w-5 h-5 text-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">Edit Profile</h3>
                <p className="text-sm text-muted-foreground">Update your photos and bio</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </motion.button>
          </div>

          {/* Logout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <Button
              variant="outline"
              className="w-full text-destructive border-destructive/20 hover:bg-destructive/10"
              onClick={onLogout}
            >
              <LogOut className="w-4 h-4" />
              Log out
            </Button>
          </motion.div>
        </div>
      </main>

      <BottomNav isLoggedIn={isLoggedIn} />

      {/* Edit Profile Modal */}
      <AnimatePresence>
        {showEditProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 z-50 flex items-end sm:items-center justify-center"
            onClick={() => setShowEditProfile(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Edit Profile</h2>
                <button onClick={() => setShowEditProfile(false)}>
                  <X className="w-6 h-6 text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input
                    value={profileData.name}
                    onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Age</label>
                  <Input
                    type="number"
                    value={profileData.age}
                    onChange={(e) => setProfileData(prev => ({ ...prev, age: e.target.value }))}
                    placeholder="Your age"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Location</label>
                  <Input
                    value={profileData.location}
                    onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Your city"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Bio</label>
                  <Textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                    placeholder="Tell something about yourself..."
                    rows={3}
                  />
                </div>

                <Button 
                  variant="hero" 
                  className="w-full mt-4"
                  onClick={handleSaveProfile}
                >
                  Save Profile
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AccountPage;
