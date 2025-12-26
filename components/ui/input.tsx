import type { ComponentProps } from "react"
import styles from "@/components/ui/input.module.css"

interface InputProps extends ComponentProps<"input"> {}

export function Input(props: InputProps) {
  const { ...rest } = props

  return (
    <input
      className={styles.base}
      {...rest}
    />
  )
}
