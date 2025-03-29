import ServerSidebar from '@/Components/Discord/ServerSidebar';
import React from 'react';
import MainContent from './MainContent';

interface DiscordLayoutProps {
    children?: React.ReactNode;
}

const DiscordLayout: React.FC<DiscordLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-discord-dark text-white">
            {/* Server sidebar - leftmost column */}
            <ServerSidebar />

            <MainContent>{children}</MainContent>
        </div>
    );
};

export default DiscordLayout;
