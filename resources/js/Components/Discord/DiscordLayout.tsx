import React from 'react';
import ServerSidebar from '@/Components/Discord/ServerSidebar';
import ChannelSidebar from '@/Components/Discord/ChannelSidebar';
import ChatArea from '@/Components/Discord/ChatArea';
import MemberList from '@/Components/Discord/MemberList';

interface DiscordLayoutProps {
  children?: React.ReactNode;
}

const DiscordLayout: React.FC<DiscordLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-discord-dark text-white">
      {/* Server sidebar - leftmost column */}
      <ServerSidebar />
      
      {/* Channel sidebar - middle left column */}
      <ChannelSidebar />
      
      {/* Main chat area - largest right section */}
      <ChatArea>
        {children}
      </ChatArea>

      {/* Member list - rightmost column */}
      <MemberList />
    </div>
  );
};

export default DiscordLayout; 