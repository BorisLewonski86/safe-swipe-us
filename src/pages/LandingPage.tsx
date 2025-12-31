import { motion } from "framer-motion";
import { MessageCircle, Shield, Heart, Users, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Verified Users Only",
      description: "Every profile is verified through WhatsApp, ensuring real people and reducing fake accounts.",
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
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Romantic sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-lg text-background px-4 py-2 rounded-full mb-6 border border-background/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Real people. Real vibes. Real connections.</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-background mb-4 leading-tight">
              Meet real people near you —{" "}
              <span className="bg-gradient-to-r from-coral-light to-purple-light bg-clip-text text-transparent">
                verified with WhatsApp
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-background/90 mb-8 max-w-2xl mx-auto">
              See one photo for free. Unlock full profiles, likes and matches after quick WhatsApp verification.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="whatsapp" 
                size="xl"
                onClick={onGetStarted}
              >
                <MessageCircle className="w-5 h-5" />
                Continue with WhatsApp
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => navigate("/browse")}
              >
                Browse Profiles
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-background/80">
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
          <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-background/50 rounded-full" />
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
                  <feature.icon className="w-7 h-7 text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
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
                <div className="w-12 h-12 rounded-full gradient-hero text-background font-bold text-lg flex items-center justify-center mx-auto mb-4">
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
            className="gradient-hero rounded-3xl p-8 sm:p-12 text-center text-background"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to find your match?
            </h2>
            <p className="text-background/90 mb-8 max-w-xl mx-auto">
              Join over 500,000 verified users and start meeting real people today.
            </p>
            <Button 
              variant="whatsapp" 
              size="xl"
              onClick={onGetStarted}
            >
              <MessageCircle className="w-5 h-5" />
              Get Started Free
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-background" />
              </div>
              <span className="text-lg font-bold">Flitch</span>
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
