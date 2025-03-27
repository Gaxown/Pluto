import React, { useState } from 'react';

interface Channel {
  id: string;
  name: string;
  type: 'text' | 'voice' | 'announcement';
  isUnread?: boolean;
  isActive?: boolean;
}

interface ChannelCategory {
  id: string;
  name: string;
  channels: Channel[];
  isCollapsed?: boolean;
}

const ChannelSidebar: React.FC = () => {
  // State for categories (in a real app would come from backend)
  const [categories, setCategories] = useState<ChannelCategory[]>([
    {
      id: '1',
      name: 'INFORMATION',
      channels: [
        { id: '101', name: 'welcome', type: 'text' },
        { id: '102', name: 'announcements', type: 'announcement', isUnread: true },
        { id: '103', name: 'rules', type: 'text' },
      ]
    },
    {
      id: '2',
      name: 'TEXT CHANNELS',
      channels: [
        { id: '201', name: 'general', type: 'text', isActive: true },
        { id: '202', name: 'help', type: 'text' },
        { id: '203', name: 'resources', type: 'text', isUnread: true },
        { id: '204', name: 'showcase', type: 'text' },
      ]
    },
    {
      id: '3',
      name: 'VOICE CHANNELS',
      channels: [
        { id: '301', name: 'General Voice', type: 'voice' },
        { id: '302', name: 'Study Room', type: 'voice' },
        { id: '303', name: 'Music', type: 'voice' },
      ]
    }
  ]);

  // Toggle category collapse
  const toggleCategory = (categoryId: string) => {
    setCategories(prev => 
      prev.map(category => 
        category.id === categoryId 
          ? { ...category, isCollapsed: !category.isCollapsed } 
          : category
      )
    );
  };

  return (
    <div className="flex h-full w-60 flex-col bg-discord-sidebar">
      {/* Server header */}
      <div className="flex h-12 items-center px-4 shadow-md">
        <h1 className="flex-1 font-bold text-white truncate">YouCode Community</h1>
        <button className="text-discord-interactive hover:text-discord-interactive-hover">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Channels area */}
      <div className="flex-1 overflow-y-auto pt-4 px-2">
        {categories.map(category => (
          <div key={category.id} className="mb-4">
            {/* Category header */}
            <button 
              className="flex w-full items-center px-1 mb-1 text-xs font-semibold text-discord-interactive hover:text-discord-interactive-hover"
              onClick={() => toggleCategory(category.id)}
            >
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                className={`mr-1 transition-transform ${category.isCollapsed ? '-rotate-90' : ''}`} 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {category.name}
            </button>

            {/* Channels */}
            {!category.isCollapsed && (
              <div className="space-y-1">
                {category.channels.map(channel => (
                  <ChannelItem key={channel.id} channel={channel} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* User area */}
      <div className="bg-discord-secondary h-[52px] p-2 flex items-center">
        <div className="h-8 w-8 rounded-full bg-discord-accent mr-2 flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-white truncate">Username</div>
          <div className="text-xs text-discord-interactive truncate">#1234</div>
        </div>
        <div className="flex space-x-1 text-discord-interactive">
          <button className="hover:text-discord-interactive-hover p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15V17M6 9H18M6 12H18M6 15H12M3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="hover:text-discord-interactive-hover p-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6V12L16 14M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

interface ChannelItemProps {
  channel: Channel;
}

const ChannelItem: React.FC<ChannelItemProps> = ({ channel }) => {
  let Icon;
  
  // Determine the icon based on channel type
  switch (channel.type) {
    case 'text':
      Icon = (
        <svg width="20" height="20" viewBox="0 0 24 24" className="mr-1 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 7H15M9 11H15M9 15H13M21 20L18 18H5C3.89543 18 3 17.1046 3 16V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      break;
    case 'voice':
      Icon = (
        <svg width="20" height="20" viewBox="0 0 24 24" className="mr-1 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11C16 13.2091 14.2091 15 12 15M12 15C9.79086 15 8 13.2091 8 11M12 15V18M8 18H16M12 8C11.4477 8 11 8.44772 11 9V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V9C13 8.44772 12.5523 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      break;
    case 'announcement':
      Icon = (
        <svg width="20" height="20" viewBox="0 0 24 24" className="mr-1 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V15M18 8H12V14H18V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      break;
  }

  // Determine styles based on channel status
  let className = "group flex items-center rounded px-2 py-1 text-discord-channel-default hover:text-discord-channel-hover hover:bg-discord-primary";
  
  if (channel.isActive) {
    className = "group flex items-center rounded px-2 py-1 text-discord-channel-selected bg-discord-primary";
  } else if (channel.isUnread) {
    className = "group flex items-center rounded px-2 py-1 text-discord-channel-selected font-semibold hover:bg-discord-primary";
  }

  return (
    <button className={className}>
      {Icon}
      <span className="truncate">{channel.name}</span>
      
      {/* Channel actions on hover */}
      <div className="ml-auto hidden space-x-0.5 group-hover:flex">
        <button className="p-1 text-discord-interactive hover:text-discord-interactive-hover">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="p-1 text-discord-interactive hover:text-discord-interactive-hover">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Unread indicator */}
      {channel.isUnread && (
        <div className="ml-auto h-2 w-2 rounded-full bg-white"></div>
      )}
    </button>
  );
};

export default ChannelSidebar; 