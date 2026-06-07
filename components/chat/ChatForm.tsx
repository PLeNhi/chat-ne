import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function ChatForm() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Input placeholder="Type a message..." disabled />
      <Button variant='outline' className='border-secondary' disabled>Send</Button>
    </div>
  );
}
