"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Link, Clock, RefreshCw, Users, QrCode, Mail, Share2, Check, UserPlus } from "lucide-react"

export default function InviteUsersModal() {
  const [open, setOpen] = useState(false)
  const [inviteLink, setInviteLink] = useState("https://discord.gg/abcdef123456")
  const [expiry, setExpiry] = useState("7d")
  const [maxUses, setMaxUses] = useState("0")
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleGenerateNewLink = () => {
    // In a real app, this would generate a new invite link
    setInviteLink("https://discord.gg/" + Math.random().toString(36).substring(2, 10))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Invite Users</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Invite Friends to My Awesome Server
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="invite-link" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4 bg-[#2f3136]">
            <TabsTrigger value="invite-link" className="data-[state=active]:bg-[#5865F2]">
              <Link className="h-4 w-4 mr-2" />
              Invite Link
            </TabsTrigger>
            <TabsTrigger value="friends" className="data-[state=active]:bg-[#5865F2]">
              <Users className="h-4 w-4 mr-2" />
              Friends
            </TabsTrigger>
            <TabsTrigger value="qr-code" className="data-[state=active]:bg-[#5865F2]">
              <QrCode className="h-4 w-4 mr-2" />
              QR Code
            </TabsTrigger>
          </TabsList>

          <TabsContent value="invite-link" className="space-y-4">
            <div className="space-y-4">
              <div className="relative">
                <Input value={inviteLink} readOnly className="pr-24 bg-[#202225] border-none text-white" />
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expire-after" className="text-sm font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Expire After
                  </Label>
                  <Select value={expiry} onValueChange={setExpiry}>
                    <SelectTrigger id="expire-after" className="bg-[#202225] border-none text-white">
                      <SelectValue placeholder="Select expiry" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                      <SelectItem value="30m">30 minutes</SelectItem>
                      <SelectItem value="1h">1 hour</SelectItem>
                      <SelectItem value="6h">6 hours</SelectItem>
                      <SelectItem value="12h">12 hours</SelectItem>
                      <SelectItem value="1d">1 day</SelectItem>
                      <SelectItem value="7d">7 days</SelectItem>
                      <SelectItem value="0">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="max-uses" className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Max Number of Uses
                  </Label>
                  <Select value={maxUses} onValueChange={setMaxUses}>
                    <SelectTrigger id="max-uses" className="bg-[#202225] border-none text-white">
                      <SelectValue placeholder="Select max uses" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                      <SelectItem value="1">1 use</SelectItem>
                      <SelectItem value="5">5 uses</SelectItem>
                      <SelectItem value="10">10 uses</SelectItem>
                      <SelectItem value="25">25 uses</SelectItem>
                      <SelectItem value="50">50 uses</SelectItem>
                      <SelectItem value="100">100 uses</SelectItem>
                      <SelectItem value="0">Unlimited</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={handleGenerateNewLink}
                variant="outline"
                className="w-full bg-transparent text-white hover:bg-[#4f545c] flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Generate a New Link
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="friends" className="space-y-4">
            <div className="space-y-4">
              <div className="relative">
                <Input placeholder="Search for friends" className="bg-[#202225] border-none text-white" />
              </div>

              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                <div className="text-xs text-[#b9bbbe] uppercase font-bold px-2">Online — 3</div>

                {["Alex Smith", "Jamie Rodriguez", "Taylor Kim"].map((name, i) => (
                  <div key={i} className="flex items-center justify-between p-2 hover:bg-[#4f545c] rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center">
                        <span className="text-xs font-bold">
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-xs text-[#b9bbbe]">Online</div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-[#5865F2] hover:bg-[#4752c4]">
                      Invite
                    </Button>
                  </div>
                ))}

                <div className="text-xs text-[#b9bbbe] uppercase font-bold px-2 mt-4">Offline — 2</div>

                {["Jordan Lee", "Casey Johnson"].map((name, i) => (
                  <div key={i} className="flex items-center justify-between p-2 hover:bg-[#4f545c] rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#747f8d] flex items-center justify-center">
                        <span className="text-xs font-bold">
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-xs text-[#b9bbbe]">Offline</div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-[#5865F2] hover:bg-[#4752c4]">
                      Invite
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="qr-code" className="space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-48 h-48 bg-white p-2 rounded-md">
                <div className="w-full h-full bg-[#5865F2] flex items-center justify-center text-white">
                  <QrCode className="w-32 h-32" />
                </div>
              </div>

              <div className="text-center">
                <div className="font-medium">Scan this QR code</div>
                <div className="text-sm text-[#b9bbbe]">
                  Your friends can scan this QR code to join your server instantly
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="bg-transparent text-white hover:bg-[#4f545c] flex items-center gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button className="bg-[#5865F2] hover:bg-[#4752c4] flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex sm:justify-between gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="bg-transparent text-white hover:bg-[#4f545c]"
          >
            Cancel
          </Button>
          <Button type="button" onClick={() => setOpen(false)} className="bg-[#5865F2] hover:bg-[#4752c4]">
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

