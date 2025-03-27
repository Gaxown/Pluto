"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Share2,
  Link,
  Copy,
  Check,
  Twitter,
  Facebook,
  RssIcon as Reddit,
  Mail,
  MessageSquare,
  Hash,
  Globe,
  Lock,
} from "lucide-react"

export default function ShareMediaModal() {
  const [open, setOpen] = useState(false)
  const [shareLink, setShareLink] = useState("https://discord.com/channels/123456789/987654321/123987456")
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = (platform: string) => {
    // Handle share logic here
    console.log(`Sharing to ${platform}`)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Share Media</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Share2 className="h-5 w-5 text-blue-400" />
            Share Media
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <div className="aspect-video bg-[#202225] rounded-md overflow-hidden mb-4">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Media preview"
              className="w-full h-full object-cover"
            />
          </div>

          <Tabs defaultValue="link" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4 bg-[#2f3136]">
              <TabsTrigger value="link" className="data-[state=active]:bg-[#5865F2]">
                <Link className="h-4 w-4 mr-2" />
                Link
              </TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-[#5865F2]">
                <Globe className="h-4 w-4 mr-2" />
                Social
              </TabsTrigger>
              <TabsTrigger value="discord" className="data-[state=active]:bg-[#5865F2]">
                <MessageSquare className="h-4 w-4 mr-2" />
                Discord
              </TabsTrigger>
            </TabsList>

            <TabsContent value="link" className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Share Link</label>
                <div className="relative">
                  <Input
                    value={shareLink}
                    onChange={(e) => setShareLink(e.target.value)}
                    className="pr-24 bg-[#202225] border-none text-white"
                  />
                  <Button
                    className={`absolute right-0 top-0 h-full px-3 rounded-l-none ${
                      copied ? "bg-green-600 hover:bg-green-700" : "bg-[#5865F2] hover:bg-[#4752c4]"
                    }`}
                    onClick={handleCopyLink}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <Lock className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Privacy</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">Anyone with the link can view this media</div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="social" className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="bg-[#1DA1F2]/10 text-[#1DA1F2] border-[#1DA1F2]/30 hover:bg-[#1DA1F2]/20 flex items-center gap-2 justify-center"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="h-5 w-5" />
                  Twitter
                </Button>

                <Button
                  variant="outline"
                  className="bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/30 hover:bg-[#1877F2]/20 flex items-center gap-2 justify-center"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="h-5 w-5" />
                  Facebook
                </Button>

                <Button
                  variant="outline"
                  className="bg-[#FF4500]/10 text-[#FF4500] border-[#FF4500]/30 hover:bg-[#FF4500]/20 flex items-center gap-2 justify-center"
                  onClick={() => handleShare("reddit")}
                >
                  <Reddit className="h-5 w-5" />
                  Reddit
                </Button>

                <Button
                  variant="outline"
                  className="bg-[#EA4335]/10 text-[#EA4335] border-[#EA4335]/30 hover:bg-[#EA4335]/20 flex items-center gap-2 justify-center"
                  onClick={() => handleShare("email")}
                >
                  <Mail className="h-5 w-5" />
                  Email
                </Button>
              </div>

              <div className="text-xs text-[#b9bbbe] mt-2">
                <p>Sharing to social media will open a new window with the content and link.</p>
              </div>
            </TabsContent>

            <TabsContent value="discord" className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Share to Channel or DM</label>
                <Input placeholder="Search for a channel or user..." className="bg-[#202225] border-none text-white" />
              </div>

              <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
                <div className="text-xs text-[#b9bbbe] uppercase font-bold px-2">Channels</div>

                <div className="flex items-center justify-between p-2 bg-[#2f3136] rounded-md hover:bg-[#42464d] cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Hash className="h-4 w-4 text-[#b9bbbe]" />
                    <span>general</span>
                  </div>
                  <Button
                    size="sm"
                    className="h-7 bg-[#5865F2] hover:bg-[#4752c4]"
                    onClick={() => handleShare("general")}
                  >
                    Share
                  </Button>
                </div>

                <div className="flex items-center justify-between p-2 bg-[#2f3136] rounded-md hover:bg-[#42464d] cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Hash className="h-4 w-4 text-[#b9bbbe]" />
                    <span>media</span>
                  </div>
                  <Button
                    size="sm"
                    className="h-7 bg-[#5865F2] hover:bg-[#4752c4]"
                    onClick={() => handleShare("media")}
                  >
                    Share
                  </Button>
                </div>

                <div className="text-xs text-[#b9bbbe] uppercase font-bold px-2 mt-4">Direct Messages</div>

                <div className="flex items-center justify-between p-2 bg-[#2f3136] rounded-md hover:bg-[#42464d] cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#5865F2] flex items-center justify-center">
                      <span className="text-xs font-bold">JD</span>
                    </div>
                    <span>John Doe</span>
                  </div>
                  <Button size="sm" className="h-7 bg-[#5865F2] hover:bg-[#4752c4]" onClick={() => handleShare("john")}>
                    Share
                  </Button>
                </div>

                <div className="flex items-center justify-between p-2 bg-[#2f3136] rounded-md hover:bg-[#42464d] cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#5865F2] flex items-center justify-center">
                      <span className="text-xs font-bold">JS</span>
                    </div>
                    <span>Jane Smith</span>
                  </div>
                  <Button size="sm" className="h-7 bg-[#5865F2] hover:bg-[#4752c4]" onClick={() => handleShare("jane")}>
                    Share
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <DialogFooter className="flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="bg-transparent text-white hover:bg-[#4f545c]"
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

