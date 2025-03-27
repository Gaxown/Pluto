import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Clock, RefreshCw, Hash, Check, QrCode, Share2, Mail, Sparkles } from "lucide-react"

export default function ChannelInviteModal() {
  const [open, setOpen] = useState(false)
  const [inviteLink, setInviteLink] = useState("https://discord.gg/channel/abcdef123456")
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
    setInviteLink("https://discord.gg/channel/" + Math.random().toString(36).substring(2, 10))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Channel Invite</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-gradient-to-br from-[#2a2d44] to-[#1a1c2e] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Hash className="h-5 w-5 text-pink-400" />
            Invite to #general
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="relative">
            <Input value={inviteLink} readOnly className="pr-24 bg-[#1e1f2f] border-none text-white" />
            <Button
              className={`absolute right-0 top-0 h-full px-3 rounded-l-none ${
                copied
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
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
                <Clock className="h-4 w-4 text-pink-400" />
                Expire After
              </Label>
              <Select value={expiry} onValueChange={setExpiry}>
                <SelectTrigger id="expire-after" className="bg-[#1e1f2f] border-none text-white">
                  <SelectValue placeholder="Select expiry" />
                </SelectTrigger>
                <SelectContent className="bg-[#1e1f2f] border-[#42464d] text-white">
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
                <Sparkles className="h-4 w-4 text-purple-400" />
                Max Number of Uses
              </Label>
              <Select value={maxUses} onValueChange={setMaxUses}>
                <SelectTrigger id="max-uses" className="bg-[#1e1f2f] border-none text-white">
                  <SelectValue placeholder="Select max uses" />
                </SelectTrigger>
                <SelectContent className="bg-[#1e1f2f] border-[#42464d] text-white">
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
            className="w-full bg-transparent text-white hover:bg-[#2a2d44] flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Generate a New Link
          </Button>

          <div className="pt-4 border-t border-[#42464d]">
            <div className="text-center mb-4">
              <h3 className="font-medium">Share Invite Link</h3>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                className="bg-transparent text-white hover:bg-[#2a2d44] flex flex-col items-center gap-2 py-4"
              >
                <QrCode className="h-6 w-6 text-pink-400" />
                <span className="text-xs">QR Code</span>
              </Button>

              <Button
                variant="outline"
                className="bg-transparent text-white hover:bg-[#2a2d44] flex flex-col items-center gap-2 py-4"
              >
                <Share2 className="h-6 w-6 text-purple-400" />
                <span className="text-xs">Share</span>
              </Button>

              <Button
                variant="outline"
                className="bg-transparent text-white hover:bg-[#2a2d44] flex flex-col items-center gap-2 py-4"
              >
                <Mail className="h-6 w-6 text-blue-400" />
                <span className="text-xs">Email</span>
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter className="flex sm:justify-between gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="bg-transparent text-white hover:bg-[#2a2d44]"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
          >
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

