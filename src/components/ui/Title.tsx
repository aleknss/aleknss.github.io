import type { ReactNode } from "react"

export default function Title({ children }: { children: ReactNode }) {
    return (
        <h2 className="flex gap-2 items-center font-serif font-semibold text-2xl text-secondary">{children}</h2>
    )
}