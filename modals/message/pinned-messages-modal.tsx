"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pin, Search, Trash2, MessageSquare, ArrowRight, User, Hash } from "lucide-react"

export default function PinnedMessagesModal() {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const pinnedMessages = [
    {
      id: 1,
      author: "John Doe",
      avatar: "JD",
      content: "Welcome to the server! Please read the rules in #rules channel.",
      timestamp: "2023-10-15T14:30:00",
      channel: "general",
    },
    {
      id: 2,
      author: "Jane Smith",
      avatar: "JS",
      content: "Here's the link to our community resources: https://example.com/resources",
      timestamp: "2023-10-20T09:15:00",
      channel: "resources",
    },
    {
      id: 3,
      author: "Alex Johnson",
      avatar: "AJ",
      content: "Next community event will be on November 5th at 7PM EST!",
      timestamp: "2023-10-25T18:45:00",
      channel: "events",
    },
    {
      id: 4,
      author: "Server Bot",
      avatar: "SB",
      content: "Server will be undergoing maintenance on October 30th from 2AM to 4AM EST.",
      timestamp: "2023-10-28T12:00:00",
      channel: "announcements",
    },
  ]

  const filteredMessages = pinnedMessages.filter(
    (message) =>
      message.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.channel.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Pinned Messages</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[80vh] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Pin className="h-5 w-5 text-yellow-400" />
            Pinned Messages
          </DialogTitle>
        </DialogHeader>

        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#b9bbbe]" />
          <Input
            placeholder="Search pinned messages"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-[#202225] border-none text-white"
          />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4 bg-[#2f3136]">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#5865F2]">
              <MessageSquare className="h-4 w-4 mr-2" />
              All
            </TabsTrigger>
            <TabsTrigger value="general" className="data-[state=active]:bg-[#5865F2]">
              <Hash className="h-4 w-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-[#5865F2]">
              <ArrowRight className="h-4 w-4 mr-2" />
              Resources
            </TabsTrigger>
            <TabsTrigger value="announcements" className="data-[state=active]:bg-[#5865F2]">
              <User className="h-4 w-4 mr-2" />
              Announcements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="h-[calc(80vh-180px)] overflow-y-auto">
            <div className="space-y-4">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((message) => (
                  <div key={message.id} className="bg-[#2f3136] p-4 rounded-md relative group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold">{message.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{message.author}</span>
                          <span className="text-xs text-[#b9bbbe]">{formatDate(message.timestamp)}</span>
                          <div className="flex items-center gap-1 text-xs text-[#b9bbbe] bg-[#36393f] px-2 py-0.5 rounded">
                            <Hash className="h-3 w-3" />
                            {message.channel}
                          </div>
                        </div>
                        <div className="mt-1">{message.content}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-transparent hover:bg-[#4f545c] opacity-0 group-hover:opacity-100 absolute top-2 right-2"
                      >
                        <Trash2 className="h-4 w-4 text-[#b9bbbe] hover:text-[#f23f42]" />
                        <span className="sr-only">Unpin message</span>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <Pin className="h-16 w-16 text-[#b9bbbe] mb-4" />
                  <h3 className="text-lg font-medium">No pinned messages found</h3>
                  <p className="text-[#b9bbbe] mt-2">
                    {searchTerm ? "Try a different search term" : "Pin important messages to find them easily later"}
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="general" className="h-[calc(80vh-180px)] overflow-y-auto">
            <div className="space-y-4">
              {filteredMessages
                .filter((message) => message.channel === "general")
                .map((message) => (
                  <div key={message.id} className="bg-[#2f3136] p-4 rounded-md relative group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold">{message.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{message.author}</span>
                          <span className="text-xs text-[#b9bbbe]">{formatDate(message.timestamp)}</span>
                        </div>
                        <div className="mt-1">{message.content}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-transparent hover:bg-[#4f545c] opacity-0 group-hover:opacity-100 absolute top-2 right-2"
                      >
                        <Trash2 className="h-4 w-4 text-[#b9bbbe] hover:text-[#f23f42]" />
                        <span className="sr-only">Unpin message</span>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="h-[calc(80vh-180px)] overflow-y-auto">
            <div className="space-y-4">
              {filteredMessages
                .filter((message) => message.channel === "resources")
                .map((message) => (
                  <div key={message.id} className="bg-[#2f3136] p-4 rounded-md relative group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold">{message.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{message.author}</span>
                          <span className="text-xs text-[#b9bbbe]">{formatDate(message.timestamp)}</span>
                        </div>
                        <div className="mt-1">{message.content}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-transparent hover:bg-[#4f545c] opacity-0 group-hover:opacity-100 absolute top-2 right-2"
                      >
                        <Trash2 className="h-4 w-4 text-[#b9bbbe] hover:text-[#f23f42]" />
                        <span className="sr-only">Unpin message</span>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="announcements" className="h-[calc(80vh-180px)] overflow-y-auto">
            <div className="space-y-4">
              {filteredMessages
                .filter((message) => message.channel === "announcements")
                .map((message) => (
                  <div key={message.id} className="bg-[#2f3136] p-4 rounded-md relative group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold">{message.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{message.author}</span>
                          <span className="text-xs text-[#b9bbbe]">{formatDate(message.timestamp)}</span>
                        </div>
                        <div className="mt-1">{message.content}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-transparent hover:bg-[#4f545c] opacity-0 group-hover:opacity-100 absolute top-2 right-2"
                      >
                        <Trash2 className="h-4 w-4 text-[#b9bbbe] hover:text-[#f23f42]" />
                        <span className="sr-only">Unpin message</span>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

