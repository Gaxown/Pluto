'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Keyboard, MessageSquare, Mic, Search, Settings } from 'lucide-react';
import { useState } from 'react';

interface KeyboardShortcutsModalProps {
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export default function KeyboardShortcutsModal({
    isOpen,
    onOpenChange,
}: KeyboardShortcutsModalProps) {
    const [open, setOpen] = useState(isOpen || false);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
        onOpenChange?.(newOpen);
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button variant="outline">Keyboard Shortcuts</Button>
            </DialogTrigger>
            <DialogContent className="h-[80vh] border-none bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white sm:max-w-[700px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl font-bold">
                        <Keyboard className="h-5 w-5 text-green-400" />
                        Keyboard Shortcuts
                    </DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="navigation" className="w-full">
                    <TabsList className="mb-4 grid grid-cols-5 bg-[#2f3136]">
                        <TabsTrigger
                            value="navigation"
                            className="data-[state=active]:bg-[#5865F2]"
                        >
                            <Search className="mr-2 h-4 w-4" />
                            Navigation
                        </TabsTrigger>
                        <TabsTrigger
                            value="messaging"
                            className="data-[state=active]:bg-[#5865F2]"
                        >
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Messaging
                        </TabsTrigger>
                        <TabsTrigger
                            value="voice"
                            className="data-[state=active]:bg-[#5865F2]"
                        >
                            <Mic className="mr-2 h-4 w-4" />
                            Voice
                        </TabsTrigger>
                        <TabsTrigger
                            value="ui"
                            className="data-[state=active]:bg-[#5865F2]"
                        >
                            <Settings className="mr-2 h-4 w-4" />
                            UI
                        </TabsTrigger>
                        <TabsTrigger
                            value="other"
                            className="data-[state=active]:bg-[#5865F2]"
                        >
                            <Keyboard className="mr-2 h-4 w-4" />
                            Other
                        </TabsTrigger>
                    </TabsList>

                    <div className="h-[calc(80vh-180px)] overflow-y-auto pr-2">
                        <TabsContent value="navigation" className="space-y-4">
                            <div className="rounded-md bg-[#2f3136] p-4">
                                <h3 className="mb-3 text-xs font-medium uppercase text-[#b9bbbe]">
                                    Server & Channel Navigation
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span>Switch to previous server</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Alt
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                ↑
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Switch to next server</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Alt
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                ↓
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Switch to a specific server</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Alt
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                [1-9]
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>
                                            Navigate to previous channel
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Alt
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                ↑
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Navigate to next channel</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Alt
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                ↓
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Navigate to unread channels</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Alt
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                ↑/↓
                                            </kbd>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#2f3136] p-4">
                                <h3 className="mb-3 text-xs font-medium uppercase text-[#b9bbbe]">
                                    Search & Quick Switcher
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span>Open search</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                F
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Open quick switcher</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                K
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Jump to a specific channel</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                A
                                            </kbd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="messaging" className="space-y-4">
                            <div className="rounded-md bg-[#2f3136] p-4">
                                <h3 className="mb-3 text-xs font-medium uppercase text-[#b9bbbe]">
                                    Message Composition
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span>Create new line</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Enter
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Edit last message</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                ↑
                                            </kbd>
                                            <span>(when input is empty)</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Bold text</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                B
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Italic text</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                I
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Underline text</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                U
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Strikethrough text</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                X
                                            </kbd>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-md bg-[#2f3136] p-4">
                                <h3 className="mb-3 text-xs font-medium uppercase text-[#b9bbbe]">
                                    Message Actions
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span>Reply to message</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                R
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Mark as unread</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Esc
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Add reaction</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                +
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Pin message</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                P
                                            </kbd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="voice" className="space-y-4">
                            <div className="rounded-md bg-[#2f3136] p-4">
                                <h3 className="mb-3 text-xs font-medium uppercase text-[#b9bbbe]">
                                    Voice Controls
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span>Mute/Unmute</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                M
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Deafen/Undeafen</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                D
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Push to Talk</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Customizable
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Toggle video</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                V
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Disconnect from voice</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                E
                                            </kbd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="ui" className="space-y-4">
                            <div className="rounded-md bg-[#2f3136] p-4">
                                <h3 className="mb-3 text-xs font-medium uppercase text-[#b9bbbe]">
                                    UI Navigation
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span>Toggle member list</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                U
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Toggle server list</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                S
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Open settings</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                ,
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Open server settings</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                ,
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Toggle dark/light mode</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                L
                                            </kbd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="other" className="space-y-4">
                            <div className="rounded-md bg-[#2f3136] p-4">
                                <h3 className="mb-3 text-xs font-medium uppercase text-[#b9bbbe]">
                                    Miscellaneous
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span>Open help</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                F1
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Open keyboard shortcuts</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Ctrl
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                /
                                            </kbd>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span>Mark server as read</span>
                                        <div className="flex items-center gap-1">
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                Shift
                                            </kbd>
                                            <span>+</span>
                                            <kbd className="rounded bg-[#202225] px-2 py-1 font-mono text-xs">
                                                \
                                            </kbd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}
