import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { Smartphone, Heart, Shield, MessageCircle } from "lucide-react";

interface AboutPageProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

export function AboutPage({ isLoggedIn, onLogin }: AboutPageProps) {
  const steps = [
    {
      icon: Smartphone,
      title: "Verify with WhatsApp",
      description: "Quick verification proves you're real. No fake accounts, no spam.",
    },
    {
      icon: Heart,
      title: "Browse & Like",
      description: "Swipe through verified profiles. Like someone? Let them know!",
    },
    {
      icon: Shield,
      title: "Match Safely",
      description: "When you both like each other, it's a match! Start chatting.",
    },
    {
      icon: MessageCircle,
      title: "Connect & Meet",
      description: "Chat, get to know each other, and plan your first date.",
    },
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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Flitch Works
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Find real connections with verified people. It's dating, but safer.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">Why WhatsApp verification?</h3>
                <p className="text-muted-foreground text-sm">
                  WhatsApp verification helps us ensure every user is a real person. 
                  This drastically reduces fake accounts and spam, making your experience better.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">Is Flitch free?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! Browsing profiles, matching, and chatting are completely free. 
                  Premium features will be available soon for those who want extra perks.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">How do matches work?</h3>
                <p className="text-muted-foreground text-sm">
                  When you like someone and they like you back, it's a match! 
                  You'll both be notified and can start chatting right away.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <BottomNav isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default AboutPage;
