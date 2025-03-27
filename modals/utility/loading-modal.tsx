"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Loader2 } from "lucide-react"

export default function LoadingModal() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")

  useEffect(() => {
    if (open) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setOpen(false)
            return 100
          }

          // Update loading text based on progress
          if (prev < 20) {
            setLoadingText("Initializing...")
          } else if (prev < 40) {
            setLoadingText("Connecting to server...")
          } else if (prev < 60) {
            setLoadingText("Loading resources...")
          } else if (prev < 80) {
            setLoadingText("Preparing data...")
          } else {
            setLoadingText("Almost done...")
          }

          return prev + 5
        })
      }, 300)

      return () => clearInterval(interval)
    }
  }, [open])

  const handleOpen = () => {
    setProgress(0)
    setLoadingText("Initializing...")
    setOpen(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={handleOpen}>
          Loading Modal
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <div className="py-8 flex flex-col items-center justify-center">
          <div className="mb-6 relative">
            <div className="w-24 h-24 rounded-full border-4 border-[#5865F2] border-opacity-20 flex items-center justify-center">
              <Loader2 className="h-12 w-12 text-[#5865F2] animate-spin" />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#5865F2] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {Math.round(progress)}%
            </div>
          </div>

          <h3 className="text-lg font-bold mb-2">Loading</h3>
          <p className="text-[#b9bbbe] text-center mb-4">{loadingText}</p>

          <div className="w-full max-w-xs">
            <Progress value={progress} className="h-2 bg-[#4f545c]" indicatorClassName="bg-[#5865F2]" />
          </div>

          <p className="text-xs text-[#b9bbbe] mt-4">This may take a moment. Please don't close this window.</p>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen(false)}
            className="mt-6 bg-transparent text-white hover:bg-[#4f545c]"
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

