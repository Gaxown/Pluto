"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Hash, AtSign } from "lucide-react"

interface Message {
  id: string
  server: {
    name: string
    icon: string
  }
  channel: {
    name: string
    icon?: string
  }
  author: {
    name: string
    avatar: string
  }
  content: string
  mentions: string[]
  timestamp: string
}

export default function DiscordInbox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      server: {
        name: "Megabox",
        icon: "MB",
      },
      channel: {
        name: "Code Chat 1",
        icon: "hash",
      },
      author: {
        name: "Gaxown",
        avatar: "G",
      },
      content: "What is up ??",
      mentions: ["Brahim", "Ayoub"],
      timestamp: "Today at 12:45",
    },
    {
      id: "2",
      server: {
        name: "Friends of Figma Discord!",
        icon: "FF",
      },
      channel: {
        name: "👋 general",
        icon: "wave",
      },
      author: {
        name: "✧･ﾟ: *✧･ﾟ:* TEst *:･ﾟ✧*:･ﾟ✧",
        avatar: "T",
      },
      content: "Welcome this is! 🙂",
      mentions: ["simo"],
      timestamp: "Today at 12:45",
    },
  ])

  const [unreadCount, setUnreadCount] = useState(5)

  const dismissMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id))
  }

  const clearAll = () => {
    setMessages([])
    setUnreadCount(0)
  }

  return (
    <div className="w-full max-w-md mx-auto bg-[#2e3136] rounded-lg overflow-hidden">
      <div className="p-4 flex items-center justify-between border-b border-[#42464d]">
        <h2 className="text-2xl font-bold text-white">Inbox</h2>
        <Button variant="outline" className="bg-[#4f545c] hover:bg-[#5d6269] text-white border-none" onClick={clearAll}>
          Clear All
        </Button>
      </div>

      <div className="p-2 space-y-2">
        {messages.map((message) => (
          <div key={message.id} className="bg-[#36393f] rounded-md p-3 relative group">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#7289da] flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-white">{message.server.icon}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-1">
                  <Hash className="h-4 w-4 text-[#b9bbbe]" />
                  <span className="font-semibold text-white">{message.channel.name}</span>
                </div>
                <div className="text-[#b9bbbe] text-sm">{message.server.name}</div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-transparent hover:bg-[#4f545c]"
                onClick={() => dismissMessage(message.id)}
              >
                <X className="h-4 w-4 text-[#b9bbbe]" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </div>

            <div className="mt-3 pl-12">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">{message.author.avatar}</span>
                </div>
                <span className="font-semibold text-blue-400">{message.author.name}</span>
                <span className="text-xs text-[#b9bbbe]">{message.timestamp}</span>
              </div>

              <div className="text-white">
                {message.mentions.length > 0 && (
                  <>
                    {message.mentions.map((mention, index) => (
                      <span key={index} className="bg-[#5865F2]/20 text-[#5865F2] rounded px-1 mr-1">
                        <AtSign className="h-3 w-3 inline" />
                        {mention}
                      </span>
                    ))}{" "}
                  </>
                )}
                {message.content}
              </div>
            </div>
          </div>
        ))}

        {messages.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-[#b9bbbe]">Your inbox is empty</p>
          </div>
        ) : (
          <div className="py-4 flex justify-center">
            <Button variant="outline" className="bg-[#4f545c] hover:bg-[#5d6269] text-white border-none">
              {unreadCount} more unread
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

