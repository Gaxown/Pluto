import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Hash, Volume2, Users, Lock, Plus, Sparkles } from "lucide-react"

export default function CreateChannelModal() {
  const [open, setOpen] = useState(false)
  const [channelName, setChannelName] = useState("")
  const [channelType, setChannelType] = useState("text")
  const [isPrivate, setIsPrivate] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle channel creation logic here
    setOpen(false)
  }

  const formatChannelName = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-none hover:from-purple-700 hover:to-indigo-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Create Channel
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-400" />
            Create Channel
          </DialogTitle>
          <DialogDescription className="text-[#b9bbbe]">
            Channels are where your members communicate. They're best organized around topics.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Channel Type</Label>
              <RadioGroup value={channelType} onValueChange={setChannelType} className="grid grid-cols-3 gap-2">
                <div
                  className={`flex flex-col items-center space-y-2 border border-[#4f545c] p-3 rounded-md cursor-pointer ${
                    channelType === "text" ? "bg-[#4f545c]" : ""
                  }`}
                >
                  <RadioGroupItem value="text" id="text" className="sr-only" />
                  <Label htmlFor="text" className="cursor-pointer">
                    <Hash className="h-8 w-8 mb-1 mx-auto" />
                    <div className="text-center">Text</div>
                  </Label>
                </div>
                <div
                  className={`flex flex-col items-center space-y-2 border border-[#4f545c] p-3 rounded-md cursor-pointer ${
                    channelType === "voice" ? "bg-[#4f545c]" : ""
                  }`}
                >
                  <RadioGroupItem value="voice" id="voice" className="sr-only" />
                  <Label htmlFor="voice" className="cursor-pointer">
                    <Volume2 className="h-8 w-8 mb-1 mx-auto" />
                    <div className="text-center">Voice</div>
                  </Label>
                </div>
                <div
                  className={`flex flex-col items-center space-y-2 border border-[#4f545c] p-3 rounded-md cursor-pointer ${
                    channelType === "forum" ? "bg-[#4f545c]" : ""
                  }`}
                >
                  <RadioGroupItem value="forum" id="forum" className="sr-only" />
                  <Label htmlFor="forum" className="cursor-pointer">
                    <Users className="h-8 w-8 mb-1 mx-auto" />
                    <div className="text-center">Forum</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="channel-name" className="text-sm font-medium flex items-center gap-2">
                  {channelType === "text" ? (
                    <Hash className="h-4 w-4" />
                  ) : channelType === "voice" ? (
                    <Volume2 className="h-4 w-4" />
                  ) : (
                    <Users className="h-4 w-4" />
                  )}
                  Channel Name
                </Label>
                {isPrivate && <Lock className="h-4 w-4 text-[#b9bbbe]" />}
              </div>
              <Input
                id="channel-name"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                placeholder={
                  channelType === "text"
                    ? "new-text-channel"
                    : channelType === "voice"
                      ? "New Voice Channel"
                      : "new-forum-channel"
                }
                className="bg-[#202225] border-none text-white"
              />
              {channelName && (
                <div className="text-xs text-[#b9bbbe]">
                  {channelType === "text" || channelType === "forum" ? (
                    <>Channel will be created as #{formatChannelName(channelName)}</>
                  ) : (
                    <>Channel will be created as {channelName}</>
                  )}
                </div>
              )}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <div>
                <div className="font-medium flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Private Channel
                </div>
                <div className="text-xs text-[#b9bbbe]">
                  Only selected members and roles will be able to view this channel
                </div>
              </div>
              <div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${
                  isPrivate ? "bg-purple-600" : "bg-[#4f545c]"
                }`}
                onClick={() => setIsPrivate(!isPrivate)}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${isPrivate ? "translate-x-6" : ""}`}
                />
              </div>
            </div>

            {isPrivate && (
              <div className="pt-2 bg-[#2f3136] p-3 rounded-md">
                <div className="text-sm">
                  By making a channel private, you'll be able to select which members and roles can access it after
                  creation.
                </div>
              </div>
            )}
          </div>

          <DialogFooter className="flex sm:justify-between gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="bg-transparent text-white hover:bg-[#4f545c]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              disabled={!channelName.trim()}
            >
              Create Channel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

