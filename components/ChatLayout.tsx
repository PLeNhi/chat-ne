'use client';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ChatBubble } from './chat/ChatBubble';
import ChatForm from './chat/ChatForm';
import React from 'react';
import { socketIoContext } from '../providers/socket-client';

export default function ChatLayout() {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState<{ id: number; author: 'user' | 'partner'; text: string }[]>([]);

  const context = React.useContext(socketIoContext);

  if(!context.socketClient) {
    return <div>Loading...</div>;
  }

  const clientSocket = context.socketClient;

  const sendMessage = () => {
    if(message.trim() === "") return;
    console.log("Attempting to send message:", message);
    if (clientSocket && message.trim() !== "") {
      clientSocket.sendMessage(message);
      setMessages((prev) => [...prev, { id: Date.now(), author: 'user', text: message }]);
      setMessage("");
    }
  };

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
        <ChatForm
          isDisabled={message.trim() === "" || !context.connected}
          onMessageChange={setMessage}
          onSendClick={sendMessage}
          message={message}
        />
      </div>
    </Card>
  );
}
