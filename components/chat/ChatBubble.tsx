import { cn } from '../../lib/utils';

type ChatBubbleProps = {
  message: string;
  author: 'user' | 'partner';
};

export function ChatBubble({ message, author }: ChatBubbleProps) {
  const isUser = author === 'user';

  return (
    <div
      className={cn(
        'max-w-[65%] w-fit bg-primary rounded-md px-4 py-3 text-sm shadow-sm',
        isUser
          ? 'ml-auto bg-secondary text-primary-foreground shadow-primary/20'
          : 'bg-secondary text-slate-100 shadow-black/20'
      )}
    >
      {message}
    </div>
  );
}
