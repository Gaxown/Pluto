# Discord Clone Components

This directory contains React components that replicate Discord's UI structure and design while maintaining simplicity.

## Component Structure

### Main Layout
- `DiscordLayout.tsx`: The main layout component that arranges the Discord interface into a four-column structure.

### Core Components
- `ServerSidebar.tsx`: The leftmost sidebar displaying server icons (guilds).
- `ChannelSidebar.tsx`: The second column showing server name, categories, and channels.
- `ChatArea.tsx`: The main central area for messages and interactions.
- `MemberList.tsx`: The rightmost column showing online/offline members.

## Usage

To use the Discord UI in your application, import the main layout:

```tsx
import DiscordLayout from '../Components/Discord/DiscordLayout';

export default function YourPage() {
  return (
    <DiscordLayout>
      {/* Optional content to render inside the chat area */}
    </DiscordLayout>
  );
}
```

## UI Features

These components replicate Discord's core UI features:

- Server listing and navigation
- Channel categorization and collapsible sections
- Real-time chat interface
- Member status indicators
- Message threading and reactions
- User status and activity display

## Customization

The components use Tailwind CSS with Discord-specific color variables defined in the tailwind.config.js file. You can customize the appearance by modifying these color values or extending the component styles.

## Data Structure

Each component includes TypeScript interfaces defining the data structures required. In a production environment, these would be populated with data from your backend API. 