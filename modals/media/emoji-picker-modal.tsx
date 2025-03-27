import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Smile, Clock, Flag, User, Heart, ThumbsUp, Coffee, Zap, Sparkles } from "lucide-react"

export default function EmojiPickerModal() {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  // Sample emoji categories and emojis
  const categories = [
    { id: "recent", name: "Recent", icon: <Clock className="h-4 w-4" /> },
    { id: "people", name: "People", icon: <User className="h-4 w-4" /> },
    { id: "nature", name: "Nature", icon: <Zap className="h-4 w-4" /> },
    { id: "food", name: "Food", icon: <Coffee className="h-4 w-4" /> },
    { id: "activities", name: "Activities", icon: <ThumbsUp className="h-4 w-4" /> },
    { id: "travel", name: "Travel", icon: <Flag className="h-4 w-4" /> },
    { id: "objects", name: "Objects", icon: <Sparkles className="h-4 w-4" /> },
    { id: "symbols", name: "Symbols", icon: <Heart className="h-4 w-4" /> },
  ]

  const emojis = {
    recent: ["😀", "😂", "❤️", "👍", "🔥", "✨", "🎉", "🙏", "😊", "🥰"],
    people: [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "😂",
      "🤣",
      "😊",
      "😇",
      "🙂",
      "🙃",
      "😉",
      "😌",
      "😍",
      "🥰",
      "😘",
      "😗",
      "😙",
      "😚",
    ],
    nature: [
      "🐶",
      "🐱",
      "🐭",
      "🐹",
      "🐰",
      "🦊",
      "🐻",
      "🐼",
      "🐨",
      "🐯",
      "🦁",
      "🐮",
      "🐷",
      "🐸",
      "🐵",
      "🐔",
      "🐧",
      "🐦",
      "🐤",
      "🐣",
    ],
    food: [
      "🍏",
      "🍎",
      "🍐",
      "🍊",
      "🍋",
      "🍌",
      "🍉",
      "🍇",
      "🍓",
      "🍈",
      "🍒",
      "🍑",
      "🥭",
      "🍍",
      "🥥",
      "🥝",
      "🍅",
      "🍆",
      "🥑",
      "🥦",
    ],
    activities: [
      "⚽",
      "🏀",
      "🏈",
      "⚾",
      "🥎",
      "🎾",
      "🏐",
      "🏉",
      "🥏",
      "🎱",
      "🏓",
      "🏸",
      "🏒",
      "🏑",
      "🥍",
      "🏏",
      "🥅",
      "⛳",
      "🏹",
      "🎣",
    ],
    travel: [
      "🚗",
      "🚕",
      "🚙",
      "🚌",
      "🚎",
      "🏎",
      "🚓",
      "🚑",
      "🚒",
      "🚐",
      "🚚",
      "🚛",
      "🚜",
      "🛴",
      "🚲",
      "🛵",
      "🏍",
      "🚨",
      "🚔",
      "🚍",
    ],
    objects: [
      "⌚",
      "📱",
      "💻",
      "⌨️",
      "🖥",
      "🖨",
      "🖱",
      "🖲",
      "🕹",
      "🗜",
      "💽",
      "💾",
      "💿",
      "📀",
      "📼",
      "📷",
      "📸",
      "📹",
      "🎥",
      "📽",
    ],
    symbols: [
      "❤️",
      "🧡",
      "💛",
      "💚",
      "💙",
      "💜",
      "🖤",
      "🤍",
      "🤎",
      "💔",
      "❣️",
      "💕",
      "💞",
      "💓",
      "💗",
      "💖",
      "💘",
      "💝",
      "💟",
      "☮️",
    ],
  }

  const handleEmojiSelect = (emoji: string) => {
    // Handle emoji selection logic here
    console.log(`Selected emoji: ${emoji}`)
    setOpen(false)
  }

  const filteredEmojis = searchTerm
    ? Object.values(emojis)
        .flat()
        .filter((emoji) => emoji.includes(searchTerm))
    : null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Emoji Picker</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[350px] h-[450px] p-0 bg-[#36393f] text-white border-none overflow-hidden">
        <div className="flex flex-col h-full">
          <DialogHeader className="px-4 py-2 border-b border-[#42464d]">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#b9bbbe]" />
              <Input
                placeholder="Search emoji"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 bg-[#202225] border-none text-white h-9"
              />
            </div>
          </DialogHeader>

          {searchTerm ? (
            <div className="flex-1 overflow-y-auto p-4">
              <h3 className="text-xs text-[#b9bbbe] uppercase font-bold mb-2">Search Results</h3>
              <div className="grid grid-cols-8 gap-1">
                {filteredEmojis && filteredEmojis.length > 0 ? (
                  filteredEmojis.map((emoji, index) => (
                    <button
                      key={index}
                      className="w-8 h-8 flex items-center justify-center text-xl hover:bg-[#4f545c] rounded cursor-pointer"
                      onClick={() => handleEmojiSelect(emoji)}
                    >
                      {emoji}
                    </button>
                  ))
                ) : (
                  <div className="col-span-8 py-8 text-center">
                    <Smile className="h-12 w-12 text-[#b9bbbe] mx-auto mb-2" />
                    <p className="text-[#b9bbbe]">No emojis found</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Tabs defaultValue="recent" className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto">
                <TabsContent value="recent" className="p-4 h-[350px]">
                  <h3 className="text-xs text-[#b9bbbe] uppercase font-bold mb-2">Frequently Used</h3>
                  <div className="grid grid-cols-8 gap-1">
                    {emojis.recent.map((emoji, index) => (
                      <button
                        key={index}
                        className="w-8 h-8 flex items-center justify-center text-xl hover:bg-[#4f545c] rounded cursor-pointer"
                        onClick={() => handleEmojiSelect(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="people" className="p-4 h-[350px]">
                  <h3 className="text-xs text-[#b9bbbe] uppercase font-bold mb-2">People</h3>
                  <div className="grid grid-cols-8 gap-1">
                    {emojis.people.map((emoji, index) => (
                      <button
                        key={index}
                        className="w-8 h-8 flex items-center justify-center text-xl hover:bg-[#4f545c] rounded cursor-pointer"
                        onClick={() => handleEmojiSelect(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="nature" className="p-4 h-[350px]">
                  <h3 className="text-xs text-[#b9bbbe] uppercase font-bold mb-2">Nature</h3>
                  <div className="grid grid-cols-8 gap-1">
                    {emojis.nature.map((emoji, index) => (
                      <button
                        key={index}
                        className="w-8 h-8 flex items-center justify-center text-xl hover:bg-[#4f545c] rounded cursor-pointer"
                        onClick={() => handleEmojiSelect(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="food" className="p-4 h-[350px]">
                  <h3 className="text-xs text-[#b9bbbe] uppercase font-bold mb-2">Food & Drink</h3>
                  <div className="grid grid-cols-8 gap-1">
                    {emojis.food.map((emoji, index) => (
                      <button
                        key={index}
                        className="w-8 h-8 flex items-center justify-center text-xl hover:bg-[#4f545c] rounded cursor-pointer"
                        onClick={() => handleEmojiSelect(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="activities" className="p-4 h-[350px]">
                  <h3 className="text-xs text-[#b9bbbe] uppercase font-bold mb-2">Activities</h3>
                  <div className="grid grid-cols-8 gap-1">
                    {emojis.activities.map((emoji, index) => (
                      <button
                        key={index}
                        className="w-8 h-8 flex items-center justify-center text-xl hover:bg-[#4f545c] rounded cursor-pointer"
                        onClick={() => handleEmojiSelect(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="travel" className="p-4 h-[350px]">
                  <h3 className="text-xs text-[#b9bbbe] uppercase font-bold mb-2">Travel & Places</h3>
                  <div className="grid grid-cols-8 gap-1">
                    {emojis.travel.map((emoji, index) => (
                      <button
                        key={index}
                        className="w-8 h-8 flex items-center justify-center text-xl hover:bg-[#4f545c] rounded cursor-pointer"
                        onClick={() => handleEmojiSelect(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="objects" className="p-4 h-[350px]">
                  <h3 className="text-xs text-[#b9bbbe] uppercase font-bold mb-2">Objects</h3>
                  <div className="grid grid-cols-8 gap-1">
                    {emojis.objects.map((emoji, index) => (
                      <button
                        key={index}
                        className="w-8 h-8 flex items-center justify-center text-xl hover:bg-[#4f545c] rounded cursor-pointer"
                        onClick={() => handleEmojiSelect(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="symbols" className="p-4 h-[350px]">
                  <h3 className="text-xs text-[#b9bbbe] uppercase font-bold mb-2">Symbols</h3>
                  <div className="grid grid-cols-8 gap-1">
                    {emojis.symbols.map((emoji, index) => (
                      <button
                        key={index}
                        className="w-8 h-8 flex items-center justify-center text-xl hover:bg-[#4f545c] rounded cursor-pointer"
                        onClick={() => handleEmojiSelect(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </TabsContent>
              </div>

              <TabsList className="grid grid-cols-8 bg-[#2f3136] border-t border-[#42464d] rounded-none">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-[#5865F2] rounded-none py-2"
                  >
                    {category.icon}
                    <span className="sr-only">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

