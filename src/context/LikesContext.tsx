import { createContext, useContext, useState, ReactNode } from "react";
import { Profile } from "@/data/profiles";

interface LikesContextType {
  likedProfiles: Profile[];
  addLike: (profile: Profile) => void;
  removeLike: (profileId: string) => void;
  chatProfiles: Profile[];
  addToChat: (profile: Profile) => void;
}

const LikesContext = createContext<LikesContextType | undefined>(undefined);

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likedProfiles, setLikedProfiles] = useState<Profile[]>([]);
  const [chatProfiles, setChatProfiles] = useState<Profile[]>([]);

  const addLike = (profile: Profile) => {
    setLikedProfiles(prev => {
      if (prev.find(p => p.id === profile.id)) return prev;
      return [...prev, profile];
    });
  };

  const removeLike = (profileId: string) => {
    setLikedProfiles(prev => prev.filter(p => p.id !== profileId));
  };

  const addToChat = (profile: Profile) => {
    setChatProfiles(prev => {
      if (prev.find(p => p.id === profile.id)) return prev;
      return [...prev, profile];
    });
    // Keep profile in likes - user can still view photos
  };

  return (
    <LikesContext.Provider value={{ likedProfiles, addLike, removeLike, chatProfiles, addToChat }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes must be used within a LikesProvider");
  }
  return context;
}
