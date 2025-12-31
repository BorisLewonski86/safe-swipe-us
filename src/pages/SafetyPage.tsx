import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Shield, Ban, AlertTriangle, Eye, Lock, CheckCircle } from "lucide-react";

interface SafetyPageProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

export function SafetyPage({ isLoggedIn, onLogin }: SafetyPageProps) {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "WhatsApp Verified",
      description: "Every user verifies their identity through WhatsApp, reducing fake accounts.",
    },
    {
      icon: Ban,
      title: "Block & Report",
      description: "Easily block or report any user who makes you uncomfortable.",
    },
    {
      icon: Eye,
      title: "Profile Moderation",
      description: "Our team reviews profiles and photos to maintain community standards.",
    },
    {
      icon: Lock,
      title: "Private Chats",
      description: "Your conversations are private and secure. We don't read your messages.",
    },
  ];

  const safetyTips = [
    "Never share financial information or send money to someone you haven't met",
    "Video chat before meeting in person to verify who you're talking to",
    "Meet in public places for your first few dates",
    "Tell a friend where you're going and when to expect you back",
    "Trust your instincts — if something feels off, it probably is",
    "Report any suspicious behavior to our support team",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header isLoggedIn={isLoggedIn} onLogin={onLogin} />
      
      <main className="pt-20 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-background" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Safety Center
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Your safety is our priority. Learn how we keep Flitch a trusted community.
            </p>
          </motion.div>

          {/* Safety Features */}
          <div className="grid gap-4 md:grid-cols-2 mb-12">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Safety Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-accent/50 border border-accent rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-coral" />
              <h2 className="text-xl font-bold text-foreground">Dating Safety Tips</h2>
            </div>
            
            <ul className="space-y-3">
              {safetyTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground">
              Need help or want to report something?{" "}
              <a href="mailto:support@flitch.app" className="text-primary font-medium hover:underline">
                Contact our support team
              </a>
            </p>
          </motion.div>
        </div>
      </main>

      <BottomNav isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default SafetyPage;
