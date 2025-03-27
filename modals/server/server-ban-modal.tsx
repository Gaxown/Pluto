"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { BanIcon, Search, AlertTriangle } from "lucide-react"

export default function ServerBanModal() {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const [deleteMessages, setDeleteMessages] = useState("none")
  const [reason, setReason] = useState("")
  const [notifyUser, setNotifyUser] = useState(true)

  const users = [
    { id: "1", name: "Alex Johnson", avatar: "AJ", status: "online" },
    { id: "2", name: "Jamie Smith", avatar: "JS", status: "offline" },
    { id: "3", name: "Taylor Wilson", avatar: "TW", status: "idle" },
    { id: "4", name: "Jordan Lee", avatar: "JL", status: "dnd" },
    { id: "5", name: "Casey Brown", avatar: "CB", status: "online" },
  ]

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleBan = () => {
    // Handle ban logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Ban User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-[#36393f] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2 text-[#f23f42]">
            <BanIcon className="h-5 w-5" />
            Ban Member
          </DialogTitle>
          <DialogDescription className="text-[#b9bbbe]">
            Banned members cannot rejoin this server unless they are unbanned.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="search-user" className="text-sm font-medium">
              Select Member to Ban
            </Label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#b9bbbe]" />
              <Input
                id="search-user"
                placeholder="Search for a user..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 bg-[#202225] border-none text-white"
              />
            </div>

            <div className="mt-2 max-h-[200px] overflow-y-auto space-y-1 bg-[#2f3136] rounded-md p-1">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className={`flex items-center p-2 rounded-md cursor-pointer ${
                      selectedUser === user.id ? "bg-[#4f545c]" : "hover:bg-[#42464d]"
                    }`}
                    onClick={() => setSelectedUser(user.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center relative">
                        <span className="text-xs font-bold">{user.avatar}</span>
                        <span
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#36393f] ${
                            user.status === "online"
                              ? "bg-green-500"
                              : user.status === "idle"
                                ? "bg-yellow-500"
                                : user.status === "dnd"
                                  ? "bg-red-500"
                                  : "bg-gray-500"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-[#b9bbbe] capitalize">{user.status}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-[#b9bbbe]">No users found</div>
              )}
            </div>
          </div>

          {selectedUser && (
            <>
              <div className="space-y-2">
                <Label htmlFor="delete-messages" className="text-sm font-medium">
                  Delete Message History
                </Label>
                <RadioGroup
                  id="delete-messages"
                  value={deleteMessages}
                  onValueChange={setDeleteMessages}
                  className="space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">Don't delete any messages</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hour" id="hour" />
                    <Label htmlFor="hour">Previous hour</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="day" id="day" />
                    <Label htmlFor="day">Previous 24 hours</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="week" id="week" />
                    <Label htmlFor="week">Previous 7 days</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ban-reason" className="text-sm font-medium">
                  Reason for Ban (Optional)
                </Label>
                <Textarea
                  id="ban-reason"
                  placeholder="Enter a reason..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="bg-[#202225] border-none text-white min-h-[80px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="notify-user"
                  checked={notifyUser}
                  onCheckedChange={(checked) => setNotifyUser(checked as boolean)}
                />
                <Label htmlFor="notify-user">Notify user that they were banned</Label>
              </div>

              <div className="bg-[#2f3136] p-3 rounded-md text-sm text-[#b9bbbe] flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-[#faa61a] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">This is a permanent action</p>
                  <p>
                    Banned users will not be able to rejoin unless you manually unban them later. Make sure this is what
                    you want to do.
                  </p>
                </div>
              </div>
            </>
          )}
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
            onClick={handleBan}
            disabled={!selectedUser}
            className="bg-[#f23f42] hover:bg-[#da373c] flex items-center gap-2"
          >
            <BanIcon className="h-4 w-4" />
            Ban Member
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

