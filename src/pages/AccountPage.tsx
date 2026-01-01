import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { User, Settings, Camera, MapPin, Edit, Shield, Bell, CreditCard, LogOut, ChevronRight, Verified, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface AccountPageProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export function AccountPage({ isLoggedIn, onLogin, onLogout }: AccountPageProps) {
  const navigate = useNavigate();

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

  const menuItems = [
    { icon: Edit, label: "Edit Profile", description: "Update your photos and bio" },
    { icon: Settings, label: "Preferences", description: "Dating preferences & filters" },
    { icon: Bell, label: "Notifications", description: "Manage your alerts" },
    { icon: Shield, label: "Privacy & Safety", description: "Block list, privacy settings" },
    { icon: CreditCard, label: "Premium", description: "Upgrade for more features", badge: "New" },
  ];

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
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
                  alt="Your profile"
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <h2 className="text-xl font-bold text-foreground">Alex, 28</h2>
                  <Verified className="w-5 h-5 text-secondary fill-secondary" />
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>Los Angeles, CA</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Looking for something real ✨
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">12</p>
                <p className="text-xs text-muted-foreground">Matches</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">48</p>
                <p className="text-xs text-muted-foreground">Likes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">156</p>
                <p className="text-xs text-muted-foreground">Views</p>
              </div>
            </div>
          </motion.div>

          {/* Menu Items */}
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="w-full bg-card rounded-2xl p-4 shadow-soft border border-border flex items-center gap-4 hover:shadow-card transition-shadow text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground">{item.label}</h3>
                    {item.badge && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </motion.button>
            ))}
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
    </div>
  );
}

export default AccountPage;
