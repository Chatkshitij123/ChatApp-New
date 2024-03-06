import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [chats, setChats] = useState([]); // Ensure chats is initialized as an array
  const [loading, setLoading] = useState(true);

  const fetchChats = async () => {
    try {
      const response = await axios.get('/api/chat');
      const data = response.data; // Assuming the array is directly in response.data
      console.log('Data from API:', data); // Log the data to check its structure
      setChats(data);
    } catch (error) {
      console.error('Error fetching chats:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  // Add a guard clause to check if chats is undefined before mapping
  if (loading || chats === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
