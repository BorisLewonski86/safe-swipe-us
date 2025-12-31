import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface AuthPageProps {
  onLoginSuccess: () => void;
}

export function AuthPage({ onLoginSuccess }: AuthPageProps) {
  const [step, setStep] = useState<"phone" | "verify" | "profile">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [preference, setPreference] = useState("");
  const navigate = useNavigate();

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    toast.success("Verification code sent!");
    setStep("verify");
  };

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode.length < 4) {
      toast.error("Please enter the verification code");
      return;
    }
    toast.success("Phone verified!");
    setStep("profile");
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !city || !gender || !preference) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Profile created! Welcome to Flitch!");
    onLoginSuccess();
    navigate("/browse");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-background" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            {step === "phone" && "Enter your phone number"}
            {step === "verify" && "Verify your number"}
            {step === "profile" && "Create your profile"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {step === "phone" && "We'll send you a verification code via WhatsApp"}
            {step === "verify" && "Enter the 6-digit code we sent you"}
            {step === "profile" && "Tell us about yourself"}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center gap-2 mb-8">
          {["phone", "verify", "profile"].map((s, index) => (
            <div
              key={s}
              className={`h-1.5 w-16 rounded-full transition-colors ${
                index <= ["phone", "verify", "profile"].indexOf(step)
                  ? "gradient-hero"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Forms */}
        <div className="bg-card rounded-3xl p-6 shadow-card border border-border">
          {step === "phone" && (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="pl-10 h-12 rounded-xl"
                  />
                </div>
              </div>
              <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                <MessageCircle className="w-5 h-5" />
                Send Code via WhatsApp
              </Button>
            </form>
          )}

          {step === "verify" && (
            <form onSubmit={handleVerifySubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Verification Code
                </label>
                <Input
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  maxLength={6}
                  className="h-12 rounded-xl text-center text-2xl tracking-widest"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Verify
                <ArrowRight className="w-5 h-5" />
              </Button>
              <button
                type="button"
                onClick={() => setStep("phone")}
                className="w-full text-sm text-muted-foreground hover:text-foreground"
              >
                Didn't receive code? Try again
              </button>
            </form>
          )}

          {step === "profile" && (
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="First name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Age
                  </label>
                  <Input
                    type="number"
                    placeholder="25"
                    min="18"
                    max="99"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    City
                  </label>
                  <Input
                    type="text"
                    placeholder="Los Angeles"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  I am a
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Man", "Woman"].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`h-12 rounded-xl border-2 font-medium transition-colors ${
                        gender === g
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Looking for
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Men", "Women"].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPreference(p)}
                      className={`h-12 rounded-xl border-2 font-medium transition-colors ${
                        preference === p
                          ? "border-secondary bg-secondary/10 text-secondary"
                          : "border-border text-muted-foreground hover:border-secondary/50"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit" variant="coral" size="lg" className="w-full">
                Create Profile
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center mt-6">
          By continuing, you agree to our{" "}
          <a href="/terms" className="underline hover:text-foreground">Terms of Service</a>
          {" "}and{" "}
          <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>.
          <br />
          <span className="mt-2 block">Flitch is not affiliated with WhatsApp or Meta.</span>
        </p>
      </motion.div>
    </div>
  );
}

export default AuthPage;
