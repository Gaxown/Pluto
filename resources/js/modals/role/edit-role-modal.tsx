"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Palette, Users, Settings, MessageSquare, Headphones, Video, Trash2, Info, AtSign } from "lucide-react"

export default function EditRoleModal() {
  const [open, setOpen] = useState(false)
  const [roleName, setRoleName] = useState("Moderator")
  const [roleColor, setRoleColor] = useState("#faa61a")
  const [displaySeparately, setDisplaySeparately] = useState(true)
  const [allowMention, setAllowMention] = useState(false)

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoleColor(e.target.value)
  }

  const handleSave = () => {
    // Handle save logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Role</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Shield className="h-5 w-5" style={{ color: roleColor }} />
            Edit Role
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="display" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4 bg-[#2f3136]">
            <TabsTrigger value="display" className="data-[state=active]:bg-[#5865F2]">
              <Info className="h-4 w-4 mr-2" />
              Display
            </TabsTrigger>
            <TabsTrigger value="permissions" className="data-[state=active]:bg-[#5865F2]">
              <Shield className="h-4 w-4 mr-2" />
              Permissions
            </TabsTrigger>
            <TabsTrigger value="members" className="data-[state=active]:bg-[#5865F2]">
              <Users className="h-4 w-4 mr-2" />
              Members
            </TabsTrigger>
          </TabsList>

          <TabsContent value="display" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: roleColor }}
                >
                  <Shield className="h-6 w-6 text-white" />
                </div>

                <div className="flex-1 space-y-2">
                  <Label htmlFor="role-name" className="text-sm font-medium">
                    Role Name
                  </Label>
                  <Input
                    id="role-name"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                    className="bg-[#202225] border-none text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role-color" className="text-sm font-medium flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Role Color
                </Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="role-color"
                    type="color"
                    value={roleColor}
                    onChange={handleColorChange}
                    className="w-12 h-12 p-1 bg-transparent border-none rounded-md overflow-hidden"
                  />
                  <div className="text-sm">{roleColor}</div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Display role members separately
                  </div>
                  <div className="text-xs text-[#b9bbbe]">
                    Members with this role will show up separately in the member list
                  </div>
                </div>
                <Switch checked={displaySeparately} onCheckedChange={setDisplaySeparately} />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    <AtSign className="h-4 w-4" />
                    Allow anyone to @mention this role
                  </div>
                  <div className="text-xs text-[#b9bbbe]">Members can mention this role in messages</div>
                </div>
                <Switch checked={allowMention} onCheckedChange={setAllowMention} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="permissions" className="space-y-4">
            <div className="space-y-4">
              <div className="bg-[#2f3136] p-3 rounded-md">
                <h3 className="font-medium mb-2">General Permissions</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-[#b9bbbe]" />
                      <span>Manage Server</span>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#b9bbbe]" />
                      <span>Manage Roles</span>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#b9bbbe]" />
                      <span>Kick Members</span>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#b9bbbe]" />
                      <span>Ban Members</span>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="bg-[#2f3136] p-3 rounded-md">
                <h3 className="font-medium mb-2">Text Permissions</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-[#b9bbbe]" />
                      <span>Manage Messages</span>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-[#b9bbbe]" />
                      <span>Manage Threads</span>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-[#b9bbbe]" />
                      <span>Embed Links</span>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="bg-[#2f3136] p-3 rounded-md">
                <h3 className="font-medium mb-2">Voice Permissions</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Headphones className="h-4 w-4 text-[#b9bbbe]" />
                      <span>Mute Members</span>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Headphones className="h-4 w-4 text-[#b9bbbe]" />
                      <span>Deafen Members</span>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4 text-[#b9bbbe]" />
                      <span>Manage Calls</span>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="members" className="space-y-4">
            <div className="space-y-4">
              <div className="relative">
                <Input placeholder="Search members" className="bg-[#202225] border-none text-white" />
              </div>

              <div className="bg-[#2f3136] rounded-md max-h-[300px] overflow-y-auto">
                <div className="p-3 border-b border-[#42464d]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center">
                        <span className="text-xs font-bold">JD</span>
                      </div>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-xs text-[#b9bbbe]">johndoe#1234</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="p-3 border-b border-[#42464d]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center">
                        <span className="text-xs font-bold">JS</span>
                      </div>
                      <div>
                        <div className="font-medium">Jane Smith</div>
                        <div className="text-xs text-[#b9bbbe]">janesmith#5678</div>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="p-3 border-b border-[#42464d]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center">
                        <span className="text-xs font-bold">AJ</span>
                      </div>
                      <div>
                        <div className="font-medium">Alex Johnson</div>
                        <div className="text-xs text-[#b9bbbe]">alexj#9012</div>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center">
                        <span className="text-xs font-bold">TW</span>
                      </div>
                      <div>
                        <div className="font-medium">Taylor Wilson</div>
                        <div className="text-xs text-[#b9bbbe]">taylor#3456</div>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-transparent text-white hover:bg-[#4f545c]">
                Add Members to Role
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex sm:justify-between gap-2 pt-4 border-t border-[#42464d]">
          <Button
            type="button"
            variant="outline"
            className="bg-transparent text-[#f23f42] hover:bg-[#f23f42] hover:text-white flex items-center gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Delete Role
          </Button>

          <div className="flex gap-2">
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
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

