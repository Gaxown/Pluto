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
import { AlertTriangle, Check, X } from "lucide-react"

export default function ConfirmationModal() {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    // Handle confirmation logic here
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Confirmation Modal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
            Confirm Action
          </DialogTitle>
          <DialogDescription className="text-[#b9bbbe]">
            Are you sure you want to perform this action?
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="bg-[#2f3136] p-4 rounded-md">
            <p className="text-sm">This action cannot be undone. Please make sure you want to proceed.</p>
          </div>
        </div>

        <DialogFooter className="flex sm:justify-between gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="bg-transparent text-white hover:bg-[#4f545c] flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleConfirm}
            className="bg-[#5865F2] hover:bg-[#4752c4] flex items-center gap-2"
          >
            <Check className="h-4 w-4" />
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

