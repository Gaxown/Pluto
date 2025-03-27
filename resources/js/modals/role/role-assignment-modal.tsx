import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Shield, Search, Users, Check, Filter } from "lucide-react"

export default function RoleAssignmentModal() {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("moderator")
  const [showOnlyUnassigned, setShowOnlyUnassigned] = useState(false)

  const roles = [
    { id: "admin", name: "Admin", color: "#f04747", members: 2 },
    { id: "moderator", name: "Moderator", color: "#faa61a", members: 5 },
    { id: "vip", name: "VIP", color: "#9b59b6", members: 8 },
    { id: "member", name: "Member", color: "#747f8d", members: 42 },
  ]

  const users = [
    { id: 1, name: "John Doe", avatar: "JD", roles: ["admin"], online: true },
    { id: 2, name: "Jane Smith", avatar: "JS", roles: ["moderator"], online: true },
    { id: 3, name: "Alex Johnson", avatar: "AJ", roles: ["vip"], online: false },
    { id: 4, name: "Taylor Wilson", avatar: "TW", roles: ["member"], online: true },
    { id: 5, name: "Casey Brown", avatar: "CB", roles: [], online: false },
    { id: 6, name: "Jordan Lee", avatar: "JL", roles: ["member"], online: false },
  ]

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = showOnlyUnassigned ? !user.roles.includes(selectedRole) : true
    return matchesSearch && matchesFilter
  })

  const handleToggleRole = (userId: number) => {
    // In a real app, this would update the user's roles
    console.log(`Toggle role ${selectedRole} for user ${userId}`)
  }

  const handleSave = () => {
    // Handle save logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Assign Roles</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[80vh] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-400" />
            Assign Roles
          </DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <label className="text-sm font-medium mb-1 block">Select Role to Assign</label>
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <Button
                  key={role.id}
                  variant="outline"
                  className={`border border-[#4f545c] ${
                    selectedRole === role.id ? "bg-[#4f545c]" : "bg-transparent hover:bg-[#4f545c]"
                  }`}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: role.color }} />
                  {role.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#b9bbbe]" />
            <Input
              placeholder="Search members"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-[#202225] border-none text-white"
            />
          </div>

          <div className="flex items-center ml-4">
            <Switch id="show-unassigned" checked={showOnlyUnassigned} onCheckedChange={setShowOnlyUnassigned} />
            <label htmlFor="show-unassigned" className="ml-2 text-sm">
              <Filter className="h-4 w-4 inline mr-1" />
              Unassigned only
            </label>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 mb-4 max-h-[calc(80vh-240px)]">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-[#2f3136] p-3 rounded-md flex items-center justify-between hover:bg-[#42464d]"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center">
                      <span className="text-sm font-bold">{user.avatar}</span>
                    </div>
                    <span
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#36393f] ${
                        user.online ? "bg-green-500" : "bg-gray-500"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-xs text-[#b9bbbe] flex flex-wrap gap-1">
                      {user.roles.length > 0 ? (
                        user.roles.map((roleId) => {
                          const role = roles.find((r) => r.id === roleId)
                          return role ? (
                            <span
                              key={roleId}
                              className="px-1.5 py-0.5 rounded-full text-[10px]"
                              style={{
                                backgroundColor: `${role.color}30`,
                                color: role.color,
                              }}
                            >
                              {role.name}
                            </span>
                          ) : null
                        })
                      ) : (
                        <span className="italic">No roles</span>
                      )}
                    </div>
                  </div>
                </div>
                <Switch checked={user.roles.includes(selectedRole)} onCheckedChange={() => handleToggleRole(user.id)} />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-40 text-center">
              <Users className="h-16 w-16 text-[#b9bbbe] mb-4" />
              <h3 className="text-lg font-medium">No members found</h3>
              <p className="text-[#b9bbbe] mt-2">
                {searchTerm ? "Try a different search term" : "No members match the current filters"}
              </p>
            </div>
          )}
        </div>

        <div className="bg-[#2f3136] p-4 rounded-md text-sm">
          <div className="flex items-center gap-2 mb-2">
            <Check className="h-4 w-4 text-green-400" />
            <h3 className="font-medium">Role Assignment</h3>
          </div>
          <p className="text-[#b9bbbe]">
            Members with the {roles.find((r) => r.id === selectedRole)?.name} role will have access to all permissions
            granted to that role.
          </p>
        </div>

        <DialogFooter className="flex justify-end gap-2 pt-4">
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

