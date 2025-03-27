import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  MessageSquare,
  AtSign,
  Hash,
  Volume2,
  ComputerIcon as Desktop,
  SmartphoneIcon as Mobile,
  Headphones,
  Mic,
} from "lucide-react"

export default function NotificationSettingsModal() {
  const [open, setOpen] = useState(false)
  const [messageNotifications, setMessageNotifications] = useState("all")
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [desktopNotifications, setDesktopNotifications] = useState(true)
  const [mobileNotifications, setMobileNotifications] = useState(true)
  const [mentionNotifications, setMentionNotifications] = useState(true)

  const handleSave = () => {
    // Handle save logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Notification Settings</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Bell className="h-5 w-5 text-purple-400" />
            Notification Settings
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="server" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4 bg-[#2f3136]">
            <TabsTrigger value="server" className="data-[state=active]:bg-[#5865F2]">
              <MessageSquare className="h-4 w-4 mr-2" />
              Server
            </TabsTrigger>
            <TabsTrigger value="channels" className="data-[state=active]:bg-[#5865F2]">
              <Hash className="h-4 w-4 mr-2" />
              Channels
            </TabsTrigger>
            <TabsTrigger value="devices" className="data-[state=active]:bg-[#5865F2]">
              <Desktop className="h-4 w-4 mr-2" />
              Devices
            </TabsTrigger>
          </TabsList>

          <TabsContent value="server" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Server Notification Settings</h3>
                <RadioGroup value={messageNotifications} onValueChange={setMessageNotifications} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-[#b9bbbe]" />
                      All Messages
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mentions" id="mentions" />
                    <Label htmlFor="mentions" className="flex items-center gap-2">
                      <AtSign className="h-4 w-4 text-[#b9bbbe]" />
                      Only @mentions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nothing" id="nothing" />
                    <Label htmlFor="nothing" className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-[#b9bbbe] line-through" />
                      Nothing
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-[#b9bbbe]" />
                  <span>Enable notification sounds</span>
                </div>
                <Switch checked={soundEnabled} onCheckedChange={setSoundEnabled} />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AtSign className="h-4 w-4 text-[#b9bbbe]" />
                  <span>Suppress @everyone and @here</span>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-[#b9bbbe]" />
                  <span>Mute server</span>
                </div>
                <Switch />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="channels" className="space-y-4">
            <div className="space-y-4">
              <div className="bg-[#2f3136] p-3 rounded-md">
                <h3 className="font-medium mb-2">Channel Override Settings</h3>
                <p className="text-sm text-[#b9bbbe]">You can override notification settings for specific channels.</p>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between p-2 bg-[#36393f] rounded-md">
                    <div className="flex items-center gap-2">
                      <Hash className="h-4 w-4 text-[#b9bbbe]" />
                      <span>general</span>
                    </div>
                    <div className="text-xs text-[#b9bbbe]">All Messages</div>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-[#36393f] rounded-md">
                    <div className="flex items-center gap-2">
                      <Hash className="h-4 w-4 text-[#b9bbbe]" />
                      <span>announcements</span>
                    </div>
                    <div className="text-xs text-[#b9bbbe]">All Messages</div>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-[#36393f] rounded-md">
                    <div className="flex items-center gap-2">
                      <Hash className="h-4 w-4 text-[#b9bbbe]" />
                      <span>off-topic</span>
                    </div>
                    <div className="text-xs text-[#b9bbbe]">Only @mentions</div>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-[#36393f] rounded-md">
                    <div className="flex items-center gap-2">
                      <Volume2 className="h-4 w-4 text-[#b9bbbe]" />
                      <span>voice-chat</span>
                    </div>
                    <div className="text-xs text-[#b9bbbe]">Nothing</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AtSign className="h-4 w-4 text-[#b9bbbe]" />
                  <span>Enable notification for @mentions</span>
                </div>
                <Switch checked={mentionNotifications} onCheckedChange={setMentionNotifications} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="devices" className="space-y-4">
            <div className="space-y-4">
              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Desktop className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Enable desktop notifications</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">
                    Show notifications on your desktop when Discord is not in focus
                  </div>
                </div>
                <Switch checked={desktopNotifications} onCheckedChange={setDesktopNotifications} />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Mobile className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Enable mobile notifications</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">Send notifications to your mobile device</div>
                </div>
                <Switch checked={mobileNotifications} onCheckedChange={setMobileNotifications} />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Headphones className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Enable notification sounds</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">Play a sound when you receive a notification</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Mic className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Disable notifications while in voice</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">
                    Suppress notifications when you're in a voice channel
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex justify-end gap-2 pt-4 border-t border-[#42464d]">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="bg-transparent text-white hover:bg-[#4f545c]"
          >
            Cancel
          </Button>
          <Button type="button" onClick={handleSave} className="bg-[#5865F2] hover:bg-[#4752c4]">
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

