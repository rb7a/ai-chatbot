import { useState } from "react";
import SendIcon from "./Icons/SendIcon";
import Message from "./Message";

// Tipo para los mensajes
type MessageType = {
  text: string;
  sender: "user" | "assistant";
};

const ContainerChat = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // 1. Mostrar mensaje del usuario
    const userMessage = { text: inputValue, sender: "user" as const };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // 2. Fetch a la API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();

      // 3. Mostrar respuesta del bot
      const botMessage = { text: data.reply, sender: "assistant" as const };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        text: "Hubo un error 😓",
        sender: "assistant" as const,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInputValue("");
  };

  return (
    <div className="w-[900px] h-[580px] bg-[#252527] rounded-xl border border-gray-500 relative mx-auto flex flex-col">
      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <Message key={i} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-600 flex items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 text-white bg-gray-700 border-2 border-gray-400/90 py-2 px-3 rounded-lg"
          placeholder="Ask for anything"
        />
        <button onClick={handleSend}>
          <SendIcon class="text-gray-300 w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ContainerChat;
