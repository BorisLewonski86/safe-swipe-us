import { motion } from "framer-motion";
import { User, Users } from "lucide-react";

interface GenderSelectorProps {
  onSelect: (gender: "male" | "female") => void;
}

export function GenderSelector({ onSelect }: GenderSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-sm mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Who are you looking for?</h2>
        <p className="text-muted-foreground">Choose to see profiles</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect("female")}
          className="aspect-square rounded-3xl bg-gradient-to-br from-pink-400 to-rose-500 p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Women</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect("male")}
          className="aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-indigo-500 p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Men</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
