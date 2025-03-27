import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Shield,
  Plus,
  Trash2,
  ChevronRight,
  AtSign,
  Hash,
  Headphones,
  Mic,
  Video,
  MessageSquare,
  PenTool,
  UserPlus,
} from "lucide-react"

export default function ServerRolesModal() {
  const [open, setOpen] = useState(false)
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", color: "#f04747", members: 2 },
    { id: 2, name: "Moderator", color: "#faa61a", members: 5 },
    { id: 3, name: "Bot", color: "#43b581", members: 3 },
    { id: 4, name: "Member", color: "#747f8d", members: 42 },
  ])
  const [selectedRole, setSelectedRole] = useState(roles[0])
  const [roleColor, setRoleColor] = useState(selectedRole.color)

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoleColor(e.target.value)
  }

  const handleAddRole = () => {
    const newRole = {
      id: roles.length + 1,
      name: "New Role",
      color: "#99aab5",
      members: 0,
    }
    setRoles([...roles, newRole])
    setSelectedRole(newRole)
    setRoleColor(newRole.color)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Server Roles</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[900px] h-[80vh] p-0 bg-[#36393f] text-white border-none overflow-hidden">
        <div className="flex h-full">
          <div className="w-60 bg-[#2f3136] p-4 overflow-y-auto border-r border-[#42464d]">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-xl font-bold flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Roles
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-between text-[#dcddde] hover:bg-[#42464d] hover:text-white"
                onClick={handleAddRole}
              >
                <span className="flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Role
                </span>
              </Button>

              <div className="pt-2 mt-2 border-t border-[#42464d]">
                {roles.map((role) => (
                  <Button
                    key={role.id}
                    variant="ghost"
                    className={`w-full justify-between text-[#dcddde] hover:bg-[#42464d] hover:text-white ${
                      selectedRole.id === role.id ? "bg-[#42464d] text-white" : ""
                    }`}
                    onClick={() => {
                      setSelectedRole(role)
                      setRoleColor(role.color)
                    }}
                  >
                    <span className="flex items-center">
                      <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: role.color }} />
                      {role.name}
                    </span>
                    <span className="text-xs text-[#b9bbbe]">{role.members}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-[#42464d] flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: roleColor }} />
                <h2 className="text-lg font-bold">{selectedRole.name}</h2>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOpen(false)}
                className="bg-transparent text-white hover:bg-[#4f545c]"
              >
                X
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-[#b9bbbe] uppercase text-xs">Role Overview</h3>

                  <div className="space-y-2">
                    <Label htmlFor="role-name" className="text-sm font-medium">
                      Role Name
                    </Label>
                    <Input id="role-name" value={selectedRole.name} className="bg-[#202225] border-none text-white" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role-color" className="text-sm font-medium">
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

                  <div className="pt-2 flex items-center space-x-2">
                    <Switch id="display-separately" />
                    <Label htmlFor="display-separately">Display role members separately</Label>
                  </div>

                  <div className="pt-2 flex items-center space-x-2">
                    <Switch id="allow-mention" />
                    <Label htmlFor="allow-mention">Allow anyone to @mention this role</Label>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#42464d]">
                  <h3 className="font-medium text-[#b9bbbe] uppercase text-xs">Permissions</h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-[#2f3136] rounded-md hover:bg-[#42464d] cursor-pointer">
                      <div className="flex items-center gap-2">
                        <AtSign className="h-4 w-4" />
                        <span>General Permissions</span>
                      </div>
                      <ChevronRight className="h-4 w-4" />
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#2f3136] rounded-md hover:bg-[#42464d] cursor-pointer">
                      <div className="flex items-center gap-2">
                        <Hash className="h-4 w-4" />
                        <span>Text Channel Permissions</span>
                      </div>
                      <ChevronRight className="h-4 w-4" />
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#2f3136] rounded-md hover:bg-[#42464d] cursor-pointer">
                      <div className="flex items-center gap-2">
                        <Headphones className="h-4 w-4" />
                        <span>Voice Channel Permissions</span>
                      </div>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <Label className="text-sm font-medium">Permission Preview</Label>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-[#b9bbbe]" />
                          <span>Send Messages</span>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <PenTool className="h-4 w-4 text-[#b9bbbe]" />
                          <span>Manage Messages</span>
                        </div>
                        <Switch defaultChecked={selectedRole.name === "Admin" || selectedRole.name === "Moderator"} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <UserPlus className="h-4 w-4 text-[#b9bbbe]" />
                          <span>Kick Members</span>
                        </div>
                        <Switch defaultChecked={selectedRole.name === "Admin" || selectedRole.name === "Moderator"} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mic className="h-4 w-4 text-[#b9bbbe]" />
                          <span>Speak in Voice Channels</span>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Video className="h-4 w-4 text-[#b9bbbe]" />
                          <span>Stream Video</span>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#42464d]">
                  <h3 className="font-medium text-[#b9bbbe] uppercase text-xs">Role Management</h3>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Members with this role — {selectedRole.members}</Label>
                    <Button variant="outline" className="w-full bg-transparent text-white hover:bg-[#4f545c]">
                      Manage Members
                    </Button>
                  </div>

                  {selectedRole.name !== "Member" && (
                    <Button
                      variant="outline"
                      className="w-full bg-transparent text-[#f23f42] hover:bg-[#f23f42] hover:text-white flex items-center gap-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete Role
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-[#42464d] flex justify-between">
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

