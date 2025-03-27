import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { PenSquare, AtSign, Smile, Paperclip, Image, Sticker, Gift } from "lucide-react"

export default function EditMessageModal() {
  const [open, setOpen] = useState(false)
  const [messageContent, setMessageContent] = useState(
    "This is the original message that will be edited. It could be a longer message with multiple lines of text.",
  )

  const handleSave = () => {
    // Handle save logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Message</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <PenSquare className="h-5 w-5 text-blue-400" />
            Edit Message
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0">
              <span className="text-sm font-bold">JD</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">John Doe</span>
                <span className="text-xs text-[#b9bbbe]">Today at 12:34 PM</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Textarea
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              className="min-h-[120px] bg-[#40444b] border-none text-white resize-none p-3 pr-12"
              placeholder="Edit your message..."
            />
            <div className="absolute right-3 bottom-3">
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-transparent hover:bg-[#4f545c]">
                <Smile className="h-5 w-5 text-[#b9bbbe] hover:text-white" />
                <span className="sr-only">Add emoji</span>
              </Button>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-transparent hover:bg-[#4f545c]">
                <Paperclip className="h-4 w-4 text-[#b9bbbe] hover:text-white" />
                <span className="sr-only">Attach file</span>
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-transparent hover:bg-[#4f545c]">
                <Image className="h-4 w-4 text-[#b9bbbe] hover:text-white" />
                <span className="sr-only">Upload image</span>
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-transparent hover:bg-[#4f545c]">
                <Sticker className="h-4 w-4 text-[#b9bbbe] hover:text-white" />
                <span className="sr-only">Add sticker</span>
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-transparent hover:bg-[#4f545c]">
                <Gift className="h-4 w-4 text-[#b9bbbe] hover:text-white" />
                <span className="sr-only">Add gift</span>
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-transparent hover:bg-[#4f545c]">
                <AtSign className="h-4 w-4 text-[#b9bbbe] hover:text-white" />
                <span className="sr-only">Mention</span>
              </Button>
            </div>

            <div className="text-xs text-[#b9bbbe]">
              escape to <span className="text-blue-400">cancel</span> • enter to{" "}
              <span className="text-blue-400">save</span>
            </div>
          </div>

          <div className="mt-4 text-xs text-[#b9bbbe]">
            <span className="text-white font-medium">Tip:</span> When editing, others can see that the message has been
            edited.
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
          <Button type="button" onClick={handleSave} className="bg-[#5865F2] hover:bg-[#4752c4]">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

