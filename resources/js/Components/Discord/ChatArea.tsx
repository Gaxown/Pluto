import React, { useState } from 'react';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    isBot?: boolean;
  };
  reactions?: Array<{
    emoji: string;
    count: number;
    reacted?: boolean;
  }>;
  attachments?: Array<{
    id: string;
    type: 'image' | 'file';
    url: string;
    name: string;
  }>;
}

interface ChatAreaProps {
  children?: React.ReactNode;
}

const ChatArea: React.FC<ChatAreaProps> = ({ children }) => {
  // Sample messages - in a real app would come from backend
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Welcome to the YouCode community server! 👋',
      timestamp: '2023-12-15T12:00:00Z',
      author: {
        id: 'bot1',
        name: 'YouBot',
        avatar: 'Y',
        isBot: true
      },
      reactions: [
        { emoji: '👋', count: 5, reacted: true },
        { emoji: '❤️', count: 3 }
      ]
    },
    {
      id: '2',
      content: 'Hi everyone! I just joined. Excited to be part of this community!',
      timestamp: '2023-12-15T12:05:00Z',
      author: {
        id: 'user1',
        name: 'Alice',
        avatar: 'A'
      }
    },
    {
      id: '3',
      content: 'Welcome Alice! Make sure to check out the #resources channel for helpful materials.',
      timestamp: '2023-12-15T12:08:00Z',
      author: {
        id: 'user2',
        name: 'Bob',
        avatar: 'B'
      }
    },
    {
      id: '4',
      content: 'Has anyone worked with Tailwind CSS before? I need some help with configuration.',
      timestamp: '2023-12-15T12:15:00Z',
      author: {
        id: 'user1',
        name: 'Alice',
        avatar: 'A'
      }
    },
    {
      id: '5',
      content: 'I\'ve been using Tailwind for a while now. What specifically do you need help with?',
      timestamp: '2023-12-15T12:20:00Z',
      author: {
        id: 'user3',
        name: 'Charlie',
        avatar: 'C'
      }
    },
    {
      id: '6',
      content: 'I just pushed some code samples for common Tailwind patterns to the repository. Check it out!',
      timestamp: '2023-12-15T12:30:00Z',
      author: {
        id: 'user3',
        name: 'Charlie',
        avatar: 'C'
      },
      attachments: [
        {
          id: 'file1',
          type: 'file',
          url: '#',
          name: 'tailwind-examples.zip'
        }
      ]
    }
  ]);

  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    
    // Add new message
    const newMessage: Message = {
      id: Date.now().toString(),
      content: messageInput,
      timestamp: new Date().toISOString(),
      author: {
        id: 'currentUser',
        name: 'You',
        avatar: 'U'
      }
    };
    
    setMessages([...messages, newMessage]);
    setMessageInput('');
  };

  return (
    <div className="flex flex-1 flex-col h-full bg-discord-primary">
      {/* Channel header */}
      <div className="flex h-12 items-center px-4 shadow-md z-10">
        <div className="flex items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2 text-discord-interactive" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 7H15M9 11H15M9 15H13M21 20L18 18H5C3.89543 18 3 17.1046 3 16V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="font-medium text-white">general</h2>
        </div>

        <div className="ml-auto flex items-center space-x-4 text-discord-interactive">
          <button className="hover:text-discord-interactive-hover">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="hover:text-discord-interactive-hover">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 9C17 12.866 13.866 16 10 16C6.13401 16 3 12.866 3 9C3 5.13401 6.13401 2 10 2C13.866 2 17 5.13401 17 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 9H21M21 9V13M21 9L19 7M15 15L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="hover:text-discord-interactive-hover">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 24C13.6569 24 15 22.6569 15 21C15 19.3431 13.6569 18 12 18C10.3431 18 9 19.3431 9 21C9 22.6569 10.3431 24 12 24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-40 rounded-md bg-discord-dark px-2 py-1 text-sm text-discord-text-normal placeholder-discord-text-muted focus:outline-none"
            />
            <svg width="16" height="16" className="absolute right-2 top-1/2 -translate-y-1/2 text-discord-text-muted" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <button className="hover:text-discord-interactive-hover">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main chat content */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <MessageItem 
            key={message.id} 
            message={message} 
            showAuthor={index === 0 || messages[index-1].author.id !== message.author.id} 
          />
        ))}
      </div>

      {/* Message input */}
      <div className="p-4">
        <div className="rounded-lg bg-discord-sidebar p-4">
          <div className="flex items-center space-x-2">
            <button className="text-discord-interactive hover:text-discord-interactive-hover">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V5M12 5H8M12 5H16M19 12V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V12M3 8H21V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="text-discord-interactive hover:text-discord-interactive-hover">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9998 12C14.9998 13.6569 13.6566 15 11.9998 15C10.3429 15 8.99976 13.6569 8.99976 12C8.99976 10.3431 10.3429 9 11.9998 9C13.6566 9 14.9998 10.3431 14.9998 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.45801 12.9326C3.73228 16.8199 7.52257 19.5 12.0002 19.5C16.4778 19.5 20.2681 16.8199 21.5424 12.9326C21.6206 12.6747 21.6206 12.3753 21.5424 12.1174C20.2681 8.23012 16.4778 5.55005 12.0002 5.55005C7.52257 5.55005 3.73228 8.23012 2.45801 12.1174C2.37978 12.3753 2.37978 12.6747 2.45801 12.9326Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <input
              type="text"
              className="flex-1 bg-transparent text-discord-text-normal focus:outline-none"
              placeholder="Message #general"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className="text-discord-interactive hover:text-discord-interactive-hover">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8284 15.8284C14.4379 15.4379 14.4379 14.8047 14.8284 14.4142C15.2189 14.0237 15.8521 14.0237 16.2426 14.4142L18.8284 17C19.219 17.3905 19.219 18.0237 18.8284 18.4142L16.2426 21C15.8521 21.3905 15.2189 21.3905 14.8284 21C14.4379 20.6095 14.4379 19.9763 14.8284 19.5858L16.4142 18L14.8284 16.4142C14.4379 16.0237 14.4379 15.3905 14.8284 15L14.8284 15.8284ZM9.17157 14.4142C9.56209 14.0237 9.56209 14.8047 9.17157 15.1953L9.17157 14.4142ZM9.17157 14.4142C8.78105 14.8047 8.78105 15.4379 9.17157 15.8284L7.58579 17.4142L9.17157 19C9.56209 19.3905 9.56209 20.0237 9.17157 20.4142C8.78105 20.8047 8.14788 20.8047 7.75736 20.4142L5.17157 17.8284C4.78105 17.4379 4.78105 16.8047 5.17157 16.4142L7.75736 13.8284C8.14788 13.4379 8.78105 13.4379 9.17157 13.8284C9.56209 14.2189 9.56209 14.8521 9.17157 15.2426L9.17157 14.4142Z" fill="currentColor"/>
                <path d="M7.75674 21L16.2426 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="text-discord-interactive hover:text-discord-interactive-hover">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16.5V16.5C12.5523 16.5 13 16.9477 13 17.5V18.5C13 19.0523 12.5523 19.5 12 19.5V19.5C11.4477 19.5 11 19.0523 11 18.5V17.5C11 16.9477 11.4477 16.5 12 16.5Z" fill="currentColor"/>
                <path d="M13 13L12 13.5V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.10294 4.20106C9.0229 3.13304 10.4217 2.49579 12.0879 2.5C16.0208 2.5 17.9826 6.99985 15.2412 9.41431L11 13V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="rounded-full bg-discord-accent px-3 py-1.5 text-sm font-medium text-white hover:bg-opacity-80"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Optional content passed as children */}
      {children}
    </div>
  );
};

interface MessageItemProps {
  message: Message;
  showAuthor: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, showAuthor }) => {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString([], { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className={`group mb-4 ${showAuthor ? 'mt-4' : 'mt-0.5'}`}>
      {showAuthor && (
        <div className="flex items-start mb-1">
          <div className="mr-4 h-10 w-10 flex-shrink-0 rounded-full bg-discord-accent flex items-center justify-center text-white font-bold">
            {message.author.avatar}
          </div>
          <div>
            <div className="flex items-center">
              <span className="font-medium text-white">
                {message.author.name}
              </span>
              {message.author.isBot && (
                <span className="ml-2 rounded bg-discord-accent px-1.5 py-0.5 text-xs font-medium text-white">
                  BOT
                </span>
              )}
              <span className="ml-2 text-xs text-discord-text-muted">
                {formatTime(message.timestamp)}
              </span>
            </div>
            <div className="text-discord-text-normal">
              {message.content}
            </div>
            
            {/* Attachments */}
            {message.attachments && message.attachments.length > 0 && (
              <div className="mt-2 space-y-2">
                {message.attachments.map(attachment => (
                  <div key={attachment.id} className="rounded-md border border-discord-secondary bg-discord-sidebar p-3 inline-block">
                    {attachment.type === 'image' ? (
                      <img src={attachment.url} alt={attachment.name} className="max-h-60 rounded" />
                    ) : (
                      <div className="flex items-center">
                        <svg width="24" height="24" className="mr-2 text-discord-interactive" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-discord-interactive">{attachment.name}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {/* Reactions */}
            {message.reactions && message.reactions.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {message.reactions.map((reaction, index) => (
                  <button 
                    key={index} 
                    className={`flex items-center rounded-full border px-2 py-0.5 text-sm ${
                      reaction.reacted 
                        ? 'border-discord-interactive bg-discord-primary text-discord-interactive' 
                        : 'border-discord-secondary bg-discord-sidebar text-discord-interactive hover:bg-discord-primary'
                    }`}
                  >
                    <span className="mr-1">{reaction.emoji}</span>
                    <span>{reaction.count}</span>
                  </button>
                ))}
                <button className="flex items-center rounded-full border border-discord-secondary bg-discord-sidebar px-2 py-0.5 text-sm text-discord-interactive opacity-0 transition-opacity group-hover:opacity-100 hover:bg-discord-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Condensed message (no author shown) */}
      {!showAuthor && (
        <div className="flex items-start pl-14">
          <span className="text-xs text-discord-text-muted opacity-0 transition-opacity group-hover:opacity-100">
            {formatTime(message.timestamp)}
          </span>
          <div className="ml-2 text-discord-text-normal">
            {message.content}
            
            {/* Attachments */}
            {message.attachments && message.attachments.length > 0 && (
              <div className="mt-2 space-y-2">
                {message.attachments.map(attachment => (
                  <div key={attachment.id} className="rounded-md border border-discord-secondary bg-discord-sidebar p-3 inline-block">
                    {attachment.type === 'image' ? (
                      <img src={attachment.url} alt={attachment.name} className="max-h-60 rounded" />
                    ) : (
                      <div className="flex items-center">
                        <svg width="24" height="24" className="mr-2 text-discord-interactive" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-discord-interactive">{attachment.name}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {/* Reactions */}
            {message.reactions && message.reactions.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {message.reactions.map((reaction, index) => (
                  <button 
                    key={index} 
                    className={`flex items-center rounded-full border px-2 py-0.5 text-sm ${
                      reaction.reacted 
                        ? 'border-discord-interactive bg-discord-primary text-discord-interactive' 
                        : 'border-discord-secondary bg-discord-sidebar text-discord-interactive hover:bg-discord-primary'
                    }`}
                  >
                    <span className="mr-1">{reaction.emoji}</span>
                    <span>{reaction.count}</span>
                  </button>
                ))}
                <button className="flex items-center rounded-full border border-discord-secondary bg-discord-sidebar px-2 py-0.5 text-sm text-discord-interactive opacity-0 transition-opacity group-hover:opacity-100 hover:bg-discord-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatArea; 