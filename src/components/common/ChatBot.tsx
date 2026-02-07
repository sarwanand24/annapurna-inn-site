import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { faqs } from '../../data/misc';

interface Message {
  text: string;
  isBot: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello! How can I help you today?', isBot: true },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);

    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response = "I'm sorry, I don't have information about that. Please contact our staff for assistance.";

      const matchedFaq = faqs.find((faq) =>
        faq.question.toLowerCase().includes(lowerInput) ||
        lowerInput.includes(faq.question.toLowerCase().split(' ').slice(0, 3).join(' '))
      );

      if (matchedFaq) {
        response = matchedFaq.answer;
      } else if (lowerInput.includes('room') || lowerInput.includes('booking')) {
        response = 'You can browse our rooms and make bookings on the Rooms page. We have Deluxe, Suite, Premium, and Family rooms available.';
      } else if (lowerInput.includes('restaurant') || lowerInput.includes('menu') || lowerInput.includes('food')) {
        response = 'Check out our Restaurant page for our full menu. We serve authentic Nepali, North Indian, and Continental cuisine.';
      } else if (lowerInput.includes('loyalty') || lowerInput.includes('points') || lowerInput.includes('reward')) {
        response = 'You earn 1 point for every ₹100 spent. Points can be redeemed for discounts, free services, and upgrades. Visit the Loyalty page to learn more!';
      }

      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    }, 500);

    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 lg:bottom-6 right-6 bg-gradient-gold text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40"
        aria-label="Chat with us"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-44 lg:bottom-24 right-6 w-80 sm:w-96 glass-card rounded-2xl shadow-2xl z-40 animate-scale-in">
          <div className="bg-gradient-gold text-white p-4 rounded-t-2xl">
            <h3 className="font-display text-lg font-bold">Chat Assistant</h3>
            <p className="text-sm text-white/90">Ask me anything!</p>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-gradient-gold text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-gold text-white p-2 rounded-lg hover:shadow-lg transition-all"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
