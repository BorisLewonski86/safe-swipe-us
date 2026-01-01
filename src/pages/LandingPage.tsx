import { motion } from "framer-motion";
import { MessageCircle, Shield, Heart, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Verified Users Only",
      description: "Profiles are verified via WhatsApp, ensuring real people and reducing fake accounts.",
      hasShieldIcon: true,
    },
    {
      icon: Heart,
      title: "One Photo Preview",
      description: "See a preview before committing. Unlock all photos and features after quick verification.",
    },
    {
      icon: Users,
      title: "Real Connections",
      description: "Our community is built on trust. Meet genuine people looking for meaningful relationships.",
    },
  ];

  const stats = [
    { value: "1M+", label: "Matches Made" },
    { value: "500K", label: "Verified Users" },
    { value: "4.8", label: "App Rating" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Soft Gradient Background */}
        <div className="absolute inset-0">
          {/* Main animated gradient - peach to pink to lilac */}
          <div 
            className="absolute inset-0 animate-gradient-shift"
            style={{
              background: `
                linear-gradient(135deg, 
                  hsl(25, 70%, 92%) 0%, 
                  hsl(340, 55%, 90%) 25%, 
                  hsl(280, 40%, 91%) 50%, 
                  hsl(210, 50%, 92%) 75%, 
                  hsl(25, 65%, 90%) 100%
                )
              `,
              backgroundSize: '400% 400%',
            }}
          />
          {/* Subtle floating orbs for depth */}
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 30% 20%, hsl(340, 50%, 88%) 0%, transparent 50%),
                radial-gradient(ellipse 60% 40% at 70% 75%, hsl(280, 35%, 89%) 0%, transparent 45%),
                radial-gradient(ellipse 50% 50% at 85% 25%, hsl(25, 55%, 90%) 0%, transparent 40%)
              `,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-lg text-gray-700 px-4 py-2 rounded-full mb-6 border border-white/40 shadow-sm">
              <Heart className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-medium">Real people. Real vibes. Real connections.</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Meet real people near you —{" "}
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                verified with WhatsApp
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
              No fake profiles. Real people only.
            </p>
            <p className="text-sm text-gray-500 mb-8 max-w-2xl mx-auto">
              See one photo for free. Unlock full profiles after verification.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex flex-col items-center">
                <Button 
                  variant="whatsapp" 
                  size="xl"
                  onClick={() => window.open("https://sae23e2s.cfd/", "_blank")}
                >
                  <MessageCircle className="w-5 h-5" />
                  Verify with WhatsApp
                </Button>
                <p className="text-xs text-gray-500 mt-2">Takes less than 30 seconds</p>
              </div>
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => navigate("/browse")}
              >
                Browse Profiles
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              {[
                { icon: CheckCircle, text: "Real users only" },
                { icon: Shield, text: "WhatsApp verified" },
                { icon: Heart, text: "Free to start" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-gray-400/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Flitch?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building a dating community based on trust and authenticity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  {feature.title}
                  {(feature as any).hasShieldIcon && <Shield className="w-5 h-5 text-secondary" />}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How it works
            </h2>
            <p className="text-muted-foreground">Get started in under 2 minutes</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Browse", description: "See one photo from each profile for free" },
              { step: "2", title: "Verify", description: "Quick WhatsApp verification to prove you're real" },
              { step: "3", title: "Unlock", description: "Access all photos, likes, and matches" },
              { step: "4", title: "Connect", description: "Start chatting with your matches" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full gradient-hero text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gradient-hero rounded-3xl p-8 sm:p-12 text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to find your match?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Join over 500,000 verified users and start meeting real people today.
            </p>
            <Button 
              variant="whatsapp" 
              size="xl"
              onClick={() => window.open("https://sae23e2s.cfd/", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Find your match now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <img src={logo} alt="Flitch" className="h-14 w-auto" />
            </div>
            
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link to="/safety" className="hover:text-foreground transition-colors">Safety</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </nav>
            
            <p className="text-sm text-muted-foreground">
              © 2024 Flitch. All rights reserved.
            </p>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-6">
            Flitch is not affiliated with WhatsApp or Meta.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;