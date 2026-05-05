import * as React from "react"
import styles from "./input.module.css"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={[styles.input, className].filter(Boolean).join(" ")}
      {...props}
    />
  )
}

export { Input }
