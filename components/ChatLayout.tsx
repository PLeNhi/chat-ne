import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ChatBubble } from './chat/ChatBubble';
import ChatForm from './chat/ChatForm';

export default function ChatLayout() {
  const messages = [
    { id: 1, author: 'partner', text: 'hi' },
    { id: 2, author: 'user', text: "how are you ?" },
    { id: 3, author: 'partner', text: "i'm good" }
  ];

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-white">Realtime chat</h2>
          <Badge>Online</Badge>
        </div>
      </div>

      <div className="min-h-[60vh] space-y-4 overflow-y-auto px-6 py-6">
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            author={message.author as 'user' | 'partner'}
            message={message.text}
          />
        ))}
      </div>

      <div className="border-t border-border px-6 py-5">
        <ChatForm />
      </div>
    </Card>
  );
}
