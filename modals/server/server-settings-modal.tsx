import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X, Info, Users, Shield, Trash2, AlertTriangle, Globe, Lock, Hash } from "lucide-react"

export default function ServerSettingsModal() {
  const [open, setOpen] = useState(false)
  const [serverName, setServerName] = useState("My Awesome Server")
  const [serverDescription, setServerDescription] = useState("")
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isPrivate, setIsPrivate] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImagePreview(null)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Server Settings</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[900px] h-[80vh] p-0 bg-[#36393f] text-white border-none overflow-hidden">
        <div className="flex h-full">
          <div className="w-60 bg-[#2f3136] p-4 overflow-y-auto">
            <div className="space-y-1">
              <div className="text-[#b9bbbe] uppercase text-xs font-bold px-2 py-1">Server Settings</div>
              <Button variant="ghost" className="w-full justify-start text-white bg-[#42464d]">
                <Info className="h-4 w-4 mr-2" />
                Overview
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#dcddde] hover:bg-[#42464d] hover:text-white"
              >
                <Users className="h-4 w-4 mr-2" />
                Members
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#dcddde] hover:bg-[#42464d] hover:text-white"
              >
                <Shield className="h-4 w-4 mr-2" />
                Roles
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-[#dcddde] hover:bg-[#42464d] hover:text-white"
              >
                <Hash className="h-4 w-4 mr-2" />
                Channels
              </Button>
            </div>

            <div className="mt-4 pt-4 border-t border-[#42464d]">
              <Button
                variant="ghost"
                className="w-full justify-start text-[#f23f42] hover:bg-[#f23f42] hover:text-white"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Server
              </Button>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Info className="h-5 w-5" />
                Server Overview
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

            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6 bg-[#2f3136]">
                <TabsTrigger value="general" className="data-[state=active]:bg-[#5865F2]">
                  General
                </TabsTrigger>
                <TabsTrigger value="privacy" className="data-[state=active]:bg-[#5865F2]">
                  Privacy
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div
                        className={`w-24 h-24 rounded-full flex items-center justify-center overflow-hidden ${
                          imagePreview ? "" : "bg-[#5865F2]"
                        }`}
                      >
                        {imagePreview ? (
                          <img
                            src={imagePreview || "/placeholder.svg"}
                            alt="Server icon preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-2xl font-bold text-white">{serverName.charAt(0).toUpperCase()}</span>
                        )}
                      </div>
                      <Input
                        id="server-image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                      <Label htmlFor="server-image" className="absolute inset-0 cursor-pointer rounded-full">
                        <span className="sr-only">Upload server image</span>
                      </Label>
                      {imagePreview && (
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute -top-1 -right-1 bg-[#36393f] rounded-full p-1"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    <div className="flex-1 space-y-2">
                      <Label htmlFor="server-name" className="text-sm font-medium">
                        Server Name
                      </Label>
                      <Input
                        id="server-name"
                        value={serverName}
                        onChange={(e) => setServerName(e.target.value)}
                        className="bg-[#202225] border-none text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Label htmlFor="server-description" className="text-sm font-medium">
                      Server Description
                    </Label>
                    <Textarea
                      id="server-description"
                      value={serverDescription}
                      onChange={(e) => setServerDescription(e.target.value)}
                      placeholder="Tell us about your server"
                      className="bg-[#202225] border-none text-white min-h-[100px]"
                    />
                    <div className="text-xs text-[#b9bbbe]">
                      This description will be shown in the server discovery page if enabled.
                    </div>
                  </div>

                  <div className="pt-4 space-y-4">
                    <h3 className="font-medium">Server Features</h3>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Community Server</div>
                        <div className="text-sm text-[#b9bbbe]">
                          Enable community features like welcome screen and discovery.
                        </div>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Boost Status</div>
                        <div className="text-sm text-[#b9bbbe]">Level 0 - 0/2 boosts to Level 1</div>
                      </div>
                      <Button variant="outline" className="bg-[#5865F2] hover:bg-[#4752c4] text-white border-none">
                        Boost Server
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="privacy" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Privacy Settings</h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        {isPrivate ? <Lock className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
                        {isPrivate ? "Private Server" : "Public Server"}
                      </div>
                      <div className="text-sm text-[#b9bbbe]">
                        {isPrivate ? "Only people with an invite can join" : "Anyone can join this server"}
                      </div>
                    </div>
                    <Switch checked={isPrivate} onCheckedChange={setIsPrivate} />
                  </div>

                  <div className="pt-4 space-y-2">
                    <Label htmlFor="verification-level" className="text-sm font-medium">
                      Verification Level
                    </Label>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center space-x-2 border border-[#4f545c] p-3 rounded-md bg-[#4f545c]">
                        <div className="flex-1">
                          <div className="font-medium">Low</div>
                          <div className="text-xs text-[#b9bbbe]">
                            Members must have a verified email on their Discord account.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 border border-[#4f545c] p-3 rounded-md">
                        <div className="flex-1">
                          <div className="font-medium">Medium</div>
                          <div className="text-xs text-[#b9bbbe]">
                            Members must also be registered on Discord for longer than 5 minutes.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 border border-[#4f545c] p-3 rounded-md">
                        <div className="flex-1">
                          <div className="font-medium">High</div>
                          <div className="text-xs text-[#b9bbbe]">
                            Members must also be a member of this server for longer than 10 minutes.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <div className="bg-[#2f3136] p-4 rounded-md text-sm text-[#b9bbbe] flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-[#faa61a] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium mb-1">Careful with privacy settings</p>
                        <p>
                          Making your server public may expose it to users you don't know. Be careful with permissions
                          and moderation settings.
                        </p>
                      </div>
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
              <Button onClick={() => setOpen(false)} className="bg-[#5865F2] hover:bg-[#4752c4]">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

