import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Search,
  Plus,
  Check,
  X,
  MessageSquare,
  PenTool,
  AtSign,
  Link,
  FileText,
  Upload,
  Headphones,
  Video,
  Mic,
} from "lucide-react"

export default function ChannelPermissionsModal() {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("everyone")

  const roles = [
    { id: "everyone", name: "@everyone", color: "#99aab5" },
    { id: "admin", name: "Admin", color: "#f04747" },
    { id: "moderator", name: "Moderator", color: "#faa61a" },
    { id: "member", name: "Member", color: "#43b581" },
  ]

  const permissions = [
    {
      category: "General Channel Permissions",
      items: [
        { id: "view_channel", name: "View Channel", icon: <MessageSquare className="h-4 w-4" />, value: true },
        {
          id: "manage_channel",
          name: "Manage Channel",
          icon: <PenTool className="h-4 w-4" />,
          value: selectedRole === "admin" || selectedRole === "moderator",
        },
      ],
    },
    {
      category: "Text Channel Permissions",
      items: [
        { id: "send_messages", name: "Send Messages", icon: <MessageSquare className="h-4 w-4" />, value: true },
        { id: "embed_links", name: "Embed Links", icon: <Link className="h-4 w-4" />, value: true },
        { id: "attach_files", name: "Attach Files", icon: <FileText className="h-4 w-4" />, value: true },
        { id: "add_reactions", name: "Add Reactions", icon: <AtSign className="h-4 w-4" />, value: true },
        {
          id: "manage_messages",
          name: "Manage Messages",
          icon: <PenTool className="h-4 w-4" />,
          value: selectedRole === "admin" || selectedRole === "moderator",
        },
        { id: "upload_files", name: "Upload Files", icon: <Upload className="h-4 w-4" />, value: true },
      ],
    },
    {
      category: "Voice Channel Permissions",
      items: [
        { id: "connect", name: "Connect", icon: <Headphones className="h-4 w-4" />, value: true },
        { id: "speak", name: "Speak", icon: <Mic className="h-4 w-4" />, value: true },
        { id: "video", name: "Video", icon: <Video className="h-4 w-4" />, value: true },
        {
          id: "mute_members",
          name: "Mute Members",
          icon: <Mic className="h-4 w-4" />,
          value: selectedRole === "admin" || selectedRole === "moderator",
        },
      ],
    },
  ]

  const filteredRoles = roles.filter((role) => role.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const [permissionState, setPermissionState] = useState(permissions)

  const handlePermissionChange = (categoryIndex: number, itemIndex: number, value: boolean) => {
    const newPermissions = [...permissionState]
    newPermissions[categoryIndex].items[itemIndex].value = value
    setPermissionState(newPermissions)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Channel Permissions</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[900px] h-[80vh] p-0 bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none overflow-hidden">
        <div className="flex h-full">
          <div className="w-60 bg-[#2f3136] p-4 overflow-y-auto border-r border-[#42464d]">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-xl font-bold flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Permissions
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#b9bbbe]" />
                <Input
                  placeholder="Search roles"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 bg-[#202225] border-none text-white"
                />
              </div>

              <div className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-between text-[#dcddde] hover:bg-[#42464d] hover:text-white"
                >
                  <span className="flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Role/Member
                  </span>
                </Button>

                <div className="pt-2 mt-2 border-t border-[#42464d]">
                  {filteredRoles.map((role) => (
                    <Button
                      key={role.id}
                      variant="ghost"
                      className={`w-full justify-between text-[#dcddde] hover:bg-[#42464d] hover:text-white ${
                        selectedRole === role.id ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white" : ""
                      }`}
                      onClick={() => setSelectedRole(role.id)}
                    >
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: role.color }} />
                        {role.name}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-[#42464d] flex items-center justify-between">
              <div className="flex items-center">
                <span
                  className="w-4 h-4 rounded-full mr-2"
                  style={{
                    backgroundColor: roles.find((r) => r.id === selectedRole)?.color || "#99aab5",
                  }}
                />
                <h2 className="text-lg font-bold">{roles.find((r) => r.id === selectedRole)?.name || "@everyone"}</h2>
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
              <div className="space-y-8">
                {permissionState.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-4">
                    <h3 className="font-medium text-[#b9bbbe] uppercase text-xs">{category.category}</h3>

                    <div className="space-y-2">
                      {category.items.map((permission, itemIndex) => (
                        <div
                          key={permission.id}
                          className="flex items-center justify-between p-3 bg-[#2f3136] rounded-md hover:bg-[#42464d]"
                        >
                          <div className="flex items-center gap-2">
                            {permission.icon}
                            <span>{permission.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`h-8 w-8 p-0 rounded-full ${
                                permission.value ? "bg-green-600 hover:bg-green-700" : "bg-[#4f545c] hover:bg-[#5d6269]"
                              }`}
                              onClick={() => handlePermissionChange(categoryIndex, itemIndex, true)}
                            >
                              <Check className={`h-4 w-4 ${permission.value ? "opacity-100" : "opacity-50"}`} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`h-8 w-8 p-0 rounded-full ${
                                !permission.value ? "bg-red-600 hover:bg-red-700" : "bg-[#4f545c] hover:bg-[#5d6269]"
                              }`}
                              onClick={() => handlePermissionChange(categoryIndex, itemIndex, false)}
                            >
                              <X className={`h-4 w-4 ${!permission.value ? "opacity-100" : "opacity-50"}`} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
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
              <Button
                onClick={() => setOpen(false)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

