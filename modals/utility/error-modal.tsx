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
import { XCircle, RefreshCw, Copy, Check } from "lucide-react"

export default function ErrorModal() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const errorCode = "ERR_CONNECTION_REFUSED"
  const errorMessage = "Could not connect to the server. Please check your internet connection and try again."
  const errorDetails =
    "Error occurred at: 2023-11-01T14:30:45.123Z\nEndpoint: https://api.discord.com/v9/users\nRequest ID: 7f8a9b2c-3d4e-5f6g-7h8i-9j0k1l2m3n4o"

  const handleRetry = () => {
    // Handle retry logic here
    setOpen(false)
  }

  const handleCopyError = () => {
    navigator.clipboard.writeText(`${errorCode}\n${errorMessage}\n\n${errorDetails}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Error Modal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2 text-[#f23f42]">
            <XCircle className="h-5 w-5" />
            Error Occurred
          </DialogTitle>
          <DialogDescription className="text-[#b9bbbe]">
            Something went wrong while processing your request.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <div className="bg-[#2f3136] p-4 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-[#f23f42]">{errorCode}</h3>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-[#b9bbbe] hover:text-white hover:bg-[#4f545c] flex items-center gap-1"
                onClick={handleCopyError}
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3" />
                    <span className="text-xs">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span className="text-xs">Copy</span>
                  </>
                )}
              </Button>
            </div>
            <p className="text-sm mb-4">{errorMessage}</p>

            <div className="bg-[#202225] p-3 rounded-md text-xs font-mono text-[#b9bbbe] whitespace-pre-wrap">
              {errorDetails}
            </div>
          </div>

          <div className="bg-[#332a2d] border-l-4 border-[#f23f42] p-3 rounded-md text-sm">
            <p>If this issue persists, please contact support with the error details above.</p>
          </div>
        </div>

        <DialogFooter className="flex sm:justify-between gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="bg-transparent text-white hover:bg-[#4f545c]"
          >
            Close
          </Button>
          <Button
            type="button"
            onClick={handleRetry}
            className="bg-[#5865F2] hover:bg-[#4752c4] flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Retry
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

