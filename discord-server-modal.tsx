import type React from "react"

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { PlusIcon, Upload, X } from "lucide-react"

export default function DiscordServerModal() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<"create" | "template">("create")
  const [serverName, setServerName] = useState("")
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [template, setTemplate] = useState("gaming")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImagePreview(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle server creation logic here
    setOpen(false)
    setStep("create")
    setServerName("")
    setImagePreview(null)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-[#5865F2] text-white hover:bg-[#4752c4] rounded-full h-14 w-14 p-0">
          <PlusIcon className="h-7 w-7" />
          <span className="sr-only">Create a server</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#36393f] text-white border-none">
        {step === "create" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-bold">Create a server</DialogTitle>
              <DialogDescription className="text-center text-[#b9bbbe]">
                Your server is where you and your friends hang out. Make yours and start talking.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 py-4">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center overflow-hidden ${
                        imagePreview ? "" : "bg-[#5865F2]"
                      }`}
                    >
                      {imagePreview ? (
                        <>
                          <img
                            src={imagePreview || "/placeholder.svg"}
                            alt="Server icon preview"
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-0 right-0 bg-[#36393f] rounded-full p-1"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </>
                      ) : (
                        <Upload className="h-8 w-8 text-white" />
                      )}
                    </div>
                    <Input
                      id="server-image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    <Label htmlFor="server-image" className="absolute inset-0 cursor-pointer">
                      <span className="sr-only">Upload server image</span>
                    </Label>
                  </div>
                  <div className="w-full">
                    <Label htmlFor="server-name" className="text-xs font-bold text-[#b9bbbe] uppercase">
                      Server Name
                    </Label>
                    <Input
                      id="server-name"
                      value={serverName}
                      onChange={(e) => setServerName(e.target.value)}
                      placeholder="Enter server name"
                      className="bg-[#202225] border-none text-white mt-1"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter className="flex flex-col gap-2">
                <Button
                  type="button"
                  onClick={() => setStep("template")}
                  className="w-full bg-[#5865F2] hover:bg-[#4752c4]"
                >
                  Create
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  className="w-full bg-transparent text-white hover:bg-[#4f545c]"
                >
                  Cancel
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-bold">Tell us more about your server</DialogTitle>
              <DialogDescription className="text-center text-[#b9bbbe]">
                So we can help you set up your server, is your new server for just a few friends or a larger community?
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <RadioGroup value={template} onValueChange={setTemplate} className="gap-2">
                  <div
                    className={`flex items-center space-x-2 border border-[#4f545c] p-3 rounded-md cursor-pointer ${template === "friends" ? "bg-[#4f545c]" : ""}`}
                  >
                    <RadioGroupItem value="friends" id="friends" className="text-[#5865F2]" />
                    <Label htmlFor="friends" className="cursor-pointer w-full">
                      For me and my friends
                    </Label>
                  </div>
                  <div
                    className={`flex items-center space-x-2 border border-[#4f545c] p-3 rounded-md cursor-pointer ${template === "gaming" ? "bg-[#4f545c]" : ""}`}
                  >
                    <RadioGroupItem value="gaming" id="gaming" className="text-[#5865F2]" />
                    <Label htmlFor="gaming" className="cursor-pointer w-full">
                      Gaming community
                    </Label>
                  </div>
                  <div
                    className={`flex items-center space-x-2 border border-[#4f545c] p-3 rounded-md cursor-pointer ${template === "club" ? "bg-[#4f545c]" : ""}`}
                  >
                    <RadioGroupItem value="club" id="club" className="text-[#5865F2]" />
                    <Label htmlFor="club" className="cursor-pointer w-full">
                      Club or community
                    </Label>
                  </div>
                  <div
                    className={`flex items-center space-x-2 border border-[#4f545c] p-3 rounded-md cursor-pointer ${template === "study" ? "bg-[#4f545c]" : ""}`}
                  >
                    <RadioGroupItem value="study" id="study" className="text-[#5865F2]" />
                    <Label htmlFor="study" className="cursor-pointer w-full">
                      Study group
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <DialogFooter className="flex flex-col gap-2">
                <Button type="submit" className="w-full bg-[#5865F2] hover:bg-[#4752c4]">
                  Create Server
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep("create")}
                  className="w-full bg-transparent text-white hover:bg-[#4f545c]"
                >
                  Back
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

