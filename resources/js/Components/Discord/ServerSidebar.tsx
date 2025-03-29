import DiscordServerModal from '@/components/ui/discord-server-modal';
import { Server } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Server {
    id: number;
    name: string;
    icon: string;
    description: string;
    owner_id: number;
    created_at: string;
    updated_at: string;
}

type SideBarItems = (typeof Server)['name'];

const ServerSidebar: React.FC = () => {
    const [servers, setServers] = useState<Server[]>([]);
    const [clickedItem, setClickedItem] = useState("");

    useEffect(() => {
        fetch('http://localhost:8000/api/servers')
            .then((response) => response.json())
            .then((data) => setServers(data))
            .catch((error) => console.error(error));
    }, []);

    const handleItemClick = (server_name: string) => {
        setClickedItem(server_name);
    };

    return (
        <div className="flex h-full w-[72px] flex-col bg-discord-dark py-3">
            {/* Home button */}
            <div className="mb-2 px-3">
                <button className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-discord-accent transition-all hover:rounded-lg hover:bg-discord-accent">
                    <span className="text-2xl text-white">🏠</span>
                </button>
            </div>

            {/* Server list separator */}
            <div className="mx-auto my-2 h-[2px] w-8 rounded-full bg-discord-sidebar"></div>

            {/* Server list */}
            <div className="scrollbar-thin scrollbar-thumb-discord-secondary flex flex-col items-center space-y-2 overflow-y-auto px-3">
                {servers.map((server) => (
                    <ServerIcon
                        key={server.id}
                        server={server}
                        onClick={handleItemClick}
                        isActive={clickedItem == server.name}
                    />
                ))}

                {/* Add Server Button */}

                <DiscordServerModal />

                {/* Explore Public Servers */}
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-discord-sidebar text-discord-green transition-all hover:bg-discord-green hover:text-white">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="8"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <path
                            d="M12 8V16M8 12H16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

interface ServerIconProps {
    server: Server;
    hasNotification?: boolean;
    hasUnread?: boolean;
    isActive?: boolean;
    onClick: (clicked: string) => void; // Updated to use string type
}

const ServerIcon: React.FC<ServerIconProps> = (props: ServerIconProps) => {
    // Determine styles based on server status
    let wrapperClasses = 'relative group';
    let iconClasses =
        'flex h-12 w-12 items-center justify-center rounded-full bg-discord-sidebar transition-all group-hover:rounded-2xl group-hover:bg-discord-accent';

    if (props.isActive) {
        wrapperClasses +=
            ' before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:h-10 before:w-1 before:rounded-r-full before:bg-white';
        iconClasses = iconClasses
            .replace('rounded-full', 'rounded-3xl')
            .replace('group-hover:rounded-2xl', 'group-hover:rounded-[18px]');
    }

    const handleClick = () => {
        props.onClick(props.server.name); // Removed type assertion
    };

    return (
        <div className={wrapperClasses} onClick={handleClick}>
            <button className={iconClasses}>
                <img className={iconClasses} src={props.server.icon}></img>
                {/* <span>{props.server.icon}</span> */}
            </button>

            {/* Notification indicator */}
            {props.hasNotification && (
                <span className="absolute -right-1 bottom-0 flex h-5 w-5 items-center justify-center rounded-full bg-discord-red text-xs text-white">
                    !
                </span>
            )}

            {/* Unread indicator */}
            {props.hasUnread && !props.hasNotification && (
                <span className="absolute -left-1 h-2 w-2 rounded-full bg-white"></span>
            )}

            {/* Server name tooltip on hover */}
            <div className="absolute left-full z-10 ml-3 hidden rounded bg-black px-2 py-1 text-sm text-white group-hover:block">
                {props.server.name}
            </div>
        </div>
    );
};

export default ServerSidebar;
