import React from 'react';

interface Member {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'idle' | 'dnd' | 'offline';
  isBot?: boolean;
  role?: 'owner' | 'admin' | 'moderator' | 'member';
  game?: string;
}

interface MemberCategory {
  id: string;
  name: string;
  members: Member[];
}

const MemberList: React.FC = () => {
  // Sample member categories and members (would come from backend in real app)
  const memberCategories: MemberCategory[] = [
    {
      id: '1',
      name: 'ONLINE—3',
      members: [
        { 
          id: 'owner1', 
          name: 'Server Owner', 
          avatar: 'S', 
          status: 'online', 
          role: 'owner',
          game: 'Visual Studio Code'
        },
        { 
          id: 'bot1', 
          name: 'YouBot', 
          avatar: 'Y', 
          status: 'online', 
          isBot: true 
        },
        { 
          id: 'user1', 
          name: 'Active User', 
          avatar: 'A', 
          status: 'online', 
          role: 'moderator'
        },
      ]
    },
    {
      id: '2',
      name: 'OFFLINE—2',
      members: [
        { 
          id: 'user2', 
          name: 'Busy User', 
          avatar: 'B', 
          status: 'offline'
        },
        { 
          id: 'user3', 
          name: 'Away User', 
          avatar: 'C', 
          status: 'offline'
        },
      ]
    }
  ];

  return (
    <div className="w-60 h-full bg-discord-sidebar flex flex-col overflow-hidden">
      {/* Search box */}
      <div className="p-3">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full rounded-md bg-discord-dark px-2 py-1 text-sm text-discord-text-normal placeholder-discord-text-muted focus:outline-none"
          />
          <svg width="16" height="16" className="absolute right-2 top-1/2 -translate-y-1/2 text-discord-text-muted" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Member list */}
      <div className="flex-1 overflow-y-auto px-3 pt-2">
        {memberCategories.map(category => (
          <div key={category.id} className="mb-4">
            <h3 className="px-2 mb-1 text-xs font-semibold text-discord-interactive">
              {category.name}
            </h3>
            <div className="space-y-1">
              {category.members.map(member => (
                <MemberItem key={member.id} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface MemberItemProps {
  member: Member;
}

const MemberItem: React.FC<MemberItemProps> = ({ member }) => {
  // Determine role color
  let roleColor = '';
  if (member.role === 'owner') roleColor = 'text-yellow-300';
  else if (member.role === 'admin') roleColor = 'text-red-400';
  else if (member.role === 'moderator') roleColor = 'text-blue-400';

  // Determine status color and icon
  let statusColor = '';
  let statusRing = '';

  switch (member.status) {
    case 'online':
      statusColor = 'bg-discord-green';
      statusRing = 'border-discord-sidebar';
      break;
    case 'idle':
      statusColor = 'bg-discord-yellow';
      statusRing = 'border-discord-sidebar';
      break;
    case 'dnd':
      statusColor = 'bg-discord-red';
      statusRing = 'border-discord-sidebar';
      break;
    case 'offline':
      statusColor = 'bg-discord-interactive';
      statusRing = 'border-transparent';
      break;
  }

  return (
    <div className="group flex items-center p-1 rounded hover:bg-discord-primary">
      {/* Avatar with status indicator */}
      <div className="relative mr-3">
        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-bold ${member.isBot ? 'bg-discord-accent' : 'bg-discord-secondary'}`}>
          {member.avatar}
        </div>
        {/* Status indicator */}
        <div className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full ${statusColor} border-2 ${statusRing}`}></div>
      </div>

      {/* Member name and additional info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center">
          <span className={`text-sm font-medium truncate ${roleColor || 'text-white'}`}>
            {member.name}
          </span>
          {member.isBot && (
            <span className="ml-1 rounded bg-discord-accent px-1 py-0.5 text-[10px] font-medium text-white">
              BOT
            </span>
          )}
        </div>
        {member.game && (
          <div className="text-xs text-discord-text-muted truncate">
            Playing {member.game}
          </div>
        )}
      </div>

      {/* Action buttons (visible on hover) */}
      <div className="ml-2 opacity-0 group-hover:opacity-100 flex space-x-1">
        <button className="text-discord-interactive hover:text-discord-interactive-hover p-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="text-discord-interactive hover:text-discord-interactive-hover p-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 24C13.6569 24 15 22.6569 15 21C15 19.3431 13.6569 18 12 18C10.3431 18 9 19.3431 9 21C9 22.6569 10.3431 24 12 24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MemberList; 