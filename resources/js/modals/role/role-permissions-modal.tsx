"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Check,
  X,
  MessageSquare,
  Headphones,
  Video,
  Users,
  Settings,
  Server,
  Bot,
  Mic,
  Eye,
  PenSquare,
  Link,
  FileText,
  AtSign,
} from "lucide-react"

export default function RolePermissionsModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Role Permissions</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] h-[80vh] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#faa61a]" />
            Role Permissions: Moderator
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4 bg-[#2f3136]">
            <TabsTrigger value="general" className="data-[state=active]:bg-[#5865F2]">
              <Server className="h-4 w-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger value="text" className="data-[state=active]:bg-[#5865F2]">
              <MessageSquare className="h-4 w-4 mr-2" />
              Text
            </TabsTrigger>
            <TabsTrigger value="voice" className="data-[state=active]:bg-[#5865F2]">
              <Headphones className="h-4 w-4 mr-2" />
              Voice
            </TabsTrigger>
            <TabsTrigger value="advanced" className="data-[state=active]:bg-[#5865F2]">
              <Settings className="h-4 w-4 mr-2" />
              Advanced
            </TabsTrigger>
          </TabsList>

          <div className="h-[calc(80vh-180px)] overflow-y-auto pr-2">
            <TabsContent value="general" className="space-y-4">
              <div className="bg-[#2f3136] p-3 rounded-md">
                <h3 className="font-medium mb-3 text-[#b9bbbe] uppercase text-xs">General Server Permissions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-[#b9bbbe]" />
                        <span>View Channels</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to view channels by default</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Manage Channels</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">
                        Allows members to create, edit, and delete channels
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Kick Members</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">
                        Allows members to remove other members from the server
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Ban Members</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to permanently ban other members</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#2f3136] p-3 rounded-md">
                <h3 className="font-medium mb-3 text-[#b9bbbe] uppercase text-xs">Membership Permissions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Create Invite</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">
                        Allows members to invite new people to the server
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Change Nickname</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to change their own nickname</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Manage Nicknames</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">
                        Allows members to change nicknames of other members
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="text" className="space-y-4">
              <div className="bg-[#2f3136] p-3 rounded-md">
                <h3 className="font-medium mb-3 text-[#b9bbbe] uppercase text-xs">Text Channel Permissions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-[#b9bbbe]" />
                        <span>View Channel</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to view text channels</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Send Messages</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">
                        Allows members to send messages in text channels
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <PenSquare className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Manage Messages</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to delete or pin messages</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Link className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Embed Links</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to embed links in their messages</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Attach Files</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to upload files</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <AtSign className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Mention @everyone</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to mention all members at once</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <Check className="h-4 w-4 opacity-50" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-red-600 hover:bg-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="voice" className="space-y-4">
              <div className="bg-[#2f3136] p-3 rounded-md">
                <h3 className="font-medium mb-3 text-[#b9bbbe] uppercase text-xs">Voice Channel Permissions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Headphones className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Connect</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to join voice channels</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Mic className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Speak</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to speak in voice channels</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Video</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to share their video</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Mic className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Mute Members</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to mute other members</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Headphones className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Deafen Members</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to deafen other members</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Move Members</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">
                        Allows members to move other members between voice channels
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <div className="bg-[#2f3136] p-3 rounded-md">
                <h3 className="font-medium mb-3 text-[#b9bbbe] uppercase text-xs">Advanced Permissions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Administrator</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">
                        Members with this permission have every permission and bypass channel-specific permissions
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <Check className="h-4 w-4 opacity-50" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-red-600 hover:bg-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Manage Server</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">
                        Allows members to change the server name and region
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <Check className="h-4 w-4 opacity-50" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-red-600 hover:bg-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-[#b9bbbe]" />
                        <span>Manage Roles</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">
                        Allows members to create and edit roles below their highest role
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <Check className="h-4 w-4 opacity-50" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-red-600 hover:bg-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-[#b9bbbe]" />
                        <span>View Audit Log</span>
                      </div>
                      <div className="text-xs text-[#b9bbbe] ml-6">Allows members to view the server's audit log</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full bg-[#4f545c] hover:bg-[#5d6269]"
                      >
                        <X className="h-4 w-4 opacity-50" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
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
          <Button type="button" onClick={() => setOpen(false)} className="bg-[#5865F2] hover:bg-[#4752c4]">
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

