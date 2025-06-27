import React from 'react';

type MessageProps = {
  text: string;
  sender: 'user' | 'assistant';
};

function Message({ text, sender }: MessageProps) {
  const isUser = sender === 'user';

  return (
    <div className={`w-fit ${isUser ? 'ml-auto' : 'mr-auto'} my-2`}>
    <p
      className={`${
        isUser ? 'bg-blue-400' : 'bg-gray-400'
      } rounded-3xl px-4 py-2 text-white max-w-xs`}
    >
      {text}
    </p>
    </div>
  );
}

export default Message;
