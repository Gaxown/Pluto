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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Flag, ShieldAlert } from "lucide-react"

export default function MessageReportModal() {
  const [open, setOpen] = useState(false)
  const [reportReason, setReportReason] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")

  const handleReport = () => {
    // Handle report logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Report Message</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Flag className="h-5 w-5 text-[#faa61a]" />
            Report Message
          </DialogTitle>
          <DialogDescription className="text-[#b9bbbe]">
            Your report will be sent to the server moderators for review.
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
                  This is the message that will be reported. It could contain inappropriate content.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Why are you reporting this message?</h3>
              <RadioGroup value={reportReason} onValueChange={setReportReason} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="illegal" id="illegal" />
                  <Label htmlFor="illegal">Illegal content</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="harassment" id="harassment" />
                  <Label htmlFor="harassment">Harassment or bullying</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="spam" id="spam" />
                  <Label htmlFor="spam">Spam or phishing links</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="self-harm" id="self-harm" />
                  <Label htmlFor="self-harm">Self-harm or suicide</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nsfw" id="nsfw" />
                  <Label htmlFor="nsfw">NSFW content</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional-info" className="text-sm font-medium">
                Additional Information (Optional)
              </Label>
              <Textarea
                id="additional-info"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Provide any additional context that will help moderators understand the issue..."
                className="bg-[#202225] border-none text-white min-h-[80px]"
              />
            </div>

            <div className="bg-[#302e2b] border-l-4 border-[#faa61a] p-3 rounded-md text-sm text-[#b9bbbe] flex items-start gap-2">
              <ShieldAlert className="h-5 w-5 text-[#faa61a] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium mb-1">Reports are anonymous</p>
                <p>
                  Server moderators won't know who submitted this report. Discord may use this information to improve
                  the platform.
                </p>
              </div>
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
            onClick={handleReport}
            disabled={!reportReason}
            className="bg-[#faa61a] hover:bg-[#e5981a] text-black flex items-center gap-2"
          >
            <Flag className="h-4 w-4" />
            Submit Report
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

