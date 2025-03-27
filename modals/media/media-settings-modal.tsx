import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Image, Film, Volume2, Mic, Camera, Monitor, Cog, Headphones } from "lucide-react"

export default function MediaSettingsModal() {
  const [open, setOpen] = useState(false)
  const [autoplay, setAutoplay] = useState(true)
  const [gifAutoplay, setGifAutoplay] = useState(true)
  const [videoVolume, setVideoVolume] = useState(80)
  const [imageQuality, setImageQuality] = useState("auto")

  const handleSave = () => {
    // Handle save logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Media Settings</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Settings className="h-5 w-5 text-blue-400" />
            Media Settings
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="images" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4 bg-[#2f3136]">
            <TabsTrigger value="images" className="data-[state=active]:bg-[#5865F2]">
              <Image className="h-4 w-4 mr-2" />
              Images
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-[#5865F2]">
              <Film className="h-4 w-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="audio" className="data-[state=active]:bg-[#5865F2]">
              <Volume2 className="h-4 w-4 mr-2" />
              Audio
            </TabsTrigger>
            <TabsTrigger value="camera" className="data-[state=active]:bg-[#5865F2]">
              <Camera className="h-4 w-4 mr-2" />
              Camera
            </TabsTrigger>
          </TabsList>

          <TabsContent value="images" className="space-y-4">
            <div className="space-y-4">
              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <Image className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Show images</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">Display images in chat</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <Image className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Animate GIFs</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">Play GIFs automatically</div>
                </div>
                <Switch checked={gifAutoplay} onCheckedChange={setGifAutoplay} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Cog className="h-4 w-4 text-[#b9bbbe]" />
                  Image Quality
                </label>
                <Select value={imageQuality} onValueChange={setImageQuality}>
                  <SelectTrigger className="bg-[#202225] border-none text-white">
                    <SelectValue placeholder="Select image quality" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                    <SelectItem value="low">Low (Save data)</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="auto">Auto (Recommended)</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-xs text-[#b9bbbe]">
                  Higher quality uses more data. Auto adjusts based on your connection.
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Display link previews</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">Show previews of links shared in chat</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-4">
            <div className="space-y-4">
              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <Film className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Autoplay videos</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">
                    Play videos automatically when they appear in chat
                  </div>
                </div>
                <Switch checked={autoplay} onCheckedChange={setAutoplay} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Volume2 className="h-4 w-4 text-[#b9bbbe]" />
                    Default Video Volume
                  </label>
                  <span className="text-sm">{videoVolume}%</span>
                </div>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={[videoVolume]}
                  onValueChange={(value) => setVideoVolume(value[0])}
                  className="[&_[role=slider]]:bg-[#5865F2]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <Film className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Mute videos by default</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">Start videos with sound off</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Cog className="h-4 w-4 text-[#b9bbbe]" />
                  Video Quality
                </label>
                <Select defaultValue="auto">
                  <SelectTrigger className="bg-[#202225] border-none text-white">
                    <SelectValue placeholder="Select video quality" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                    <SelectItem value="360p">360p</SelectItem>
                    <SelectItem value="480p">480p</SelectItem>
                    <SelectItem value="720p">720p</SelectItem>
                    <SelectItem value="1080p">1080p</SelectItem>
                    <SelectItem value="auto">Auto (Recommended)</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-xs text-[#b9bbbe]">
                  Higher quality uses more data. Auto adjusts based on your connection.
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-[#b9bbbe]" />
                  Output Device
                </label>
                <Select defaultValue="default">
                  <SelectTrigger className="bg-[#202225] border-none text-white">
                    <SelectValue placeholder="Select output device" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                    <SelectItem value="default">Default - System (Speakers)</SelectItem>
                    <SelectItem value="headphones">Headphones</SelectItem>
                    <SelectItem value="bluetooth">Bluetooth Headset</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Volume2 className="h-4 w-4 text-[#b9bbbe]" />
                    Output Volume
                  </label>
                  <span className="text-sm">80%</span>
                </div>
                <Slider defaultValue={[80]} min={0} max={100} step={1} className="[&_[role=slider]]:bg-[#5865F2]" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Mic className="h-4 w-4 text-[#b9bbbe]" />
                  Input Device
                </label>
                <Select defaultValue="default">
                  <SelectTrigger className="bg-[#202225] border-none text-white">
                    <SelectValue placeholder="Select input device" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                    <SelectItem value="default">Default - System (Microphone)</SelectItem>
                    <SelectItem value="headset">Headset Microphone</SelectItem>
                    <SelectItem value="bluetooth">Bluetooth Microphone</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mic className="h-4 w-4 text-[#b9bbbe]" />
                    Input Volume
                  </label>
                  <span className="text-sm">70%</span>
                </div>
                <Slider defaultValue={[70]} min={0} max={100} step={1} className="[&_[role=slider]]:bg-[#5865F2]" />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <Volume2 className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Automatically determine input sensitivity</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">Automatically adjust microphone sensitivity</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="camera" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Camera className="h-4 w-4 text-[#b9bbbe]" />
                  Camera Device
                </label>
                <Select defaultValue="default">
                  <SelectTrigger className="bg-[#202225] border-none text-white">
                    <SelectValue placeholder="Select camera" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#202225] border-[#42464d] text-white">
                    <SelectItem value="default">Default - System Camera</SelectItem>
                    <SelectItem value="webcam">External Webcam</SelectItem>
                    <SelectItem value="integrated">Integrated Camera</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="aspect-video bg-[#202225] rounded-md flex items-center justify-center">
                <div className="text-[#b9bbbe]">Camera preview will appear here</div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <Camera className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Enable camera by default</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">
                    Automatically turn on camera when joining video calls
                  </div>
                </div>
                <Switch />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <Cog className="h-4 w-4 text-[#b9bbbe]" />
                    <span>Hardware acceleration</span>
                  </div>
                  <div className="text-xs text-[#b9bbbe] ml-6 mt-1">
                    Use hardware acceleration for video processing when available
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

