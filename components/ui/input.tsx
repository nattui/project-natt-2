import type { ComponentProps } from "react"
import styles from "@/components/ui/input.module.css"

interface InputProps extends ComponentProps<"input"> {
  isValid?: boolean
}

export function Input(props: InputProps) {
  const { isValid = true, ...rest } = props

  return (
    <input
      className={styles.base}
      data-is-valid={isValid}
      {...rest}
    />
  )
}
