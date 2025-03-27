import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Download, X, ZoomIn, ZoomOut, RotateCw, Share2, ExternalLink, Trash2, Info } from "lucide-react"

export default function ImagePreviewModal() {
  const [open, setOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [showInfo, setShowInfo] = useState(false)

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))
  }

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360)
  }

  const handleDownload = () => {
    // Handle download logic here
    console.log("Downloading image")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Image Preview</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black/90 border-none overflow-hidden">
        <div className="relative w-full h-full flex flex-col">
          {/* Top toolbar */}
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
            <div className="text-white font-medium">image-example.png</div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={() => setShowInfo(!showInfo)}
              >
                <Info className="h-4 w-4" />
                <span className="sr-only">Image info</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>

          {/* Main image container */}
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <div
              className="relative transition-transform duration-200 ease-in-out"
              style={{
                transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            >
              <img
                src="/placeholder.svg?height=800&width=1200"
                alt="Preview"
                className="max-w-full max-h-[calc(90vh-120px)] object-contain"
              />
            </div>
          </div>

          {/* Bottom toolbar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center z-10 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.5}
              >
                <ZoomOut className="h-4 w-4" />
                <span className="sr-only">Zoom out</span>
              </Button>
              <div className="text-white text-xs bg-black/50 px-2 py-1 rounded">{Math.round(zoomLevel * 100)}%</div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
              >
                <ZoomIn className="h-4 w-4" />
                <span className="sr-only">Zoom in</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handleRotate}
              >
                <RotateCw className="h-4 w-4" />
                <span className="sr-only">Rotate</span>
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full bg-black/50 text-white hover:bg-black/70"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Open original</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full bg-black/50 text-white hover:bg-black/70"
              >
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4" />
                <span className="sr-only">Download</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full bg-black/50 text-red-400 hover:bg-black/70"
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>

          {/* Image info panel */}
          {showInfo && (
            <div className="absolute right-0 top-16 bottom-16 w-72 bg-[#2f3136] p-4 overflow-y-auto shadow-lg rounded-l-md">
              <h3 className="font-bold text-white mb-4">Image Information</h3>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-[#b9bbbe] mb-1">Name</div>
                  <div className="text-white">image-example.png</div>
                </div>

                <div>
                  <div className="text-[#b9bbbe] mb-1">Dimensions</div>
                  <div className="text-white">1920 × 1080 px</div>
                </div>

                <div>
                  <div className="text-[#b9bbbe] mb-1">Size</div>
                  <div className="text-white">2.4 MB</div>
                </div>

                <div>
                  <div className="text-[#b9bbbe] mb-1">Type</div>
                  <div className="text-white">PNG</div>
                </div>

                <div>
                  <div className="text-[#b9bbbe] mb-1">Uploaded by</div>
                  <div className="text-white">John Doe</div>
                </div>

                <div>
                  <div className="text-[#b9bbbe] mb-1">Uploaded on</div>
                  <div className="text-white">November 2, 2023 at 3:45 PM</div>
                </div>

                <div>
                  <div className="text-[#b9bbbe] mb-1">Channel</div>
                  <div className="text-white">#general</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

