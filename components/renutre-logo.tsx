import Image from "next/image"
import { cn } from "@/lib/utils"

export function RenutreLogo({
  className,
  variant = "wordmark",
  invert = false,
}: {
  className?: string
  /** "wordmark" = only the text, "full" = symbol + text */
  variant?: "wordmark" | "full"
  /** Render in white for use on dark backgrounds */
  invert?: boolean
}) {
  const isFull = variant === "full"

  return (
    <Image
      src={isFull ? "/images/renutre-logo.svg" : "/images/renutre-logo-navbar.svg"}
      alt="renutre"
      width={isFull ? 104 : 91}
      height={isFull ? 48 : 18}
      priority
      className={cn(
        "w-auto",
        isFull ? "h-12" : "h-[18px]",
        invert && "[filter:brightness(0)_invert(1)]",
        className,
      )}
    />
  )
}
