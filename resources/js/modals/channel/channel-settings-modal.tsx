"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Bell, Clock, MessageSquare, Trash2, AlertTriangle } from "lucide-react"

export default function ChannelSettingsModal() {
  const [open, setOpen] = useState(false)
  const [notificationSettings, setNotificationSettings] = useState("all")
  const [autoThreading, setAutoThreading] = useState(false)
  const [slowMode, setSlowMode] = useState("0")

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Channel Settings</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Channel Settings
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4 bg-[#2f3136]">
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-emerald-500"
            >
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="moderation"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-emerald-500"
            >
              <Clock className="h-4 w-4 mr-2" />
              Moderation
            </TabsTrigger>
            <TabsTrigger
              value="advanced"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-emerald-500"
            >
              <Settings className="h-4 w-4 mr-2" />
              Advanced
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notifications" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="notification-settings" className="text-sm font-medium">
                  Notification Settings
                </Label>
                <Select value={notificationSettings} onValueChange={setNotificationSettings}>
                  <SelectTrigger id="notification-settings" className="bg-[#202225] border-none text-white">
                    <SelectValue placeholder="Select notification settings" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                    <SelectItem value="all">All Messages</SelectItem>
                    <SelectItem value="mentions">Only @mentions</SelectItem>
                    <SelectItem value="nothing">Nothing</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-xs text-[#b9bbbe]">This will override your server notification settings.</div>
              </div>

              <div className="pt-2 flex items-center space-x-2">
                <Switch id="mute-channel" />
                <Label htmlFor="mute-channel">Mute Channel</Label>
              </div>

              <div className="pt-2 flex items-center space-x-2">
                <Switch id="suppress-everyone" />
                <Label htmlFor="suppress-everyone">Suppress @everyone and @here</Label>
              </div>

              <div className="pt-2 flex items-center space-x-2">
                <Switch id="mobile-push" defaultChecked />
                <Label htmlFor="mobile-push">Mobile Push Notifications</Label>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="moderation" className="space-y-4">
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
                  </SelectContent>
                </Select>
                <div className="text-xs text-[#b9bbbe]">
                  When slow mode is enabled, users can only send one message per time interval.
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-2">
                <Switch id="media-content-filter" defaultChecked />
                <Label htmlFor="media-content-filter">Scan Media Content</Label>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium">Auto Moderation</div>
                  <div className="text-xs text-[#b9bbbe]">Configure auto moderation rules for this channel</div>
                </div>
                <Button variant="outline" className="bg-transparent text-white hover:bg-[#4f545c]">
                  Configure
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <div className="space-y-4">
              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Auto Thread Creation
                  </div>
                  <div className="text-xs text-[#b9bbbe]">Automatically create a thread for each message</div>
                </div>
                <Switch checked={autoThreading} onCheckedChange={setAutoThreading} />
              </div>

              {autoThreading && (
                <div className="space-y-2 pl-6">
                  <Label htmlFor="thread-archive" className="text-sm font-medium">
                    Archive Threads After Inactivity
                  </Label>
                  <Select defaultValue="1d">
                    <SelectTrigger id="thread-archive" className="bg-[#202225] border-none text-white">
                      <SelectValue placeholder="Select archive time" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                      <SelectItem value="1h">1 hour</SelectItem>
                      <SelectItem value="24h">24 hours</SelectItem>
                      <SelectItem value="3d">3 days</SelectItem>
                      <SelectItem value="7d">7 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="pt-4 border-t border-[#42464d]">
                <div className="bg-[#2f3136] p-3 rounded-md text-sm text-[#b9bbbe] flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-[#faa61a] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium mb-1">Danger Zone</p>
                    <p>The actions below cannot be undone. Please proceed with caution.</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent text-[#f23f42] hover:bg-[#f23f42] hover:text-white flex items-center gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete Channel
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-6 border-t border-[#42464d] flex justify-between">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="bg-transparent text-white hover:bg-[#4f545c]"
          >
            Cancel
          </Button>
          <Button
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

