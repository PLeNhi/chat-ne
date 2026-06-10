import { Button } from '../ui/button';
import { Input } from '../ui/input';

type Props = {
  onMessageChange?: (message: string) => void;
  onSendClick?: () => void;
  isDisabled: boolean;
  message?: string;
};

export default function ChatForm(props: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Input 
        placeholder="Type a message..." 
        onChange={(e) => props.onMessageChange?.(e.target.value)} 
        onKeyDown={(e) => e.key === 'Enter' && props.onSendClick?.()} 
        value={props.message}
      />
      <Button variant={props.isDisabled ? 'ghost' : 'default'} className='border-secondary' onClick={props.onSendClick} disabled={props.isDisabled}>
        Send
      </Button>
    </div>
  );
}
