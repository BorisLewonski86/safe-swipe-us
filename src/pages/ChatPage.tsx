import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { MessageCircle, Send, ArrowLeft, Verified, Phone, Video, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockProfiles } from "@/data/profiles";

interface ChatPageProps {
  isLoggedIn: boolean;
  onLogin: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: "me" | "them";
  timestamp: string;
}

export function ChatPage({ isLoggedIn, onLogin }: ChatPageProps) {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hey! I saw you like hiking too 🏔️", sender: "them", timestamp: "2:30 PM" },
    { id: "2", text: "Yes! I love it. Have you been to Joshua Tree?", sender: "me", timestamp: "2:32 PM" },
    { id: "3", text: "Not yet but it's on my list! Want to go together sometime?", sender: "them", timestamp: "2:33 PM" },
  ]);

  const chats = mockProfiles.slice(0, 4);
  const selectedProfile = chats.find(c => c.id === selectedChat);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text: newMessage,
      sender: "me",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setNewMessage("");
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
              <MessageCircle className="w-10 h-10 text-background" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Start chatting</h2>
            <p className="text-muted-foreground mb-6">
              Verify with WhatsApp to message your matches.
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

  // Chat conversation view
  if (selectedChat && selectedProfile) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Chat Header */}
        <div className="bg-card border-b border-border px-4 py-3 flex items-center gap-3 safe-area-pt">
          <button onClick={() => setSelectedChat(null)} className="p-1">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <img
            src={selectedProfile.photos[0]}
            alt={selectedProfile.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <h2 className="font-semibold text-foreground">{selectedProfile.name}</h2>
              {selectedProfile.verified && <Verified className="w-4 h-4 text-secondary fill-secondary" />}
            </div>
            <p className="text-xs text-green-500">Online</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-muted-foreground hover:text-foreground">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                  message.sender === "me"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                }`}
              >
                <p>{message.text}</p>
                <p className={`text-xs mt-1 ${message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {message.timestamp}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSend} className="bg-card border-t border-border p-4 safe-area-pb">
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 h-12 rounded-full"
            />
            <Button type="submit" variant="coral" size="icon" className="rounded-full w-12 h-12">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </div>
    );
  }

  // Chat list view
  return (
    <div className="min-h-screen bg-muted">
      <Header isLoggedIn={isLoggedIn} onLogin={onLogin} />
      
      <main className="pt-20 pb-24 px-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-2">Messages</h1>
          <p className="text-sm text-muted-foreground mb-6">Your conversations</p>

          <div className="space-y-2">
            {chats.map((chat, index) => (
              <motion.div
                key={chat.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedChat(chat.id)}
                className="bg-card rounded-2xl p-4 shadow-soft border border-border flex items-center gap-4 cursor-pointer hover:shadow-card transition-shadow"
              >
                <div className="relative">
                  <img
                    src={chat.photos[0]}
                    alt={chat.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  {index === 0 && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold text-foreground">{chat.name}</h3>
                      {chat.verified && <Verified className="w-4 h-4 text-secondary fill-secondary" />}
                    </div>
                    <span className="text-xs text-muted-foreground">2:33 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {index === 0 ? "Want to go together sometime?" : "Tap to start chatting"}
                  </p>
                </div>
                {index === 0 && (
                  <div className="w-2 h-2 bg-primary rounded-full" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <BottomNav isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default ChatPage;
