"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, X, User, AtSign, FileText, Palette } from "lucide-react"

export default function EditProfileModal() {
  const [open, setOpen] = useState(false)
  const [bannerPreview, setBannerPreview] = useState<string | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [accentColor, setAccentColor] = useState("#5865F2")

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatarPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setBannerPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeAvatar = () => {
    setAvatarPreview(null)
  }

  const removeBanner = () => {
    setBannerPreview(null)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-[#36393f] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Edit Profile</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="user-profile" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4 bg-[#2f3136]">
            <TabsTrigger value="user-profile" className="data-[state=active]:bg-[#5865F2]">
              User Profile
            </TabsTrigger>
            <TabsTrigger value="profile-customization" className="data-[state=active]:bg-[#5865F2]">
              Customization
            </TabsTrigger>
          </TabsList>
          <TabsContent value="user-profile" className="space-y-4">
            <div className="relative h-32 w-full rounded-lg overflow-hidden bg-[#202225]">
              {bannerPreview ? (
                <>
                  <img
                    src={bannerPreview || "/placeholder.svg"}
                    alt="Banner preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeBanner}
                    className="absolute top-2 right-2 bg-[#36393f] rounded-full p-1"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <Label
                    htmlFor="banner-image"
                    className="cursor-pointer flex items-center gap-2 bg-[#4f545c] px-3 py-2 rounded-md hover:bg-[#5d6269]"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Upload Banner</span>
                  </Label>
                </div>
              )}
              <Input id="banner-image" type="file" accept="image/*" className="hidden" onChange={handleBannerUpload} />
            </div>

            <div className="flex items-end gap-4 -mt-10 ml-4 z-10 relative">
              <div className="relative">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center overflow-hidden border-4 border-[#36393f] ${
                    avatarPreview ? "" : "bg-[#5865F2]"
                  }`}
                >
                  {avatarPreview ? (
                    <img
                      src={avatarPreview || "/placeholder.svg"}
                      alt="Avatar preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="h-8 w-8 text-white" />
                  )}
                </div>
                <Input
                  id="avatar-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarUpload}
                />
                <Label htmlFor="avatar-image" className="absolute inset-0 cursor-pointer rounded-full">
                  <span className="sr-only">Upload avatar</span>
                </Label>
                {avatarPreview && (
                  <button
                    type="button"
                    onClick={removeAvatar}
                    className="absolute -top-1 -right-1 bg-[#36393f] rounded-full p-1"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="display-name" className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Display Name
                </Label>
                <Input id="display-name" placeholder="Display Name" className="bg-[#202225] border-none text-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium flex items-center gap-2">
                  <AtSign className="h-4 w-4" />
                  Username
                </Label>
                <Input id="username" placeholder="Username" className="bg-[#202225] border-none text-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="about-me" className="text-sm font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  About Me
                </Label>
                <Textarea
                  id="about-me"
                  placeholder="Tell us about yourself..."
                  className="bg-[#202225] border-none text-white min-h-[100px]"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="profile-customization" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="accent-color" className="text-sm font-medium flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Profile Accent Color
              </Label>
              <div className="flex items-center gap-4">
                <Input
                  id="accent-color"
                  type="color"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="w-12 h-12 p-1 bg-transparent border-none rounded-md overflow-hidden"
                />
                <div className="text-sm">{accentColor}</div>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <Label className="text-sm font-medium">Profile Preview</Label>
              <div className="rounded-md overflow-hidden border border-[#4f545c]">
                <div
                  className="h-24 w-full"
                  style={{
                    backgroundColor: bannerPreview ? "transparent" : accentColor,
                    backgroundImage: bannerPreview ? `url(${bannerPreview})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="bg-[#2f3136] p-4 pt-10 relative">
                  <div
                    className="absolute -top-10 left-4 w-16 h-16 rounded-full border-4 border-[#2f3136] overflow-hidden"
                    style={{ backgroundColor: avatarPreview ? "transparent" : accentColor }}
                  >
                    {avatarPreview ? (
                      <img
                        src={avatarPreview || "/placeholder.svg"}
                        alt="Avatar preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="font-bold">Display Name</div>
                  <div className="text-sm text-[#b9bbbe]">username</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter className="flex sm:justify-between gap-2">
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

