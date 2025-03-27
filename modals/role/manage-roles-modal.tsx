import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Shield, Search, Plus, ChevronRight, DropletsIcon as DragDropIcon, Settings } from "lucide-react"

export default function ManageRolesModal() {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const roles = [
    { id: 1, name: "Admin", color: "#f04747", members: 2 },
    { id: 2, name: "Moderator", color: "#faa61a", members: 5 },
    { id: 3, name: "Bot", color: "#43b581", members: 3 },
    { id: 4, name: "VIP", color: "#9b59b6", members: 8 },
    { id: 5, name: "Member", color: "#747f8d", members: 42 },
  ]

  const filteredRoles = roles.filter((role) => role.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Manage Roles</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[80vh] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Shield className="h-5 w-5 text-purple-400" />
            Manage Roles
          </DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-between mb-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#b9bbbe]" />
            <Input
              placeholder="Search roles"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-[#202225] border-none text-white"
            />
          </div>

          <Button
            variant="outline"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-none hover:from-purple-700 hover:to-indigo-700 ml-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Role
          </Button>
        </div>

        <div className="text-xs text-[#b9bbbe] mb-2 flex items-center">
          <DragDropIcon className="h-4 w-4 mr-1" />
          Drag to reorder roles. Higher roles override lower roles.
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 mb-4">
          {filteredRoles.map((role, index) => (
            <div
              key={role.id}
              className="bg-[#2f3136] p-3 rounded-md flex items-center justify-between cursor-move hover:bg-[#42464d]"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-4 rounded-sm" style={{ backgroundColor: role.color }} />
                  <span className="font-medium" style={{ color: role.color !== "#747f8d" ? role.color : "inherit" }}>
                    {role.name}
                  </span>
                </div>
                <div className="text-xs text-[#b9bbbe]">{role.members} members</div>
              </div>
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full bg-transparent hover:bg-[#4f545c]"
                >
                  <Settings className="h-4 w-4 text-[#b9bbbe]" />
                  <span className="sr-only">Edit role</span>
                </Button>
                <ChevronRight className="h-4 w-4 text-[#b9bbbe]" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#2f3136] p-4 rounded-md text-sm">
          <h3 className="font-medium mb-2">Role Hierarchy</h3>
          <p className="text-[#b9bbbe]">
            Members with roles higher in the list can manage roles below them. Make sure to place administrative roles
            at the top.
          </p>
        </div>

        <DialogFooter className="flex justify-end gap-2 pt-4">
          <Button type="button" onClick={() => setOpen(false)} className="bg-[#5865F2] hover:bg-[#4752c4]">
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

