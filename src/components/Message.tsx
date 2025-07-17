import React from 'react';

type MessageProps = {
  text: string;
  sender: 'user' | 'assistant';
};

function Message({ text, sender }: MessageProps) {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in`}>
      <div className={`max-w-[75%] ${isUser ? 'order-2' : 'order-1'}`}>
        {!isUser && (
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-xs font-semibold text-white mr-2">
              AI
            </div>
            <span className="text-xs text-gray-400">SimpleAI</span>
          </div>
        )}
        <div
          className={`
            px-4 py-3 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]
            ${isUser 
              ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-md' 
              : 'bg-gray-800 text-gray-100 border border-gray-700 rounded-bl-md'
            }
          `}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {text}
          </p>
        </div>
        {isUser && (
          <div className="flex justify-end mt-1">
            <span className="text-xs text-gray-500">Tú</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;
