import ChannelSidebar from '@/Components/Discord/ChannelSidebar';
import ChatArea from '@/Components/Discord/ChatArea';
import MemberList from '@/Components/Discord/MemberList';
import React from 'react';

interface DiscordLayoutProps {
    children?: React.ReactNode;
}

const MainContent: React.FC<DiscordLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-discord-dark text-white">
            <ChannelSidebar />

            {/* Main chat area - largest right section */}
            <ChatArea>{children}</ChatArea>

            {/* Member list - rightmost column */}
            <MemberList />
        </div>
    );
};
export default MainContent;
