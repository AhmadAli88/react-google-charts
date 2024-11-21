import { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { css } from '@emotion/css'; // Corrected import

const ROOT_CSS = css({
  height: 400,  // Fixed height for the container
  width: 300,   // Fixed width for the container
  overflowY: 'auto',  // Enable vertical scrolling
});

const ChatApp = () => {
  const [messages, setMessages] = useState([
    'Hello!',
    'How are you?',
    'Hello!',
    'How are you?',
    'What’s up?',
    'React is awesome!',
    'Scrolling to bottom is cool!',
    'Have a great day!',
    'Hello!',
    'How are you?',
    'Hello!',
    'How are you?',
  ]);

  useEffect(() => {
    // Simulate receiving new messages after a delay
    const interval = setInterval(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        `New message #${prevMessages.length + 1}`,
      ]);
    }, 3000); // Add a new message every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, []);

  return (
    <div>
      {/* ScrollToBottom with styling */}
      <ScrollToBottom className={ROOT_CSS}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {messages.map((msg, index) => (
            <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              {msg}
            </li>
          ))}
        </ul>
      </ScrollToBottom>
    </div>
  );
};

export default ChatApp;
