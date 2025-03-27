import DiscordServerModal from '@/components/ui/discord-server-modal';
import React, { useState } from 'react';

interface Server {
  id: string;
  name: string;
  icon: string;
  hasNotification?: boolean;
  hasUnread?: boolean;
  isActive?: boolean;
}

type Items = "Server"

const ServerSidebar: React.FC = () => {
  // Sample data - replace with real data from your backend

  const [clickedItem, setClickedItem] = useState(""); 

  const servers: Server[] = [
    { id: '1', name: 'Home', icon: '🏠', isActive: true },
    { id: '2', name: 'Gaming', icon: '🎮', hasUnread: true },
    { id: '3', name: 'Web Dev', icon: '💻' },
    { id: '4', name: 'Music', icon: '🎵' },
    { id: '5', name: 'Art', icon: '🎨', hasNotification: true },
  ];

  return (
    <div className="flex h-full w-[72px] flex-col bg-discord-dark py-3">
      {/* Home button */}
      <div className="mb-2 px-3">
        <button className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-discord-accent transition-all hover:rounded-lg hover:bg-discord-accent">
          <span className="text-white text-2xl">🏠</span>
        </button>
      </div>

      {/* Server list separator */}
      <div className="mx-auto my-2 h-[2px] w-8 rounded-full bg-discord-sidebar"></div>

      {/* Server list */}
      <div className="flex flex-col items-center space-y-2 overflow-y-auto px-3 scrollbar-thin scrollbar-thumb-discord-secondary">
        {servers.map((server) => (
          <ServerIcon key={server.id} server={server} />
        ))}

        {/* Add Server Button */}

        <DiscordServerModal/>

        {/* Explore Public Servers */}
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-discord-sidebar text-discord-green hover:bg-discord-green hover:text-white transition-all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

interface ServerIconProps {
  server: Server;
}

const ServerIcon: React.FC<ServerIconProps> = ({ server }) => {
  // Determine styles based on server status
  let wrapperClasses = "relative group";
  let iconClasses = "flex h-12 w-12 items-center justify-center rounded-full bg-discord-sidebar transition-all group-hover:rounded-2xl group-hover:bg-discord-accent";
  
  if (server.isActive) {
    wrapperClasses += " before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:h-10 before:w-1 before:rounded-r-full before:bg-white";
    iconClasses = iconClasses.replace("rounded-full", "rounded-2xl").replace("group-hover:rounded-2xl", "group-hover:rounded-[18px]");
  }
  
  return (
    <div className={wrapperClasses}>
      <button className={iconClasses}>
        <span className="text-2xl">{server.icon}</span>
      </button>
      
      {/* Notification indicator */}
      {server.hasNotification && (
        <span className="absolute -right-1 bottom-0 h-5 w-5 rounded-full bg-discord-red text-xs text-white flex items-center justify-center">
          !
        </span>
      )}
      
      {/* Unread indicator */}
      {server.hasUnread && !server.hasNotification && (
        <span className="absolute -left-1 h-2 w-2 rounded-full bg-white"></span>
      )}
      
      {/* Server name tooltip on hover */}
      <div className="absolute left-full ml-3 hidden rounded bg-black px-2 py-1 text-sm text-white group-hover:block z-10">
        {server.name}
      </div>
    </div>
  );
};

export default ServerSidebar; 