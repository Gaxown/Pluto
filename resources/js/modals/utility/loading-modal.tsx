'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LoadingModal() {
    const [open, setOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Initializing...');

    useEffect(() => {
        if (open) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setOpen(false);
                        return 100;
                    }

                    // Update loading text based on progress
                    if (prev < 20) {
                        setLoadingText('Initializing...');
                    } else if (prev < 40) {
                        setLoadingText('Connecting to server...');
                    } else if (prev < 60) {
                        setLoadingText('Loading resources...');
                    } else if (prev < 80) {
                        setLoadingText('Preparing data...');
                    } else {
                        setLoadingText('Almost done...');
                    }

                    return prev + 5;
                });
            }, 300);

            return () => clearInterval(interval);
        }
    }, [open]);

    const handleOpen = () => {
        setProgress(0);
        setLoadingText('Initializing...');
        setOpen(true);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={handleOpen}>
                    Loading Modal
                </Button>
            </DialogTrigger>
            <DialogContent className="border-none bg-gradient-to-br from-[#36393f] to-[#2f3136] text-white sm:max-w-[400px]">
                <div className="flex flex-col items-center justify-center py-8">
                    <div className="relative mb-6">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#5865F2] border-opacity-20">
                            <Loader2 className="h-12 w-12 animate-spin text-[#5865F2]" />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 transform rounded-full bg-[#5865F2] px-2 py-0.5 text-xs font-bold text-white">
                            {Math.round(progress)}%
                        </div>
                    </div>

                    <h3 className="mb-2 text-lg font-bold">Loading</h3>
                    <p className="mb-4 text-center text-[#b9bbbe]">
                        {loadingText}
                    </p>

                    <div className="w-full max-w-xs">
                        <Progress
                            value={progress}
                            className="h-2 bg-[#4f545c] [&>div]:bg-[#5865F2]"
                        />
                    </div>

                    <p className="mt-4 text-xs text-[#b9bbbe]">
                        This may take a moment. Please don't close this window.
                    </p>

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
    );
}
