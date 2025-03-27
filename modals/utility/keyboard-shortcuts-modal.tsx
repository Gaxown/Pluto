"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Keyboard, MessageSquare, Search, Settings, Mic } from "lucide-react"

export default function KeyboardShortcutsModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Keyboard Shortcuts</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] h-[80vh] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Keyboard className="h-5 w-5 text-green-400" />
            Keyboard Shortcuts
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="navigation" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4 bg-[#2f3136]">
            <TabsTrigger value="navigation" className="data-[state=active]:bg-[#5865F2]">
              <Search className="h-4 w-4 mr-2" />
              Navigation
            </TabsTrigger>
            <TabsTrigger value="messaging" className="data-[state=active]:bg-[#5865F2]">
              <MessageSquare className="h-4 w-4 mr-2" />
              Messaging
            </TabsTrigger>
            <TabsTrigger value="voice" className="data-[state=active]:bg-[#5865F2]">
              <Mic className="h-4 w-4 mr-2" />
              Voice
            </TabsTrigger>
            <TabsTrigger value="ui" className="data-[state=active]:bg-[#5865F2]">
              <Settings className="h-4 w-4 mr-2" />
              UI
            </TabsTrigger>
            <TabsTrigger value="other" className="data-[state=active]:bg-[#5865F2]">
              <Keyboard className="h-4 w-4 mr-2" />
              Other
            </TabsTrigger>
          </TabsList>
          
          <div className="h-[calc(80vh-180px)] overflow-y-auto pr-2">
            <TabsContent value="navigation" className="space-y-4">
              <div className="bg-[#2f3136] p-4 rounded-md">
                <h3 className="font-medium mb-3 text-[#b9bbbe] uppercase text-xs">Server & Channel Navigation</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Switch to previous server</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Alt</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">↑</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Switch to next server</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Alt</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">↓</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Switch to a specific server</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Alt</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">[1-9]</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Navigate to previous channel</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Alt</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">↑</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Navigate to next channel</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Alt</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">↓</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Navigate to unread channels</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Alt</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">↑/↓</kbd>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#2f3136] p-4 rounded-md">
                <h3 className="font-medium mb-3 text-[#b9bbbe] uppercase text-xs">Search & Quick Switcher</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Open search</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">F</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Open quick switcher</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">K</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Jump to a specific channel</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">A</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="messaging" className="space-y-4">
              <div className="bg-[#2f3136] p-4 rounded-md">
                <h3 className="font-medium mb-3 text-[#b9bbbe] uppercase text-xs">Message Composition</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Create new line</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Enter</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Edit last message</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">↑</kbd>
                      <span>(when input is empty)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Bold text</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">B</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Italic text</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">I</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Underline text</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">U</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Strikethrough text</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">X</kbd>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#2f3136] p-4 rounded-md">
                <h3 className="font-medium mb-3 text-[#b9bbbe] uppercase text-xs">Message Actions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Reply to message</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">R</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Mark as unread</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Esc</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Add reaction</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">+</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Pin message</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">P</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="voice" className="space-y-4">
              <div className="bg-[#2f3136] p-4 rounded-md">
                <h3 className="font-medium mb-3 text-[#b9bbbe] uppercase text-xs">Voice Controls</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Mute/Unmute</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">M</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Deafen/Undeafen</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">D</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Push to Talk</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Customizable</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Toggle video</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">V</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Disconnect from voice</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">E</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ui" className="space-y-4">
              <div className="bg-[#2f3136] p-4 rounded-md">
                <h3 className="font-medium mb-3 text-[#b9bbbe] uppercase text-xs">UI Navigation</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Toggle member list</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">U</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Toggle server list</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">S</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Open settings</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">,</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Open server settings</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">,</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Toggle dark/light mode</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">L</kbd>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="other" className="space-y-4">
              <div className="bg-[#2f3136] p-4 rounded-md">
                <h3 className="font-medium mb-3 text-[#b9bbbe] uppercase text-xs">Miscellaneous</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Open help</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">F1</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Open keyboard shortcuts</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Ctrl</kbd>
                      <span>+</span>
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">/</kbd>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Mark server as read</span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-[#202225] rounded text-xs font-mono">Shift</kbd>
                      \

