import { cn } from "@/lib/utils"

function Cloud({ className }: { className?: string }) {
  return (
    <div className={cn("absolute", className)} aria-hidden="true">
      <div className="relative">
        <div className="h-12 w-32 rounded-full bg-card/80 blur-[2px]" />
        <div className="absolute -top-5 left-6 h-16 w-16 rounded-full bg-card/80 blur-[2px]" />
        <div className="absolute -top-3 left-16 h-12 w-20 rounded-full bg-card/80 blur-[2px]" />
      </div>
    </div>
  )
}

export function Clouds() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <Cloud className="left-[4%] top-[12%] scale-75 opacity-90" />
      <Cloud className="right-[6%] top-[8%] scale-100 opacity-90" />
      <Cloud className="left-[14%] top-[46%] scale-90 opacity-80" />
      <Cloud className="right-[10%] top-[52%] scale-[1.15] opacity-80" />
      <Cloud className="left-[40%] top-[72%] scale-75 opacity-70" />
      <Cloud className="right-[26%] bottom-[6%] scale-90 opacity-70" />
    </div>
  )
}
