import type { ComponentChildren, JSX } from 'preact'

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  children: ComponentChildren
}

export function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>
}