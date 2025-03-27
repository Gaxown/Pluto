import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Shield, Plus, Palette, Users, Settings } from "lucide-react"

export default function CreateRoleModal() {
  const [open, setOpen] = useState(false)
  const [roleName, setRoleName] = useState("New Role")
  const [roleColor, setRoleColor] = useState("#99aab5")
  const [displaySeparately, setDisplaySeparately] = useState(false)
  const [allowMention, setAllowMention] = useState(false)

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoleColor(e.target.value)
  }

  const handleCreate = () => {
    // Handle role creation logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create Role</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-400" />
            Create Role
          </DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-6">
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
                  <Settings className="h-4 w-4" />
                  Allow anyone to @mention this role
                </div>
                <div className="text-xs text-[#b9bbbe]">Members can mention this role in messages</div>
              </div>
              <Switch checked={allowMention} onCheckedChange={setAllowMention} />
            </div>
          </div>

          <div className="bg-[#2f3136] p-4 rounded-md">
            <div className="text-sm">
              <p className="font-medium mb-2">After creating the role:</p>
              <ul className="list-disc list-inside space-y-1 text-[#b9bbbe]">
                <li>Configure permissions for the role</li>
                <li>Assign the role to members</li>
                <li>Set up role hierarchy by dragging roles in the server settings</li>
              </ul>
            </div>
          </div>
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
            type="button"
            onClick={handleCreate}
            className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Create Role
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

