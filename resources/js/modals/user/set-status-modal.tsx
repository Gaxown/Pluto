import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Clock, Smile, Moon, Dot, CheckCircle2, MinusCircle, XCircle, Timer } from "lucide-react"

export default function SetStatusModal() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState("online")
  const [customStatus, setCustomStatus] = useState("")
  const [clearAfter, setClearAfter] = useState("")

  const statusIcons = {
    online: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    idle: <MinusCircle className="h-4 w-4 text-yellow-500" />,
    dnd: <XCircle className="h-4 w-4 text-red-500" />,
    invisible: <Dot className="h-4 w-4 text-gray-500" />,
  }

  const statusLabels = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    invisible: "Invisible",
  }

  const clearOptions = [
    { value: "1h", label: "1 hour" },
    { value: "4h", label: "4 hours" },
    { value: "today", label: "Today" },
    { value: "never", label: "Don't clear" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle status update logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Set Status</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] bg-[#36393f] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Set Status</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Online Status</Label>
              <RadioGroup value={status} onValueChange={setStatus} className="grid grid-cols-2 gap-2">
                {Object.entries(statusLabels).map(([key, label]) => (
                  <div
                    key={key}
                    className={`flex items-center space-x-2 border border-[#4f545c] p-3 rounded-md cursor-pointer ${
                      status === key ? "bg-[#4f545c]" : ""
                    }`}
                  >
                    <RadioGroupItem value={key} id={key} className="sr-only" />
                    <Label htmlFor={key} className="flex items-center gap-2 cursor-pointer w-full">
                      {statusIcons[key as keyof typeof statusIcons]}
                      <span>{label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2 pt-2">
              <Label htmlFor="custom-status" className="text-sm font-medium flex items-center gap-2">
                <Smile className="h-4 w-4" />
                Custom Status
              </Label>
              <Input
                id="custom-status"
                value={customStatus}
                onChange={(e) => setCustomStatus(e.target.value)}
                className="bg-[#202225] border-none text-white"
                placeholder="What's happening?"
                maxLength={128}
              />
              {customStatus && <div className="text-xs text-[#b9bbbe] flex justify-end">{customStatus.length}/128</div>}
            </div>

            <div className="space-y-2 pt-2">
              <Label htmlFor="clear-after" className="text-sm font-medium flex items-center gap-2">
                <Timer className="h-4 w-4" />
                Clear After
              </Label>
              <RadioGroup value={clearAfter} onValueChange={setClearAfter} className="grid grid-cols-2 gap-2">
                {clearOptions.map((option) => (
                  <div
                    key={option.value}
                    className={`flex items-center space-x-2 border border-[#4f545c] p-2 rounded-md cursor-pointer ${
                      clearAfter === option.value ? "bg-[#4f545c]" : ""
                    }`}
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                    <Label htmlFor={option.value} className="flex items-center gap-2 cursor-pointer w-full text-sm">
                      {option.value === "1h" || option.value === "4h" ? (
                        <Clock className="h-3 w-3" />
                      ) : option.value === "today" ? (
                        <Moon className="h-3 w-3" />
                      ) : (
                        <Dot className="h-3 w-3" />
                      )}
                      <span>{option.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
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
            <Button type="submit" className="bg-[#5865F2] hover:bg-[#4752c4]">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

