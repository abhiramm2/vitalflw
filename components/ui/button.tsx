import * as React from "react"
import styles from "./button.module.css"

function Button({
  className,
  children,
  ...props
}: React.ComponentProps<"button"> & { className?: string }) {
  return (
    <button
      data-slot="button"
      className={[styles.button, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
