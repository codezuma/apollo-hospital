/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Hk0qpuOpLgj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog"
import { useRouter } from "next/router"
import { JSX, SVGProps } from "react"

export default function DialogPopup() {
    const router = useRouter();
    return (
        <Dialog defaultOpen>
            <DialogContent className="sm:max-w-[425px]">
                <div className="grid grid-cols-2 gap-4">
                    <DialogClose asChild>
                        <div
                            className="bg-card p-4 rounded-lg border border-input hover:bg-muted transition-colors cursor-pointer">
                            <div className="flex flex-col items-center justify-center gap-2">
                                <SmileIcon className="size-12 text-primary" />
                                <h3 className="text-lg font-medium">Dental</h3>
                                <p className="text-muted-foreground text-sm">Schedule your dental checkup</p>
                            </div>
                        </div>
                    </DialogClose>
                    <DialogClose asChild>
                        <div
                            className="bg-card p-4 rounded-lg border border-input hover:bg-muted transition-colors cursor-pointer"
                            onClick={() => {
                                router.push("/health-check")
                            }}
                        >
                            <div className="flex flex-col items-center justify-center gap-2">
                                <StethoscopeIcon className="size-12 text-primary" />
                                <h3 className="text-lg font-medium">Health Checkup</h3>
                                <p className="text-muted-foreground text-sm">Schedule your annual health checkup</p>
                            </div>
                        </div>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}

function SmileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
    )
}


function StethoscopeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
            <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
            <circle cx="20" cy="10" r="2" />
        </svg>
    )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}