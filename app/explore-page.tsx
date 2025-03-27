import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Compass,
  Sparkles,
  Star,
  Users,
  Hash,
  ArrowRight,
  Globe,
  Gamepad2,
  Music,
  Book,
  Headphones,
} from "lucide-react"

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "gaming", name: "Gaming", icon: <Gamepad2 className="h-5 w-5" />, color: "from-purple-500 to-blue-500" },
    { id: "music", name: "Music", icon: <Music className="h-5 w-5" />, color: "from-pink-500 to-red-500" },
    { id: "education", name: "Education", icon: <Book className="h-5 w-5" />, color: "from-green-500 to-teal-500" },
    {
      id: "science",
      name: "Science & Tech",
      icon: <Compass className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "entertainment",
      name: "Entertainment",
      icon: <Headphones className="h-5 w-5" />,
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const featuredServers = [
    {
      id: "1",
      name: "Minecraft Community",
      description: "The largest Minecraft community on Discord. Join for events, giveaways, and more!",
      members: 450000,
      online: 32000,
      icon: "MC",
      banner: "bg-gradient-to-r from-green-500 to-emerald-700",
      category: "gaming",
      verified: true,
    },
    {
      id: "2",
      name: "Music Production",
      description: "Share your music, get feedback, and collaborate with other producers.",
      members: 220000,
      online: 15000,
      icon: "MP",
      banner: "bg-gradient-to-r from-purple-500 to-pink-700",
      category: "music",
      verified: true,
    },
    {
      id: "3",
      name: "Coding Help",
      description: "Get help with your coding projects, share your work, and learn from others.",
      members: 180000,
      online: 12000,
      icon: "CH",
      banner: "bg-gradient-to-r from-blue-500 to-indigo-700",
      category: "education",
      verified: false,
    },
    {
      id: "4",
      name: "Anime Fans",
      description: "Discuss your favorite anime, manga, and Japanese culture.",
      members: 320000,
      online: 25000,
      icon: "AF",
      banner: "bg-gradient-to-r from-red-500 to-pink-700",
      category: "entertainment",
      verified: true,
    },
    {
      id: "5",
      name: "Science Discussions",
      description: "Explore the wonders of science with fellow enthusiasts.",
      members: 150000,
      online: 8000,
      icon: "SD",
      banner: "bg-gradient-to-r from-cyan-500 to-blue-700",
      category: "science",
      verified: false,
    },
    {
      id: "6",
      name: "Game Development",
      description: "Learn game development, share your projects, and get feedback.",
      members: 200000,
      online: 14000,
      icon: "GD",
      banner: "bg-gradient-to-r from-orange-500 to-red-700",
      category: "gaming",
      verified: false,
    },
  ]

  const formatMemberCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  const filteredServers = searchTerm
    ? featuredServers.filter(
        (server) =>
          server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          server.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : featuredServers

  return (
    <div className="min-h-screen bg-[#36393f] text-white">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
            <Compass className="h-8 w-8 text-[#5865F2]" />
            Discover Communities
          </h1>
          <p className="text-[#b9bbbe] max-w-2xl mb-8">
            Find and join communities of people with similar interests. From gaming to music, education to
            entertainment, there's a place for everyone.
          </p>

          <div className="relative w-full max-w-xl mb-10">
            <Search className="absolute left-3 top-3 h-5 w-5 text-[#b9bbbe]" />
            <Input
              placeholder="Explore communities"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 bg-[#202225] border-none text-white rounded-full"
            />
          </div>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList className="bg-[#2f3136]">
              <TabsTrigger value="featured" className="data-[state=active]:bg-[#5865F2]">
                <Sparkles className="h-4 w-4 mr-2" />
                Featured
              </TabsTrigger>
              <TabsTrigger value="popular" className="data-[state=active]:bg-[#5865F2]">
                <Star className="h-4 w-4 mr-2" />
                Popular
              </TabsTrigger>
              <TabsTrigger value="categories" className="data-[state=active]:bg-[#5865F2]">
                <Hash className="h-4 w-4 mr-2" />
                Categories
              </TabsTrigger>
            </TabsList>

            <Button variant="outline" className="bg-transparent text-white hover:bg-[#4f545c]">
              <Globe className="h-4 w-4 mr-2" />
              Language: English
            </Button>
          </div>

          <TabsContent value="featured" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServers.map((server) => (
                <div
                  key={server.id}
                  className="bg-[#2f3136] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className={`h-24 ${server.banner} flex items-center justify-center`}>
                    <div className="w-16 h-16 rounded-full bg-[#5865F2] flex items-center justify-center border-4 border-[#2f3136] -mb-20 z-10">
                      <span className="text-xl font-bold">{server.icon}</span>
                    </div>
                  </div>

                  <div className="p-4 pt-12">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{server.name}</h3>
                      {server.verified && (
                        <div className="bg-[#5865F2] rounded-full p-0.5">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.4 11.6L4 8.2L5.4 6.8L7.4 8.8L10.6 5.6L12 7L7.4 11.6Z" fill="white" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <p className="text-[#b9bbbe] text-sm mb-4 line-clamp-2">{server.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-xs text-[#b9bbbe]">
                          <Users className="h-3 w-3" />
                          <span>{formatMemberCount(server.members)}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[#b9bbbe]">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span>{formatMemberCount(server.online)} online</span>
                        </div>
                      </div>

                      <Button size="sm" className="bg-[#5865F2] hover:bg-[#4752c4]">
                        Join
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredServers.length === 0 && (
              <div className="py-12 text-center">
                <Compass className="h-16 w-16 text-[#b9bbbe] mx-auto mb-4" />
                <h3 className="text-lg font-medium">No servers found</h3>
                <p className="text-[#b9bbbe] mt-2">Try a different search term</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="popular" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredServers
                .sort((a, b) => b.members - a.members)
                .slice(0, 6)
                .map((server) => (
                  <div
                    key={server.id}
                    className="bg-[#2f3136] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className={`h-24 ${server.banner} flex items-center justify-center`}>
                      <div className="w-16 h-16 rounded-full bg-[#5865F2] flex items-center justify-center border-4 border-[#2f3136] -mb-20 z-10">
                        <span className="text-xl font-bold">{server.icon}</span>
                      </div>
                    </div>

                    <div className="p-4 pt-12">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg">{server.name}</h3>
                        {server.verified && (
                          <div className="bg-[#5865F2] rounded-full p-0.5">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.4 11.6L4 8.2L5.4 6.8L7.4 8.8L10.6 5.6L12 7L7.4 11.6Z" fill="white" />
                            </svg>
                          </div>
                        )}
                      </div>

                      <p className="text-[#b9bbbe] text-sm mb-4 line-clamp-2">{server.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-xs text-[#b9bbbe]">
                            <Users className="h-3 w-3" />
                            <span>{formatMemberCount(server.members)}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-[#b9bbbe]">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>{formatMemberCount(server.online)} online</span>
                          </div>
                        </div>

                        <Button size="sm" className="bg-[#5865F2] hover:bg-[#4752c4]">
                          Join
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-[#2f3136] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className={`h-24 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      {category.icon}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                    <p className="text-[#b9bbbe] text-sm mb-4">Discover {category.name.toLowerCase()} communities</p>

                    <Button className="w-full bg-[#5865F2] hover:bg-[#4752c4] flex items-center justify-center gap-2">
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

