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
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Trash2, AlertTriangle } from "lucide-react"

export default function DeleteMessageModal() {
  const [open, setOpen] = useState(false)
  const [reportMessage, setReportMessage] = useState(false)

  const handleDelete = () => {
    // Handle delete logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Delete Message</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2 text-[#f23f42]">
            <Trash2 className="h-5 w-5" />
            Delete Message
          </DialogTitle>
          <DialogDescription className="text-[#b9bbbe]">
            Are you sure you want to delete this message?
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="bg-[#2f3136] p-4 rounded-md mb-4">
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
                  This is the message that will be deleted. It could be a longer message with multiple lines of text.
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="report-message"
              checked={reportMessage}
              onCheckedChange={(checked) => setReportMessage(checked as boolean)}
            />
            <Label htmlFor="report-message">Report message to server moderators</Label>
          </div>

          <div className="mt-4 bg-[#332a2d] border-l-4 border-[#f23f42] p-3 rounded-md text-sm text-[#b9bbbe] flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-[#f23f42] shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-medium mb-1">This action cannot be undone</p>
              <p>This message will be permanently deleted. You cannot restore it later.</p>
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
            onClick={handleDelete}
            className="bg-[#f23f42] hover:bg-[#da373c] flex items-center gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

