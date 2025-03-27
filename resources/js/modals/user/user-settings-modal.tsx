import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  User,
  Bell,
  Volume2,
  Monitor,
  Shield,
  Palette,
  MessageSquare,
  Headphones,
  Mic,
  Languages,
  LogOut,
} from "lucide-react"

export default function UserSettingsModal() {
  const [open, setOpen] = useState(false)
  const [volume, setVolume] = useState(80)
  const [micVolume, setMicVolume] = useState(70)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">User Settings</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[900px] h-[80vh] p-0 bg-[#36393f] text-white border-none overflow-hidden">
        <div className="flex h-full">
          <div className="w-60 bg-[#2f3136] p-4 overflow-y-auto">
            <div className="space-y-1">
              <div className="text-[#b9bbbe] uppercase text-xs font-bold px-2 py-1">User Settings</div>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#dcddde] hover:bg-[#42464d] hover:text-white"
              >
                <User className="h-4 w-4 mr-2" />
                My Account
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#dcddde] hover:bg-[#42464d] hover:text-white"
              >
                <Shield className="h-4 w-4 mr-2" />
                Privacy & Safety
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#dcddde] hover:bg-[#42464d] hover:text-white"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#dcddde] hover:bg-[#42464d] hover:text-white"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Text & Images
              </Button>
            </div>

            <div className="mt-4 space-y-1">
              <div className="text-[#b9bbbe] uppercase text-xs font-bold px-2 py-1">App Settings</div>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#dcddde] hover:bg-[#42464d] hover:text-white"
              >
                <Palette className="h-4 w-4 mr-2" />
                Appearance
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#dcddde] hover:bg-[#42464d] hover:text-white"
              >
                <Monitor className="h-4 w-4 mr-2" />
                Accessibility
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white bg-[#42464d]">
                <Volume2 className="h-4 w-4 mr-2" />
                Voice & Video
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#dcddde] hover:bg-[#42464d] hover:text-white"
              >
                <Languages className="h-4 w-4 mr-2" />
                Language
              </Button>
            </div>

            <div className="mt-4 pt-4 border-t border-[#42464d]">
              <Button
                variant="ghost"
                className="w-full justify-start text-[#f23f42] hover:bg-[#f23f42] hover:text-white"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Log Out
              </Button>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Voice & Video
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOpen(false)}
                className="bg-transparent text-white hover:bg-[#4f545c]"
              >
                X
              </Button>
            </div>

            <Tabs defaultValue="voice" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6 bg-[#2f3136]">
                <TabsTrigger value="voice" className="data-[state=active]:bg-[#5865F2]">
                  Voice
                </TabsTrigger>
                <TabsTrigger value="video" className="data-[state=active]:bg-[#5865F2]">
                  Video
                </TabsTrigger>
              </TabsList>

              <TabsContent value="voice" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-[#b9bbbe]">Input Device</h3>
                  <div className="space-y-2">
                    <Label htmlFor="mic-device" className="text-sm">
                      Microphone
                    </Label>
                    <Select defaultValue="default">
                      <SelectTrigger id="mic-device" className="bg-[#202225] border-none text-white">
                        <SelectValue placeholder="Select microphone" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                        <SelectItem value="default">Default Microphone</SelectItem>
                        <SelectItem value="headset">Headset Microphone</SelectItem>
                        <SelectItem value="webcam">Webcam Microphone</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="mic-volume" className="text-sm flex items-center gap-2">
                        <Mic className="h-4 w-4" />
                        Input Volume
                      </Label>
                      <span className="text-sm">{micVolume}%</span>
                    </div>
                    <Slider
                      id="mic-volume"
                      min={0}
                      max={100}
                      step={1}
                      value={[micVolume]}
                      onValueChange={(value) => setMicVolume(value[0])}
                      className="[&_[role=slider]]:bg-[#5865F2]"
                    />
                  </div>

                  <div className="pt-2 flex items-center space-x-2">
                    <Switch id="mic-test" />
                    <Label htmlFor="mic-test">Automatically determine input sensitivity</Label>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#42464d]">
                  <h3 className="font-medium text-[#b9bbbe]">Output Device</h3>
                  <div className="space-y-2">
                    <Label htmlFor="output-device" className="text-sm">
                      Output Device
                    </Label>
                    <Select defaultValue="default">
                      <SelectTrigger id="output-device" className="bg-[#202225] border-none text-white">
                        <SelectValue placeholder="Select output device" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                        <SelectItem value="default">Default Output</SelectItem>
                        <SelectItem value="headphones">Headphones</SelectItem>
                        <SelectItem value="speakers">Speakers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="output-volume" className="text-sm flex items-center gap-2">
                        <Headphones className="h-4 w-4" />
                        Output Volume
                      </Label>
                      <span className="text-sm">{volume}%</span>
                    </div>
                    <Slider
                      id="output-volume"
                      min={0}
                      max={100}
                      step={1}
                      value={[volume]}
                      onValueChange={(value) => setVolume(value[0])}
                      className="[&_[role=slider]]:bg-[#5865F2]"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#42464d]">
                  <h3 className="font-medium text-[#b9bbbe]">Advanced</h3>

                  <div className="pt-2 flex items-center space-x-2">
                    <Switch id="echo-cancellation" defaultChecked />
                    <Label htmlFor="echo-cancellation">Echo Cancellation</Label>
                  </div>

                  <div className="pt-2 flex items-center space-x-2">
                    <Switch id="noise-suppression" defaultChecked />
                    <Label htmlFor="noise-suppression">Noise Suppression</Label>
                  </div>

                  <div className="pt-2 flex items-center space-x-2">
                    <Switch id="auto-gain" defaultChecked />
                    <Label htmlFor="auto-gain">Automatic Gain Control</Label>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="video" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-[#b9bbbe]">Camera</h3>
                  <div className="space-y-2">
                    <Label htmlFor="camera-device" className="text-sm">
                      Camera
                    </Label>
                    <Select defaultValue="default">
                      <SelectTrigger id="camera-device" className="bg-[#202225] border-none text-white">
                        <SelectValue placeholder="Select camera" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                        <SelectItem value="default">Default Camera</SelectItem>
                        <SelectItem value="webcam">Webcam HD</SelectItem>
                        <SelectItem value="integrated">Integrated Camera</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="aspect-video bg-[#202225] rounded-md flex items-center justify-center">
                    <div className="text-[#b9bbbe]">Camera preview will appear here</div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#42464d]">
                  <h3 className="font-medium text-[#b9bbbe]">Video Settings</h3>

                  <div className="pt-2 flex items-center space-x-2">
                    <Switch id="hardware-acceleration" defaultChecked />
                    <Label htmlFor="hardware-acceleration">Hardware Acceleration</Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="video-quality" className="text-sm">
                      Video Quality
                    </Label>
                    <Select defaultValue="auto">
                      <SelectTrigger id="video-quality" className="bg-[#202225] border-none text-white">
                        <SelectValue placeholder="Select quality" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                        <SelectItem value="auto">Auto (Recommended)</SelectItem>
                        <SelectItem value="720p">720p</SelectItem>
                        <SelectItem value="1080p">1080p</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

