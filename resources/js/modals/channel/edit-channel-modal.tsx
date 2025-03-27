"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Hash, Settings, Info, Shield, Clock, MessageSquare, Trash2, AlertTriangle, Lock } from "lucide-react"

export default function EditChannelModal() {
  const [open, setOpen] = useState(false)
  const [channelName, setChannelName] = useState("general")
  const [channelTopic, setChannelTopic] = useState("General discussion")
  const [slowMode, setSlowMode] = useState("0")
  const [isNsfw, setIsNsfw] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle channel update logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Channel</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Hash className="h-5 w-5" />
            Edit Channel
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4 bg-[#2f3136]">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600"
            >
              <Info className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="permissions"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600"
            >
              <Shield className="h-4 w-4 mr-2" />
              Permissions
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="channel-name" className="text-sm font-medium flex items-center gap-2">
                  <Hash className="h-4 w-4" />
                  Channel Name
                </Label>
                <Input
                  id="channel-name"
                  value={channelName}
                  onChange={(e) => setChannelName(e.target.value)}
                  className="bg-[#202225] border-none text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="channel-topic" className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Channel Topic
                </Label>
                <Textarea
                  id="channel-topic"
                  value={channelTopic}
                  onChange={(e) => setChannelTopic(e.target.value)}
                  placeholder="Set a topic for #general"
                  className="bg-[#202225] border-none text-white min-h-[80px]"
                />
                <div className="text-xs text-[#b9bbbe]">
                  This is displayed at the top of the channel and helps others understand what this channel is about.
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-2">
                <Switch id="nsfw-channel" checked={isNsfw} onCheckedChange={setIsNsfw} />
                <Label htmlFor="nsfw-channel" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Age-Restricted Channel (NSFW)
                </Label>
              </div>

              {isNsfw && (
                <div className="bg-[#2f3136] p-3 rounded-md text-sm text-[#b9bbbe] flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-[#faa61a] shrink-0 mt-0.5" />
                  <div>
                    <p>
                      By marking this channel as age-restricted, users will need to confirm they are of legal age to
                      view this content.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </TabsContent>

          <TabsContent value="permissions" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Permission Overview</h3>
                <Button variant="outline" className="bg-transparent text-white hover:bg-[#4f545c]">
                  <Shield className="h-4 w-4 mr-2" />
                  Advanced Permissions
                </Button>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Roles with access to #general</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-[#2f3136] rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#5865F2]" />
                      <span>@everyone</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      Edit
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-[#2f3136] rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#43b581]" />
                      <span>Moderator</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button variant="outline" className="w-full bg-transparent text-white hover:bg-[#4f545c]">
                  Add Role/Member
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="slow-mode" className="text-sm font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Slow Mode
                </Label>
                <Select value={slowMode} onValueChange={setSlowMode}>
                  <SelectTrigger id="slow-mode" className="bg-[#202225] border-none text-white">
                    <SelectValue placeholder="Select slow mode interval" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                    <SelectItem value="0">Off</SelectItem>
                    <SelectItem value="5">5 seconds</SelectItem>
                    <SelectItem value="10">10 seconds</SelectItem>
                    <SelectItem value="30">30 seconds</SelectItem>
                    <SelectItem value="60">1 minute</SelectItem>
                    <SelectItem value="300">5 minutes</SelectItem>
                    <SelectItem value="1800">30 minutes</SelectItem>
                    <SelectItem value="3600">1 hour</SelectItem>
                    <SelectItem value="21600">6 hours</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-xs text-[#b9bbbe]">
                  When slow mode is enabled, users can only send one message per time interval.
                </div>
              </div>

              <div className="pt-4 border-t border-[#42464d]">
                <Button
                  variant="outline"
                  className="w-full bg-transparent text-[#f23f42] hover:bg-[#f23f42] hover:text-white flex items-center gap-2"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete Channel
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
          <Button
            type="button"
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

