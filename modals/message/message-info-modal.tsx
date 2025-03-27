import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Info,
  Clock,
  Link,
  Copy,
  Check,
  Share2,
  Flag,
  Trash2,
  PenSquare,
  MessageSquare,
  User,
  Hash,
} from "lucide-react"

export default function MessageInfoModal() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://discord.com/channels/123456789/987654321/123987456")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopyId = () => {
    navigator.clipboard.writeText("123987456")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Message Info</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-400" />
            Message Information
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4 bg-[#2f3136]">
            <TabsTrigger value="details" className="data-[state=active]:bg-[#5865F2]">
              <Info className="h-4 w-4 mr-2" />
              Details
            </TabsTrigger>
            <TabsTrigger value="actions" className="data-[state=active]:bg-[#5865F2]">
              <MessageSquare className="h-4 w-4 mr-2" />
              Actions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <div className="bg-[#2f3136] p-4 rounded-md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold">JD</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">John Doe</span>
                    <span className="text-xs text-[#b9bbbe]">Today at 12:34 PM</span>
                  </div>
                  <div className="mt-1">
                    This is the message content. It could be a longer message with multiple lines of text.
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-[#2f3136] rounded-md">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-[#b9bbbe]" />
                  <span>Author</span>
                </div>
                <div className="text-[#b9bbbe]">John Doe</div>
              </div>

              <div className="flex items-center justify-between p-2 bg-[#2f3136] rounded-md">
                <div className="flex items-center gap-2">
                  <Hash className="h-4 w-4 text-[#b9bbbe]" />
                  <span>Channel</span>
                </div>
                <div className="text-[#b9bbbe]">#general</div>
              </div>

              <div className="flex items-center justify-between p-2 bg-[#2f3136] rounded-md">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#b9bbbe]" />
                  <span>Sent</span>
                </div>
                <div className="text-[#b9bbbe]">Today at 12:34 PM</div>
              </div>

              <div className="flex items-center justify-between p-2 bg-[#2f3136] rounded-md">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-[#b9bbbe]" />
                  <span>Message ID</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 text-[#b9bbbe] hover:text-white hover:bg-[#4f545c] flex items-center gap-1"
                  onClick={handleCopyId}
                >
                  <span className="text-xs">123987456</span>
                  {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </Button>
              </div>

              <div className="flex items-center justify-between p-2 bg-[#2f3136] rounded-md">
                <div className="flex items-center gap-2">
                  <Link className="h-4 w-4 text-[#b9bbbe]" />
                  <span>Message Link</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 text-[#b9bbbe] hover:text-white hover:bg-[#4f545c] flex items-center gap-1"
                  onClick={handleCopyLink}
                >
                  <span className="text-xs">Copy Link</span>
                  {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="actions" className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="bg-transparent text-white hover:bg-[#4f545c] flex items-center gap-2 justify-start"
              >
                <PenSquare className="h-4 w-4 text-blue-400" />
                Edit Message
              </Button>

              <Button
                variant="outline"
                className="bg-transparent text-white hover:bg-[#4f545c] flex items-center gap-2 justify-start"
              >
                <Share2 className="h-4 w-4 text-green-400" />
                Share Message
              </Button>

              <Button
                variant="outline"
                className="bg-transparent text-white hover:bg-[#4f545c] flex items-center gap-2 justify-start"
              >
                <MessageSquare className="h-4 w-4 text-purple-400" />
                Reply
              </Button>

              <Button
                variant="outline"
                className="bg-transparent text-white hover:bg-[#4f545c] flex items-center gap-2 justify-start"
              >
                <Link className="h-4 w-4 text-blue-400" />
                Copy Link
              </Button>

              <Button
                variant="outline"
                className="bg-transparent text-[#faa61a] hover:bg-[#faa61a] hover:text-white flex items-center gap-2 justify-start"
              >
                <Flag className="h-4 w-4" />
                Report Message
              </Button>

              <Button
                variant="outline"
                className="bg-transparent text-[#f23f42] hover:bg-[#f23f42] hover:text-white flex items-center gap-2 justify-start"
              >
                <Trash2 className="h-4 w-4" />
                Delete Message
              </Button>
            </div>

            <div className="text-xs text-[#b9bbbe] mt-2">
              <p>Some actions may not be available depending on your permissions and the message author.</p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

