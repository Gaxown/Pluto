"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Upload, File, X, Image, FileText, Film, Music, Archive, AlertTriangle } from "lucide-react"

export default function FileUploadModal() {
  const [open, setOpen] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [comment, setComment] = useState("")
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const getFileIcon = (file: File) => {
    const type = file.type.split("/")[0]
    switch (type) {
      case "image":
        return <Image className="h-6 w-6 text-blue-400" />
      case "video":
        return <Film className="h-6 w-6 text-purple-400" />
      case "audio":
        return <Music className="h-6 w-6 text-green-400" />
      case "application":
        if (file.type.includes("zip") || file.type.includes("rar") || file.type.includes("tar")) {
          return <Archive className="h-6 w-6 text-yellow-400" />
        }
        return <FileText className="h-6 w-6 text-orange-400" />
      default:
        return <File className="h-6 w-6 text-gray-400" />
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleUpload = () => {
    if (files.length === 0) return

    setUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setUploading(false)
            setFiles([])
            setComment("")
            setOpen(false)
          }, 500)
          return 100
        }
        return prev + 5
      })
    }, 200)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">File Upload</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Upload className="h-5 w-5 text-green-400" />
            Upload Files
          </DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-4">
          {!uploading ? (
            <>
              <div
                className="border-2 border-dashed border-[#4f545c] rounded-md p-8 text-center cursor-pointer hover:bg-[#4f545c]/10 transition-colors"
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <Upload className="h-10 w-10 text-[#b9bbbe] mx-auto mb-4" />
                <h3 className="font-medium mb-2">Drag & drop files here or click to browse</h3>
                <p className="text-sm text-[#b9bbbe]">Upload files to share in this channel</p>
                <Input ref={fileInputRef} type="file" multiple className="hidden" onChange={handleFileChange} />
              </div>

              {files.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-medium">Selected Files ({files.length})</h3>
                  <div className="max-h-[200px] overflow-y-auto space-y-2 pr-2">
                    {files.map((file, index) => (
                      <div key={index} className="bg-[#2f3136] p-3 rounded-md flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {getFileIcon(file)}
                          <div>
                            <div className="font-medium truncate max-w-[300px]">{file.name}</div>
                            <div className="text-xs text-[#b9bbbe]">{formatFileSize(file.size)}</div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 rounded-full hover:bg-[#4f545c]"
                          onClick={() => removeFile(index)}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove file</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <h3 className="font-medium">Add a Comment (Optional)</h3>
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment about these files..."
                  className="bg-[#202225] border-none text-white min-h-[80px]"
                />
              </div>

              <div className="bg-[#2f3136] p-3 rounded-md text-sm flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">File upload limits</p>
                  <p className="text-[#b9bbbe]">
                    Maximum file size: 25MB for free users, 100MB for Nitro users. Supported formats: Images, videos,
                    audio, documents, and more.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="py-8 space-y-4">
              <h3 className="font-medium text-center">
                Uploading {files.length} {files.length === 1 ? "file" : "files"}
              </h3>
              <Progress value={uploadProgress} className="h-2 bg-[#4f545c]" indicatorClassName="bg-green-500" />
              <p className="text-center text-sm text-[#b9bbbe]">{uploadProgress}% complete</p>
            </div>
          )}
        </div>

        <DialogFooter className="flex sm:justify-between gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="bg-transparent text-white hover:bg-[#4f545c]"
            disabled={uploading}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleUpload}
            className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
            disabled={files.length === 0 || uploading}
          >
            <Upload className="h-4 w-4" />
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

